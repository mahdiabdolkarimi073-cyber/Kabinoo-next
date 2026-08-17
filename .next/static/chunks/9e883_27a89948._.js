(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/@mantine/core/esm/components/Input/Input.context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputContext",
    ()=>InputContext,
    "useInputContext",
    ()=>useInputContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$optional$2d$context$2f$create$2d$optional$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/create-optional-context/create-optional-context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
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
;
const [InputContext, useInputContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$optional$2d$context$2f$create$2d$optional$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOptionalContext"])({
    size: "sm"
});
;
 //# sourceMappingURL=Input.context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResolvedStylesApi",
    ()=>useResolvedStylesApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs [app-client] (ecmascript)");
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
function useResolvedStylesApi(param) {
    let { classNames, styles, props, stylesCtx } = param;
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    return {
        resolvedClassNames: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveClassNames"])({
            theme,
            classNames,
            props,
            stylesCtx: stylesCtx || void 0
        }),
        resolvedStyles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyles"])({
            theme,
            styles,
            props,
            stylesCtx: stylesCtx || void 0
        })
    };
}
;
 //# sourceMappingURL=use-resolved-styles-api.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputClearButton/InputClearButton.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputClearButton",
    ()=>InputClearButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$CloseButton$2f$CloseButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/Input.context.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
;
const defaultProps = {};
const InputClearButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("InputClearButton", defaultProps, _props);
    const { size, variant, vars, classNames, styles, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInputContext"])();
    const { resolvedClassNames, resolvedStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedStylesApi"])({
        classNames,
        styles,
        props
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$CloseButton$2f$CloseButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseButton"], {
        variant: variant || "transparent",
        ref,
        size: size || (ctx === null || ctx === void 0 ? void 0 : ctx.size) || "sm",
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        __staticSelector: "InputClearButton",
        ...others
    });
});
InputClearButton.displayName = "@mantine/core/InputClearButton";
;
 //# sourceMappingURL=InputClearButton.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputWrapperProvider",
    ()=>InputWrapperProvider,
    "useInputWrapperContext",
    ()=>useInputWrapperContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$optional$2d$context$2f$create$2d$optional$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/create-optional-context/create-optional-context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
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
;
const [InputWrapperProvider, useInputWrapperContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$optional$2d$context$2f$create$2d$optional$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOptionalContext"])({
    offsetBottom: false,
    offsetTop: false,
    describedBy: void 0,
    getStyles: null,
    inputId: void 0,
    labelId: void 0
});
;
 //# sourceMappingURL=InputWrapper.context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "wrapper": "m_6c018570",
    "input": "m_8fb7ebe7",
    "section": "m_82577fc2",
    "placeholder": "m_88bacfd0",
    "root": "m_46b77525",
    "label": "m_8fdc1311",
    "required": "m_78a94662",
    "error": "m_8f816625",
    "description": "m_fe47ce59"
};
;
 //# sourceMappingURL=Input.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputDescription/InputDescription.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputDescription",
    ()=>InputDescription
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
const defaultProps = {};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, param)=>{
    let { size } = param;
    return {
        description: {
            "--input-description-size": size === void 0 ? void 0 : "calc(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontSize"])(size), " - ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(2), ")")
        }
    };
});
const InputDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("InputDescription", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, size, __staticSelector, __inheritStyles = true, variant, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("InputDescription", defaultProps, props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInputWrapperContext"])();
    const _getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "InputWrapper",
            __staticSelector
        ],
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        rootSelector: "description",
        vars,
        varsResolver
    });
    const getStyles = __inheritStyles && (ctx === null || ctx === void 0 ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        component: "p",
        ref,
        variant,
        size,
        ...getStyles("description", (ctx === null || ctx === void 0 ? void 0 : ctx.getStyles) ? {
            className,
            style
        } : void 0),
        ...others
    });
});
InputDescription.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
InputDescription.displayName = "@mantine/core/InputDescription";
;
 //# sourceMappingURL=InputDescription.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputError/InputError.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputError",
    ()=>InputError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
const defaultProps = {};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, param)=>{
    let { size } = param;
    return {
        error: {
            "--input-error-size": size === void 0 ? void 0 : "calc(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontSize"])(size), " - ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(2), ")")
        }
    };
});
const InputError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("InputError", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, size, __staticSelector, __inheritStyles = true, variant, ...others } = props;
    const _getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "InputWrapper",
            __staticSelector
        ],
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        rootSelector: "error",
        vars,
        varsResolver
    });
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInputWrapperContext"])();
    const getStyles = __inheritStyles && (ctx === null || ctx === void 0 ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        component: "p",
        ref,
        variant,
        size,
        ...getStyles("error", (ctx === null || ctx === void 0 ? void 0 : ctx.getStyles) ? {
            className,
            style
        } : void 0),
        ...others
    });
});
InputError.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
InputError.displayName = "@mantine/core/InputError";
;
 //# sourceMappingURL=InputError.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputLabel/InputLabel.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputLabel",
    ()=>InputLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
const defaultProps = {
    labelElement: "label"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, param)=>{
    let { size } = param;
    return {
        label: {
            "--input-label-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontSize"])(size),
            "--input-asterisk-color": void 0
        }
    };
});
const InputLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("InputLabel", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, labelElement, size, required, htmlFor, onMouseDown, children, __staticSelector, variant, mod, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("InputLabel", defaultProps, props);
    const _getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "InputWrapper",
            __staticSelector
        ],
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        rootSelector: "label",
        vars,
        varsResolver
    });
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInputWrapperContext"])();
    const getStyles = (ctx === null || ctx === void 0 ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("label", (ctx === null || ctx === void 0 ? void 0 : ctx.getStyles) ? {
            className,
            style
        } : void 0),
        component: labelElement,
        variant,
        size,
        ref,
        htmlFor: labelElement === "label" ? htmlFor : void 0,
        mod: [
            {
                required
            },
            mod
        ],
        onMouseDown: (event)=>{
            onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown(event);
            if (!event.defaultPrevented && event.detail > 1) {
                event.preventDefault();
            }
        },
        ...others,
        children: [
            children,
            required && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                ...getStyles("required"),
                "aria-hidden": true,
                children: " *"
            })
        ]
    });
});
InputLabel.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
InputLabel.displayName = "@mantine/core/InputLabel";
;
 //# sourceMappingURL=InputLabel.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputPlaceholder/InputPlaceholder.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputPlaceholder",
    ()=>InputPlaceholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-client] (ecmascript)");
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
;
;
;
;
const defaultProps = {};
const InputPlaceholder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("InputPlaceholder", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, __staticSelector, variant, error, mod, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("InputPlaceholder", defaultProps, props);
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "InputPlaceholder",
            __staticSelector
        ],
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        rootSelector: "placeholder"
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("placeholder"),
        mod: [
            {
                error: !!error
            },
            mod
        ],
        component: "span",
        variant,
        ref,
        ...others
    });
});
InputPlaceholder.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
InputPlaceholder.displayName = "@mantine/core/InputPlaceholder";
;
 //# sourceMappingURL=InputPlaceholder.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputWrapper/get-input-offsets/get-input-offsets.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInputOffsets",
    ()=>getInputOffsets
]);
'use client';
function getInputOffsets(inputWrapperOrder, param) {
    let { hasDescription, hasError } = param;
    const inputIndex = inputWrapperOrder.findIndex((part)=>part === "input");
    const aboveInput = inputWrapperOrder.slice(0, inputIndex);
    const belowInput = inputWrapperOrder.slice(inputIndex + 1);
    const offsetTop = hasDescription && aboveInput.includes("description") || hasError && aboveInput.includes("error");
    const offsetBottom = hasDescription && belowInput.includes("description") || hasError && belowInput.includes("error");
    return {
        offsetBottom,
        offsetTop
    };
}
;
 //# sourceMappingURL=get-input-offsets.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputWrapper/InputWrapper.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputWrapper",
    ()=>InputWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-id/use-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputDescription$2f$InputDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputDescription/InputDescription.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputError$2f$InputError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputError/InputError.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputLabel$2f$InputLabel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputLabel/InputLabel.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2f$get$2d$input$2d$offsets$2f$get$2d$input$2d$offsets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputWrapper/get-input-offsets/get-input-offsets.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-client] (ecmascript)");
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
;
const defaultProps = {
    labelElement: "label",
    inputContainer: (children)=>children,
    inputWrapperOrder: [
        "label",
        "description",
        "input",
        "error"
    ]
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, param)=>{
    let { size } = param;
    return {
        label: {
            "--input-label-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontSize"])(size),
            "--input-asterisk-color": void 0
        },
        error: {
            "--input-error-size": size === void 0 ? void 0 : "calc(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontSize"])(size), " - ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(2), ")")
        },
        description: {
            "--input-description-size": size === void 0 ? void 0 : "calc(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontSize"])(size), " - ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(2), ")")
        }
    };
});
const InputWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("InputWrapper", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, size, variant, __staticSelector, inputContainer, inputWrapperOrder, label, error, description, labelProps, descriptionProps, errorProps, labelElement, children, withAsterisk, id, required, __stylesApiProps, mod, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "InputWrapper",
            __staticSelector
        ],
        props: __stylesApiProps || props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    const sharedProps = {
        size,
        variant,
        __staticSelector
    };
    const idBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(id);
    const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
    const errorId = (errorProps === null || errorProps === void 0 ? void 0 : errorProps.id) || "".concat(idBase, "-error");
    const descriptionId = (descriptionProps === null || descriptionProps === void 0 ? void 0 : descriptionProps.id) || "".concat(idBase, "-description");
    const inputId = idBase;
    const hasError = !!error && typeof error !== "boolean";
    const hasDescription = !!description;
    const _describedBy = "".concat(hasError ? errorId : "", " ").concat(hasDescription ? descriptionId : "");
    const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
    const labelId = (labelProps === null || labelProps === void 0 ? void 0 : labelProps.id) || "".concat(idBase, "-label");
    const _label = label && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputLabel$2f$InputLabel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputLabel"], {
        labelElement,
        id: labelId,
        htmlFor: inputId,
        required: isRequired,
        ...sharedProps,
        ...labelProps,
        children: label
    }, "label");
    const _description = hasDescription && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputDescription$2f$InputDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputDescription"], {
        ...descriptionProps,
        ...sharedProps,
        size: (descriptionProps === null || descriptionProps === void 0 ? void 0 : descriptionProps.size) || sharedProps.size,
        id: (descriptionProps === null || descriptionProps === void 0 ? void 0 : descriptionProps.id) || descriptionId,
        children: description
    }, "description");
    const _input = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: inputContainer(children)
    }, "input");
    const _error = hasError && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputError$2f$InputError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputError"], {
        ...errorProps,
        ...sharedProps,
        size: (errorProps === null || errorProps === void 0 ? void 0 : errorProps.size) || sharedProps.size,
        key: "error",
        id: (errorProps === null || errorProps === void 0 ? void 0 : errorProps.id) || errorId
    }, error);
    const content = inputWrapperOrder.map((part)=>{
        switch(part){
            case "label":
                return _label;
            case "input":
                return _input;
            case "description":
                return _description;
            case "error":
                return _error;
            default:
                return null;
        }
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapperProvider"], {
        value: {
            getStyles,
            describedBy,
            inputId,
            labelId,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2f$get$2d$input$2d$offsets$2f$get$2d$input$2d$offsets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInputOffsets"])(inputWrapperOrder, {
                hasDescription,
                hasError
            })
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            ref,
            variant,
            size,
            mod: [
                {
                    error: !!error
                },
                mod
            ],
            ...getStyles("root"),
            ...others,
            children: content
        })
    });
});
InputWrapper.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
InputWrapper.displayName = "@mantine/core/InputWrapper";
;
 //# sourceMappingURL=InputWrapper.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Input/Input.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$extract$2d$style$2d$props$2f$extract$2d$style$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/Input.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputClearButton$2f$InputClearButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputClearButton/InputClearButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputDescription$2f$InputDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputDescription/InputDescription.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputError$2f$InputError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputError/InputError.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputLabel$2f$InputLabel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputLabel/InputLabel.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputPlaceholder$2f$InputPlaceholder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputPlaceholder/InputPlaceholder.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2f$InputWrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/InputWrapper/InputWrapper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
const defaultProps = {
    variant: "default",
    leftSectionPointerEvents: "none",
    rightSectionPointerEvents: "none",
    withAria: true,
    withErrorStyles: true
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, props, ctx)=>({
        wrapper: {
            "--input-margin-top": ctx.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
            "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
            "--input-height": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(props.size, "input-height"),
            "--input-fz": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontSize"])(props.size),
            "--input-radius": props.radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadius"])(props.radius),
            "--input-left-section-width": props.leftSectionWidth !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(props.leftSectionWidth) : void 0,
            "--input-right-section-width": props.rightSectionWidth !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(props.rightSectionWidth) : void 0,
            "--input-padding-y": props.multiline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(props.size, "input-padding-y") : void 0,
            "--input-left-section-pointer-events": props.leftSectionPointerEvents,
            "--input-right-section-pointer-events": props.rightSectionPointerEvents
        }
    }));
