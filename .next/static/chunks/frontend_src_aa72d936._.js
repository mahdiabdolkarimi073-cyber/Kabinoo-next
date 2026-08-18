(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/utils/hooks/useBackend.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/string.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function useBackend() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    _s();
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useBackend.useMemo[url]": ()=>("TURBOPACK compile-time truthy", 1) ? new URL(window.backendUrl + args[0]) : "TURBOPACK unreachable"
    }["useBackend.useMemo[url]"], [
        args
    ]);
    const preId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const [R, setR] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [skip, setSkip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const take = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useBackend.useMemo[take]": ()=>+(url.searchParams.get("_take") || "") || 10
    }["useBackend.useMemo[take]"], [
        url
    ]);
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useBackend.useMemo[page]": ()=>Math.ceil(skip / take) + 1
    }["useBackend.useMemo[page]"], [
        take,
        skip
    ]);
    const maxPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useBackend.useMemo[maxPage]": ()=>Math.ceil(((R === null || R === void 0 ? void 0 : R.total) || 0) / take)
    }["useBackend.useMemo[maxPage]"], [
        take,
        R
    ]);
    const fetch = function() {
        for(var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++){
            _args[_key] = arguments[_key];
        }
        const targetArgs = (_args === null || _args === void 0 ? void 0 : _args.length) ? _args : args;
        if (!_args.length) {
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToId"])(targetArgs);
            if (preId.current === id) return;
            preId.current = id;
            setSkip(0);
        }
        setLoading(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backend"])(...targetArgs).then((e)=>{
            setR(e);
        }).finally(()=>{
            setLoading(false);
        });
    };
    const doSkip = function(n) {
        let increase = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        if (increase && ((R === null || R === void 0 ? void 0 : R.total) || 0) - skip < take) return;
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBackend.useEffect": ()=>{
            fetch();
        }
    }["useBackend.useEffect"], [
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], {
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
_s(useBackend, "HR9BdH0oPA7KlsQ3xpVrkrpixLA=");
const __TURBOPACK__default__export__ = useBackend;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/utils/other.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$built$2d$in$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/built-in.ts [app-client] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$built$2d$in$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEntries"])(Object.entries(obj).filter((param)=>{
        let [k, v] = param;
        return typeof v !== 'function';
    }).map((param)=>{
        let [k, v] = param;
        return [
            k,
            typeof v === 'object' ? optimize(v) : v
        ];
    }));
}
function ssrOptimize(obj) {
    try {
        return optimize(obj);
    } catch (e) {
        try {
            return JSON.parse(JSON.stringify(obj));
        } catch (e) {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/DynamicForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$other$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/other.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function DynamicForm(param) {
    let { children, defaultValue, ...formProps } = param;
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue || {});
    const [rerender, setRerender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Math.random());
    const initDefault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const required = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const defaults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const handleChange = function(element) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (!initDefault.current) return;
        const e = args === null || args === void 0 ? void 0 : args[0];
        var _e_target, _ref;
        const target = (_ref = (_e_target = e === null || e === void 0 ? void 0 : e.target) !== null && _e_target !== void 0 ? _e_target : element) !== null && _ref !== void 0 ? _ref : {};
        const name = target === null || target === void 0 ? void 0 : target.name;
        var _element_ariatargetKey;
        const customValue = element['aria-targetKey'] === 'self' ? e : target === null || target === void 0 ? void 0 : target[(_element_ariatargetKey = element === null || element === void 0 ? void 0 : element['aria-targetKey']) !== null && _element_ariatargetKey !== void 0 ? _element_ariatargetKey : [
            'radio',
            'checkbox'
        ].includes(target === null || target === void 0 ? void 0 : target.type) ? 'checked' : undefined];
        var _ref1;
        const value = (_ref1 = customValue !== null && customValue !== void 0 ? customValue : target === null || target === void 0 ? void 0 : target.value) !== null && _ref1 !== void 0 ? _ref1 : e;
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
    function childrenSet(element) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var _element_props, _element_props_className_includes, _element_props_className, _element_props1, _element_props2, _props, _this, _element_props3, _map, _this1, _element_props_className_iuncludes, _element_props_className1, _element_props4, _element_props5, _element_props6, _Object_keys;
        const name = element === null || element === void 0 ? void 0 : (_element_props = element.props) === null || _element_props === void 0 ? void 0 : _element_props.name;
        if (!initDefault.current && name) {
            var _element_props7, _element_props8, _element_props9, _e_props;
            const e = element;
            defaults.current[name] = (element === null || element === void 0 ? void 0 : (_element_props7 = element.props) === null || _element_props7 === void 0 ? void 0 : _element_props7.defaultValue) || (element === null || element === void 0 ? void 0 : (_element_props8 = element.props) === null || _element_props8 === void 0 ? void 0 : _element_props8.value) || (e === null || e === void 0 ? void 0 : e.defaultValue) || (e === null || e === void 0 ? void 0 : e.value);
            required.current[name] = (element === null || element === void 0 ? void 0 : (_element_props9 = element.props) === null || _element_props9 === void 0 ? void 0 : _element_props9.required) || (e === null || e === void 0 ? void 0 : e.required) ? (e === null || e === void 0 ? void 0 : e.label) || (e === null || e === void 0 ? void 0 : (_e_props = e.props) === null || _e_props === void 0 ? void 0 : _e_props.label) || "برخی از موارد" : false;
        }
        const exclude = !name && element.type !== 'div' || ((_element_props1 = element.props) === null || _element_props1 === void 0 ? void 0 : (_element_props_className = _element_props1.className) === null || _element_props_className === void 0 ? void 0 : (_element_props_className_includes = _element_props_className.includes) === null || _element_props_className_includes === void 0 ? void 0 : _element_props_className_includes.call(_element_props_className, "ignore"));
        const children = element === null || element === void 0 ? void 0 : (_element_props2 = element.props) === null || _element_props2 === void 0 ? void 0 : _element_props2.children;
        var _ref;
        const hasDefaultValue = typeof ((_ref = (_this = element) === null || _this === void 0 ? void 0 : (_props = _this.props) === null || _props === void 0 ? void 0 : _props.defaultValue) !== null && _ref !== void 0 ? _ref : element.defaultValue) !== 'undefined';
        return exclude ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(element, element.props) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(element, {
            ...element === null || element === void 0 ? void 0 : element.props,
            ...(element === null || element === void 0 ? void 0 : (_element_props3 = element.props) === null || _element_props3 === void 0 ? void 0 : _element_props3.name) && {
                onChange: function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    var _element_props_onChange, _element_props;
                    handleChange(element === null || element === void 0 ? void 0 : element.props, ...args);
                    element === null || element === void 0 ? void 0 : (_element_props = element.props) === null || _element_props === void 0 ? void 0 : (_element_props_onChange = _element_props.onChange) === null || _element_props_onChange === void 0 ? void 0 : _element_props_onChange.call(_element_props, ...args);
                }
            },
            ...children && {
                children: (_this1 = Array.isArray(children) ? children : [
                    children
                ]) === null || _this1 === void 0 ? void 0 : (_map = _this1.map) === null || _map === void 0 ? void 0 : _map.call(_this1, (o, i)=>{
                    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(o)) {
                        return childrenSet(o, n + i + 1);
                    }
                    return o;
                })
            },
            ...(element === null || element === void 0 ? void 0 : (_element_props4 = element.props) === null || _element_props4 === void 0 ? void 0 : (_element_props_className1 = _element_props4.className) === null || _element_props_className1 === void 0 ? void 0 : (_element_props_className_iuncludes = _element_props_className1.iuncludes) === null || _element_props_className_iuncludes === void 0 ? void 0 : _element_props_className_iuncludes.call(_element_props_className1, "controlled")) && {
                value: formData[element === null || element === void 0 ? void 0 : (_element_props5 = element.props) === null || _element_props5 === void 0 ? void 0 : _element_props5.name]
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
            key: rerender + "" + "" + (element === null || element === void 0 ? void 0 : (_element_props6 = element.props) === null || _element_props6 === void 0 ? void 0 : _element_props6.key) + "" + element.key + n + ((_Object_keys = Object.keys(element.props)) === null || _Object_keys === void 0 ? void 0 : _Object_keys.length)
        });
    }
    const clonedChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DynamicForm.useMemo[clonedChildren]": ()=>{
            const result = childrenSet(renderChildren());
            if (!initDefault.current) {
                initDefault.current = true;
                setFormData({
                    "DynamicForm.useMemo[clonedChildren]": (pre)=>({
                            ...defaults.current,
                            ...pre
                        })
                }["DynamicForm.useMemo[clonedChildren]"]);
                setRerender(Math.random());
            }
            return result;
        }
    }["DynamicForm.useMemo[clonedChildren]"], formProps.live ? [
        children,
        rerender,
        formData
    ] : [
        children,
        rerender
    ]);
    let sets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    function doChange(name, value) {
        if (sets.current[name] === value || formData[name] === value) return;
        sets.current[name] = value;
        setFormData((pre)=>({
                ...pre,
                [name]: value
            }));
    }
    let thread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DynamicForm.useEffect": ()=>{
            if (formProps.submitInterval && !thread.current) {
                thread.current = setInterval({
                    "DynamicForm.useEffect": ()=>{
                        onAction(formData);
                    }
                }["DynamicForm.useEffect"], formProps.submitInterval);
            }
        }
    }["DynamicForm.useEffect"], [
        formProps.submitInterval
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DynamicForm.useEffect": ()=>{
            let thread;
            if (formProps.domInterval) {
                const form = formRef.current;
                form.querySelectorAll("input,textarea").forEach({
                    "DynamicForm.useEffect": (element)=>{
                        element.addEventListener("change", {
                            "DynamicForm.useEffect": (e)=>{
                                const t = e.target;
                                const name = element.getAttribute("name");
                                if (name && t && 'value' in t) {
                                    const value = t.value;
                                    doChange(element.getAttribute("name") + "", value);
                                }
                            }
                        }["DynamicForm.useEffect"]);
                    }
                }["DynamicForm.useEffect"]);
                const observer = new MutationObserver({
                    "DynamicForm.useEffect": (mutationsList)=>{
                        mutationsList.forEach({
                            "DynamicForm.useEffect": (mutation)=>{
                                const { name, value } = mutation.target;
                                if (name) {
                                    doChange(name, value);
                                }
                            }
                        }["DynamicForm.useEffect"]);
                    }
                }["DynamicForm.useEffect"]);
                observer.observe(form, {
                    subtree: true,
                    attributeOldValue: true
                });
            }
            return ({
                "DynamicForm.useEffect": ()=>clearInterval(thread)
            })["DynamicForm.useEffect"];
        }
    }["DynamicForm.useEffect"], [
        formProps.domInterval
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DynamicForm.useEffect": ()=>{
            if (formProps.setState) {
                var _formProps_setState;
                (_formProps_setState = formProps.setState) === null || _formProps_setState === void 0 ? void 0 : _formProps_setState.call(formProps, formData);
            }
        }
    }["DynamicForm.useEffect"], [
        formData
    ]);
    const onAction = async (values)=>{
        const json = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$other$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formDataToJson"])(values);
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
                    var _e_message;
                    const msg = (_e_message = e === null || e === void 0 ? void 0 : e.message) !== null && _e_message !== void 0 ? _e_message : e;
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
                var _e_message;
                const msg = (_e_message = e === null || e === void 0 ? void 0 : e.message) !== null && _e_message !== void 0 ? _e_message : e;
                if (typeof msg === 'string' && msg !== "NEXT_REDIRECT") {
                    var _e_message1;
                    alert((_e_message1 = e === null || e === void 0 ? void 0 : e.message) !== null && _e_message1 !== void 0 ? _e_message1 : e);
                }
                throw e;
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        ...formProps,
        action: onAction,
        ref: formRef,
        children: [
            clonedChildren,
            (error === null || error === void 0 ? void 0 : error.global) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(DynamicForm, "9gK6cknpwmfzZivKrvtSDBbnRes=");
_c = DynamicForm;
const __TURBOPACK__default__export__ = DynamicForm;
var _c;
__turbopack_context__.k.register(_c, "DynamicForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/utils/ui/modalUtils/getInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInput",
    ()=>getInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/ui/modals.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$DynamicForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/DynamicForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Autocomplete$2f$Autocomplete$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Autocomplete/Autocomplete.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Textarea/Textarea.mjs [app-client] (ecmascript)");
;
;
;
;
async function getInput(node, onOk, data, textarea) {
    const text = typeof node === 'string' ? node : "";
    return await new Promise((resolve, reject)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showModal"].open({
            title: text.slice(0, 40),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$DynamicForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                action: async (j)=>{
                    resolve(j.text);
                    onOk === null || onOk === void 0 ? void 0 : onOk(j.text);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closeLastModal"])();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        typeof node !== 'string' && node,
                        textarea ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                            autoFocus: true,
                            autosize: true,
                            defaultValue: (data === null || data === void 0 ? void 0 : data[0]) || "",
                            radius: 'xs',
                            label: text.slice(0, 70) + "...",
                            name: 'text',
                            className: 'mb-2'
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/utils/ui/modalUtils/getInput.tsx",
                            lineNumber: 22,
                            columnNumber: 9
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Autocomplete$2f$Autocomplete$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Autocomplete"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/no-side/Loading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$LoadingOverlay$2f$LoadingOverlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/LoadingOverlay/LoadingOverlay.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Progress$2f$Progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Progress/Progress.mjs [app-client] (ecmascript)");
;
;
const Loading = (props)=>{
    let { overlay, text = 'درحال بارگذاری' } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(!props.overlay ? "min-h-[200px] relative" : "absolute left-0 top-0 h-full", " w-full center flex-col"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$LoadingOverlay$2f$LoadingOverlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingOverlay"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: 'absolute top-0 mt-5 bottom-0 m-auto w-full center  flex-col max-w-[300px]',
                style: {
                    zIndex: "400"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: 'mb-1',
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/no-side/Loading.tsx",
                        lineNumber: 18,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Progress$2f$Progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
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
_c = Loading;
const __TURBOPACK__default__export__ = Loading;
var _c;
__turbopack_context__.k.register(_c, "Loading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/hooks/useBackend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Select/Select.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Skeleton$2f$Skeleton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Skeleton/Skeleton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Textarea/Textarea.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/string.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.mjs [app-client] (ecmascript) <export default as IconPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$getInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/ui/modalUtils/getInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/no-side/Loading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function Page(props) {
    var _this = this;
    var _this1;
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const isN = id === "new";
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const { data: designs = [], loading: l0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("/admin/design");
    const { data: categories = [], loading: l4 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("/admin/product/category");
    const { data: colors = [], loading: l3 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("/admin/product/colors");
    const { data: materials = [], loading: l2 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("/admin/product/materials");
    const { data: details = [], loading: l1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("/admin/product/details");
    const { data, loading: l5 = false } = !isN ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("/admin/product/".concat(id)) : {};
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!loading && !isN) setProduct(data);
        }
    }["Page.useEffect"], [
        data,
        l5
    ]);
    if (l5 || l1 || l2 || l3 || l4 || l0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
        lineNumber: 31,
        columnNumber: 50
    }, this);
    const prop = function(key, label) {
        let textarea = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        var _product_key;
        const C = textarea ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"] : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"];
        const extraProps = textarea ? {
            autosize: true,
            minRows: 3
        } : {};
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(C, {
            label: label,
            value: (product === null || product === void 0 ? void 0 : (_product_key = product[key]) === null || _product_key === void 0 ? void 0 : _product_key.toString()) || "",
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
        }, _this);
    };
    const select = function(key, label, options) {
        let optionLabel = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "name";
        var _product_key;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            searchable: true,
            label: label,
            data: options.map((o)=>({
                    value: o.id.toString(),
                    label: o[optionLabel]
                })),
            value: (product === null || product === void 0 ? void 0 : (_product_key = product[key]) === null || _product_key === void 0 ? void 0 : _product_key.toString()) || undefined,
            onChange: (e)=>setProduct({
                    ...product,
                    [key]: +(e || "") || e
                })
        }, key, false, {
            fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, _this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 my-10 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-3 gap-3",
                children: [
                    prop("name", "نام محصول"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            prop("price", "عدد قیمت محصول"),
                            !!(product === null || product === void 0 ? void 0 : product.price) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "p-1",
                                children: [
                                    (_this1 = product.price - product.price / 100 * (product.offPercent || 0)) === null || _this1 === void 0 ? void 0 : _this1.toLocaleString('fa'),
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3",
                children: [
                    (product === null || product === void 0 ? void 0 : product.images) && product.images.map((image, index)=>image === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Skeleton$2f$Skeleton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            width: 128,
                            height: 128
                        }, "skeleton-".concat(index), false, {
                            fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative!",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                    size: "sm",
                                    color: "red",
                                    className: "absolute! top-2 left-3",
                                    onClick: ()=>{
                                        setProduct((prev)=>{
                                            var _prev_images;
                                            return {
                                                ...prev || {},
                                                images: prev === null || prev === void 0 ? void 0 : (_prev_images = prev.images) === null || _prev_images === void 0 ? void 0 : _prev_images.filter((_, i)=>i !== index)
                                            };
                                        });
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {}, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image,
                                    alt: product.name,
                                    className: "w-32 h-32 rounded-xl object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, "image-".concat(index), true, {
                            fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "file",
                                hidden: true,
                                type: "file",
                                onChange: async (e)=>{
                                    var _e_target_files;
                                    const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
                                    if (!file) return;
                                    setProduct((prev)=>({
                                            ...prev || {},
                                            images: [
                                                ...(prev === null || prev === void 0 ? void 0 : prev.images) || [],
                                                "loading"
                                            ]
                                        }));
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFile"])(file, "products/".concat((product === null || product === void 0 ? void 0 : product.id) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(8), "/").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(5), ".$EX")).then((path)=>{
                                        setProduct((prev)=>({
                                                ...prev || {},
                                                images: [
                                                    ...(prev === null || prev === void 0 ? void 0 : prev.images) || [],
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-32 w-32 rounded-xl bg-secondary flex items-center justify-center text-white cursor-pointer",
                                onClick: ()=>{
                                    var _product_images, _document_getElementById;
                                    if (product === null || product === void 0 ? void 0 : (_product_images = product.images) === null || _product_images === void 0 ? void 0 : _product_images.includes("loading")) return;
                                    (_document_getElementById = document.getElementById('file')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.click();
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "سایر جزئیات"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                        size: "sm",
                        color: "secondary",
                        onClick: async ()=>{
                            const key = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$getInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInput"])("مقدار جدید");
                            setProduct({
                                ...product,
                                others: {
                                    ...(product === null || product === void 0 ? void 0 : product.others) || {},
                                    [key]: ""
                                }
                            });
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__["IconPlus"], {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3",
                children: Object.entries((product === null || product === void 0 ? void 0 : product.others) || {}).map((param)=>{
                    let [key, value] = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                label: key,
                                value: value,
                                placeholder: key + "...",
                                onChange: (e)=>setProduct({
                                        ...product,
                                        others: {
                                            ...(product === null || product === void 0 ? void 0 : product.others) || {},
                                            [key]: e.target.value
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                                lineNumber: 151,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                color: "red",
                                onClick: ()=>{
                                    setProduct({
                                        ...product,
                                        others: Object.fromEntries(Object.entries((product === null || product === void 0 ? void 0 : product.others) || {}).filter((param)=>{
                                            let [k] = param;
                                            return k !== key;
                                        }))
                                    });
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {}, void 0, false, {
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
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/[id]/page.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    loading: loading,
                    size: "lg",
                    onClick: ()=>{
                        setLoading(true);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backend"])("/admin/product", isN ? "POST" : "PUT", product).then((e)=>{
                            setLoading(false);
                            if (!e.ok) return;
                            if (isN) {
                                var _e_data;
                                router.push("./".concat(e === null || e === void 0 ? void 0 : (_e_data = e.data) === null || _e_data === void 0 ? void 0 : _e_data.id));
                            } else {
                                setProduct(e === null || e === void 0 ? void 0 : e.data);
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
_s(Page, "O+NCiViGrpIDSohFmRayB+qdZxw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_aa72d936._.js.map