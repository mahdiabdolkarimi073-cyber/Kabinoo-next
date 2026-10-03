'use client';

import React, { ReactElement, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { formDataToJson } from "@/utils/other";
import { entries } from '@/utils/built-in';

type JsonData<T> = ReturnType<typeof formDataToJson> & T

interface DynamicFormProps<T> extends Omit<Omit<Omit<React.ComponentProps<'form'>, 'defaultValue'>, 'action'>, 'children'> {
	children: ((state: JsonData<T>, set: (o: JsonData<T> | ((o: JsonData<T>) => JsonData<T>)) => void, rerender: () => void) => ReactNode) | ReactNode;
	live?: boolean,
	defaultValue?: JsonData<Partial<T>>,
	validation?: (state: JsonData<T>) => boolean | void
	action: (formData: JsonData<T>) => Promise<any>,
	setState?: (...args: any[]) => any,
	domInterval?: boolean,
	submitInterval?: number
}

function DynamicForm<T extends any = {}>({ children, defaultValue, ...formProps }: DynamicFormProps<T>) {
	const [formData, setFormData] = useState<JsonData<T>>(defaultValue || {} as any);
	const [rerender, setRerender] = useState(Math.random())
	const initDefault = useRef(false);
	const formRef = useRef<any>(undefined);
	const [error, setError] = useState<{
		[key: string]: string
	}>({});
	const required = useRef<{
		[key: string]: boolean | string
	}>({})
	const defaults = useRef<any>({})

	const handleChange = (element: {
		[k: symbol | string]: any
	}, ...args: any[]) => {
		if (!initDefault.current) return;

		const e = args?.[0];
		const target: any = e?.target ?? element ?? {};
		const name = target?.name;
		const customValue = element['aria-targetKey'] === 'self' ? e : (target?.[element?.['aria-targetKey'] ?? (['radio', 'checkbox'].includes(target?.type) ? 'checked' : undefined)]) as unknown as string;
		const value = customValue ?? target?.value ?? e;

		if (error[name] || error.global) {
			let c = { ...error };
			delete c[name];
			delete c.global;
			setError(c);
		}

		setFormData(formData => ({
			...formData,
			[name]: value
		}));
	};

	const renderChildren = () => {
		if (typeof children === 'function') {
			return children(formData, (params: JsonData<T> | ((o: JsonData<T>) => JsonData<T>)) => {
				setFormData(params);
				setRerender(Math.random())
			}, () => {
				setRerender(Math.random())
			}) as any;
		}
		return children as any;
	};


	function childrenSet(element: ReactElement<any>, n = 0): React.ReactElement<any> {
		const name = element?.props?.name;
		if (!initDefault.current && name) {
			const e = element as any;
			defaults.current[name] = element?.props?.defaultValue || element?.props?.value || e?.defaultValue || e?.value;
			required.current[name] = element?.props?.required || e?.required ? e?.label || e?.props?.label || "برخی از موارد" : false;
		}

		const exclude = (!name && element.type !== 'div') || element.props?.className?.includes?.("ignore");
		const children = element?.props?.children;
		const hasDefaultValue = typeof (((element as any)?.props?.defaultValue) ?? (element as any).defaultValue) !== 'undefined';

		return exclude ? React.cloneElement(element, element.props) : React.cloneElement(element, {
			...element?.props,
			...(element?.props?.name && (
				{
					onChange: (...args: any[]) => {
						handleChange(element?.props as any, ...args);
						element?.props?.onChange?.(...args);
					}
				}
			)),
			...(children && (
				{
					children: (Array.isArray(children) ? children : [children])?.map?.((o: ReactElement<any>, i) => {
						if (React.isValidElement(o)) {
							return childrenSet(o, n + i + 1);
						}
						return o;
					}),
				}
			)),
			...(element?.props?.className?.iuncludes?.("controlled") && ({
				value: formData[element?.props?.name]
			})),
			...(typeof formData[name] !== 'undefined' && !hasDefaultValue && ({
				defaultValue: formData[name]
			})),
			...(typeof formData[name] !== 'undefined' && hasDefaultValue && ({
				defaultValue: formData[name]
			})),
			...(error[name] && ({
				error: error[name],
				defaultValue: undefined
			})),
			key: rerender + "" + "" + element?.props?.key + "" + element.key + n + Object.keys(element.props)?.length
		});
	}

	const clonedChildren = useMemo(() => {
		const result = childrenSet(renderChildren());
		if (!initDefault.current) {
			initDefault.current = true;
			setFormData(pre => ({
				...defaults.current,
				...pre,
			}))

			setRerender(Math.random());
		}
		return result;
	}, formProps.live ? [children, rerender, formData] : [children, rerender]);

	let sets = useRef<{
		[n: string]: any
	}>({});
	function doChange(name: string, value: any) {
		if (sets.current[name] === value || formData[name] === value) return;
		sets.current[name] = value
		setFormData(pre => ({
			...pre,
			[name]: value
		}))
	}
	let thread: any = useRef(undefined);
	useEffect(() => {
		if (formProps.submitInterval && !thread.current) {
			thread.current = setInterval(() => {
				onAction(formData as any);
			}, formProps.submitInterval)
		}
	}, [formProps.submitInterval])

	useEffect(() => {
		let thread;
		if (formProps.domInterval) {
			const form = formRef.current as HTMLFormElement;

			form.querySelectorAll("input,textarea").forEach(element => {
				element.addEventListener("change", e => {
					const t = e.target;
					const name = element.getAttribute("name");
					if (name && t && 'value' in t) {
						const value = t.value;
						doChange(element.getAttribute("name") + "", value);
					}
				})
			})
			const observer = new MutationObserver((mutationsList) => {
				mutationsList.forEach((mutation) => {
					const { name, value } = mutation.target as any;

					if (name) {
						doChange(name, value);
					}
				});
			});

			observer.observe(form, {
				subtree: true,
				attributeOldValue: true
			});
		}

		return () => clearInterval(thread!);
	}, [formProps.domInterval])

	useEffect(() => {
		if (formProps.setState) {
			formProps.setState?.(formData);
		}
	}, [formData]);

	const onAction = async (values: FormData) => {
		const json = formDataToJson(values);
		let finalValue = {
			...json,
			...formData
		}
		for (let [key, name] of Object.entries(required.current).filter(o => !!o[1])) {
			const value = finalValue[key];
			if (typeof value === 'undefined' || (typeof value === 'string' && !value) || value == null) {
				const msg = name + " وارد نشده است";
				alert(msg)
				setError(pre => ({
					...pre,
					[key]: msg
				}))
				setRerender(p => p + 1);
				return;
			}

			if (formProps.validation) {
				try {
					const result = formProps.validation(formData);
					if (result === false) {
						throw ("لطفا در وارد کردن اطلاعات دقت کنید")
					}
				} catch (e: any) {
					const msg = e?.message ?? e;
					alert(msg);
					setError(pre => ({
						...pre,
						global: msg
					}))
					return false;
				}
			}
		}
		setError({});
		if (formProps.action) {
			const promise = (formProps.action as any)(finalValue) as Promise<void>;
			promise.catch((e: any) => {
				const msg = e?.message ?? e;
				if (typeof msg === 'string' && msg !== "NEXT_REDIRECT") {
					alert(e?.message ?? e);
				}
				throw(e);
			});
		}
	}

	return (
		<form  {...formProps} action={onAction as any} ref={formRef}>
			{clonedChildren}
			{error?.global && (
				<p className={'text-red-400 p-2'}>{error.global}</p>
			)}
		</form>
	);
};

export default DynamicForm;