const Input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("Input", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, required, __staticSelector, __stylesApiProps, size, wrapperProps, error, disabled, leftSection, leftSectionProps, leftSectionWidth, rightSection, rightSectionProps, rightSectionWidth, rightSectionPointerEvents, leftSectionPointerEvents, variant, vars, pointer, multiline, radius, id, withAria, withErrorStyles, mod, inputSize, __clearSection, __clearable, __defaultRightSection, ...others } = props;
    const { styleProps, rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$extract$2d$style$2d$props$2f$extract$2d$style$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractStyleProps"])(others);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInputWrapperContext"])();
    const stylesCtx = {
        offsetBottom: ctx === null || ctx === void 0 ? void 0 : ctx.offsetBottom,
        offsetTop: ctx === null || ctx === void 0 ? void 0 : ctx.offsetTop
    };
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: [
            "Input",
            __staticSelector
        ],
        props: __stylesApiProps || props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        stylesCtx,
        rootSelector: "wrapper",
        vars,
        varsResolver
    });
    const ariaAttributes = withAria ? {
        required,
        disabled,
        "aria-invalid": !!error,
        "aria-describedby": ctx === null || ctx === void 0 ? void 0 : ctx.describedBy,
        id: (ctx === null || ctx === void 0 ? void 0 : ctx.inputId) || id
    } : {};
    const _rightSection = rightSection || __clearable && __clearSection || __defaultRightSection;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputContext"], {
        value: {
            size: size || "sm"
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            ...getStyles("wrapper"),
            ...styleProps,
            ...wrapperProps,
            mod: [
                {
                    error: !!error && withErrorStyles,
                    pointer,
                    disabled,
                    multiline,
                    "data-with-right-section": !!_rightSection,
                    "data-with-left-section": !!leftSection
                },
                mod
            ],
            variant,
            size,
            children: [
                leftSection && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ...leftSectionProps,
                    "data-position": "left",
                    ...getStyles("section", {
                        className: leftSectionProps === null || leftSectionProps === void 0 ? void 0 : leftSectionProps.className,
                        style: leftSectionProps === null || leftSectionProps === void 0 ? void 0 : leftSectionProps.style
                    }),
                    children: leftSection
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    component: "input",
                    ...rest,
                    ...ariaAttributes,
                    ref,
                    required,
                    mod: {
                        disabled,
                        error: !!error && withErrorStyles
                    },
                    variant,
                    __size: inputSize,
                    ...getStyles("input")
                }),
                _rightSection && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ...rightSectionProps,
                    "data-position": "right",
                    ...getStyles("section", {
                        className: rightSectionProps === null || rightSectionProps === void 0 ? void 0 : rightSectionProps.className,
                        style: rightSectionProps === null || rightSectionProps === void 0 ? void 0 : rightSectionProps.style
                    }),
                    children: _rightSection
                })
            ]
        })
    });
});
Input.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Input.Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputWrapper$2f$InputWrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"];
Input.Label = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputLabel$2f$InputLabel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputLabel"];
Input.Error = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputError$2f$InputError$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputError"];
Input.Description = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputDescription$2f$InputDescription$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputDescription"];
Input.Placeholder = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputPlaceholder$2f$InputPlaceholder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputPlaceholder"];
Input.ClearButton = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$InputClearButton$2f$InputClearButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputClearButton"];
Input.displayName = "@mantine/core/Input";
;
 //# sourceMappingURL=Input.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Input/use-input-props.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInputProps",
    ()=>useInputProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$extract$2d$style$2d$props$2f$extract$2d$style$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs [app-client] (ecmascript)");
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
;
;
function useInputProps(component, defaultProps, _props) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])(component, defaultProps, _props);
    const { label, description, error, required, classNames, styles, className, unstyled, __staticSelector, __stylesApiProps, errorProps, labelProps, descriptionProps, wrapperProps: _wrapperProps, id, size, style, inputContainer, inputWrapperOrder, withAsterisk, variant, vars, mod, ...others } = props;
    const { styleProps, rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$extract$2d$style$2d$props$2f$extract$2d$style$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractStyleProps"])(others);
    const wrapperProps = {
        label,
        description,
        error,
        required,
        classNames,
        className,
        __staticSelector,
        __stylesApiProps: __stylesApiProps || props,
        errorProps,
        labelProps,
        descriptionProps,
        unstyled,
        styles,
        size,
        style,
        inputContainer,
        inputWrapperOrder,
        withAsterisk,
        variant,
        id,
        mod,
        ..._wrapperProps
    };
    return {
        ...rest,
        classNames,
        styles,
        unstyled,
        wrapperProps: {
            ...wrapperProps,
            ...styleProps
        },
        inputProps: {
            required,
            classNames,
            styles,
            unstyled,
            size,
            __staticSelector,
            __stylesApiProps: __stylesApiProps || props,
            error,
            variant,
            id
        }
    };
}
;
 //# sourceMappingURL=use-input-props.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/InputBase/InputBase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputBase",
    ()=>InputBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/Input.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$use$2d$input$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Input/use-input-props.mjs [app-client] (ecmascript)");
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
const defaultProps = {
    __staticSelector: "InputBase",
    withAria: true
};
const InputBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polymorphicFactory"])((props, ref)=>{
    const { inputProps, wrapperProps, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$use$2d$input$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInputProps"])("InputBase", defaultProps, props);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"].Wrapper, {
        ...wrapperProps,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            ...inputProps,
            ...others,
            ref
        })
    });
});
InputBase.classes = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"].classes,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Input$2f$Input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"].Wrapper.classes
};
InputBase.displayName = "@mantine/core/InputBase";
;
 //# sourceMappingURL=InputBase.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextInput",
    ()=>TextInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$InputBase$2f$InputBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/InputBase/InputBase.mjs [app-client] (ecmascript)");
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
;
;
;
const defaultProps = {};
const TextInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((props, ref)=>{
    const _props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("TextInput", defaultProps, props);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$InputBase$2f$InputBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBase"], {
        component: "input",
        ref,
        ..._props,
        __staticSelector: "TextInput"
    });
});
TextInput.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$InputBase$2f$InputBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBase"].classes;
TextInput.displayName = "@mantine/core/TextInput";
;
 //# sourceMappingURL=TextInput.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Divider/Divider.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_3eebeb36",
    "label": "m_9e365f20"
};
;
 //# sourceMappingURL=Divider.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Divider/Divider.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Divider",
    ()=>Divider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Divider/Divider.module.css.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
