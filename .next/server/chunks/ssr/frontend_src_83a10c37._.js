module.exports = [
"[project]/frontend/src/utils/hooks/useBackend.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/string.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function useBackend(...args) {
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : new URL("http://test.com"), [
        args
    ]);
    const preId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    const [R, setR] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [skip, setSkip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const take = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>+(url.searchParams.get("_take") || "") || 10, [
        url
    ]);
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Math.ceil(skip / take) + 1, [
        take,
        skip
    ]);
    const maxPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Math.ceil((R?.total || 0) / take), [
        take,
        R
    ]);
    const fetch = (..._args)=>{
        const targetArgs = _args?.length ? _args : args;
        if (!_args.length) {
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objectToId"])(targetArgs);
            if (preId.current === id) return;
            preId.current = id;
            setSkip(0);
        }
        setLoading(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backend"])(...targetArgs).then((e)=>{
            setR(e);
        }).finally(()=>{
            setLoading(false);
        });
    };
    const doSkip = (n, increase = true)=>{
        if (increase && (R?.total || 0) - skip < take) return;
        const target = increase ? skip + n : n;
        setSkip(target);
        url.searchParams.set("_skip", target + "");
        url.searchParams.set("_pagination", "true");
        const c = [
            ...args
        ];
        c[0] = url.pathname + url.search;
        fetch(...c);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch();
    }, [
        args
    ]);
    return {
        ...R,
        loading,
        refetch: ()=>fetch(...args),
        next: ()=>doSkip(take),
        prev: ()=>doSkip(-take),
        gotoPage: (page)=>doSkip((page - 1) * take, false),
        page,
        maxPage,
        take,
        get Pagination () {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"], {
                total: this.maxPage,
                value: this.page,
                onChange: this.gotoPage
            }, void 0, false, {
                fileName: "[project]/frontend/src/utils/hooks/useBackend.tsx",
                lineNumber: 70,
                columnNumber: 20
            }, this);
        }
    };
}
const __TURBOPACK__default__export__ = useBackend;
}),
"[project]/frontend/src/utils/other.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IranMonths",
    ()=>IranMonths,
    "arabicToEnglishNumber",
    ()=>arabicToEnglishNumber,
    "echoDateMonth",
    ()=>echoDateMonth,
    "formDataToJson",
    ()=>formDataToJson,
    "getRandomNumber",
    ()=>getRandomNumber,
    "ssrOptimize",
    ()=>ssrOptimize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$built$2d$in$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/built-in.ts [app-ssr] (ecmascript)");
