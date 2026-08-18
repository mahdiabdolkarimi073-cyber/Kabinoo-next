(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/utils/hooks/useIsMobile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$viewport$2d$size$2f$use$2d$viewport$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-viewport-size/use-viewport-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/GlobalContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useIsMobile(maxWidth) {
    _s();
    const { width } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$viewport$2d$size$2f$use$2d$viewport$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewportSize"])();
    const { device } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useIsMobile.useMemo": ()=>{
            if (width === 0) return device !== "desktop";
            return width <= (maxWidth || 756);
        }
    }["useIsMobile.useMemo"], [
        width,
        device
    ]);
}
_s(useIsMobile, "uCO6amwqS12N4uQfovaAcruDaeQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$viewport$2d$size$2f$use$2d$viewport$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewportSize"]
    ];
});
const __TURBOPACK__default__export__ = useIsMobile;
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
"[project]/frontend/src/components/responsive/ActionList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Menu/Menu.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/Tooltip.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDots$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDots$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconDots.mjs [app-client] (ecmascript) <export default as IconDots>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/hooks/useIsMobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$confirm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/ui/modalUtils/confirm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$share$2f$OverrideWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/share/OverrideWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$getInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/ui/modalUtils/getInput.tsx [app-client] (ecmascript)");
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
const ActionList = (props)=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(props.maxWidth);
    let { actions } = props;
    const prevent = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        return false;
    };
    const handleOnClick = async (e, a)=>{
        var _a_buttonProps, _a_buttonProps1, _a_onClick;
        let args = [];
        if (!!(a === null || a === void 0 ? void 0 : (_a_buttonProps = a.buttonProps) === null || _a_buttonProps === void 0 ? void 0 : _a_buttonProps.confirm)) {
            var _a_buttonProps2;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$confirm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["askConfirm"])(a === null || a === void 0 ? void 0 : (_a_buttonProps2 = a.buttonProps) === null || _a_buttonProps2 === void 0 ? void 0 : _a_buttonProps2.confirm);
        }
        if (!!(a === null || a === void 0 ? void 0 : (_a_buttonProps1 = a.buttonProps) === null || _a_buttonProps1 === void 0 ? void 0 : _a_buttonProps1.getInput)) {
            var _a_buttonProps3;
            args[0] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$getInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInput"])(a === null || a === void 0 ? void 0 : (_a_buttonProps3 = a.buttonProps) === null || _a_buttonProps3 === void 0 ? void 0 : _a_buttonProps3.getInput);
        }
        (_a_onClick = a.onClick) === null || _a_onClick === void 0 ? void 0 : _a_onClick.call(a, ...args);
        if (!a.link) return prevent(e);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"], {
            shadow: "md",
            width: 200,
            radius: 'md',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Target, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: 'compact-sm',
                        color: '#f6f6f6',
                        radius: 'xl',
                        onClick: prevent,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconDots$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconDots$3e$__["IconDots"], {
                            className: 'text-black'
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
                            lineNumber: 55,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
                        lineNumber: 54,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
                    lineNumber: 53,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Dropdown, {
                    onClick: prevent,
                    children: actions.map((a, i)=>{
                        var _a_iconProps;
                        const Icon = a.icon || (()=>null);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: (a.fromHere ? (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$share$2f$OverrideWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["win"] === null || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$share$2f$OverrideWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["win"] === void 0 ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$share$2f$OverrideWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["win"].location.pathname) + "/" : "") + (a.link || "#"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                variant: a.variant,
                                color: a.color,
                                onClick: (e)=>{
                                    handleOnClick(e, a).catch(console.error);
                                },
                                leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    ...a === null || a === void 0 ? void 0 : a.iconProps,
                                    style: {
                                        width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(14),
                                        height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(14),
                                        ...a === null || a === void 0 ? void 0 : (_a_iconProps = a.iconProps) === null || _a_iconProps === void 0 ? void 0 : _a_iconProps.style
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
                                    lineNumber: 65,
                                    columnNumber: 26
                                }, void 0),
                                children: a.label
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
                                lineNumber: 63,
                                columnNumber: 10
                            }, ("TURBOPACK compile-time value", void 0))
                        }, i, false, {
                            fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
                            lineNumber: 62,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
                    lineNumber: 58,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: 'center gap-2',
            children: actions.map((a, i)=>{
                var _a_iconProps;
                const Icon = a.icon || (()=>null);
                var _a_link;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    label: props.wide ? undefined : a.label,
                    events: {
                        hover: !props.wide,
                        touch: true,
                        focus: true
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: (a.fromHere ? (__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$share$2f$OverrideWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["win"] === null || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$share$2f$OverrideWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["win"] === void 0 ? void 0 : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$share$2f$OverrideWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["win"].location.pathname) + "/" : "") + ((_a_link = a.link) !== null && _a_link !== void 0 ? _a_link : "#"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: a.variant,
                            size: 'compact-sm',
                            color: a.color,
                            onClick: (e)=>{
                                handleOnClick(e, a);
                            },
                            className: 'text-white',
                            ...a.buttonProps || {},
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: 'center gap-2',
                                children: [
                                    props.wide && a.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: 'mt-1',
                                        children: a.label
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
                                        lineNumber: 88,
                                        columnNumber: 38
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        ...a === null || a === void 0 ? void 0 : a.iconProps,
                                        style: {
                                            width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(14),
                                            height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(14),
                                            ...((_a_iconProps = a.iconProps) === null || _a_iconProps === void 0 ? void 0 : _a_iconProps.style) || {}
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
                                        lineNumber: 89,
                                        columnNumber: 12
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
                            lineNumber: 84,
                            columnNumber: 10
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, i, false, {
                    fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
                    lineNumber: 78,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/responsive/ActionList.tsx",
            lineNumber: 74,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(ActionList, "zdJ8C3X+YlDYVai5EPOd8CzoqSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useIsMobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ActionList;
const __TURBOPACK__default__export__ = ActionList;
var _c;
__turbopack_context__.k.register(_c, "ActionList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/frontend/src/app/(landing)/admin/products/color/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorManagement",
    ()=>ColorManagement,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$responsive$2f$ActionList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/responsive/ActionList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/hooks/useBackend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$confirm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/ui/modalUtils/confirm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$getInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/ui/modalUtils/getInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ColorPicker$2f$ColorPicker$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ColorPicker/ColorPicker.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ColorSwatch$2f$ColorSwatch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ColorSwatch/ColorSwatch.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$FileInput$2f$FileInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/FileInput/FileInput.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$modals$2f$esm$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/modals/esm/events.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function BackendItemHandler(props) {
    _s();
    const { name = "رنگ", api = "/admin/product/colors", handle = async (o)=>{
        return api.includes("colors") ? handleColor(o) : {
            ...o || {},
            name: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$getInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInput"])("نام ".concat(name, " مورد نظر را وارد کنید"), undefined, [
                (o === null || o === void 0 ? void 0 : o.name) || ""
            ])
        };
    }, render = (item)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 border border-gray-400 rounded-2xl center justify-between!",
            style: api.includes("colors") ? {
                backgroundColor: item.hex
            } : {},
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "truncate",
                    children: item.name
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                    lineNumber: 34,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$responsive$2f$ActionList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    actions: [
                        {
                            label: "ویرایش",
                            onClick: async ()=>{
                                const updated = await (handle === null || handle === void 0 ? void 0 : handle(item));
                                if (updated) {
                                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backend"])("".concat(api, "/").concat(item.id), "PUT", updated);
                                    refetch();
                                }
                            }
                        },
                        {
                            label: "حذف",
                            onClick: async ()=>{
                                if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$ui$2f$modalUtils$2f$confirm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["askConfirm"])("آیا مطمئن هستید؟")) {
                                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backend"])("".concat(api, "/").concat(item.id), "DELETE");
                                    refetch();
                                }
                            },
                            color: "red"
                        }
                    ],
                    wide: true
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                    lineNumber: 35,
                    columnNumber: 21
                }, this)
            ]
        }, item.id, true, {
            fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
            lineNumber: 31,
            columnNumber: 17
        }, this);
    } } = props;
    const { data, loading, refetch: refetchItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(api);
    const refetch = ()=>{
        var _props_onUpdate;
        props === null || props === void 0 ? void 0 : (_props_onUpdate = props.onUpdate) === null || _props_onUpdate === void 0 ? void 0 : _props_onUpdate.call(props);
        refetchItems();
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
        lineNumber: 71,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: async ()=>{
                    const o = await (handle === null || handle === void 0 ? void 0 : handle(undefined));
                    if (o) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backend"])(api, "POST", o);
                        refetch();
                    }
                },
                children: [
                    "ساخت ",
                    name,
                    " جدید"
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4",
                children: data === null || data === void 0 ? void 0 : data.map(render)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            !(data === null || data === void 0 ? void 0 : data.length) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "موردی یافت نشد"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                lineNumber: 90,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}
_s(BackendItemHandler, "VQnUVEQ/8gNMzJ/oeBgggUtxwmQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$hooks$2f$useBackend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = BackendItemHandler;
const handleColor = (defaultColor)=>{
    // uploadFile(file, `category/${generateRandomString()}.$EX`);// JUST FOR HELP ONLY
    //     .then(path => {
    //         s("image", path);
    //     })
    //     .finally(() => {
    //         setLoading(false)
    //     })
    return new Promise((r)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$modals$2f$esm$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modals"].open({
            title: "میدیریت رنگ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorManagement, {
                default: defaultColor,
                onDone: (e)=>{
                    r(e);
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$modals$2f$esm$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modals"].closeAll();
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                lineNumber: 116,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0))
        });
    });
};
function ColorManagement(param) {
    let { default: defaultColor, onDone } = param;
    _s1();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((defaultColor === null || defaultColor === void 0 ? void 0 : defaultColor.name) || "");
    const [hex, setHex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((defaultColor === null || defaultColor === void 0 ? void 0 : defaultColor.hex) || "#ffffff");
    const [src, setSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultColor === null || defaultColor === void 0 ? void 0 : defaultColor.src);
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleUpload = async (file)=>{
        setUploading(true);
        try {
            const path = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFile"])(file, "color/".concat(file.name, ".$EX"));
            setSrc(path);
        } finally{
            setUploading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "flex flex-col gap-4",
        onSubmit: (e)=>{
            e.preventDefault();
            onDone({
                ...defaultColor,
                name,
                hex,
                src
            });
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                label: "نام رنگ",
                value: name,
                onChange: (e)=>setName(e.currentTarget.value),
                required: true
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                lineNumber: 150,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "center flex-col! gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ColorSwatch$2f$ColorSwatch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorSwatch"], {
                        color: hex,
                        size: "40"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                        lineNumber: 157,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ColorPicker$2f$ColorPicker$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorPicker"], {
                        value: hex,
                        onChange: setHex,
                        format: "hex",
                        swatches: [
                            "#fff",
                            "#000",
                            "#f00",
                            "#0f0",
                            "#00f",
                            "#ff0",
                            "#0ff",
                            "#f0f"
                        ],
                        className: "mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                lineNumber: 156,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$FileInput$2f$FileInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileInput"], {
                label: "تصویر رنگ (اختیاری)",
                accept: "image/*",
                value: file,
                onChange: async (f)=>{
                    setFile(f);
                    if (f) await handleUpload(f);
                },
                disabled: uploading
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                lineNumber: 166,
                columnNumber: 13
            }, this),
            src && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center center gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: "color",
                    className: "w-16 h-16 rounded border"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                    lineNumber: 178,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                lineNumber: 177,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                color: "primary",
                loading: uploading,
                children: "ذخیره"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(landing)/admin/products/color/page.tsx",
        lineNumber: 143,
        columnNumber: 9
    }, this);
}
_s1(ColorManagement, "PKwmhRKoQ4GfxHNJZvBFfllYPio=");
_c1 = ColorManagement;
const __TURBOPACK__default__export__ = BackendItemHandler;
var _c, _c1;
__turbopack_context__.k.register(_c, "BackendItemHandler");
__turbopack_context__.k.register(_c1, "ColorManagement");
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
"[project]/frontend/src/app/(main)/design/test/Configurator.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "Configurator-module__XHtkWW__container",
  "controls": "Configurator-module__XHtkWW__controls",
  "iframe": "Configurator-module__XHtkWW__iframe",
});
}),
"[project]/frontend/src/app/(main)/design/test/help.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":\"overalWidthRange\",\"title\":\"انتخاب عرض\",\"description\":\"عرض کلی %type% خود را با استفاده از کشیدن نوار یا دکمه‌های جهت‌نما تعیین کنید\",\"related\":\"overalWidthRange\"},{\"id\":\"overalHeightRange\",\"title\":\"انتخاب ارتفاع\",\"description\":\"ارتفاع %type% را بدون در نظر گیری پایه با کشیدن نوار یا دکمه‌های کیبورد تنظیم کنید\",\"related\":\"overalHeightRange\"},{\"id\":\"overalDepthRange\",\"title\":\"انتخاب عمق\",\"description\":\"عمق %type% را از میان گزینه‌های موجود انتخاب کنید تا متناسب با فضای شما باشد\",\"related\":\"overalDepthRange\"},{\"id\":\"sectionCountDropDown\",\"title\":\"تعداد ستون\",\"description\":\"تعداد ستون‌های %type% را انتخاب کنید. سیستم بر اساس عرض کلی گزینه‌های مناسب را نمایش می‌دهد\",\"related\":\"sectionCountDropDown\"},{\"id\":\"color\",\"title\":\"انتخاب رنگ\",\"description\":\"از میان رنگ‌های متنوع شامل طرح‌های چوبی، رنگ‌های ساده و جذاب، رنگ مورد نظر %type% را انتخاب کنید\",\"related\":\"color\"},{\"id\":\"column_click\",\"title\":\"تنظیمات ستون\",\"description\":\"برای تغییر عرض، ارتفاع و تعداد طبقات هر ستون به صورت جداگانه، روی قسمت زیرین ستون کلیک کنید\",\"related\":\"sectionCountDropDown\"},{\"id\":\"shelf_click\",\"title\":\"تنظیمات طبقه\",\"description\":\"برای اضافه کردن درب، کشو یا فلپ به طبقه، تغییر ارتفاع طبقه یا تنظیم یراق آلات داخلی، روی طبقه مورد نظر کلیک کنید\",\"related\":\"overalHeightRange\"},{\"id\":\"multi_select\",\"title\":\"انتخاب چندگانه\",\"description\":\"برای ایجاد درب مشترک و یکپارچه روی چند طبقه، کلیک چپ را نگه دارید و روی طبقات مورد نظر بکشید تا همزمان انتخاب شوند\",\"related\":\"overalHeightRange\"},{\"id\":\"fpInput\",\"title\":\"موقعیت درب/کشو\",\"description\":\"تعیین کنید که درب یا کشوها درون چارچوب طبقه قرار بگیرند یا روی چارچوب نصب شوند\",\"related\":\"fpInput\"},{\"id\":\"handleInput\",\"title\":\"تنظیمات دستگیره\",\"description\":\"مشخص کنید که آیا تمام درب و کشوهای %type% مجهز به دستگیره باشند یا بدون دستگیره طراحی شوند\",\"related\":\"handleInput\"},{\"id\":\"handleModeInput\",\"title\":\"نوع دستگیره\",\"description\":\"در صورت داشتن دستگیره، نوع آن را روکار (ظاهر) یا مخفی (فشاری) انتخاب کنید\",\"related\":\"handleModeInput\"},{\"id\":\"closetModeInput\",\"title\":\"نوع کمد\",\"description\":\"نوع کمد را ساده یا پله‌ای انتخاب کنید. کمد پله‌ای دارای طبقات با عمق متفاوت است\",\"related\":\"closetModeInput\"},{\"id\":\"bptInput\",\"title\":\"ضخامت پشت محصول\",\"description\":\"انتخاب کنید که پشت %type% از ورق 3 میلی‌متری استاندارد یا ورق 16 میلی‌متری مقاوم‌تر ساخته شود\",\"related\":\"bptInput\"},{\"id\":\"feetInput\",\"title\":\"تنظیمات پایه\",\"description\":\"تعیین کنید که آیا %type% مجهز به پایه تراز کننده باشد یا مستقیماً روی زمین قرار گیرد. پایه به ارتفاع کلی اضافه می‌شود\",\"related\":\"feetInput\"},{\"id\":\"price_display\",\"title\":\"قیمت\",\"description\":\"قیمت نهایی %type% بر اساس تمام تنظیمات و ویژگی‌های انتخابی محاسبه و نمایش داده می‌شود\",\"related\":\"color\"},{\"id\":\"reset_button\",\"title\":\"شروع مجدد\",\"description\":\"تمام تنظیمات و طراحی انجام شده را پاک کرده و فرآیند طراحی %type% را از ابتدا شروع کنید\",\"related\":\"overalWidthRange\"},{\"id\":\"undo_button\",\"title\":\"بازگشت\",\"description\":\"آخرین تغییر اعمال شده در طراحی را لغو کرده و به حالت قبلی بازگردید\",\"related\":\"overalWidthRange\"},{\"id\":\"dimension_display\",\"title\":\"نمایش ابعاد\",\"description\":\"ابعاد دقیق و کامل %type% طراحی شده را مشاهده کنید. برای بازگشت به حالت عادی مجدداً کلیک کنید\",\"related\":\"overalWidthRange\"},{\"id\":\"save_design\",\"title\":\"ذخیره طراحی\",\"description\":\"طراحی کامل %type% خود را ذخیره کنید تا در آینده بتوانید به آن دسترسی داشته باشید و تغییرات اعمال کنید\",\"related\":\"color\"},{\"id\":\"add_to_cart\",\"title\":\"افزودن به سبد\",\"description\":\"پس از تکمیل طراحی، %type% سفارشی خود را با تمام ویژگی‌های انتخابی به سبد خرید اضافه کنید\",\"related\":\"color\"},{\"id\":\"hoodInput\",\"title\":\"هود\",\"description\":\"تعیین کنید که آیا %type% مجهز به هود باشد یا خیر\",\"related\":\"hoodInput\"},{\"id\":\"hoodModeInput\",\"title\":\"نوع هود\",\"description\":\"در صورت داشتن هود، نوع آن را مخفی (درون کار) یا روکار انتخاب کنید\",\"related\":\"hoodInput\"},{\"id\":\"microwaveInput\",\"title\":\"فر/ماکروفر\",\"description\":\"تعیین کنید که آیا %type% مجهز به فر یا ماکروفر باشد یا خیر\",\"related\":\"microwaveInput\"},{\"id\":\"microwaveModeInput\",\"title\":\"نوع فر/ماکروفر\",\"description\":\"در صورت داشتن فر یا ماکروفر، نوع آن را توکار (درون کار) یا روکار انتخاب کنید\",\"related\":\"microwaveInput\"}]"));}),
"[project]/frontend/src/app/(main)/design/test/Configurator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Badge/Badge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Container/Container.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$NumberInput$2f$NumberInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/NumberInput/NumberInput.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SegmentedControl$2f$SegmentedControl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/SegmentedControl/SegmentedControl.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Select/Select.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2f$Slider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider/Slider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Tooltip/Tooltip.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$test$2f$Configurator$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/design/test/Configurator.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/no-side/Loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowBack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowBack$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconArrowBack.mjs [app-client] (ecmascript) <export default as IconArrowBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRefresh$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRefresh$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconRefresh.mjs [app-client] (ecmascript) <export default as IconRefresh>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSwitchHorizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSwitchHorizontal$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconSwitchHorizontal.mjs [app-client] (ecmascript) <export default as IconSwitchHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$test$2f$help$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/design/test/help.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/design/page.tsx [app-client] (ecmascript)");
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
const Configurator = (props)=>{
    var _CategoriesLabels_find;
    _s();
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [controls, setControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeControl, setActiveControl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const type = (_CategoriesLabels_find = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoriesLabels"].find((o)=>o.id === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoriesReverse"][props.category])) === null || _CategoriesLabels_find === void 0 ? void 0 : _CategoriesLabels_find.name;
    //@ts-ignore
    window['D_T'] = type;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Configurator.useEffect": ()=>{
            const handleMessage = {
                "Configurator.useEffect.handleMessage": (event)=>{
                    if (event.data.code === 100) {
                        setLoading(false);
                        setControls(event.data.data);
                    } else if (event.data.code === 101) {
                        const { id, value } = event.data.data || {};
                        setData({
                            "Configurator.useEffect.handleMessage": (prev)=>({
                                    ...prev,
                                    [id]: value
                                })
                        }["Configurator.useEffect.handleMessage"]);
                    } else if (event.data.code === 105) {
                        setPrice(+event.data.data || 0);
                    } else if (event.data.code === 200) {
                        var _props_onSave;
                        props === null || props === void 0 ? void 0 : (_props_onSave = props.onSave) === null || _props_onSave === void 0 ? void 0 : _props_onSave.call(props, event.data.data);
                    }
                }
            }["Configurator.useEffect.handleMessage"];
            window.addEventListener('message', handleMessage);
            return ({
                "Configurator.useEffect": ()=>window.removeEventListener('message', handleMessage)
            })["Configurator.useEffect"];
        }
    }["Configurator.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Configurator.useEffect": ()=>{
            if (props.data) {
                window.localStorage.setItem("InitObject", JSON.stringify({
                    Configurator: JSON.stringify(props.data)
                }));
            }
        }
    }["Configurator.useEffect"], [
        props
    ]);
    const sendCommand = (command, data)=>{
        console.log(command, data);
        if (command === "setControlValue") {
            setData((prev)=>({
                    ...prev,
                    [data.id + ""]: data.value
                }));
        }
        if (iframeRef.current) {
            var _iframeRef_current_contentWindow;
            (_iframeRef_current_contentWindow = iframeRef.current.contentWindow) === null || _iframeRef_current_contentWindow === void 0 ? void 0 : _iframeRef_current_contentWindow.postMessage({
                command,
                data
            }, '*');
        }
    };
    const renderControl = (control)=>{
        if (control.id === "sectionCountDropDown") {
            control.type = "range";
            control.tag = "input";
            const options = [
                ...control.options || []
            ];
            if (!!options.length) {
                const nums = options.map((o)=>+o.value);
                control.min = Math.min(...nums);
                control.max = Math.max(...nums);
                control.marks = options.map((o)=>({
                        value: +o.value,
                        label: "".concat(o.value)
                    }));
                control.prefix = "ستون";
                delete control.options;
            }
        }
        if (control.tag === "select" || control.type === "button-list") {
            var _data_control_id_toString, _data_control_id, _control_options_, _control_options;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        size: "sm",
                        fw: 500,
                        mb: 5,
                        children: control.label
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 148,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: ((_data_control_id = data[control.id]) === null || _data_control_id === void 0 ? void 0 : (_data_control_id_toString = _data_control_id.toString) === null || _data_control_id_toString === void 0 ? void 0 : _data_control_id_toString.call(_data_control_id)) || String(control.value),
                        onChange: (value)=>sendCommand('setControlValue', {
                                id: control.id,
                                value: parseInt(value) || value
                            }),
                        data: control.options || [],
                        ...(control === null || control === void 0 ? void 0 : (_control_options = control.options) === null || _control_options === void 0 ? void 0 : (_control_options_ = _control_options[0]) === null || _control_options_ === void 0 ? void 0 : _control_options_.extra) && {
                            renderOption: (param)=>{
                                let { checked, option } = param;
                                var _control_options;
                                const item = (_control_options = control.options) === null || _control_options === void 0 ? void 0 : _control_options.find((o)=>o.value === option.value);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: 'flex items-center gap-2',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            style: {
                                                width: "20px",
                                                height: "20px",
                                                borderRadius: "100%",
                                                objectFit: "cover"
                                            },
                                            src: item === null || item === void 0 ? void 0 : item.extra,
                                            alt: option.label
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 163,
                                            columnNumber: 41
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: option.label
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 169,
                                            columnNumber: 41
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 162,
                                    columnNumber: 37
                                }, void 0);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 151,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, control.id, true, {
                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                lineNumber: 147,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (control.options && control.tag !== "select") {
            const currentValue = data[control.id] !== undefined ? data[control.id] : control.value;
            const stringValue = typeof currentValue === "boolean" ? String(currentValue) : String(currentValue || "");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: control.label
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 185,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SegmentedControl$2f$SegmentedControl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SegmentedControl"], {
                                data: control.options,
                                onChange: (e)=>sendCommand('setControlValue', {
                                        id: control.id,
                                        value: e
                                    }),
                                value: stringValue
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 186,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 184,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    control.id === "handleInput" && data[control.id] === "true" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: 'flex items-center justify-end gap-3 mt-2',
                        children: [
                            'dot',
                            'line'
                        ].map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    sendCommand("Click", {
                                        path: '[data-handleobject-id="'.concat(i + 1, '"]')
                                    });
                                    setData((prev)=>({
                                            ...prev,
                                            ol: i + ""
                                        }));
                                },
                                style: {
                                    width: "40px",
                                    height: "40px"
                                },
                                className: "rounded-xl overflow-hidden border ".concat(data['ol'] === i + "" ? "border-primary" : "border-gray-300"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/design/configure/door-".concat(o, ".png"),
                                    alt: o,
                                    className: 'w-full j-full object-cover'
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 212,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, o + i, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 195,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 193,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        }
        if (control.type === "range") {
            var _control_marks, _data_control_id1, _data_control_id2;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        size: "sm",
                        fw: 500,
                        mb: 5,
                        children: control.label
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 227,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2f$Slider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        min: +control.min,
                        max: +control.max,
                        marks: control.marks,
                        value: data[control.id] || Number(control.value),
                        onChange: (value)=>sendCommand('setControlValue', {
                                id: control.id,
                                value
                            }),
                        label: (value)=>{
                            var _control_marks_find, _control_marks;
                            return "".concat(((_control_marks = control.marks) === null || _control_marks === void 0 ? void 0 : (_control_marks_find = _control_marks.find((o)=>o.value === value)) === null || _control_marks_find === void 0 ? void 0 : _control_marks_find.label) || value, " ").concat(control.prefix || "cm");
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 230,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    ((_control_marks = control.marks) === null || _control_marks === void 0 ? void 0 : _control_marks.length) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        size: "xs",
                        className: "mt-5",
                        data: control.marks.map((o)=>({
                                ...o,
                                value: o.value + "",
                                label: o.label + " ".concat(control.prefix || "cm")
                            })),
                        value: ((_data_control_id1 = data[control.id]) === null || _data_control_id1 === void 0 ? void 0 : _data_control_id1.toString()) || Number(control.value),
                        onChange: (value)=>sendCommand('setControlValue', {
                                id: control.id,
                                value: +(value || control.min)
                            })
                    }, ((_data_control_id2 = data[control.id]) === null || _data_control_id2 === void 0 ? void 0 : _data_control_id2.toString()) || Number(control.value), false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 239,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$NumberInput$2f$NumberInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                        size: "xs",
                        className: "mt-1",
                        min: +control.min,
                        max: +control.max,
                        defaultValue: data[control.id] || Number(control.value),
                        onKeyDown: (e)=>{
                            if (e.key === "Enter") {
                                sendCommand('setControlValue', {
                                    id: control.id,
                                    value: Math.max(control.min, Math.min(e.target.value, control.max))
                                });
                            }
                        },
                        onBlur: (value)=>sendCommand('setControlValue', {
                                id: control.id,
                                value: value.target.value
                            })
                    }, data[control.id] || Number(control.value), false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 255,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, control.id, true, {
                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                lineNumber: 226,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$test$2f$Configurator$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container + " my-10 relative flex flex-col lg:flex-row gap-3",
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[3-vh] center mx-auto absolute left-0 right-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                    lineNumber: 285,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                lineNumber: 284,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                className: 'min-w-[300px]',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-col gap-4 hidden md:flex",
                    children: [
                        controls.map((e, i)=>{
                            const node = renderControl(e);
                            if (!node) return;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                                id: e.id,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: node
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 296,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 295,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0));
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                            id: 'price_display',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                color: "secondary",
                                size: "xl",
                                fullWidth: true,
                                children: [
                                    price.toLocaleString("fa"),
                                    " تومان"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 303,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                            lineNumber: 302,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                            id: 'save_design',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>sendCommand('Save', {}),
                                children: "ذخیره"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 306,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                            lineNumber: 305,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs opacity-70",
                            children: "زمان تحویل 3 الی 6 هفته"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                            lineNumber: 310,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                    lineNumber: 290,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                lineNumber: 289,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow flex flex-col items-end min-h-[70vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                                id: 'reset_button',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                    onClick: ()=>{
                                        setData({});
                                        sendCommand("Eval", {
                                            value: "reset()"
                                        });
                                    },
                                    variant: "outline",
                                    size: "lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRefresh$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRefresh$3e$__["IconRefresh"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                        lineNumber: 326,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 318,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 316,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                                id: 'undo_button',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                    onClick: ()=>sendCommand("Eval", {
                                            value: "undo()"
                                        }),
                                    variant: "outline",
                                    size: "lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconArrowBack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconArrowBack$3e$__["IconArrowBack"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                        lineNumber: 335,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 330,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 329,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                                id: 'dimension_display',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                    onClick: ()=>sendCommand("Eval", {
                                            value: "changeView()"
                                        }),
                                    variant: "outline",
                                    size: "lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSwitchHorizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSwitchHorizontal$3e$__["IconSwitchHorizontal"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                        lineNumber: 344,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 339,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 338,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 315,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        ref: iframeRef,
                        src: "/idero-2/index.html?category=".concat(props.category),
                        className: "min-h-[550px] w-full overflow-none",
                        scrolling: 'none',
                        onLoad: ()=>sendCommand('getControls', {})
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 348,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:hidden w-full gap-5 min-h-50 mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-auto grow flex flex-nowrap gap-5 p-1",
                                    style: {
                                        minWidth: "100%",
                                        width: 0
                                    },
                                    children: controls.filter((o)=>!!o.label).map((o)=>{
                                        const selected = (activeControl === null || activeControl === void 0 ? void 0 : activeControl.id) === o.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: selected ? "filled" : 'outline',
                                            onClick: ()=>{
                                                setActiveControl(o);
                                            },
                                            classNames: {
                                                root: "min-w-30"
                                            },
                                            children: o.label
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 364,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 357,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 356,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeControl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Help, {
                                id: activeControl.id,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: renderControl(activeControl)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 375,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                lineNumber: 374,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 355,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 bg-white relative -top-10",
                        dir: "rtl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose prose-lg max-w-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-800 mb-6",
                                    children: [
                                        "راهنمای طراحی ",
                                        type
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 383,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-700 leading-relaxed space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "در این محیط می‌توانید ",
                                                type,
                                                " دلخواه خود را به صورت کاملاً سفارشی طراحی کنید. ابتدا ابعاد کلی شامل عرض، ارتفاع و عمق را تعیین کنید. سپس تعداد ستون‌هایی که می‌خواهید ",
                                                type,
                                                " شما داشته باشد را انتخاب کنید. توجه داشته باشید که سیستم بر اساس عرض انتخابی شما، محدودیت‌های منطقی برای تعداد ستون‌ها اعمال می‌کند."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 387,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "رنگ و نمای ظاهری ",
                                                type,
                                                " را از میان گزینه‌های متنوعی که شامل طرح‌های چوبی، رنگ‌های ساده و رنگ‌های جذاب است انتخاب کنید. هر رنگ با کیفیت بالا و مقاوم در برابر استفاده روزانه طراحی شده است."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 394,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "برای تنظیمات دقیق‌تر، روی هر ستون کلیک کنید تا بتوانید عرض، ارتفاع و تعداد طبقات آن را به صورت جداگانه تنظیم کنید. همچنین با کلیک روی هر طبقه، امکان اضافه کردن درب، کشو یا فلپ و تغییر ارتفاع طبقه فراهم است. اگر می‌خواهید چندین طبقه دارای درب مشترک باشند، کلیک چپ را نگه داشته و روی طبقات مورد نظر بکشید."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 400,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "در تنظیمات عملکردی مشخص کنید که درب‌ها و کشوها درون چارچوب طبقه قرار گیرند یا روی چارچوب نصب شوند. همچنین تعیین کنید که آیا تمام قسمت‌ها مجهز به دستگیره باشند یا از سیستم فشاری استفاده کنید."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 407,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "ضخامت پشت محصول را بر اساس نیاز خود انتخاب کنید. ورق نازک برای استفاده معمولی و صرفه‌جویی در قیمت مناسب است، در حالی که ورق ضخیم مقاومت و دوام بیشتری دارد."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 413,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "در نهایت تصمیم بگیرید که آیا ",
                                                type,
                                                " شما مجهز به پایه‌های تنظیم‌کننده باشد یا خیر. این پایه‌ها امکان تراز کردن روی سطوح ناهموار را فراهم می‌کنند و ارتفاع آن‌ها به ارتفاع کلی محصول اضافه خواهد شد."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 418,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "قیمت نهایی ",
                                                type,
                                                " بر اساس تمام انتخاب‌ها و تنظیمات شما به صورت لحظه‌ای محاسبه و نمایش داده می‌شود. پس از اتمام طراحی، می‌توانید آن را ذخیره کرده و سپس به سبد خرید اضافه کنید."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                            lineNumber: 424,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                                    lineNumber: 386,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                            lineNumber: 382,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                        lineNumber: 381,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                lineNumber: 314,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
        lineNumber: 282,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Configurator, "+TXqMPGpz1ZsE1hARi8HmEKkVKY=");
_c = Configurator;
function Help(props) {
    //@ts-ignore
    const type = window['D_T'];
    const help = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$test$2f$help$2e$json__$28$json$29$__["default"].find((o)=>o.id === props.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tooltip$2f$Tooltip$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
        position: 'left',
        radius: 'sm',
        bg: 'white',
        color: 'black',
        classNames: {
            tooltip: "drop-shadow"
        },
        label: help ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: 'text-black',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                    children: help.title
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                    lineNumber: 455,
                    columnNumber: 21
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: 'text-xs word-breaks ',
                    children: help.description.replaceAll("%type%", type)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
                    lineNumber: 456,
                    columnNumber: 21
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
            lineNumber: 454,
            columnNumber: 17
        }, void 0) : undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: props.className,
            children: props.children
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
            lineNumber: 460,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
        lineNumber: 445,
        columnNumber: 9
    }, this);
}
_c1 = Help;
const __TURBOPACK__default__export__ = _c3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c2 = ()=>Promise.resolve(Configurator), {
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/frontend/src/app/(main)/design/test/Configurator.tsx",
            lineNumber: 467,
            columnNumber: 90
        }, ("TURBOPACK compile-time value", void 0))
});
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Configurator");
__turbopack_context__.k.register(_c1, "Help");
__turbopack_context__.k.register(_c2, "%default%$dynamic");
__turbopack_context__.k.register(_c3, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/style-stuff/StyledDiv.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/string.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
;
function StyledDiv(props) {
    const className = props.base || "div-" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const finalBase = props.base ? className : "." + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: styleToString(finalBase, props.important, props.style || {})
            }, Math.random(), false, {
                fileName: "[project]/frontend/src/style-stuff/StyledDiv.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ...props,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])(className, props.className)
            }, void 0, false, {
                fileName: "[project]/frontend/src/style-stuff/StyledDiv.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c = StyledDiv;
const toKebabCase = (str)=>{
    return str.replace(/[A-Z]/g, (letter)=>"-".concat(letter.toLowerCase()));
};
// Function to escape special characters in class names
const escapeClassName = (className)=>{
    return className.replace(/[^a-z0-9\-_]/gi, '-');
};
function styleToString(baseName) {
    let important = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, style = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : undefined;
    const list = Object.entries(style);
    let body = "";
    let after = "";
    for (const [key, value] of list){
        if (typeof value === 'object') {
            const kStr = "".concat(key);
            after += styleToString(kStr.startsWith(":") ? "".concat(baseName).concat(kStr) : baseName + " " + kStr, important, value) + "\n";
        } else {
            body += "".concat(toKebabCase(key), ": ").concat(value || (typeof value === 'string' ? "''" : "") || value, " ").concat(important ? "!important" : "", ";");
        }
    }
    return "".concat(baseName, " { ").concat(body, " }\n").concat(after);
}
const __TURBOPACK__default__export__ = StyledDiv;
var _c;
__turbopack_context__.k.register(_c, "StyledDiv");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/(main)/design/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoriesLabels",
    ()=>CategoriesLabels,
    "CategoriesReverse",
    ()=>CategoriesReverse,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/no-side/Loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/string.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$test$2f$Configurator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/design/test/Configurator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$style$2d$stuff$2f$StyledDiv$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/style-stuff/StyledDiv.tsx [app-client] (ecmascript)");
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
const Categories = {
    Library: 1,
    TvStand: 2,
    Console: 3,
    Closet: 4,
    ShoesBox: 5,
    Drawer: 6,
    Open: 7,
    BedSideTable: 9
};
const CategoriesReverse = Object.fromEntries(_c1 = Object.entries(Categories).map(_c = (param)=>{
    let [key, value] = param;
    return [
        value,
        key
    ];
}));
_c2 = CategoriesReverse;
const CategoriesLabels = [
    {
        "name": "کتابخانه",
        "image": "//cdn.idero.ir/file/product/3/3BO6KKP2_icon.jpg",
        "id": "Library"
    },
    {
        "name": "میز تلویزیون",
        "image": "//cdn.idero.ir/file/product/E/EQ1XFU38_icon.jpg",
        "id": "TvStand"
    },
    {
        "name": "میز کنسول",
        "image": "//cdn.idero.ir/file/product/0/099GTI1E_icon.jpg",
        "id": "Console"
    },
    {
        "name": "کمد",
        "image": "//cdn.idero.ir/file/product/E/E5ZCDVSK_icon.jpg",
        "id": "Closet"
    },
    {
        "name": "جاکفشی",
        "image": "//cdn.idero.ir/file/product/6/6YHE99E2_icon.jpg",
        "id": "ShoesBox"
    },
    {
        "name": "دراور",
        "image": "//cdn.idero.ir/file/product/2/2IEFVA5F_icon.jpg",
        "id": "Drawer"
    },
    {
        "name": "اپن",
        "image": "https://images.pexels.com/photos/6580395/pexels-photo-6580395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "id": "Open"
    }
];
const CategoryCard = (param)=>{
    let { name, image } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$style$2d$stuff$2f$StyledDiv$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        base: "c",
        className: "relative cursor-pointer transition-all w-full max-w-64 h-48 sm:h-56 md:h-64 bg-cover border-1 border-primary bg-center rounded-lg overflow-hidden shadow-lg",
        style: {
            backgroundImage: "url('".concat(image, "')"),
            ",.c:hover *,.c:hover": {
                background: "var(--accent)",
                borderColor: "var(--accent)"
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 w-full text-center bg-primary bg-opacity-50 text-white p-2 text-lg font-semibold rounded-b-lg",
            children: [
                name,
                " "
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
            lineNumber: 67,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = CategoryCard;
function Page(props) {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Page.useMemo[category]": ()=>params.get("category")
    }["Page.useMemo[category]"], [
        params
    ]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [design, setDesign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (params.has('id')) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backend"])("/public/design/" + params.get('id')).then({
                    "Page.useEffect": (e)=>{
                        var _e_data, _e_data1;
                        if (!e.ok) {
                            window.location.href = "/design";
                            window.throw("خطا در دریافت اطلاعات");
                        }
                        setDesign(e === null || e === void 0 ? void 0 : e.data);
                        router.push("?category=" + (e === null || e === void 0 ? void 0 : (_e_data = e.data) === null || _e_data === void 0 ? void 0 : _e_data.slug));
                        window.localStorage.setItem("InitObject", JSON.stringify({
                            Configurator: JSON.stringify((_e_data1 = e.data) === null || _e_data1 === void 0 ? void 0 : _e_data1.data)
                        }));
                    }
                }["Page.useEffect"]).finally({
                    "Page.useEffect": ()=>{
                        setLoading(false);
                    }
                }["Page.useEffect"]);
            } else if (params.has("category")) {
                setLoading(false);
            } else setLoading(false);
        }
    }["Page.useEffect"], [
        params
    ]);
    if (loading && !params.has('id')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$no$2d$side$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
        lineNumber: 101,
        columnNumber: 46
    }, this);
    return category ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$test$2f$Configurator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            category: Categories[category] || window.throw("خطا در بررسی اطلاعات"),
            data: design === null || design === void 0 ? void 0 : design.data,
            onSave: (data)=>{
                var _CategoriesLabels_find;
                const { finalPrice, content, imageData: image, categoryId } = data;
                const category = CategoriesReverse[categoryId];
                const obj = JSON.parse(content);
                const id = params.get('id');
                setLoading(true);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backend"])("/user/design" + (!!id ? "/" + id : ""), !!id ? "PUT" : "POST", {
                    slug: category,
                    price: finalPrice,
                    data: obj,
                    image,
                    name: !!id ? undefined : "طراحی ".concat((_CategoriesLabels_find = CategoriesLabels.find((o)=>o.id === category)) === null || _CategoriesLabels_find === void 0 ? void 0 : _CategoriesLabels_find.name, " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])())
                }).then((e)=>{
                    var _e_data;
                    if (!e.ok) window.throw(e.message || "خطا");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backend"])("/user/cart", "POST", {
                        customDesignId: e === null || e === void 0 ? void 0 : (_e_data = e.data) === null || _e_data === void 0 ? void 0 : _e_data.id
                    }).finally(()=>{
                        window.location.href = "/user/cart";
                    });
                });
            }
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
            lineNumber: 105,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
        lineNumber: 104,
        columnNumber: 9
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: 'flex flex-col gap-3 my-10 container mx-auto',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: 'text-center mb-3',
                children: "دسته بندی ها"
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: 'grid-items gap-3 gap-y-10',
                children: CategoriesLabels.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>{
                            window.localStorage.removeItem("InitObject");
                            router.push("?category=" + l.id);
                        },
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryCard, {
                            ...l
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
                            lineNumber: 141,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
                        lineNumber: 137,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(main)/design/page.tsx",
        lineNumber: 133,
        columnNumber: 9
    }, this);
}
_s(Page, "kBKT9HF+NtZ11/9Gq01TPsan9Nc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c4 = Page;
const __TURBOPACK__default__export__ = Page;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "CategoriesReverse$Object.fromEntries$Object.entries(Categories).map");
__turbopack_context__.k.register(_c1, "CategoriesReverse$Object.fromEntries");
__turbopack_context__.k.register(_c2, "CategoriesReverse");
__turbopack_context__.k.register(_c3, "CategoryCard");
__turbopack_context__.k.register(_c4, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/(landing)/admin/products/category/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$landing$292f$admin$2f$products$2f$color$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(landing)/admin/products/color/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/app/(main)/design/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$modals$2f$esm$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/modals/esm/events.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Select/Select.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/string.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
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
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$landing$292f$admin$2f$products$2f$color$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        api: "/admin/product/category",
        name: "دسته بندی محصول",
        handle: categoryHandler
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
        lineNumber: 16,
        columnNumber: 12
    }, this);
}
_c = Page;
function categoryHandler(o) {
    return new Promise((r)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$modals$2f$esm$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modals"].open({
            title: "مدیریت دسته بندی",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HandlerComponent, {
                default: o,
                onDone: (e)=>{
                    r(e);
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$modals$2f$esm$2f$events$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modals"].closeAll();
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
                lineNumber: 27,
                columnNumber: 23
            }, this)
        });
    });
}
function HandlerComponent(props) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(props.default || {});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const s = (s, v)=>setState((prev)=>({
                ...prev || {},
                [s]: v
            }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                label: "نام دسته بندی",
                value: state === null || state === void 0 ? void 0 : state.name,
                onChange: (e)=>s("name", e.target.value)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                data: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$app$2f28$main$292f$design$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoriesLabels"].map((o)=>({
                        label: o.name,
                        value: o.id
                    })),
                label: "دسته مربوطه",
                value: state.slug,
                onChange: (e)=>s("slug", e)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: "file",
                hidden: true,
                type: "file",
                onChange: (e)=>{
                    var _e_target_files;
                    const file = ((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) || window.throw("select file");
                    setLoading(true);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFile"])(file, "category/".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$string$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(), ".$EX")).then((path)=>{
                        s("image", path);
                    }).finally(()=>{
                        setLoading(false);
                    });
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            (state === null || state === void 0 ? void 0 : state.image) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative! h-48 w-48 center mx-auto my-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                            className: "absolute! left-2 top-2",
                            onClick: ()=>{
                                s("image", null);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {}, void 0, false, {
                                fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
                                lineNumber: 81,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
                            lineNumber: 78,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: state.image,
                            className: "w-full h-full rounded-lg object-cover"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
                            lineNumber: 83,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
                    lineNumber: 77,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
                lineNumber: 76,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "center p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    loading: loading,
                    onClick: ()=>{
                        var _window_document_getElementById;
                        (_window_document_getElementById = window.document.getElementById("file")) === null || _window_document_getElementById === void 0 ? void 0 : _window_document_getElementById.click();
                    },
                    children: "انتخاب عکس"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "center p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>{
                        props.onDone(state);
                    },
                    children: "ذخیره"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/(landing)/admin/products/category/page.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
_s(HandlerComponent, "RUvYXpS6vUycrg6ClfHYGt3Sojk=");
_c1 = HandlerComponent;
const __TURBOPACK__default__export__ = Page;
var _c, _c1;
__turbopack_context__.k.register(_c, "Page");
__turbopack_context__.k.register(_c1, "HandlerComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_636dea28._.js.map