const defaultProps = {
    orientation: "horizontal"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, param)=>{
    let { color, variant, size } = param;
    return {
        root: {
            "--divider-color": color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0,
            "--divider-border-style": variant,
            "--divider-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, "divider-size")
        }
    };
});
const Divider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("Divider", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, color, orientation, label, labelPosition, mod, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Divider",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        mod: [
            {
                orientation,
                "with-label": !!label
            },
            mod
        ],
        ...getStyles("root"),
        ...others,
        role: "separator",
        children: label && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            component: "span",
            mod: {
                position: labelPosition
            },
            ...getStyles("label"),
            children: label
        })
    });
});
Divider.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Divider.displayName = "@mantine/core/Divider";
;
 //# sourceMappingURL=Divider.mjs.map
}),
"[project]/frontend/node_modules/react-number-format/dist/react-number-format.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * react-number-format - 5.4.4
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2025 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format
 */ __turbopack_context__.s([
    "NumberFormatBase",
    ()=>NumberFormatBase,
    "NumericFormat",
    ()=>NumericFormat,
    "PatternFormat",
    ()=>PatternFormat,
    "getNumericCaretBoundary",
    ()=>getCaretBoundary,
    "getPatternCaretBoundary",
    ()=>getCaretBoundary$1,
    "numericFormatter",
    ()=>format,
    "patternFormatter",
    ()=>format$1,
    "removeNumericFormat",
    ()=>removeFormatting,
    "removePatternFormat",
    ()=>removeFormatting$1,
    "useNumericFormat",
    ()=>useNumericFormat,
    "usePatternFormat",
    ()=>usePatternFormat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function __rest(s, e) {
    var t = {};
    for(var p in s){
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) {
            t[p] = s[p];
        }
    }
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) {
                t[p[i]] = s[p[i]];
            }
        }
    }
    return t;
}
var SourceType;
(function(SourceType) {
    SourceType["event"] = "event";
    SourceType["props"] = "prop";
})(SourceType || (SourceType = {}));
// basic noop function
function noop() {}
function memoizeOnce(cb) {
    var lastArgs;
    var lastValue = undefined;
    return function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        if (lastArgs && args.length === lastArgs.length && args.every(function(value, index) {
            return value === lastArgs[index];
        })) {
            return lastValue;
        }
        lastArgs = args;
        lastValue = cb.apply(void 0, args);
        return lastValue;
    };
}
function charIsNumber(char) {
    return !!(char || '').match(/\d/);
}
function isNil(val) {
    return val === null || val === undefined;
}
function isNanValue(val) {
    return typeof val === 'number' && isNaN(val);
}
function isNotValidValue(val) {
    return isNil(val) || isNanValue(val) || typeof val === 'number' && !isFinite(val);
}
function escapeRegExp(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}
function getThousandsGroupRegex(thousandsGroupStyle) {
    switch(thousandsGroupStyle){
        case 'lakh':
            return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
        case 'wan':
            return /(\d)(?=(\d{4})+(?!\d))/g;
        case 'thousand':
        default:
            return /(\d)(?=(\d{3})+(?!\d))/g;
    }
}
function applyThousandSeparator(str, thousandSeparator, thousandsGroupStyle) {
    var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
    var index = str.search(/[1-9]/);
    index = index === -1 ? str.length : index;
    return str.substring(0, index) + str.substring(index, str.length).replace(thousandsGroupRegex, '$1' + thousandSeparator);
}
function usePersistentCallback(cb) {
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(cb);
    // keep the callback ref upto date
    callbackRef.current = cb;
    /**
     * initialize a persistent callback which never changes
     * through out the component lifecycle
     */ var persistentCbRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "usePersistentCallback.useRef[persistentCbRef]": function() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            return callbackRef.current.apply(callbackRef, args);
        }
    }["usePersistentCallback.useRef[persistentCbRef]"]);
    return persistentCbRef.current;
}
//spilt a float number into different parts beforeDecimal, afterDecimal, and negation
function splitDecimal(numStr, allowNegative) {
    if (allowNegative === void 0) allowNegative = true;
    var hasNegation = numStr[0] === '-';
    var addNegation = hasNegation && allowNegative;
    numStr = numStr.replace('-', '');
    var parts = numStr.split('.');
    var beforeDecimal = parts[0];
    var afterDecimal = parts[1] || '';
    return {
        beforeDecimal: beforeDecimal,
        afterDecimal: afterDecimal,
        hasNegation: hasNegation,
        addNegation: addNegation
    };
}
function fixLeadingZero(numStr) {
    if (!numStr) {
        return numStr;
    }
    var isNegative = numStr[0] === '-';
    if (isNegative) {
        numStr = numStr.substring(1, numStr.length);
    }
    var parts = numStr.split('.');
    var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
    var afterDecimal = parts[1] || '';
    return "" + (isNegative ? '-' : '') + beforeDecimal + (afterDecimal ? "." + afterDecimal : '');
}
/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */ function limitToScale(numStr, scale, fixedDecimalScale) {
    var str = '';
    var filler = fixedDecimalScale ? '0' : '';
    for(var i = 0; i <= scale - 1; i++){
        str += numStr[i] || filler;
    }
    return str;
}
function repeat(str, count) {
    return Array(count + 1).join(str);
}
function toNumericString(num) {
    var _num = num + ''; // typecast number to string
    // store the sign and remove it from the number.
    var sign = _num[0] === '-' ? '-' : '';
    if (sign) {
        _num = _num.substring(1);
    }
    // split the number into cofficient and exponent
    var ref = _num.split(/[eE]/g);
    var coefficient = ref[0];
    var exponent = ref[1];
    // covert exponent to number;
    exponent = Number(exponent);
    // if there is no exponent part or its 0, return the coffiecient with sign
    if (!exponent) {
        return sign + coefficient;
    }
    coefficient = coefficient.replace('.', '');
    /**
     * for scientific notation the current decimal index will be after first number (index 0)
     * So effective decimal index will always be 1 + exponent value
     */ var decimalIndex = 1 + exponent;
    var coffiecientLn = coefficient.length;
    if (decimalIndex < 0) {
        // if decimal index is less then 0 add preceding 0s
        // add 1 as join will have
        coefficient = '0.' + repeat('0', Math.abs(decimalIndex)) + coefficient;
    } else if (decimalIndex >= coffiecientLn) {
        // if decimal index is less then 0 add leading 0s
        coefficient = coefficient + repeat('0', decimalIndex - coffiecientLn);
    } else {
        // else add decimal point at proper index
        coefficient = (coefficient.substring(0, decimalIndex) || '0') + '.' + coefficient.substring(decimalIndex);
    }
    return sign + coefficient;
}
/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */ function roundToPrecision(numStr, scale, fixedDecimalScale) {
    //if number is empty don't do anything return empty string
    if ([
        '',
        '-'
    ].indexOf(numStr) !== -1) {
        return numStr;
    }
    var shouldHaveDecimalSeparator = (numStr.indexOf('.') !== -1 || fixedDecimalScale) && scale;
    var ref = splitDecimal(numStr);
    var beforeDecimal = ref.beforeDecimal;
    var afterDecimal = ref.afterDecimal;
    var hasNegation = ref.hasNegation;
    var floatValue = parseFloat("0." + (afterDecimal || '0'));
    var floatValueStr = afterDecimal.length <= scale ? "0." + afterDecimal : floatValue.toFixed(scale);
    var roundedDecimalParts = floatValueStr.split('.');
    var intPart = beforeDecimal;
    // if we have cary over from rounding decimal part, add that on before decimal
    if (beforeDecimal && Number(roundedDecimalParts[0])) {
        intPart = beforeDecimal.split('').reverse().reduce(function(roundedStr, current, idx) {
            if (roundedStr.length > idx) {
                return (Number(roundedStr[0]) + Number(current)).toString() + roundedStr.substring(1, roundedStr.length);
            }
            return current + roundedStr;
        }, roundedDecimalParts[0]);
    }
    var decimalPart = limitToScale(roundedDecimalParts[1] || '', scale, fixedDecimalScale);
    var negation = hasNegation ? '-' : '';
    var decimalSeparator = shouldHaveDecimalSeparator ? '.' : '';
    return "" + negation + intPart + decimalSeparator + decimalPart;
}
/** set the caret positon in an input field **/ function setCaretPosition(el, caretPos) {
    el.value = el.value;
    // ^ this is used to not only get 'focus', but
    // to make sure we don't have it everything -selected-
    // (it causes an issue in chrome, and having it doesn't hurt any other browser)
    if (el !== null) {
        /* @ts-ignore */ if (el.createTextRange) {
            /* @ts-ignore */ var range = el.createTextRange();
            range.move('character', caretPos);
            range.select();
            return true;
        }
        // (el.selectionStart === 0 added for Firefox bug)
        if (el.selectionStart || el.selectionStart === 0) {
            el.focus();
            el.setSelectionRange(caretPos, caretPos);
            return true;
        }
        // fail city, fortunately this never happens (as far as I've tested) :)
        el.focus();
        return false;
    }
}
/**
 * TODO: remove dependency of findChangeRange, findChangedRangeFromCaretPositions is better way to find what is changed
 * currently this is mostly required by test and isCharacterSame util
 * Given previous value and newValue it returns the index
 * start - end to which values have changed.
 * This function makes assumption about only consecutive
 * characters are changed which is correct assumption for caret input.
 */ var findChangeRange = memoizeOnce(function(prevValue, newValue) {
    var i = 0, j = 0;
    var prevLength = prevValue.length;
    var newLength = newValue.length;
    while(prevValue[i] === newValue[i] && i < prevLength){
        i++;
    }
    //check what has been changed from last
    while(prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] && newLength - j > i && prevLength - j > i){
        j++;
    }
    return {
        from: {
            start: i,
            end: prevLength - j
        },
        to: {
            start: i,
            end: newLength - j
        }
    };
});
var findChangedRangeFromCaretPositions = function(lastCaretPositions, currentCaretPosition) {
    var startPosition = Math.min(lastCaretPositions.selectionStart, currentCaretPosition);
    return {
        from: {
            start: startPosition,
            end: lastCaretPositions.selectionEnd
        },
        to: {
            start: startPosition,
            end: currentCaretPosition
        }
    };
};
/*
  Returns a number whose value is limited to the given range
*/ function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function geInputCaretPosition(el) {
    /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/ return Math.max(el.selectionStart, el.selectionEnd);
}
function addInputMode() {
    return typeof navigator !== 'undefined' && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function getDefaultChangeMeta(value) {
    return {
        from: {
            start: 0,
            end: 0
        },
        to: {
            start: 0,
            end: value.length
        },
        lastValue: ''
    };
}
function getMaskAtIndex(mask, index) {
    if (mask === void 0) mask = ' ';
    if (typeof mask === 'string') {
        return mask;
    }
    return mask[index] || ' ';
}
function defaultIsCharacterSame(ref) {
    var currentValue = ref.currentValue;
    var formattedValue = ref.formattedValue;
    var currentValueIndex = ref.currentValueIndex;
    var formattedValueIndex = ref.formattedValueIndex;
    return currentValue[currentValueIndex] === formattedValue[formattedValueIndex];
}
function getCaretPosition(newFormattedValue, lastFormattedValue, curValue, curCaretPos, boundary, isValidInputCharacter, /**
 * format function can change the character, the caret engine relies on mapping old value and new value
 * In such case if character is changed, parent can tell which chars are equivalent
 * Some example, all allowedDecimalCharacters are updated to decimalCharacters, 2nd case if user is coverting
 * number to different numeric system.
 */ isCharacterSame) {
    if (isCharacterSame === void 0) isCharacterSame = defaultIsCharacterSame;
    /**
     * if something got inserted on empty value, add the formatted character before the current value,
     * This is to avoid the case where typed character is present on format characters
     */ var firstAllowedPosition = boundary.findIndex(function(b) {
        return b;
    });
    var prefixFormat = newFormattedValue.slice(0, firstAllowedPosition);
    if (!lastFormattedValue && !curValue.startsWith(prefixFormat)) {
        lastFormattedValue = prefixFormat;
        curValue = prefixFormat + curValue;
        curCaretPos = curCaretPos + prefixFormat.length;
    }
    var curValLn = curValue.length;
    var formattedValueLn = newFormattedValue.length;
    // create index map
    var addedIndexMap = {};
    var indexMap = new Array(curValLn);
    for(var i = 0; i < curValLn; i++){
        indexMap[i] = -1;
        for(var j = 0, jLn = formattedValueLn; j < jLn; j++){
            var isCharSame = isCharacterSame({
                currentValue: curValue,
                lastValue: lastFormattedValue,
                formattedValue: newFormattedValue,
                currentValueIndex: i,
                formattedValueIndex: j
            });
            if (isCharSame && addedIndexMap[j] !== true) {
                indexMap[i] = j;
                addedIndexMap[j] = true;
                break;
            }
        }
    }
    /**
     * For current caret position find closest characters (left and right side)
     * which are properly mapped to formatted value.
     * The idea is that the new caret position will exist always in the boundary of
     * that mapped index
     */ var pos = curCaretPos;
    while(pos < curValLn && (indexMap[pos] === -1 || !isValidInputCharacter(curValue[pos]))){
        pos++;
    }
    // if the caret position is on last keep the endIndex as last for formatted value
    var endIndex = pos === curValLn || indexMap[pos] === -1 ? formattedValueLn : indexMap[pos];
    pos = curCaretPos - 1;
    while(pos > 0 && indexMap[pos] === -1){
        pos--;
    }
    var startIndex = pos === -1 || indexMap[pos] === -1 ? 0 : indexMap[pos] + 1;
    /**
     * case where a char is added on suffix and removed from middle, example 2sq345 becoming $2,345 sq
     * there is still a mapping but the order of start index and end index is changed
     */ if (startIndex > endIndex) {
        return endIndex;
    }
    /**
     * given the current caret position if it closer to startIndex
     * keep the new caret position on start index or keep it closer to endIndex
     */ return curCaretPos - startIndex < endIndex - curCaretPos ? startIndex : endIndex;
}
/* This keeps the caret within typing area so people can't type in between prefix or suffix or format characters */ function getCaretPosInBoundary(value, caretPos, boundary, direction) {
    var valLn = value.length;
    // clamp caret position to [0, value.length]
    caretPos = clamp(caretPos, 0, valLn);
    if (direction === 'left') {
        while(caretPos >= 0 && !boundary[caretPos]){
            caretPos--;
        }
        // if we don't find any suitable caret position on left, set it on first allowed position
        if (caretPos === -1) {
            caretPos = boundary.indexOf(true);
        }
    } else {
        while(caretPos <= valLn && !boundary[caretPos]){
            caretPos++;
        }
        // if we don't find any suitable caret position on right, set it on last allowed position
        if (caretPos > valLn) {
            caretPos = boundary.lastIndexOf(true);
        }
    }
    // if we still don't find caret position, set it at the end of value
    if (caretPos === -1) {
        caretPos = valLn;
    }
    return caretPos;
}
function caretUnknownFormatBoundary(formattedValue) {
    var boundaryAry = Array.from({
        length: formattedValue.length + 1
    }).map(function() {
        return true;
    });
    for(var i = 0, ln = boundaryAry.length; i < ln; i++){
        // consider caret to be in boundary if it is before or after numeric value
        boundaryAry[i] = Boolean(charIsNumber(formattedValue[i]) || charIsNumber(formattedValue[i - 1]));
    }
    return boundaryAry;
}
function useInternalValues(value, defaultValue, valueIsNumericString, format, removeFormatting, onValueChange) {
    if (onValueChange === void 0) onValueChange = noop;
    var getValues = usePersistentCallback({
        "useInternalValues.usePersistentCallback[getValues]": function(value, valueIsNumericString) {
            var formattedValue, numAsString;
            if (isNotValidValue(value)) {
                numAsString = '';
                formattedValue = '';
            } else if (typeof value === 'number' || valueIsNumericString) {
                numAsString = typeof value === 'number' ? toNumericString(value) : value;
                formattedValue = format(numAsString);
            } else {
                numAsString = removeFormatting(value, undefined);
                formattedValue = format(numAsString);
            }
            return {
                formattedValue: formattedValue,
                numAsString: numAsString
            };
        }
    }["useInternalValues.usePersistentCallback[getValues]"]);
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useInternalValues.useState[ref]": function() {
            return getValues(isNil(value) ? defaultValue : value, valueIsNumericString);
        }
    }["useInternalValues.useState[ref]"]);
    var values = ref[0];
    var setValues = ref[1];
    var _onValueChange = function(newValues, sourceInfo) {
        if (newValues.formattedValue !== values.formattedValue) {
            setValues({
                formattedValue: newValues.formattedValue,
                numAsString: newValues.value
            });
        }
        // call parent on value change if only if formatted value is changed
        onValueChange(newValues, sourceInfo);
    };
    // if value is switch from controlled to uncontrolled, use the internal state's value to format with new props
    var _value = value;
    var _valueIsNumericString = valueIsNumericString;
    if (isNil(value)) {
        _value = values.numAsString;
        _valueIsNumericString = true;
    }
    var newValues = getValues(_value, _valueIsNumericString);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useInternalValues.useMemo": function() {
            setValues(newValues);
        }
    }["useInternalValues.useMemo"], [
        newValues.formattedValue
    ]);
    return [
        values,
        _onValueChange
    ];
}
function defaultRemoveFormatting(value) {
    return value.replace(/[^0-9]/g, '');
}
function defaultFormat(value) {
    return value;
}
function NumberFormatBase(props) {
    var type = props.type;
    if (type === void 0) type = 'text';
    var displayType = props.displayType;
    if (displayType === void 0) displayType = 'input';
    var customInput = props.customInput;
    var renderText = props.renderText;
    var getInputRef = props.getInputRef;
    var format = props.format;
    if (format === void 0) format = defaultFormat;
    var removeFormatting = props.removeFormatting;
    if (removeFormatting === void 0) removeFormatting = defaultRemoveFormatting;
    var defaultValue = props.defaultValue;
    var valueIsNumericString = props.valueIsNumericString;
    var onValueChange = props.onValueChange;
    var isAllowed = props.isAllowed;
    var onChange = props.onChange;
    if (onChange === void 0) onChange = noop;
    var onKeyDown = props.onKeyDown;
    if (onKeyDown === void 0) onKeyDown = noop;
    var onMouseUp = props.onMouseUp;
    if (onMouseUp === void 0) onMouseUp = noop;
    var onFocus = props.onFocus;
    if (onFocus === void 0) onFocus = noop;
    var onBlur = props.onBlur;
    if (onBlur === void 0) onBlur = noop;
    var propValue = props.value;
    var getCaretBoundary = props.getCaretBoundary;
    if (getCaretBoundary === void 0) getCaretBoundary = caretUnknownFormatBoundary;
    var isValidInputCharacter = props.isValidInputCharacter;
    if (isValidInputCharacter === void 0) isValidInputCharacter = charIsNumber;
    var isCharacterSame = props.isCharacterSame;
    var otherProps = __rest(props, [
        "type",
        "displayType",
        "customInput",
        "renderText",
        "getInputRef",
        "format",
        "removeFormatting",
        "defaultValue",
        "valueIsNumericString",
        "onValueChange",
        "isAllowed",
        "onChange",
        "onKeyDown",
        "onMouseUp",
        "onFocus",
        "onBlur",
        "value",
        "getCaretBoundary",
        "isValidInputCharacter",
        "isCharacterSame"
    ]);
    var ref = useInternalValues(propValue, defaultValue, Boolean(valueIsNumericString), format, removeFormatting, onValueChange);
    var ref_0 = ref[0];
    var formattedValue = ref_0.formattedValue;
    var numAsString = ref_0.numAsString;
    var onFormattedValueChange = ref[1];
    var caretPositionBeforeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    var lastUpdatedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        formattedValue: formattedValue,
        numAsString: numAsString
    });
    var _onValueChange = function(values, source) {
        lastUpdatedValue.current = {
            formattedValue: values.formattedValue,
            numAsString: values.value
        };
        onFormattedValueChange(values, source);
    };
    var ref$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    var mounted = ref$1[0];
    var setMounted = ref$1[1];
    var focusedElm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        setCaretTimeout: null,
        focusTimeout: null
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NumberFormatBase.useEffect": function() {
            setMounted(true);
            return ({
                "NumberFormatBase.useEffect": function() {
                    clearTimeout(timeout.current.setCaretTimeout);
                    clearTimeout(timeout.current.focusTimeout);
                }
            })["NumberFormatBase.useEffect"];
        }
    }["NumberFormatBase.useEffect"], []);
    var _format = format;
    var getValueObject = function(formattedValue, numAsString) {
        var floatValue = parseFloat(numAsString);
        return {
            formattedValue: formattedValue,
            value: numAsString,
            floatValue: isNaN(floatValue) ? undefined : floatValue
        };
    };
    var setPatchedCaretPosition = function(el, caretPos, currentValue) {
        // don't reset the caret position when the whole input content is selected
        if (el.selectionStart === 0 && el.selectionEnd === el.value.length) {
            return;
        }
        /* setting caret position within timeout of 0ms is required for mobile chrome,
        otherwise browser resets the caret position after we set it
        We are also setting it without timeout so that in normal browser we don't see the flickering */ setCaretPosition(el, caretPos);
        timeout.current.setCaretTimeout = setTimeout(function() {
            if (el.value === currentValue && el.selectionStart !== caretPos) {
                setCaretPosition(el, caretPos);
            }
        }, 0);
    };
    /* This keeps the caret within typing area so people can't type in between prefix or suffix */ var correctCaretPosition = function(value, caretPos, direction) {
        return getCaretPosInBoundary(value, caretPos, getCaretBoundary(value), direction);
    };
    var getNewCaretPosition = function(inputValue, newFormattedValue, caretPos) {
        var caretBoundary = getCaretBoundary(newFormattedValue);
        var updatedCaretPos = getCaretPosition(newFormattedValue, formattedValue, inputValue, caretPos, caretBoundary, isValidInputCharacter, isCharacterSame);
        //correct caret position if its outside of editable area
        updatedCaretPos = getCaretPosInBoundary(newFormattedValue, updatedCaretPos, caretBoundary);
        return updatedCaretPos;
    };
    var updateValueAndCaretPosition = function(params) {
        var newFormattedValue = params.formattedValue;
        if (newFormattedValue === void 0) newFormattedValue = '';
        var input = params.input;
        var source = params.source;
        var event = params.event;
        var numAsString = params.numAsString;
        var caretPos;
        if (input) {
            var inputValue = params.inputValue || input.value;
            var currentCaretPosition = geInputCaretPosition(input);
            /**
             * set the value imperatively, this is required for IE fix
             * This is also required as if new caret position is beyond the previous value.
             * Caret position will not be set correctly
             */ input.value = newFormattedValue;
            //get the caret position
            caretPos = getNewCaretPosition(inputValue, newFormattedValue, currentCaretPosition);
            //set caret position imperatively
            if (caretPos !== undefined) {
                setPatchedCaretPosition(input, caretPos, newFormattedValue);
            }
        }
        if (newFormattedValue !== formattedValue) {
            // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287
            _onValueChange(getValueObject(newFormattedValue, numAsString), {
                event: event,
                source: source
            });
        }
    };
    /**
     * if the formatted value is not synced to parent, or if the formatted value is different from last synced value sync it
     * if the formatting props is removed, in which case last formatted value will be different from the numeric string value
     * in such case we need to inform the parent.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NumberFormatBase.useEffect": function() {
            var ref = lastUpdatedValue.current;
            var lastFormattedValue = ref.formattedValue;
            var lastNumAsString = ref.numAsString;
            if (formattedValue !== lastFormattedValue || numAsString !== lastNumAsString) {
                _onValueChange(getValueObject(formattedValue, numAsString), {
                    event: undefined,
                    source: SourceType.props
                });
            }
        }
    }["NumberFormatBase.useEffect"], [
        formattedValue,
        numAsString
    ]);
    // also if formatted value is changed from the props, we need to update the caret position
    // keep the last caret position if element is focused
    var currentCaretPosition = focusedElm.current ? geInputCaretPosition(focusedElm.current) : undefined;
    // needed to prevent warning with useLayoutEffect on server
    var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
    useIsomorphicLayoutEffect({
        "NumberFormatBase.useIsomorphicLayoutEffect": function() {
            var input = focusedElm.current;
            if (formattedValue !== lastUpdatedValue.current.formattedValue && input) {
                var caretPos = getNewCaretPosition(lastUpdatedValue.current.formattedValue, formattedValue, currentCaretPosition);
                /**
             * set the value imperatively, as we set the caret position as well imperatively.
             * This is to keep value and caret position in sync
             */ input.value = formattedValue;
                setPatchedCaretPosition(input, caretPos, formattedValue);
            }
        }
    }["NumberFormatBase.useIsomorphicLayoutEffect"], [
        formattedValue
    ]);
    var formatInputValue = function(inputValue, event, source) {
        var input = event.target;
        var changeRange = caretPositionBeforeChange.current ? findChangedRangeFromCaretPositions(caretPositionBeforeChange.current, input.selectionEnd) : findChangeRange(formattedValue, inputValue);
        var changeMeta = Object.assign(Object.assign({}, changeRange), {
            lastValue: formattedValue
        });
        var _numAsString = removeFormatting(inputValue, changeMeta);
        var _formattedValue = _format(_numAsString);
        // formatting can remove some of the number chars, so we need to fine number string again
        _numAsString = removeFormatting(_formattedValue, undefined);
        if (isAllowed && !isAllowed(getValueObject(_formattedValue, _numAsString))) {
            //reset the caret position
            var input$1 = event.target;
            var currentCaretPosition = geInputCaretPosition(input$1);
            var caretPos = getNewCaretPosition(inputValue, formattedValue, currentCaretPosition);
            input$1.value = formattedValue;
            setPatchedCaretPosition(input$1, caretPos, formattedValue);
            return false;
        }
        updateValueAndCaretPosition({
            formattedValue: _formattedValue,
            numAsString: _numAsString,
            inputValue: inputValue,
            event: event,
            source: source,
            input: event.target
        });
        return true;
    };
    var setCaretPositionInfoBeforeChange = function(el, endOffset) {
        if (endOffset === void 0) endOffset = 0;
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        caretPositionBeforeChange.current = {
            selectionStart: selectionStart,
            selectionEnd: selectionEnd + endOffset
        };
    };
    var _onChange = function(e) {
        var el = e.target;
        var inputValue = el.value;
        var changed = formatInputValue(inputValue, e, SourceType.event);
        if (changed) {
            onChange(e);
        }
        // reset the position, as we have already handled the caret position
        caretPositionBeforeChange.current = undefined;
    };
    var _onKeyDown = function(e) {
        var el = e.target;
        var key = e.key;
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value;
        if (value === void 0) value = '';
        var expectedCaretPosition;
        //Handle backspace and delete against non numerical/decimal characters or arrow keys
        if (key === 'ArrowLeft' || key === 'Backspace') {
            expectedCaretPosition = Math.max(selectionStart - 1, 0);
        } else if (key === 'ArrowRight') {
            expectedCaretPosition = Math.min(selectionStart + 1, value.length);
        } else if (key === 'Delete') {
            expectedCaretPosition = selectionStart;
        }
        // if key is delete and text is not selected keep the end offset to 1, as it deletes one character
        // this is required as selection is not changed on delete case, which changes the change range calculation
        var endOffset = 0;
        if (key === 'Delete' && selectionStart === selectionEnd) {
            endOffset = 1;
        }
        var isArrowKey = key === 'ArrowLeft' || key === 'ArrowRight';
        //if expectedCaretPosition is not set it means we don't want to Handle keyDown
        // also if multiple characters are selected don't handle
        if (expectedCaretPosition === undefined || selectionStart !== selectionEnd && !isArrowKey) {
            onKeyDown(e);
            // keep information of what was the caret position before keyDown
            // set it after onKeyDown, in case parent updates the position manually
            setCaretPositionInfoBeforeChange(el, endOffset);
            return;
        }
        var newCaretPosition = expectedCaretPosition;
        if (isArrowKey) {
            var direction = key === 'ArrowLeft' ? 'left' : 'right';
            newCaretPosition = correctCaretPosition(value, expectedCaretPosition, direction);
            // arrow left or right only moves the caret, so no need to handle the event, if we are handling it manually
            if (newCaretPosition !== expectedCaretPosition) {
                e.preventDefault();
            }
        } else if (key === 'Delete' && !isValidInputCharacter(value[expectedCaretPosition])) {
            // in case of delete go to closest caret boundary on the right side
            newCaretPosition = correctCaretPosition(value, expectedCaretPosition, 'right');
        } else if (key === 'Backspace' && !isValidInputCharacter(value[expectedCaretPosition])) {
            // in case of backspace go to closest caret boundary on the left side
            newCaretPosition = correctCaretPosition(value, expectedCaretPosition, 'left');
        }
        if (newCaretPosition !== expectedCaretPosition) {
            setPatchedCaretPosition(el, newCaretPosition, value);
        }
        onKeyDown(e);
        setCaretPositionInfoBeforeChange(el, endOffset);
    };
    /** required to handle the caret position when click anywhere within the input **/ var _onMouseUp = function(e) {
        var el = e.target;
        /**
         * NOTE: we have to give default value for value as in case when custom input is provided
         * value can come as undefined when nothing is provided on value prop.
         */ var correctCaretPositionIfRequired = function() {
            var selectionStart = el.selectionStart;
            var selectionEnd = el.selectionEnd;
            var value = el.value;
            if (value === void 0) value = '';
            if (selectionStart === selectionEnd) {
                var caretPosition = correctCaretPosition(value, selectionStart);
                if (caretPosition !== selectionStart) {
                    setPatchedCaretPosition(el, caretPosition, value);
                }
            }
        };
        correctCaretPositionIfRequired();
        // try to correct after selection has updated by browser
        // this case is required when user clicks on some position while a text is selected on input
        requestAnimationFrame(function() {
            correctCaretPositionIfRequired();
        });
        onMouseUp(e);
        setCaretPositionInfoBeforeChange(el);
    };
    var _onFocus = function(e) {
        // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
        // (onFocus event target selectionStart is always 0 before setTimeout)
        if (e.persist) {
            e.persist();
        }
        var el = e.target;
        var currentTarget = e.currentTarget;
        focusedElm.current = el;
        timeout.current.focusTimeout = setTimeout(function() {
            var selectionStart = el.selectionStart;
            var selectionEnd = el.selectionEnd;
            var value = el.value;
            if (value === void 0) value = '';
            var caretPosition = correctCaretPosition(value, selectionStart);
            //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)
            if (caretPosition !== selectionStart && !(selectionStart === 0 && selectionEnd === value.length)) {
                setPatchedCaretPosition(el, caretPosition, value);
            }
            onFocus(Object.assign(Object.assign({}, e), {
                currentTarget: currentTarget
            }));
        }, 0);
    };
    var _onBlur = function(e) {
        focusedElm.current = null;
        clearTimeout(timeout.current.focusTimeout);
        clearTimeout(timeout.current.setCaretTimeout);
        onBlur(e);
    };
    // add input mode on element based on format prop and device once the component is mounted
    var inputMode = mounted && addInputMode() ? 'numeric' : undefined;
    var inputProps = Object.assign({
        inputMode: inputMode
    }, otherProps, {
        type: type,
        value: formattedValue,
        onChange: _onChange,
        onKeyDown: _onKeyDown,
        onMouseUp: _onMouseUp,
        onFocus: _onFocus,
        onBlur: _onBlur
    });
    if (displayType === 'text') {
        return renderText ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, renderText(formattedValue, otherProps) || null) : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", Object.assign({}, otherProps, {
            ref: getInputRef
        }), formattedValue);
    } else if (customInput) {
        var CustomInput = customInput;
        /* @ts-ignore */ return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CustomInput, Object.assign({}, inputProps, {
            ref: getInputRef
        }));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", Object.assign({}, inputProps, {
        ref: getInputRef
    }));
}
function format(numStr, props) {
    var decimalScale = props.decimalScale;
    var fixedDecimalScale = props.fixedDecimalScale;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = '';
    var suffix = props.suffix;
    if (suffix === void 0) suffix = '';
    var allowNegative = props.allowNegative;
    var thousandsGroupStyle = props.thousandsGroupStyle;
    if (thousandsGroupStyle === void 0) thousandsGroupStyle = 'thousand';
    // don't apply formatting on empty string or '-'
    if (numStr === '' || numStr === '-') {
        return numStr;
    }
    var ref = getSeparators(props);
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    /**
     * Keep the decimal separator
     * when decimalScale is not defined or non zero and the numStr has decimal in it
     * Or if decimalScale is > 0 and fixeDecimalScale is true (even if numStr has no decimal)
     */ var hasDecimalSeparator = decimalScale !== 0 && numStr.indexOf('.') !== -1 || decimalScale && fixedDecimalScale;
    var ref$1 = splitDecimal(numStr, allowNegative);
    var beforeDecimal = ref$1.beforeDecimal;
    var afterDecimal = ref$1.afterDecimal;
    var addNegation = ref$1.addNegation; // eslint-disable-line prefer-const
    //apply decimal precision if its defined
    if (decimalScale !== undefined) {
        afterDecimal = limitToScale(afterDecimal, decimalScale, !!fixedDecimalScale);
    }
    if (thousandSeparator) {
        beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
    }
    //add prefix and suffix when there is a number present
    if (prefix) {
        beforeDecimal = prefix + beforeDecimal;
    }
    if (suffix) {
        afterDecimal = afterDecimal + suffix;
    }
    //restore negation sign
    if (addNegation) {
        beforeDecimal = '-' + beforeDecimal;
    }
    numStr = beforeDecimal + (hasDecimalSeparator && decimalSeparator || '') + afterDecimal;
    return numStr;
}
function getSeparators(props) {
    var decimalSeparator = props.decimalSeparator;
    if (decimalSeparator === void 0) decimalSeparator = '.';
    var thousandSeparator = props.thousandSeparator;
    var allowedDecimalSeparators = props.allowedDecimalSeparators;
    if (thousandSeparator === true) {
        thousandSeparator = ',';
    }
    if (!allowedDecimalSeparators) {
        allowedDecimalSeparators = [
            decimalSeparator,
            '.'
        ];
    }
    return {
        decimalSeparator: decimalSeparator,
        thousandSeparator: thousandSeparator,
        allowedDecimalSeparators: allowedDecimalSeparators
    };
}
function handleNegation(value, allowNegative) {
    if (value === void 0) value = '';
    var negationRegex = new RegExp('(-)');
    var doubleNegationRegex = new RegExp('(-)(.)*(-)');
    // Check number has '-' value
    var hasNegation = negationRegex.test(value);
    // Check number has 2 or more '-' values
    var removeNegation = doubleNegationRegex.test(value);
    //remove negation
    value = value.replace(/-/g, '');
    if (hasNegation && !removeNegation && allowNegative) {
        value = '-' + value;
    }
    return value;
}
function getNumberRegex(decimalSeparator, global) {
    return new RegExp("(^-)|[0-9]|" + escapeRegExp(decimalSeparator), global ? 'g' : undefined);
}
function isNumericString(val, prefix, suffix) {
    // for empty value we can always treat it as numeric string
    if (val === '') {
        return true;
    }
    return !(prefix === null || prefix === void 0 ? void 0 : prefix.match(/\d/)) && !(suffix === null || suffix === void 0 ? void 0 : suffix.match(/\d/)) && typeof val === 'string' && !isNaN(Number(val));
}
function removeFormatting(value, changeMeta, props) {
    var assign;
    if (changeMeta === void 0) changeMeta = getDefaultChangeMeta(value);
    var allowNegative = props.allowNegative;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = '';
    var suffix = props.suffix;
    if (suffix === void 0) suffix = '';
    var decimalScale = props.decimalScale;
    var from = changeMeta.from;
    var to = changeMeta.to;
    var start = to.start;
    var end = to.end;
    var ref = getSeparators(props);
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var decimalSeparator = ref.decimalSeparator;
    var isBeforeDecimalSeparator = value[end] === decimalSeparator;
    /**
     * If only a number is added on empty input which matches with the prefix or suffix,
     * then don't remove it, just return the same
     */ if (charIsNumber(value) && (value === prefix || value === suffix) && changeMeta.lastValue === '') {
        return value;
    }
    /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */ if (end - start === 1 && allowedDecimalSeparators.indexOf(value[start]) !== -1) {
        var separator = decimalScale === 0 ? '' : decimalSeparator;
        value = value.substring(0, start) + separator + value.substring(start + 1, value.length);
    }
    var stripNegation = function(value, start, end) {
        /**
         * if prefix starts with - we don't allow negative number to avoid confusion
         * if suffix starts with - and the value length is same as suffix length, then the - sign is from the suffix
         * In other cases, if the value starts with - then it is a negation
         */ var hasNegation = false;
        var hasDoubleNegation = false;
        if (prefix.startsWith('-')) {
            hasNegation = false;
        } else if (value.startsWith('--')) {
            hasNegation = false;
            hasDoubleNegation = true;
        } else if (suffix.startsWith('-') && value.length === suffix.length) {
            hasNegation = false;
        } else if (value[0] === '-') {
            hasNegation = true;
        }
        var charsToRemove = hasNegation ? 1 : 0;
        if (hasDoubleNegation) {
            charsToRemove = 2;
        }
        // remove negation/double negation from start to simplify prefix logic as negation comes before prefix
        if (charsToRemove) {
            value = value.substring(charsToRemove);
            // account for the removal of the negation for start and end index
            start -= charsToRemove;
            end -= charsToRemove;
        }
        return {
            value: value,
            start: start,
            end: end,
            hasNegation: hasNegation
        };
    };
    var toMetadata = stripNegation(value, start, end);
    var hasNegation = toMetadata.hasNegation;
    assign = toMetadata, value = assign.value, start = assign.start, end = assign.end;
    var ref$1 = stripNegation(changeMeta.lastValue, from.start, from.end);
    var fromStart = ref$1.start;
    var fromEnd = ref$1.end;
    var lastValue = ref$1.value;
    // if only prefix and suffix part is updated reset the value to last value
    // if the changed range is from suffix in the updated value, and the the suffix starts with the same characters, allow the change
    var updatedSuffixPart = value.substring(start, end);
    if (value.length && lastValue.length && (fromStart > lastValue.length - suffix.length || fromEnd < prefix.length) && !(updatedSuffixPart && suffix.startsWith(updatedSuffixPart))) {
        value = lastValue;
    }
    /**
     * remove prefix
     * Remove whole prefix part if its present on the value
     * If the prefix is partially deleted (in which case change start index will be less the prefix length)
     * Remove only partial part of prefix.
     */ var startIndex = 0;
    if (value.startsWith(prefix)) {
        startIndex += prefix.length;
    } else if (start < prefix.length) {
        startIndex = start;
    }
    value = value.substring(startIndex);
    // account for deleted prefix for end
    end -= startIndex;
    /**
     * Remove suffix
     * Remove whole suffix part if its present on the value
     * If the suffix is partially deleted (in which case change end index will be greater than the suffixStartIndex)
     * remove the partial part of suffix
     */ var endIndex = value.length;
    var suffixStartIndex = value.length - suffix.length;
    if (value.endsWith(suffix)) {
        endIndex = suffixStartIndex;
    } else if (end > suffixStartIndex) {
        endIndex = end;
    } else if (end > value.length - suffix.length) {
        endIndex = end;
    }
    value = value.substring(0, endIndex);
    // add the negation back and handle for double negation
    value = handleNegation(hasNegation ? "-" + value : value, allowNegative);
    // remove non numeric characters
    value = (value.match(getNumberRegex(decimalSeparator, true)) || []).join('');
    // replace the decimalSeparator with ., and only keep the first separator, ignore following ones
    var firstIndex = value.indexOf(decimalSeparator);
    value = value.replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), function(match, index) {
        return index === firstIndex ? '.' : '';
    });
    //check if beforeDecimal got deleted and there is nothing after decimal,
    //clear all numbers in such case while keeping the - sign
    var ref$2 = splitDecimal(value, allowNegative);
    var beforeDecimal = ref$2.beforeDecimal;
    var afterDecimal = ref$2.afterDecimal;
    var addNegation = ref$2.addNegation; // eslint-disable-line prefer-const
    //clear only if something got deleted before decimal (cursor is before decimal)
    if (to.end - to.start < from.end - from.start && beforeDecimal === '' && isBeforeDecimalSeparator && !parseFloat(afterDecimal)) {
        value = addNegation ? '-' : '';
    }
    return value;
}
function getCaretBoundary(formattedValue, props) {
    var prefix = props.prefix;
    if (prefix === void 0) prefix = '';
    var suffix = props.suffix;
    if (suffix === void 0) suffix = '';
    var boundaryAry = Array.from({
        length: formattedValue.length + 1
    }).map(function() {
        return true;
    });
    var hasNegation = formattedValue[0] === '-';
    // fill for prefix and negation
    boundaryAry.fill(false, 0, prefix.length + (hasNegation ? 1 : 0));
    // fill for suffix
    var valLn = formattedValue.length;
    boundaryAry.fill(false, valLn - suffix.length + 1, valLn + 1);
    return boundaryAry;
}
function validateAndUpdateProps(props) {
    var ref = getSeparators(props);
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    // eslint-disable-next-line prefer-const
    var prefix = props.prefix;
    if (prefix === void 0) prefix = '';
    var allowNegative = props.allowNegative;
    if (allowNegative === void 0) allowNegative = true;
    if (thousandSeparator === decimalSeparator) {
        throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + thousandSeparator + " (thousandSeparator = {true} is same as thousandSeparator = \",\")\n        decimalSeparator: " + decimalSeparator + " (default value for decimalSeparator is .)\n     ");
    }
    if (prefix.startsWith('-') && allowNegative) {
        // TODO: throw error in next major version
        console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " + prefix + "\n      allowNegative: " + allowNegative + "\n    ");
        allowNegative = false;
    }
    return Object.assign(Object.assign({}, props), {
        allowNegative: allowNegative
    });
}
function useNumericFormat(props) {
    // validate props
    props = validateAndUpdateProps(props);
    var _decimalSeparator = props.decimalSeparator;
    var _allowedDecimalSeparators = props.allowedDecimalSeparators;
    var thousandsGroupStyle = props.thousandsGroupStyle;
    var suffix = props.suffix;
    var allowNegative = props.allowNegative;
    var allowLeadingZeros = props.allowLeadingZeros;
    var onKeyDown = props.onKeyDown;
    if (onKeyDown === void 0) onKeyDown = noop;
    var onBlur = props.onBlur;
    if (onBlur === void 0) onBlur = noop;
    var thousandSeparator = props.thousandSeparator;
    var decimalScale = props.decimalScale;
    var fixedDecimalScale = props.fixedDecimalScale;
    var prefix = props.prefix;
    if (prefix === void 0) prefix = '';
    var defaultValue = props.defaultValue;
    var value = props.value;
    var valueIsNumericString = props.valueIsNumericString;
    var onValueChange = props.onValueChange;
    var restProps = __rest(props, [
        "decimalSeparator",
        "allowedDecimalSeparators",
        "thousandsGroupStyle",
        "suffix",
        "allowNegative",
        "allowLeadingZeros",
        "onKeyDown",
        "onBlur",
        "thousandSeparator",
        "decimalScale",
        "fixedDecimalScale",
        "prefix",
        "defaultValue",
        "value",
        "valueIsNumericString",
        "onValueChange"
    ]);
    // get derived decimalSeparator and allowedDecimalSeparators
    var ref = getSeparators(props);
    var decimalSeparator = ref.decimalSeparator;
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var _format = function(numStr) {
        return format(numStr, props);
    };
    var _removeFormatting = function(inputValue, changeMeta) {
        return removeFormatting(inputValue, changeMeta, props);
    };
    var _value = isNil(value) ? defaultValue : value;
    // try to figure out isValueNumericString based on format prop and value
    var _valueIsNumericString = valueIsNumericString !== null && valueIsNumericString !== void 0 ? valueIsNumericString : isNumericString(_value, prefix, suffix);
    if (!isNil(value)) {
        _valueIsNumericString = _valueIsNumericString || typeof value === 'number';
    } else if (!isNil(defaultValue)) {
        _valueIsNumericString = _valueIsNumericString || typeof defaultValue === 'number';
    }
    var roundIncomingValueToPrecision = function(value) {
        if (isNotValidValue(value)) {
            return value;
        }
        if (typeof value === 'number') {
            value = toNumericString(value);
        }
        /**
         * only round numeric or float string values coming through props,
         * we don't need to do it for onChange events, as we want to prevent typing there
         */ if (_valueIsNumericString && typeof decimalScale === 'number') {
            return roundToPrecision(value, decimalScale, Boolean(fixedDecimalScale));
        }
        return value;
    };
    var ref$1 = useInternalValues(roundIncomingValueToPrecision(value), roundIncomingValueToPrecision(defaultValue), Boolean(_valueIsNumericString), _format, _removeFormatting, onValueChange);
    var ref$1_0 = ref$1[0];
    var numAsString = ref$1_0.numAsString;
    var formattedValue = ref$1_0.formattedValue;
    var _onValueChange = ref$1[1];
    var _onKeyDown = function(e) {
        var el = e.target;
        var key = e.key;
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value;
        if (value === void 0) value = '';
        // if user tries to delete partial prefix then ignore it
        if ((key === 'Backspace' || key === 'Delete') && selectionEnd < prefix.length) {
            e.preventDefault();
            return;
        }
        // if multiple characters are selected and user hits backspace, no need to handle anything manually
        if (selectionStart !== selectionEnd) {
            onKeyDown(e);
            return;
        }
        // if user hits backspace, while the cursor is before prefix, and the input has negation, remove the negation
        if (key === 'Backspace' && value[0] === '-' && selectionStart === prefix.length + 1 && allowNegative) {
            // bring the cursor to after negation
            setCaretPosition(el, 1);
        }
        // don't allow user to delete decimal separator when decimalScale and fixedDecimalScale is set
        if (decimalScale && fixedDecimalScale) {
            if (key === 'Backspace' && value[selectionStart - 1] === decimalSeparator) {
                setCaretPosition(el, selectionStart - 1);
                e.preventDefault();
            } else if (key === 'Delete' && value[selectionStart] === decimalSeparator) {
                e.preventDefault();
            }
        }
        // if user presses the allowed decimal separator before the separator, move the cursor after the separator
        if ((allowedDecimalSeparators === null || allowedDecimalSeparators === void 0 ? void 0 : allowedDecimalSeparators.includes(key)) && value[selectionStart] === decimalSeparator) {
            setCaretPosition(el, selectionStart + 1);
        }
        var _thousandSeparator = thousandSeparator === true ? ',' : thousandSeparator;
        // move cursor when delete or backspace is pressed before/after thousand separator
        if (key === 'Backspace' && value[selectionStart - 1] === _thousandSeparator) {
            setCaretPosition(el, selectionStart - 1);
        }
        if (key === 'Delete' && value[selectionStart] === _thousandSeparator) {
            setCaretPosition(el, selectionStart + 1);
        }
        onKeyDown(e);
    };
    var _onBlur = function(e) {
        var _value = numAsString;
        // if there no no numeric value, clear the input
        if (!_value.match(/\d/g)) {
            _value = '';
        }
        // clear leading 0s
        if (!allowLeadingZeros) {
            _value = fixLeadingZero(_value);
        }
        // apply fixedDecimalScale on blur event
        if (fixedDecimalScale && decimalScale) {
            _value = roundToPrecision(_value, decimalScale, fixedDecimalScale);
        }
        if (_value !== numAsString) {
            var formattedValue = format(_value, props);
            _onValueChange({
                formattedValue: formattedValue,
                value: _value,
                floatValue: parseFloat(_value)
            }, {
                event: e,
                source: SourceType.event
            });
        }
        onBlur(e);
    };
    var isValidInputCharacter = function(inputChar) {
        if (inputChar === decimalSeparator) {
            return true;
        }
        return charIsNumber(inputChar);
    };
    var isCharacterSame = function(ref) {
        var currentValue = ref.currentValue;
        var lastValue = ref.lastValue;
        var formattedValue = ref.formattedValue;
        var currentValueIndex = ref.currentValueIndex;
        var formattedValueIndex = ref.formattedValueIndex;
        var curChar = currentValue[currentValueIndex];
        var newChar = formattedValue[formattedValueIndex];
        /**
         * NOTE: as thousand separator and allowedDecimalSeparators can be same, we need to check on
         * typed range if we have typed any character from allowedDecimalSeparators, in that case we
         * consider different characters like , and . same within the range of updated value.
         */ var typedRange = findChangeRange(lastValue, currentValue);
        var to = typedRange.to;
        // handle corner case where if we user types a decimal separator with fixedDecimalScale
        // and pass back float value the cursor jumps. #851
        var getDecimalSeparatorIndex = function(value) {
            return _removeFormatting(value).indexOf('.') + prefix.length;
        };
        if (value === 0 && fixedDecimalScale && decimalScale && currentValue[to.start] === decimalSeparator && getDecimalSeparatorIndex(currentValue) < currentValueIndex && getDecimalSeparatorIndex(formattedValue) > formattedValueIndex) {
            return false;
        }
        if (currentValueIndex >= to.start && currentValueIndex < to.end && allowedDecimalSeparators && allowedDecimalSeparators.includes(curChar) && newChar === decimalSeparator) {
            return true;
        }
        return curChar === newChar;
    };
    return Object.assign(Object.assign({}, restProps), {
        value: formattedValue,
        valueIsNumericString: false,
        isValidInputCharacter: isValidInputCharacter,
        isCharacterSame: isCharacterSame,
        onValueChange: _onValueChange,
        format: _format,
        removeFormatting: _removeFormatting,
        getCaretBoundary: function(formattedValue) {
            return getCaretBoundary(formattedValue, props);
        },
        onKeyDown: _onKeyDown,
        onBlur: _onBlur
    });
}
function NumericFormat(props) {
    var numericFormatProps = useNumericFormat(props);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(NumberFormatBase, Object.assign({}, numericFormatProps));
}
function format$1(numStr, props) {
    var format = props.format;
    var allowEmptyFormatting = props.allowEmptyFormatting;
    var mask = props.mask;
    var patternChar = props.patternChar;
    if (patternChar === void 0) patternChar = '#';
    if (numStr === '' && !allowEmptyFormatting) {
        return '';
    }
    var hashCount = 0;
    var formattedNumberAry = format.split('');
    for(var i = 0, ln = format.length; i < ln; i++){
        if (format[i] === patternChar) {
            formattedNumberAry[i] = numStr[hashCount] || getMaskAtIndex(mask, hashCount);
            hashCount += 1;
        }
    }
    return formattedNumberAry.join('');
}
function removeFormatting$1(value, changeMeta, props) {
    if (changeMeta === void 0) changeMeta = getDefaultChangeMeta(value);
    var format = props.format;
    var patternChar = props.patternChar;
    if (patternChar === void 0) patternChar = '#';
    var from = changeMeta.from;
    var to = changeMeta.to;
    var lastValue = changeMeta.lastValue;
    if (lastValue === void 0) lastValue = '';
    var isNumericSlot = function(caretPos) {
        return format[caretPos] === patternChar;
    };
    var removeFormatChar = function(string, startIndex) {
        var str = '';
        for(var i = 0; i < string.length; i++){
            if (isNumericSlot(startIndex + i) && charIsNumber(string[i])) {
                str += string[i];
            }
        }
        return str;
    };
    var extractNumbers = function(str) {
        return str.replace(/[^0-9]/g, '');
    };
    // if format doesn't have any number, remove all the non numeric characters
    if (!format.match(/\d/)) {
        return extractNumbers(value);
    }
    /**
     * if user paste the whole formatted text in an empty input or doing select all and paste, check if matches to the pattern
     * and remove the format characters, if there is a mismatch on the pattern, do plane number extract
     */ if ((lastValue === '' || from.end - from.start === lastValue.length) && value.length === format.length) {
        var str = '';
        for(var i = 0; i < value.length; i++){
            if (isNumericSlot(i)) {
                if (charIsNumber(value[i])) {
                    str += value[i];
                }
            } else if (value[i] !== format[i]) {
                // if there is a mismatch on the pattern, do plane number extract
                return extractNumbers(value);
            }
        }
        return str;
    }
    /**
     * For partial change,
     * where ever there is a change on the input, we can break the number in three parts
     * 1st: left part which is unchanged
     * 2nd: middle part which is changed
     * 3rd: right part which is unchanged
     *
     * The first and third section will be same as last value, only the middle part will change
     * We can consider on the change part all the new characters are non format characters.
     * And on the first and last section it can have partial format characters.
     *
     * We pick first and last section from the lastValue (as that has 1-1 mapping with format)
     * and middle one from the update value.
     */ var firstSection = lastValue.substring(0, from.start);
    var middleSection = value.substring(to.start, to.end);
    var lastSection = lastValue.substring(from.end);
    return "" + removeFormatChar(firstSection, 0) + extractNumbers(middleSection) + removeFormatChar(lastSection, from.end);
}
function getCaretBoundary$1(formattedValue, props) {
    var format = props.format;
    var mask = props.mask;
    var patternChar = props.patternChar;
    if (patternChar === void 0) patternChar = '#';
    var boundaryAry = Array.from({
        length: formattedValue.length + 1
    }).map(function() {
        return true;
    });
    var hashCount = 0;
    var firstEmptySlot = -1;
    var maskAndIndexMap = {};
    format.split('').forEach(function(char, index) {
        var maskAtIndex = undefined;
        if (char === patternChar) {
            hashCount++;
            maskAtIndex = getMaskAtIndex(mask, hashCount - 1);
            if (firstEmptySlot === -1 && formattedValue[index] === maskAtIndex) {
                firstEmptySlot = index;
            }
        }
        maskAndIndexMap[index] = maskAtIndex;
    });
    var isPosAllowed = function(pos) {
        // the position is allowed if the position is not masked and valid number area
        return format[pos] === patternChar && formattedValue[pos] !== maskAndIndexMap[pos];
    };
    for(var i = 0, ln = boundaryAry.length; i < ln; i++){
        // consider caret to be in boundary if it is before or after numeric value
        // Note: on pattern based format its denoted by patternCharacter
        // we should also allow user to put cursor on first empty slot
        boundaryAry[i] = i === firstEmptySlot || isPosAllowed(i) || isPosAllowed(i - 1);
    }
    // the first patternChar position is always allowed
    boundaryAry[format.indexOf(patternChar)] = true;
    return boundaryAry;
}
function validateProps(props) {
    var mask = props.mask;
    if (mask) {
        var maskAsStr = mask === 'string' ? mask : mask.toString();
        if (maskAsStr.match(/\d/g)) {
            throw new Error("Mask " + mask + " should not contain numeric character;");
        }
    }
}
function isNumericString$1(val, format) {
    //we can treat empty string as numeric string
    if (val === '') {
        return true;
    }
    return !(format === null || format === void 0 ? void 0 : format.match(/\d/)) && typeof val === 'string' && (!!val.match(/^\d+$/) || val === '');
}
function usePatternFormat(props) {
    var mask = props.mask;
    var allowEmptyFormatting = props.allowEmptyFormatting;
    var formatProp = props.format;
    var inputMode = props.inputMode;
    if (inputMode === void 0) inputMode = 'numeric';
    var onKeyDown = props.onKeyDown;
    if (onKeyDown === void 0) onKeyDown = noop;
    var patternChar = props.patternChar;
    if (patternChar === void 0) patternChar = '#';
    var value = props.value;
    var defaultValue = props.defaultValue;
    var valueIsNumericString = props.valueIsNumericString;
    var restProps = __rest(props, [
        "mask",
        "allowEmptyFormatting",
        "format",
        "inputMode",
        "onKeyDown",
        "patternChar",
        "value",
        "defaultValue",
        "valueIsNumericString"
    ]);
    // validate props
    validateProps(props);
    var _getCaretBoundary = function(formattedValue) {
        return getCaretBoundary$1(formattedValue, props);
    };
    var _onKeyDown = function(e) {
        var key = e.key;
        var el = e.target;
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value;
        // if multiple characters are selected and user hits backspace, no need to handle anything manually
        if (selectionStart !== selectionEnd) {
            onKeyDown(e);
            return;
        }
        // bring the cursor to closest numeric section
        var caretPos = selectionStart;
        // if backspace is pressed after the format characters, bring it to numeric section
        // if delete is pressed before the format characters, bring it to numeric section
        if (key === 'Backspace' || key === 'Delete') {
            var direction = 'right';
            if (key === 'Backspace') {
                while(caretPos > 0 && formatProp[caretPos - 1] !== patternChar){
                    caretPos--;
                }
                direction = 'left';
            } else {
                var formatLn = formatProp.length;
                while(caretPos < formatLn && formatProp[caretPos] !== patternChar){
                    caretPos++;
                }
                direction = 'right';
            }
            caretPos = getCaretPosInBoundary(value, caretPos, _getCaretBoundary(value), direction);
        } else if (formatProp[caretPos] !== patternChar && key !== 'ArrowLeft' && key !== 'ArrowRight') {
            // if user is typing on format character position, bring user to next allowed caret position
            caretPos = getCaretPosInBoundary(value, caretPos + 1, _getCaretBoundary(value), 'right');
        }
        // if we changing caret position, set the caret position
        if (caretPos !== selectionStart) {
            setCaretPosition(el, caretPos);
        }
        onKeyDown(e);
    };
    // try to figure out isValueNumericString based on format prop and value
    var _value = isNil(value) ? defaultValue : value;
    var isValueNumericString = valueIsNumericString !== null && valueIsNumericString !== void 0 ? valueIsNumericString : isNumericString$1(_value, formatProp);
    var _props = Object.assign(Object.assign({}, props), {
        valueIsNumericString: isValueNumericString
    });
    return Object.assign(Object.assign({}, restProps), {
        value: value,
        defaultValue: defaultValue,
        valueIsNumericString: isValueNumericString,
        inputMode: inputMode,
        format: function(numStr) {
            return format$1(numStr, _props);
        },
        removeFormatting: function(inputValue, changeMeta) {
            return removeFormatting$1(inputValue, changeMeta, _props);
        },
        getCaretBoundary: _getCaretBoundary,
        onKeyDown: _onKeyDown
    });
}
function PatternFormat(props) {
    var patternFormatProps = usePatternFormat(props);
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(NumberFormatBase, Object.assign({}, patternFormatProps));
}
;
}),
"[project]/frontend/node_modules/@mantine/hooks/esm/utils/clamp/clamp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
'use client';
function clamp(value, min, max) {
    if (min === void 0 && max === void 0) {
        return value;
    }
    if (min !== void 0 && max === void 0) {
        return Math.max(value, min);
    }
    if (min === void 0 && max !== void 0) {
        return Math.min(value, max);
    }
    return Math.min(Math.max(value, min), max);
}
;
 //# sourceMappingURL=clamp.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/noop/noop.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "noop",
    ()=>noop
]);
'use client';
const noop = ()=>{};
;
 //# sourceMappingURL=noop.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/NumberInput/NumberInputChevron.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NumberInputChevron",
    ()=>NumberInputChevron
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
function NumberInputChevron(param) {
    let { direction, style, ...others } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        style: {
            width: "var(--ni-chevron-size)",
            height: "var(--ni-chevron-size)",
            transform: direction === "up" ? "rotate(180deg)" : void 0,
            ...style
        },
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...others,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd"
        })
    });
}
;
 //# sourceMappingURL=NumberInputChevron.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/NumberInput/NumberInput.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_e2f5cd4e",
    "controls": "m_95e17d22",
    "control": "m_80b4b171"
};
;
 //# sourceMappingURL=NumberInput.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/NumberInput/NumberInput.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NumberInput",
    ()=>NumberInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$number$2d$format$2f$dist$2f$react$2d$number$2d$format$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-number-format/dist/react-number-format.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/utils/clamp/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$noop$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/noop/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$InputBase$2f$InputBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/InputBase/InputBase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$NumberInput$2f$NumberInputChevron$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/NumberInput/NumberInputChevron.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$NumberInput$2f$NumberInput$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/NumberInput/NumberInput.module.css.mjs [app-client] (ecmascript)");
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
;
const leadingDecimalZeroPattern = /^(0\.0*|-0(\.0*)?)$/;
const leadingZerosPattern = /^-?0\d+(\.\d+)?\.?$/;
function isNumberString(value) {
    return typeof value === "string" && value !== "" && !Number.isNaN(Number(value));
}
function canIncrement(value) {
    if (typeof value === "number") {
        return value < Number.MAX_SAFE_INTEGER;
    }
    return value === "" || isNumberString(value) && Number(value) < Number.MAX_SAFE_INTEGER;
}
function getDecimalPlaces(inputValue) {
    return inputValue.toString().replace(".", "").length;
}
function isValidNumber(floatValue, value) {
    return (typeof floatValue === "number" ? floatValue < Number.MAX_SAFE_INTEGER : !Number.isNaN(Number(floatValue))) && !Number.isNaN(floatValue) && getDecimalPlaces(value) < 14 && value !== "";
}
function isInRange(value, min, max) {
    if (value === void 0) {
        return true;
    }
    const minValid = min === void 0 || value >= min;
    const maxValid = max === void 0 || value <= max;
    return minValid && maxValid;
}
const defaultProps = {
    step: 1,
    clampBehavior: "blur",
    allowDecimal: true,
    allowNegative: true,
    withKeyboardEvents: true,
    allowLeadingZeros: true,
    trimLeadingZeroesOnBlur: true,
    startValue: 0
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, param)=>{
    let { size } = param;
    return {
        controls: {
            "--ni-chevron-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, "ni-chevron-size")
        }
    };
});
function clampAndSanitizeInput(sanitizedValue, max, min) {
    const replaced = sanitizedValue.toString().replace(/^0+/, "");
    const parsedValue = parseFloat(replaced);
    if (Number.isNaN(parsedValue)) {
        return replaced;
    } else if (parsedValue > Number.MAX_SAFE_INTEGER) {
        return max !== void 0 ? String(max) : replaced;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(parsedValue, min, max);
}
const NumberInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("NumberInput", defaultProps, _props);
    const { className, classNames, styles, unstyled, vars, onChange, onValueChange, value, defaultValue, max, min, step, hideControls, rightSection, isAllowed, clampBehavior, onBlur, allowDecimal, decimalScale, onKeyDown, onKeyDownCapture, handlersRef, startValue, disabled, rightSectionPointerEvents, allowNegative, readOnly, size, rightSectionWidth, stepHoldInterval, stepHoldDelay, allowLeadingZeros, withKeyboardEvents, trimLeadingZeroesOnBlur, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "NumberInput",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$NumberInput$2f$NumberInput$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    const { resolvedClassNames, resolvedStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2f$use$2d$resolved$2d$styles$2d$api$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedStylesApi"])({
        classNames,
        styles,
        props
    });
    const [_value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUncontrolled"])({
        value,
        defaultValue,
        finalValue: "",
        onChange
    });
    const shouldUseStepInterval = stepHoldDelay !== void 0 && stepHoldInterval !== void 0;
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onStepTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stepCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleValueChange = (payload, event)=>{
        if (event.source === "event") {
            setValue(isValidNumber(payload.floatValue, payload.value) && !leadingDecimalZeroPattern.test(payload.value) && !(allowLeadingZeros ? leadingZerosPattern.test(payload.value) : false) ? payload.floatValue : payload.value);
        }
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(payload, event);
    };
    const getDecimalPlaces2 = (inputValue)=>{
        const match = String(inputValue).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        if (!match) {
            return 0;
        }
        return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
    };
    const adjustCursor = (position)=>{
        if (inputRef.current && typeof position !== "undefined") {
            inputRef.current.setSelectionRange(position, position);
        }
    };
    const incrementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$noop$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    incrementRef.current = ()=>{
        if (!canIncrement(_value)) {
            return;
        }
        let val;
        const currentValuePrecision = getDecimalPlaces2(_value);
        const stepPrecision = getDecimalPlaces2(step);
        const maxPrecision = Math.max(currentValuePrecision, stepPrecision);
        const factor = 10 ** maxPrecision;
        if (!isNumberString(_value) && (typeof _value !== "number" || Number.isNaN(_value))) {
            val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(startValue, min, max);
        } else if (max !== void 0) {
            const incrementedValue = (Math.round(Number(_value) * factor) + Math.round(step * factor)) / factor;
            val = incrementedValue <= max ? incrementedValue : max;
        } else {
            val = (Math.round(Number(_value) * factor) + Math.round(step * factor)) / factor;
        }
        const formattedValue = val.toFixed(maxPrecision);
        setValue(parseFloat(formattedValue));
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange({
            floatValue: parseFloat(formattedValue),
            formattedValue,
            value: formattedValue
        }, {
            source: "increment"
        });
        setTimeout(()=>{
            var _inputRef_current;
            return adjustCursor((_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.value.length);
        }, 0);
    };
    const decrementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$noop$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    decrementRef.current = ()=>{
        if (!canIncrement(_value)) {
            return;
        }
        let val;
        const minValue = min !== void 0 ? min : !allowNegative ? 0 : Number.MIN_SAFE_INTEGER;
        const currentValuePrecision = getDecimalPlaces2(_value);
        const stepPrecision = getDecimalPlaces2(step);
        const maxPrecision = Math.max(currentValuePrecision, stepPrecision);
        const factor = 10 ** maxPrecision;
        if (!isNumberString(_value) && typeof _value !== "number" || Number.isNaN(_value)) {
            val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(startValue, minValue, max);
        } else {
            const decrementedValue = (Math.round(Number(_value) * factor) - Math.round(step * factor)) / factor;
            val = minValue !== void 0 && decrementedValue < minValue ? minValue : decrementedValue;
        }
        const formattedValue = val.toFixed(maxPrecision);
        setValue(parseFloat(formattedValue));
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange({
            floatValue: parseFloat(formattedValue),
            formattedValue,
            value: formattedValue
        }, {
            source: "decrement"
        });
        setTimeout(()=>{
            var _inputRef_current;
            return adjustCursor((_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.value.length);
        }, 0);
    };
    const handleKeyDown = (event)=>{
        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
        if (readOnly || !withKeyboardEvents) {
            return;
        }
        if (event.key === "ArrowUp") {
            event.preventDefault();
            incrementRef.current();
        }
        if (event.key === "ArrowDown") {
            event.preventDefault();
            decrementRef.current();
        }
    };
    const handleKeyDownCapture = (event)=>{
        onKeyDownCapture === null || onKeyDownCapture === void 0 ? void 0 : onKeyDownCapture(event);
        if (event.key === "Backspace") {
            const input = inputRef.current;
            if (input.selectionStart === 0 && input.selectionStart === input.selectionEnd) {
                event.preventDefault();
                window.setTimeout(()=>adjustCursor(0), 0);
            }
        }
    };
    const handleBlur = (event)=>{
        let sanitizedValue = _value;
        if (clampBehavior === "blur" && typeof sanitizedValue === "number") {
            sanitizedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(sanitizedValue, min, max);
        }
        if (trimLeadingZeroesOnBlur && typeof sanitizedValue === "string" && getDecimalPlaces2(sanitizedValue) < 15) {
            sanitizedValue = clampAndSanitizeInput(sanitizedValue, max, min);
        }
        if (_value !== sanitizedValue) {
            setValue(sanitizedValue);
        }
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(handlersRef, {
        increment: incrementRef.current,
        decrement: decrementRef.current
    });
    const onStepHandleChange = (isIncrement)=>{
        if (isIncrement) {
            incrementRef.current();
        } else {
            decrementRef.current();
        }
        stepCountRef.current += 1;
    };
    const onStepLoop = (isIncrement)=>{
        onStepHandleChange(isIncrement);
        if (shouldUseStepInterval) {
            const interval = typeof stepHoldInterval === "number" ? stepHoldInterval : stepHoldInterval(stepCountRef.current);
            onStepTimeoutRef.current = window.setTimeout(()=>onStepLoop(isIncrement), interval);
        }
    };
    const onStep = (event, isIncrement)=>{
        var _inputRef_current;
        event.preventDefault();
        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
        onStepHandleChange(isIncrement);
        if (shouldUseStepInterval) {
            onStepTimeoutRef.current = window.setTimeout(()=>onStepLoop(isIncrement), stepHoldDelay);
        }
    };
    const onStepDone = ()=>{
        if (onStepTimeoutRef.current) {
            window.clearTimeout(onStepTimeoutRef.current);
        }
        onStepTimeoutRef.current = null;
        stepCountRef.current = 0;
    };
    const controls = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ...getStyles("controls"),
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnstyledButton"], {
                ...getStyles("control"),
                tabIndex: -1,
                "aria-hidden": true,
                disabled: disabled || typeof _value === "number" && max !== void 0 && _value >= max,
                mod: {
                    direction: "up"
                },
                onMouseDown: (event)=>event.preventDefault(),
                onPointerDown: (event)=>{
                    onStep(event, true);
                },
                onPointerUp: onStepDone,
                onPointerLeave: onStepDone,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$NumberInput$2f$NumberInputChevron$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInputChevron"], {
                    direction: "up"
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnstyledButton"], {
                ...getStyles("control"),
                tabIndex: -1,
                "aria-hidden": true,
                disabled: disabled || typeof _value === "number" && min !== void 0 && _value <= min,
                mod: {
                    direction: "down"
                },
                onMouseDown: (event)=>event.preventDefault(),
                onPointerDown: (event)=>{
                    onStep(event, false);
                },
                onPointerUp: onStepDone,
                onPointerLeave: onStepDone,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$NumberInput$2f$NumberInputChevron$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInputChevron"], {
                    direction: "down"
                })
            })
        ]
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$InputBase$2f$InputBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBase"], {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$number$2d$format$2f$dist$2f$react$2d$number$2d$format$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumericFormat"],
        allowNegative,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$NumberInput$2f$NumberInput$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].root, className),
        size,
        ...others,
        readOnly,
        disabled,
        value: _value,
        getInputRef: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRef"])(ref, inputRef),
        onValueChange: handleValueChange,
        rightSection: hideControls || readOnly || !canIncrement(_value) ? rightSection : rightSection || controls,
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        __staticSelector: "NumberInput",
        decimalScale: allowDecimal ? decimalScale : 0,
        onKeyDown: handleKeyDown,
        onKeyDownCapture: handleKeyDownCapture,
        rightSectionPointerEvents: rightSectionPointerEvents !== null && rightSectionPointerEvents !== void 0 ? rightSectionPointerEvents : disabled ? "none" : void 0,
        rightSectionWidth: rightSectionWidth !== null && rightSectionWidth !== void 0 ? rightSectionWidth : "var(--ni-right-section-width-".concat(size || "sm", ")"),
        allowLeadingZeros,
        onBlur: handleBlur,
        isAllowed: (val)=>{
            if (clampBehavior === "strict") {
                if (isAllowed) {
                    return isAllowed(val) && isInRange(val.floatValue, min, max);
                }
                return isInRange(val.floatValue, min, max);
            }
            return isAllowed ? isAllowed(val) : true;
        }
    });
});
NumberInput.classes = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$InputBase$2f$InputBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBase"].classes,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$NumberInput$2f$NumberInput$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
NumberInput.displayName = "@mantine/core/NumberInput";
;
 //# sourceMappingURL=NumberInput.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaginationProvider",
    ()=>PaginationProvider,
    "usePaginationContext",
    ()=>usePaginationContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
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
;
const [PaginationProvider, usePaginationContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSafeContext"])("Pagination.Root component was not found in tree");
;
 //# sourceMappingURL=Pagination.context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_4addd315",
    "control": "m_326d024a",
    "dots": "m_4ad7767d"
};
;
 //# sourceMappingURL=Pagination.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/PaginationControl/PaginationControl.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaginationControl",
    ()=>PaginationControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.module.css.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