;
function getRandomNumber(min, max) {
    if (min >= max) {
        return min;
    }
    // Calculate and return the random number
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function arabicToEnglishNumber(str) {
    str = str + "";
    const persianNumbers = [
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g
    ], arabicNumbers = [
        /٠/g,
        /١/g,
        /٢/g,
        /٣/g,
        /٤/g,
        /٥/g,
        /٦/g,
        /٧/g,
        /٨/g,
        /٩/g
    ];
    for(let i = 0; i < 10; i++){
        str = str.replaceAll(persianNumbers[i], i + "").replaceAll(arabicNumbers[i], i + "");
    }
    return str;
}
function optimize(obj) {
    if (obj instanceof Date) return obj;
    if (typeof obj !== 'object') return obj;
    if (Object.keys(obj).length === 0) return obj;
    if (Array.isArray(obj)) {
        return obj.map((o)=>{
            return optimize(o);
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$built$2d$in$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromEntries"])(Object.entries(obj).filter(([k, v])=>typeof v !== 'function').map(([k, v])=>[
            k,
            typeof v === 'object' ? optimize(v) : v
        ]));
}
function ssrOptimize(obj) {
    try {
        return optimize(obj);
    } catch  {
        try {
            return JSON.parse(JSON.stringify(obj));
        } catch  {
            return obj;
        }
    }
}
function formDataToJson(formData) {
    if (!(formData instanceof FormData)) return formData;
    let json = {};
    formData.forEach((value, key)=>json[key] = value);
    return json;
}
const IranMonths = [
    "فروردین",
    "ُردیبهشت",
    "خرداد",
    "تیر",
    "َمرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
];
function echoDateMonth(date) {
    const str = arabicToEnglishNumber(date.toLocaleDateString('fa'));
    return IranMonths[+str.split("/")[1] - 1];
}
}),
"[project]/frontend/src/components/DynamicForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$other$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/other.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function DynamicForm({ children, defaultValue, ...formProps }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultValue || {});
    const [rerender, setRerender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Math.random());
    const initDefault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const required = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const defaults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const handleChange = (element, ...args)=>{
        if (!initDefault.current) return;
        const e = args?.[0];
        const target = e?.target ?? element ?? {};
        const name = target?.name;
        const customValue = element['aria-targetKey'] === 'self' ? e : target?.[element?.['aria-targetKey'] ?? ([
            'radio',
            'checkbox'
        ].includes(target?.type) ? 'checked' : undefined)];
        const value = customValue ?? target?.value ?? e;
        if (error[name] || error.global) {
            let c = {
                ...error
            };
            delete c[name];
            delete c.global;
            setError(c);
        }
        setFormData((formData)=>({
                ...formData,
                [name]: value
            }));
    };
    const renderChildren = ()=>{
        if (typeof children === 'function') {
            return children(formData, (params)=>{
                setFormData(params);
                setRerender(Math.random());
            }, ()=>{
                setRerender(Math.random());
            });
        }
        return children;
    };
    function childrenSet(element, n = 0) {
        const name = element?.props?.name;
        if (!initDefault.current && name) {
            const e = element;
            defaults.current[name] = element?.props?.defaultValue || element?.props?.value || e?.defaultValue || e?.value;
            required.current[name] = element?.props?.required || e?.required ? e?.label || e?.props?.label || "برخی از موارد" : false;
        }
        const exclude = !name && element.type !== 'div' || element.props?.className?.includes?.("ignore");
        const children = element?.props?.children;
        const hasDefaultValue = typeof (element?.props?.defaultValue ?? element.defaultValue) !== 'undefined';
        return exclude ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(element, element.props) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(element, {
            ...element?.props,
            ...element?.props?.name && {
                onChange: (...args)=>{
                    handleChange(element?.props, ...args);
                    element?.props?.onChange?.(...args);
                }
            },
            ...children && {
                children: (Array.isArray(children) ? children : [
                    children
                ])?.map?.((o, i)=>{
                    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(o)) {
                        return childrenSet(o, n + i + 1);
                    }
                    return o;
                })
            },
            ...element?.props?.className?.iuncludes?.("controlled") && {
                value: formData[element?.props?.name]
            },
            ...typeof formData[name] !== 'undefined' && !hasDefaultValue && {
                defaultValue: formData[name]
            },
            ...typeof formData[name] !== 'undefined' && hasDefaultValue && {
                defaultValue: formData[name]
            },
            ...error[name] && {
                error: error[name],
                defaultValue: undefined
            },
            key: rerender + "" + "" + element?.props?.key + "" + element.key + n + Object.keys(element.props)?.length
        });
    }
    const clonedChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const result = childrenSet(renderChildren());
        if (!initDefault.current) {
            initDefault.current = true;
            setFormData((pre)=>({
                    ...defaults.current,
                    ...pre
                }));
            setRerender(Math.random());
        }
        return result;
    }, formProps.live ? [
        children,
        rerender,
        formData
    ] : [
        children,
        rerender
    ]);
    let sets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    function doChange(name, value) {
        if (sets.current[name] === value || formData[name] === value) return;
        sets.current[name] = value;
        setFormData((pre)=>({
                ...pre,
                [name]: value
            }));
    }
    let thread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (formProps.submitInterval && !thread.current) {
            thread.current = setInterval(()=>{
                onAction(formData);
            }, formProps.submitInterval);
        }
    }, [
        formProps.submitInterval
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let thread;
        if (formProps.domInterval) {
            const form = formRef.current;
            form.querySelectorAll("input,textarea").forEach((element)=>{
                element.addEventListener("change", (e)=>{
                    const t = e.target;
                    const name = element.getAttribute("name");
                    if (name && t && 'value' in t) {
                        const value = t.value;
                        doChange(element.getAttribute("name") + "", value);
                    }
                });
            });
            const observer = new MutationObserver((mutationsList)=>{
                mutationsList.forEach((mutation)=>{
                    const { name, value } = mutation.target;
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
        return ()=>clearInterval(thread);
    }, [
        formProps.domInterval
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (formProps.setState) {
            formProps.setState?.(formData);
        }
    }, [
        formData
    ]);
    const onAction = async (values)=>{
        const json = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$other$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formDataToJson"])(values);
        let finalValue = {
            ...json,
            ...formData
        };
        for (let [key, name] of Object.entries(required.current).filter((o)=>!!o[1])){
            const value = finalValue[key];
            if (typeof value === 'undefined' || typeof value === 'string' && !value || value == null) {
                const msg = name + " وارد نشده است";
                alert(msg);
                setError((pre)=>({
                        ...pre,
                        [key]: msg
                    }));
                setRerender((p)=>p + 1);
                return;
            }
            if (formProps.validation) {
                try {
                    const result = formProps.validation(formData);
                    if (result === false) {
                        throw "لطفا در وارد کردن اطلاعات دقت کنید";
                    }
                } catch (e) {
                    const msg = e?.message ?? e;
                    alert(msg);
                    setError((pre)=>({
                            ...pre,
                            global: msg
                        }));
                    return false;
                }
            }
        }
        setError({});
        if (formProps.action) {
            const promise = formProps.action(finalValue);
            promise.catch((e)=>{
                const msg = e?.message ?? e;
                if (typeof msg === 'string' && msg !== "NEXT_REDIRECT") {
                    alert(e?.message ?? e);
                }
                throw e;
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        ...formProps,
        action: onAction,
        ref: formRef,
        children: [
            clonedChildren,
            error?.global && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: 'text-red-400 p-2',
                children: error.global
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/DynamicForm.tsx",
                lineNumber: 246,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/DynamicForm.tsx",
        lineNumber: 243,
        columnNumber: 3
    }, this);
}
const __TURBOPACK__default__export__ = DynamicForm;
}),
"[project]/frontend/src/utils/ui/modalUtils/getInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInput",
    ()=>getInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/ui/modals.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$DynamicForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/DynamicForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Autocomplete$2f$Autocomplete$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Autocomplete/Autocomplete.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Textarea/Textarea.mjs [app-ssr] (ecmascript)");
;
;
;
;
async function getInput(node, onOk, data, textarea) {
    const text = typeof node === 'string' ? node : "";
    return await new Promise((resolve, reject)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showModal"].open({
            title: text.slice(0, 40),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$DynamicForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                action: async (j)=>{
                    resolve(j.text);
                    onOk?.(j.text);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeLastModal"])();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        typeof node !== 'string' && node,
                        textarea ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                            autoFocus: true,
                            autosize: true,
                            defaultValue: data?.[0] || "",
                            radius: 'xs',
                            label: text.slice(0, 70) + "...",
                            name: 'text',
                            className: 'mb-2'
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/utils/ui/modalUtils/getInput.tsx",
                            lineNumber: 22,
                            columnNumber: 9
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Autocomplete$2f$Autocomplete$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Autocomplete"], {
                            autoFocus: true,
                            data: data || [],
                            label: text.slice(0, 70) + "...",
                            name: 'text',
                            className: 'mb-2'
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/utils/ui/modalUtils/getInput.tsx",
                            lineNumber: 32,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: 'submit',
                            children: "ثبت"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/utils/ui/modalUtils/getInput.tsx",
                            lineNumber: 40,
                            columnNumber: 8
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/utils/ui/modalUtils/getInput.tsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/utils/ui/modalUtils/getInput.tsx",
                lineNumber: 14,
                columnNumber: 6
            }, this),
            onClose: reject
        });
    });
}
}),
"[project]/frontend/src/no-side/Loading.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$LoadingOverlay$2f$LoadingOverlay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/LoadingOverlay/LoadingOverlay.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Progress$2f$Progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Progress/Progress.mjs [app-ssr] (ecmascript)");
;
;
const Loading = (props)=>{
    let { overlay, text = 'درحال بارگذاری' } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${!props.overlay ? "min-h-[200px] relative" : "absolute left-0 top-0 h-full"} w-full center flex-col`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$LoadingOverlay$2f$LoadingOverlay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingOverlay"], {
                visible: true,
                overlayProps: {
                    radius: 'sm',
                    blur: 2,
                    zIndex: 2
                },
                loaderProps: {
                    color: 'primary',
                    type: 'bars',
                    top: "-45px"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/no-side/Loading.tsx",
                lineNumber: 10,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: 'absolute top-0 mt-5 bottom-0 m-auto w-full center  flex-col max-w-[300px]',
                style: {
                    zIndex: "400"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: 'mb-1',
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/no-side/Loading.tsx",
                        lineNumber: 18,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Progress$2f$Progress$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                        radius: "xl",
                        size: "md",
                        value: 100,
                        className: 'w-full',
                        color: 'primary',
                        striped: true,
                        animated: true
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/no-side/Loading.tsx",
                        lineNumber: 19,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/no-side/Loading.tsx",
                lineNumber: 15,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/no-side/Loading.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Loading;
}),
"[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/hooks/useBackend.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Select/Select.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Skeleton$2f$Skeleton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Skeleton/Skeleton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Textarea/Textarea.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/string.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.mjs [app-ssr] (ecmascript) <export default as IconPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-ssr] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$getInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/ui/modalUtils/getInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/no-side/Loading.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function Page(props) {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const isN = id === "new";
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const { data: designs = [], loading: l0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("/admin/design");
    const { data: categories = [], loading: l4 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("/admin/product/category");
    const { data: colors = [], loading: l3 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("/admin/product/colors");
    const { data: materials = [], loading: l2 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("/admin/product/materials");
    const { data: details = [], loading: l1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("/admin/product/details");
    const { data, loading: l5 = false } = !isN ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(`/admin/product/${id}`) : {};
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loading && !isN) setProduct(data);
    }, [
        data,
        l5
    ]);
    if (l5 || l1 || l2 || l3 || l4 || l0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
        lineNumber: 31,
        columnNumber: 50
    }, this);
    const prop = (key, label, textarea = false)=>{
        const C = textarea ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"] : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextInput"];
        const extraProps = textarea ? {
            autosize: true,
            minRows: 3
        } : {};
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(C, {
            label: label,
            value: product?.[key]?.toString() || "",
            placeholder: label + "...",
            onChange: (e)=>setProduct({
                    ...product,
                    [key]: label.includes("عدد") ? +e.target.value || 0 : e.target.value
                }),
            ...extraProps
        }, key, false, {
            fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, this);
    };
    const select = (key, label, options, optionLabel = "name")=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
            searchable: true,
            label: label,
            data: options.map((o)=>({
                    value: o.id.toString(),
                    label: o[optionLabel]
                })),
            value: product?.[key]?.toString() || undefined,
            onChange: (e)=>setProduct({
                    ...product,
                    [key]: +(e || "") || e
                })
        }, key, false, {
            fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 my-10 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-3 gap-3",
                children: [
                    prop("name", "نام محصول"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            prop("price", "عدد قیمت محصول"),
                            !!product?.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "p-1",
                                children: [
                                    (product.price - product.price / 100 * (product.offPercent || 0))?.toLocaleString('fa'),
                                    " تومان"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                                lineNumber: 67,
                                columnNumber: 42
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    select("categoryId", "دسته بندی", categories),
                    select("colorId", "رنگ محصول", colors),
                    select("detailId", "جزئیات محصول", details),
                    select("materialId", "متریال محصول", materials),
                    select("designId", "دیزاین مربوطه", designs),
                    prop("x", "عدد عرض"),
                    prop("y", "عدد طول"),
                    prop("z", "عدد ارتفاع"),
                    prop("deliveryDays", "عدد تعداد روز تحویل"),
                    prop("offPercent", "عدد درصد تخفیف")
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            prop("description", "توضیحات", true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3",
                children: [
                    product?.images && product.images.map((image, index)=>image === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Skeleton$2f$Skeleton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            width: 128,
                            height: 128
                        }, `skeleton-${index}`, false, {
                            fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative!",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                    size: "sm",
                                    color: "red",
                                    className: "absolute! top-2 left-3",
                                    onClick: ()=>{
                                        setProduct((prev)=>({
                                                ...prev || {},
                                                images: prev?.images?.filter((_, i)=>i !== index)
                                            }));
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {}, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image,
                                    alt: product.name,
                                    className: "w-32 h-32 rounded-xl object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, `image-${index}`, true, {
                            fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "file",
                                hidden: true,
                                type: "file",
                                onChange: async (e)=>{
                                    const file = e.target.files?.[0];
                                    if (!file) return;
                                    setProduct((prev)=>({
                                            ...prev || {},
                                            images: [
                                                ...prev?.images || [],
                                                "loading"
                                            ]
                                        }));
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadFile"])(file, `products/${product?.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(8)}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(5)}.$EX`).then((path)=>{
                                        setProduct((prev)=>({
                                                ...prev || {},
                                                images: [
                                                    ...prev?.images || [],
                                                    path
                                                ].filter((o)=>o !== "loading")
                                            }));
                                    });
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-32 w-32 rounded-xl bg-secondary flex items-center justify-center text-white cursor-pointer",
                                onClick: ()=>{
                                    if (product?.images?.includes("loading")) return;
                                    document.getElementById('file')?.click();
                                },
                                children: "افزودن عکس"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                                lineNumber: 120,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "سایر جزئیات"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIcon"], {
                        size: "sm",
                        color: "secondary",
                        onClick: async ()=>{
                            const key = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$getInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInput"])("مقدار جدید");
                            setProduct({
                                ...product,
                                others: {
                                    ...product?.others || {},
                                    [key]: ""
                                }
                            });
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__["IconPlus"], {}, void 0, false, {
                            fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                lineNumber: 132,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3",
                children: Object.entries(product?.others || {}).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextInput"], {
                                label: key,
                                value: value,
                                placeholder: key + "...",
                                onChange: (e)=>setProduct({
                                        ...product,
                                        others: {
                                            ...product?.others || {},
                                            [key]: e.target.value
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                                lineNumber: 151,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                color: "red",
                                onClick: ()=>{
                                    setProduct({
                                        ...product,
                                        others: Object.fromEntries(Object.entries(product?.others || {}).filter(([k])=>k !== key))
                                    });
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {}, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                                lineNumber: 163,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                        lineNumber: 150,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    loading: loading,
                    size: "lg",
                    onClick: ()=>{
                        setLoading(true);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backend"])("/admin/product", isN ? "POST" : "PUT", product).then((e)=>{
                            setLoading(false);
                            if (!e.ok) return;
                            if (isN) {
                                router.push(`./${e?.data?.id}`);
                            } else {
                                setProduct(e?.data);
                                alert("ذخیره شد");
                            }
                        }).catch(()=>setLoading(false));
                    },
                    children: "ذخیره"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                    lineNumber: 176,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=frontend_src_83a10c37._.js.map