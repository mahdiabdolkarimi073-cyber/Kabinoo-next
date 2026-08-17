'use client'

import React, {ComponentProps, ReactNode} from "react";
import {Button, MantineColor, Menu, rem, Tooltip} from "@mantine/core";
import {IconAt, IconDots} from "@tabler/icons-react";
import Link from "next/link";
import useIsMobile from "@/utils/hooks/useIsMobile";
import {askConfirm} from "@/utils/ui/modalUtils/confirm";
import {win} from "@/share/OverrideWindow";
import {getInput} from "@/utils/ui/modalUtils/getInput";


const ActionList = (props: {
	actions: {
		label?: any,
		icon?: typeof IconAt,
		iconProps?: ComponentProps<typeof IconAt>
		onClick?: (...args: any[]) => any,
		link?: string,
		color?: MantineColor,
		variant?: string,
		buttonProps?: Partial<ComponentProps<typeof Button>> & {getInput?: ReactNode | string, confirm?: ReactNode | string},
		fromHere?: boolean
	}[],
	maxWidth?: number,
	wide?: boolean
}) => {
	const isMobile = useIsMobile(props.maxWidth);
	let { actions } = props;

	const prevent = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
		return false;
	};

	const handleOnClick = async (e: any,a: typeof props.actions[number])=>{
		let args: any[] = []
		if (!!a?.buttonProps?.confirm){
			await askConfirm(a?.buttonProps?.confirm);
		}
		if (!!a?.buttonProps?.getInput) {
			args[0] = await getInput(a?.buttonProps?.getInput);
		}
		a.onClick?.(...args);
		if (!a.link) return prevent(e);
	}

	return (
		<>
			{isMobile ? (
				<Menu shadow="md" width={200} radius={'md'}>
					<Menu.Target>
						<Button size={'compact-sm'} color={'#f6f6f6'} radius={'xl'} onClick={prevent}>
							<IconDots className={'text-black'} />
						</Button>
					</Menu.Target>
					<Menu.Dropdown onClick={prevent}>
						{actions.map((a,i) => {
							const Icon = a.icon || (() => null);
							return (
								<Link key={i} href={(a.fromHere ? win?.location.pathname+"/":"")+(a.link || "#")}>
									<Menu.Item variant={a.variant} color={a.color} onClick={(e) => {
										handleOnClick(e,a).catch(console.error);
									}} leftSection={<Icon {...a?.iconProps} style={{ width: rem(14), height: rem(14), ...a?.iconProps?.style }} />}>
										{a.label}
									</Menu.Item>
								</Link>
							);
						})}
					</Menu.Dropdown>
				</Menu>
			) : (
				<div className={'center gap-2'}>
					{actions.map((a,i) => {
						const Icon = a.icon || (() => null);
						return (
							<Tooltip key={i} label={props.wide ? undefined : a.label} events={{
								hover: !props.wide,
								touch: true,
								focus: true
							}}>
								<Link href={(a.fromHere ? win?.location.pathname+"/":"")+(a.link ?? "#")}>
									<Button variant={a.variant} size={'compact-sm'} color={a.color} onClick={(e) => {
										handleOnClick(e,a);
									}} className={'text-white'} {...a.buttonProps || {}}>
										<div className={'center gap-2'}>
											{props.wide && a.label && <p className={'mt-1'}>{a.label}</p>}
											<Icon {...a?.iconProps} style={{ width: rem(14), height: rem(14), ...a.iconProps?.style || {} }} />
										</div>
									</Button>
								</Link>
							</Tooltip>
						)
					})}
				</div>
			)}
		</>
	);
};

export default ActionList;