const defaultProps = {
    withPadding: true
};
const PaginationControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("PaginationControl", defaultProps, _props);
    const { classNames, className, style, styles, vars, active, disabled, withPadding, mod, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaginationContext"])();
    const _disabled = disabled || ctx.disabled;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnstyledButton"], {
        ref,
        disabled: _disabled,
        mod: [
            {
                active,
                disabled: _disabled,
                "with-padding": withPadding
            },
            mod
        ],
        ...ctx.getStyles("control", {
            className,
            style,
            classNames,
            styles,
            active: !_disabled
        }),
        ...others
    });
});
PaginationControl.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
PaginationControl.displayName = "@mantine/core/PaginationControl";
;
 //# sourceMappingURL=PaginationControl.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.icons.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaginationDotsIcon",
    ()=>PaginationDotsIcon,
    "PaginationFirstIcon",
    ()=>PaginationFirstIcon,
    "PaginationLastIcon",
    ()=>PaginationLastIcon,
    "PaginationNextIcon",
    ()=>PaginationNextIcon,
    "PaginationPreviousIcon",
    ()=>PaginationPreviousIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
function PaginationIcon(param) {
    let { style, children, path, ...others } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            width: "calc(var(--pagination-control-size) / 1.8)",
            height: "calc(var(--pagination-control-size) / 1.8)",
            ...style
        },
        ...others,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: path,
            fill: "currentColor"
        })
    });
}
const PaginationNextIcon = (props)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PaginationIcon, {
        ...props,
        path: "M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"
    });
const PaginationPreviousIcon = (props)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PaginationIcon, {
        ...props,
        path: "M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"
    });
const PaginationFirstIcon = (props)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PaginationIcon, {
        ...props,
        path: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
    });
const PaginationLastIcon = (props)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PaginationIcon, {
        ...props,
        path: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
    });
const PaginationDotsIcon = (props)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PaginationIcon, {
        ...props,
        path: "M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"
    });
;
 //# sourceMappingURL=Pagination.icons.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/PaginationDots/PaginationDots.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaginationDots",
    ()=>PaginationDots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$icons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.icons.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.module.css.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
const defaultProps = {
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$icons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationDotsIcon"]
};
const PaginationDots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("PaginationDots", defaultProps, _props);
    const { classNames, className, style, styles, vars, icon, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaginationContext"])();
    const Icon = icon;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        ...ctx.getStyles("dots", {
            className,
            style,
            styles,
            classNames
        }),
        ...others,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Icon, {
            style: {
                width: "calc(var(--pagination-control-size) / 1.8)",
                height: "calc(var(--pagination-control-size) / 1.8)"
            }
        })
    });
});
PaginationDots.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
PaginationDots.displayName = "@mantine/core/PaginationDots";
;
 //# sourceMappingURL=PaginationDots.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/PaginationEdges/PaginationEdges.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaginationFirst",
    ()=>PaginationFirst,
    "PaginationLast",
    ()=>PaginationLast,
    "PaginationNext",
    ()=>PaginationNext,
    "PaginationPrevious",
    ()=>PaginationPrevious,
    "createEdgeComponent",
    ()=>createEdgeComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$create$2d$polymorphic$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$icons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.icons.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationControl$2f$PaginationControl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/PaginationControl/PaginationControl.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
function createEdgeComponent(param) {
    let { icon, name, action, type } = param;
    const defaultProps = {
        icon
    };
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
        const { icon: _icon, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])(name, defaultProps, props);
        const Icon = _icon;
        const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaginationContext"])();
        const disabled = type === "next" ? ctx.active === ctx.total : ctx.active === 1;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationControl$2f$PaginationControl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationControl"], {
            disabled: ctx.disabled || disabled,
            ref,
            onClick: ctx[action],
            withPadding: false,
            ...others,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Icon, {
                className: "mantine-rotate-rtl",
                style: {
                    width: "calc(var(--pagination-control-size) / 1.8)",
                    height: "calc(var(--pagination-control-size) / 1.8)"
                }
            })
        });
    });
    Component.displayName = "@mantine/core/".concat(name);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$create$2d$polymorphic$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPolymorphicComponent"])(Component);
}
const PaginationNext = createEdgeComponent({
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$icons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationNextIcon"],
    name: "PaginationNext",
    action: "onNext",
    type: "next"
});
const PaginationPrevious = createEdgeComponent({
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$icons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationPreviousIcon"],
    name: "PaginationPrevious",
    action: "onPrevious",
    type: "previous"
});
const PaginationFirst = createEdgeComponent({
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$icons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationFirstIcon"],
    name: "PaginationFirst",
    action: "onFirst",
    type: "previous"
});
const PaginationLast = createEdgeComponent({
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$icons$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationLastIcon"],
    name: "PaginationLast",
    action: "onLast",
    type: "next"
});
;
 //# sourceMappingURL=PaginationEdges.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/PaginationItems/PaginationItems.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaginationItems",
    ()=>PaginationItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationControl$2f$PaginationControl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/PaginationControl/PaginationControl.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationDots$2f$PaginationDots$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/PaginationDots/PaginationDots.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
function PaginationItems(param) {
    let { dotsIcon } = param;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaginationContext"])();
    const items = ctx.range.map((page, index)=>{
        var _ctx_getItemProps, _ctx_getItemProps1, _ctx_getItemProps2;
        if (page === "dots") {
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationDots$2f$PaginationDots$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationDots"], {
                icon: dotsIcon
            }, index);
        }
        var _ctx_getItemProps_children;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationControl$2f$PaginationControl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationControl"], {
            active: page === ctx.active,
            "aria-current": page === ctx.active ? "page" : void 0,
            onClick: ()=>ctx.onChange(page),
            disabled: ctx.disabled,
            ...(_ctx_getItemProps = ctx.getItemProps) === null || _ctx_getItemProps === void 0 ? void 0 : _ctx_getItemProps.call(ctx, page),
            children: (_ctx_getItemProps_children = (_ctx_getItemProps2 = ctx.getItemProps) === null || _ctx_getItemProps2 === void 0 ? void 0 : (_ctx_getItemProps1 = _ctx_getItemProps2.call(ctx, page)) === null || _ctx_getItemProps1 === void 0 ? void 0 : _ctx_getItemProps1.children) !== null && _ctx_getItemProps_children !== void 0 ? _ctx_getItemProps_children : page
        }, index);
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: items
    });
}
PaginationItems.displayName = "@mantine/core/PaginationItems";
;
 //# sourceMappingURL=PaginationItems.mjs.map
}),
"[project]/frontend/node_modules/@mantine/hooks/esm/use-pagination/use-pagination.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOTS",
    ()=>DOTS,
    "usePagination",
    ()=>usePagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs [app-client] (ecmascript)");
'use client';
;
;
function range(start, end) {
    const length = end - start + 1;
    return Array.from({
        length
    }, (_, index)=>index + start);
}
const DOTS = "dots";
function usePagination(param) {
    let { total, siblings = 1, boundaries = 1, page, initialPage = 1, onChange } = param;
    const _total = Math.max(Math.trunc(total), 0);
    const [activePage, setActivePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUncontrolled"])({
        value: page,
        onChange,
        defaultValue: initialPage,
        finalValue: initialPage
    });
    const setPage = (pageNumber)=>{
        if (pageNumber <= 0) {
            setActivePage(1);
        } else if (pageNumber > _total) {
            setActivePage(_total);
        } else {
            setActivePage(pageNumber);
        }
    };
    const next = ()=>setPage(activePage + 1);
    const previous = ()=>setPage(activePage - 1);
    const first = ()=>setPage(1);
    const last = ()=>setPage(_total);
    const paginationRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePagination.useMemo[paginationRange]": ()=>{
            const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
            if (totalPageNumbers >= _total) {
                return range(1, _total);
            }
            const leftSiblingIndex = Math.max(activePage - siblings, boundaries);
            const rightSiblingIndex = Math.min(activePage + siblings, _total - boundaries);
            const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
            const shouldShowRightDots = rightSiblingIndex < _total - (boundaries + 1);
            if (!shouldShowLeftDots && shouldShowRightDots) {
                const leftItemCount = siblings * 2 + boundaries + 2;
                return [
                    ...range(1, leftItemCount),
                    DOTS,
                    ...range(_total - (boundaries - 1), _total)
                ];
            }
            if (shouldShowLeftDots && !shouldShowRightDots) {
                const rightItemCount = boundaries + 1 + 2 * siblings;
                return [
                    ...range(1, boundaries),
                    DOTS,
                    ...range(_total - rightItemCount, _total)
                ];
            }
            return [
                ...range(1, boundaries),
                DOTS,
                ...range(leftSiblingIndex, rightSiblingIndex),
                DOTS,
                ...range(_total - boundaries + 1, _total)
            ];
        }
    }["usePagination.useMemo[paginationRange]"], [
        _total,
        siblings,
        activePage
    ]);
    return {
        range: paginationRange,
        active: activePage,
        setPage,
        next,
        previous,
        first,
        last
    };
}
;
 //# sourceMappingURL=use-pagination.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/create-event-handler/create-event-handler.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEventHandler",
    ()=>createEventHandler
]);
'use client';
function createEventHandler(parentEventHandler, eventHandler) {
    return (event)=>{
        parentEventHandler === null || parentEventHandler === void 0 ? void 0 : parentEventHandler(event);
        eventHandler === null || eventHandler === void 0 ? void 0 : eventHandler(event);
    };
}
;
 //# sourceMappingURL=create-event-handler.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-auto-contrast-value/get-auto-contrast-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAutoContrastValue",
    ()=>getAutoContrastValue
]);
'use client';
function getAutoContrastValue(autoContrast, theme) {
    return typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
}
;
 //# sourceMappingURL=get-auto-contrast-value.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/PaginationRoot/PaginationRoot.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaginationRoot",
    ()=>PaginationRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$pagination$2f$use$2d$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-pagination/use-pagination.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/create-event-handler/create-event-handler.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$contrast$2d$color$2f$get$2d$contrast$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$auto$2d$contrast$2d$value$2f$get$2d$auto$2d$contrast$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-auto-contrast-value/get-auto-contrast-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.module.css.mjs [app-client] (ecmascript)");
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
const defaultProps = {
    siblings: 1,
    boundaries: 1
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, param)=>{
    let { size, radius, color, autoContrast } = param;
    return {
        root: {
            "--pagination-control-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--pagination-control-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, "pagination-control-size"),
            "--pagination-control-fz": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontSize"])(size),
            "--pagination-active-bg": color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0,
            "--pagination-active-color": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$auto$2d$contrast$2d$value$2f$get$2d$auto$2d$contrast$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAutoContrastValue"])(autoContrast, theme) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$contrast$2d$color$2f$get$2d$contrast$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContrastColor"])({
                color,
                theme,
                autoContrast
            }) : void 0
        }
    };
});
const PaginationRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("PaginationRoot", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, total, value, defaultValue, onChange, disabled, siblings, boundaries, color, radius, onNextPage, onPreviousPage, onFirstPage, onLastPage, getItemProps, autoContrast, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Pagination",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    const { range, setPage, next, previous, active, first, last } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$pagination$2f$use$2d$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePagination"])({
        page: value,
        initialPage: defaultValue,
        onChange,
        total,
        siblings,
        boundaries
    });
    const handleNextPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventHandler"])(onNextPage, next);
    const handlePreviousPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventHandler"])(onPreviousPage, previous);
    const handleFirstPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventHandler"])(onFirstPage, first);
    const handleLastPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$event$2d$handler$2f$create$2d$event$2d$handler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEventHandler"])(onLastPage, last);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationProvider"], {
        value: {
            total,
            range,
            active,
            disabled,
            getItemProps,
            onChange: setPage,
            onNext: handleNextPage,
            onPrevious: handlePreviousPage,
            onFirst: handleFirstPage,
            onLast: handleLastPage,
            getStyles
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            ref,
            ...getStyles("root"),
            ...others
        })
    });
});
PaginationRoot.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
PaginationRoot.displayName = "@mantine/core/PaginationRoot";
;
 //# sourceMappingURL=PaginationRoot.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationControl$2f$PaginationControl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/PaginationControl/PaginationControl.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationDots$2f$PaginationDots$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/PaginationDots/PaginationDots.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationEdges$2f$PaginationEdges$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/PaginationEdges/PaginationEdges.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationItems$2f$PaginationItems$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/PaginationItems/PaginationItems.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationRoot$2f$PaginationRoot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/PaginationRoot/PaginationRoot.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Pagination/Pagination.module.css.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
;
const defaultProps = {
    withControls: true,
    withPages: true,
    siblings: 1,
    boundaries: 1,
    gap: 8
};
const Pagination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("Pagination", defaultProps, _props);
    const { withEdges, withControls, getControlProps, nextIcon, previousIcon, lastIcon, firstIcon, dotsIcon, total, gap, hideWithOnePage, withPages, ...others } = props;
    if (total <= 0 || hideWithOnePage && total === 1) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationRoot$2f$PaginationRoot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationRoot"], {
        ref,
        total,
        ...others,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            gap,
            children: [
                withEdges && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationEdges$2f$PaginationEdges$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationFirst"], {
                    icon: firstIcon,
                    ...getControlProps === null || getControlProps === void 0 ? void 0 : getControlProps("first")
                }),
                withControls && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationEdges$2f$PaginationEdges$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationPrevious"], {
                    icon: previousIcon,
                    ...getControlProps === null || getControlProps === void 0 ? void 0 : getControlProps("previous")
                }),
                withPages && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationItems$2f$PaginationItems$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationItems"], {
                    dotsIcon
                }),
                withControls && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationEdges$2f$PaginationEdges$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationNext"], {
                    icon: nextIcon,
                    ...getControlProps === null || getControlProps === void 0 ? void 0 : getControlProps("next")
                }),
                withEdges && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationEdges$2f$PaginationEdges$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationLast"], {
                    icon: lastIcon,
                    ...getControlProps === null || getControlProps === void 0 ? void 0 : getControlProps("last")
                })
            ]
        })
    });
});
Pagination.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$Pagination$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Pagination.displayName = "@mantine/core/Pagination";
Pagination.Root = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationRoot$2f$PaginationRoot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationRoot"];
Pagination.Control = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationControl$2f$PaginationControl$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationControl"];
Pagination.Dots = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationDots$2f$PaginationDots$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationDots"];
Pagination.First = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationEdges$2f$PaginationEdges$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationFirst"];
Pagination.Last = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationEdges$2f$PaginationEdges$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationLast"];
Pagination.Next = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationEdges$2f$PaginationEdges$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationNext"];
Pagination.Previous = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationEdges$2f$PaginationEdges$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationPrevious"];
Pagination.Items = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Pagination$2f$PaginationItems$2f$PaginationItems$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationItems"];
;
 //# sourceMappingURL=Pagination.mjs.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/frontend/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/frontend/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
        // ignore click for browser’s default behavior
        return;
    }
    if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
        }
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    if (onNavigate) {
        let isDefaultPrevented = false;
        onNavigate({
            preventDefault: ()=>{
                isDefaultPrevented = true;
            }
        });
        if (isDefaultPrevented) {
            return;
        }
    }
    _react.default.startTransition(()=>{
        (0, _approuterinstance.dispatchNavigateAction)(as || href, replace ? 'replace' : 'push', scroll != null ? scroll : true, linkInstanceRef.current);
    });
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto' && props[key] !== 'unstable_forceStale') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto" | "unstable_forceStale"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href"), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
]);

//# sourceMappingURL=9e883_27a89948._.js.map