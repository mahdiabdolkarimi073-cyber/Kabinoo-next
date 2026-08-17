(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DirectionContext",
    ()=>DirectionContext,
    "DirectionProvider",
    ()=>DirectionProvider,
    "useDirection",
    ()=>useDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const DirectionContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    dir: "ltr",
    toggleDirection: ()=>{},
    setDirection: ()=>{}
});
function useDirection() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DirectionContext);
}
function DirectionProvider(param) {
    let { children, initialDirection = "ltr", detectDirection = true } = param;
    const [dir, setDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialDirection);
    const setDirection = (direction)=>{
        setDir(direction);
        document.documentElement.setAttribute("dir", direction);
    };
    const toggleDirection = ()=>setDirection(dir === "ltr" ? "rtl" : "ltr");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicEffect"])({
        "DirectionProvider.useIsomorphicEffect": ()=>{
            if (detectDirection) {
                const direction = document.documentElement.getAttribute("dir");
                if (direction === "rtl" || direction === "ltr") {
                    setDirection(direction);
                }
            }
        }
    }["DirectionProvider.useIsomorphicEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DirectionContext.Provider, {
        value: {
            dir,
            toggleDirection,
            setDirection
        },
        children
    });
}
;
 //# sourceMappingURL=DirectionProvider.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/is-mantine-color-scheme.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMantineColorScheme",
    ()=>isMantineColorScheme
]);
'use client';
function isMantineColorScheme(value) {
    return value === "auto" || value === "dark" || value === "light";
}
;
 //# sourceMappingURL=is-mantine-color-scheme.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/local-storage-manager.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localStorageColorSchemeManager",
    ()=>localStorageColorSchemeManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$scheme$2d$managers$2f$is$2d$mantine$2d$color$2d$scheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/is-mantine-color-scheme.mjs [app-client] (ecmascript)");
'use client';
;
function localStorageColorSchemeManager() {
    let { key = "mantine-color-scheme-value" } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let handleStorageEvent;
    return {
        get: (defaultValue)=>{
            if (typeof window === "undefined") {
                return defaultValue;
            }
            try {
                const storedColorScheme = window.localStorage.getItem(key);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$scheme$2d$managers$2f$is$2d$mantine$2d$color$2d$scheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMantineColorScheme"])(storedColorScheme) ? storedColorScheme : defaultValue;
            } catch (e) {
                return defaultValue;
            }
        },
        set: (value)=>{
            try {
                window.localStorage.setItem(key, value);
            } catch (error) {
                console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.", error);
            }
        },
        subscribe: (onUpdate)=>{
            handleStorageEvent = (event)=>{
                if (event.storageArea === window.localStorage && event.key === key) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$scheme$2d$managers$2f$is$2d$mantine$2d$color$2d$scheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMantineColorScheme"])(event.newValue) && onUpdate(event.newValue);
                }
            };
            window.addEventListener("storage", handleStorageEvent);
        },
        unsubscribe: ()=>{
            window.removeEventListener("storage", handleStorageEvent);
        },
        clear: ()=>{
            window.localStorage.removeItem(key);
        }
    };
}
;
 //# sourceMappingURL=local-storage-manager.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MantineContext",
    ()=>MantineContext,
    "useMantineClassNamesPrefix",
    ()=>useMantineClassNamesPrefix,
    "useMantineContext",
    ()=>useMantineContext,
    "useMantineCssVariablesResolver",
    ()=>useMantineCssVariablesResolver,
    "useMantineEnv",
    ()=>useMantineEnv,
    "useMantineIsHeadless",
    ()=>useMantineIsHeadless,
    "useMantineStyleNonce",
    ()=>useMantineStyleNonce,
    "useMantineStylesTransform",
    ()=>useMantineStylesTransform,
    "useMantineSxTransform",
    ()=>useMantineSxTransform,
    "useMantineWithStaticClasses",
    ()=>useMantineWithStaticClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
const MantineContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useMantineContext() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MantineContext);
    if (!ctx) {
        throw new Error("[@mantine/core] MantineProvider was not found in tree");
    }
    return ctx;
}
function useMantineCssVariablesResolver() {
    return useMantineContext().cssVariablesResolver;
}
function useMantineClassNamesPrefix() {
    return useMantineContext().classNamesPrefix;
}
function useMantineStyleNonce() {
    return useMantineContext().getStyleNonce;
}
function useMantineWithStaticClasses() {
    return useMantineContext().withStaticClasses;
}
function useMantineIsHeadless() {
    return useMantineContext().headless;
}
function useMantineSxTransform() {
    var _useMantineContext_stylesTransform;
    return (_useMantineContext_stylesTransform = useMantineContext().stylesTransform) === null || _useMantineContext_stylesTransform === void 0 ? void 0 : _useMantineContext_stylesTransform.sx;
}
function useMantineStylesTransform() {
    var _useMantineContext_stylesTransform;
    return (_useMantineContext_stylesTransform = useMantineContext().stylesTransform) === null || _useMantineContext_stylesTransform === void 0 ? void 0 : _useMantineContext_stylesTransform.styles;
}
function useMantineEnv() {
    return useMantineContext().env || "default";
}
;
 //# sourceMappingURL=Mantine.context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "keys",
    ()=>keys
]);
'use client';
function keys(object) {
    return Object.keys(object);
}
;
 //# sourceMappingURL=keys.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "px",
    ()=>px
]);
function getTransformedScaledValue(value) {
    var _value_match;
    if (typeof value !== "string" || !value.includes("var(--mantine-scale)")) {
        return value;
    }
    return (_value_match = value.match(/^calc\((.*?)\)$/)) === null || _value_match === void 0 ? void 0 : _value_match[1].split("*")[0].trim();
}
function px(value) {
    const transformedValue = getTransformedScaledValue(value);
    if (typeof transformedValue === "number") {
        return transformedValue;
    }
    if (typeof transformedValue === "string") {
        if (transformedValue.includes("calc") || transformedValue.includes("var")) {
            return transformedValue;
        }
        if (transformedValue.includes("px")) {
            return Number(transformedValue.replace("px", ""));
        }
        if (transformedValue.includes("rem")) {
            return Number(transformedValue.replace("rem", "")) * 16;
        }
        if (transformedValue.includes("em")) {
            return Number(transformedValue.replace("em", "")) * 16;
        }
        return Number(transformedValue);
    }
    return NaN;
}
;
 //# sourceMappingURL=px.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "em",
    ()=>em,
    "rem",
    ()=>rem
]);
function scaleRem(remValue) {
    if (remValue === "0rem") {
        return "0rem";
    }
    return "calc(".concat(remValue, " * var(--mantine-scale))");
}
function createConverter(units) {
    let { shouldScale = false } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    function converter(value) {
        if (value === 0 || value === "0") {
            return "0".concat(units);
        }
        if (typeof value === "number") {
            const val = "".concat(value / 16).concat(units);
            return shouldScale ? scaleRem(val) : val;
        }
        if (typeof value === "string") {
            if (value === "") {
                return value;
            }
            if (value.startsWith("calc(") || value.startsWith("clamp(") || value.includes("rgba(")) {
                return value;
            }
            if (value.includes(",")) {
                return value.split(",").map((val)=>converter(val)).join(",");
            }
            if (value.includes(" ")) {
                return value.split(" ").map((val)=>converter(val)).join(" ");
            }
            if (value.includes(units)) {
                return shouldScale ? scaleRem(value) : value;
            }
            const replaced = value.replace("px", "");
            if (!Number.isNaN(Number(replaced))) {
                const val = "".concat(Number(replaced) / 16).concat(units);
                return shouldScale ? scaleRem(val) : val;
            }
        }
        return value;
    }
    return converter;
}
const rem = createConverter("rem", {
    shouldScale: true
});
const em = createConverter("em");
;
 //# sourceMappingURL=rem.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toRgba",
    ()=>toRgba
]);
function isHexColor(hex) {
    const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i;
    return HEX_REGEXP.test(hex);
}
function hexToRgba(color) {
    let hexString = color.replace("#", "");
    if (hexString.length === 3) {
        const shorthandHex = hexString.split("");
        hexString = [
            shorthandHex[0],
            shorthandHex[0],
            shorthandHex[1],
            shorthandHex[1],
            shorthandHex[2],
            shorthandHex[2]
        ].join("");
    }
    if (hexString.length === 8) {
        const alpha = parseInt(hexString.slice(6, 8), 16) / 255;
        return {
            r: parseInt(hexString.slice(0, 2), 16),
            g: parseInt(hexString.slice(2, 4), 16),
            b: parseInt(hexString.slice(4, 6), 16),
            a: alpha
        };
    }
    const parsed = parseInt(hexString, 16);
    const r = parsed >> 16 & 255;
    const g = parsed >> 8 & 255;
    const b = parsed & 255;
    return {
        r,
        g,
        b,
        a: 1
    };
}
function rgbStringToRgba(color) {
    const [r, g, b, a] = color.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
    return {
        r,
        g,
        b,
        a: a === void 0 ? 1 : a
    };
}
function hslStringToRgba(hslaString) {
    const hslaRegex = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i;
    const matches = hslaString.match(hslaRegex);
    if (!matches) {
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        };
    }
    const h = parseInt(matches[1], 10);
    const s = parseInt(matches[2], 10) / 100;
    const l = parseInt(matches[3], 10) / 100;
    const a = matches[5] ? parseFloat(matches[5]) : void 0;
    const chroma = (1 - Math.abs(2 * l - 1)) * s;
    const huePrime = h / 60;
    const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
    const m = l - chroma / 2;
    let r;
    let g;
    let b;
    if (huePrime >= 0 && huePrime < 1) {
        r = chroma;
        g = x;
        b = 0;
    } else if (huePrime >= 1 && huePrime < 2) {
        r = x;
        g = chroma;
        b = 0;
    } else if (huePrime >= 2 && huePrime < 3) {
        r = 0;
        g = chroma;
        b = x;
    } else if (huePrime >= 3 && huePrime < 4) {
        r = 0;
        g = x;
        b = chroma;
    } else if (huePrime >= 4 && huePrime < 5) {
        r = x;
        g = 0;
        b = chroma;
    } else {
        r = chroma;
        g = 0;
        b = x;
    }
    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
        a: a || 1
    };
}
function toRgba(color) {
    if (isHexColor(color)) {
        return hexToRgba(color);
    }
    if (color.startsWith("rgb")) {
        return rgbStringToRgba(color);
    }
    if (color.startsWith("hsl")) {
        return hslStringToRgba(color);
    }
    return {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    };
}
;
 //# sourceMappingURL=to-rgba.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/darken/darken.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "darken",
    ()=>darken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$to$2d$rgba$2f$to$2d$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs [app-client] (ecmascript)");
;
function darken(color, alpha) {
    if (color.startsWith("var(")) {
        return "color-mix(in srgb, ".concat(color, ", black ").concat(alpha * 100, "%)");
    }
    const { r, g, b, a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$to$2d$rgba$2f$to$2d$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRgba"])(color);
    const f = 1 - alpha;
    const dark = (input)=>Math.round(input * f);
    return "rgba(".concat(dark(r), ", ").concat(dark(g), ", ").concat(dark(b), ", ").concat(a, ")");
}
;
 //# sourceMappingURL=darken.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPrimaryShade",
    ()=>getPrimaryShade
]);
'use client';
function getPrimaryShade(theme, colorScheme) {
    if (typeof theme.primaryShade === "number") {
        return theme.primaryShade;
    }
    if (colorScheme === "dark") {
        return theme.primaryShade.dark;
    }
    return theme.primaryShade.light;
}
;
 //# sourceMappingURL=get-primary-shade.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/luminance/luminance.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isLightColor",
    ()=>isLightColor,
    "luminance",
    ()=>luminance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$to$2d$rgba$2f$to$2d$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs [app-client] (ecmascript)");
;
function gammaCorrect(c) {
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function getLightnessFromOklch(oklchColor) {
    const match = oklchColor.match(/oklch\((.*?)%\s/);
    return match ? parseFloat(match[1]) : null;
}
function luminance(color) {
    if (color.startsWith("oklch(")) {
        return (getLightnessFromOklch(color) || 0) / 100;
    }
    const { r, g, b } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$to$2d$rgba$2f$to$2d$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRgba"])(color);
    const sR = r / 255;
    const sG = g / 255;
    const sB = b / 255;
    const rLinear = gammaCorrect(sR);
    const gLinear = gammaCorrect(sG);
    const bLinear = gammaCorrect(sB);
    return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}
function isLightColor(color) {
    let luminanceThreshold = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.179;
    if (color.startsWith("var(")) {
        return false;
    }
    return luminance(color) > luminanceThreshold;
}
;
 //# sourceMappingURL=luminance.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseThemeColor",
    ()=>parseThemeColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$primary$2d$shade$2f$get$2d$primary$2d$shade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$luminance$2f$luminance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/luminance/luminance.mjs [app-client] (ecmascript)");
'use client';
;
;
function parseThemeColor(param) {
    let { color, theme, colorScheme } = param;
    if (typeof color !== "string") {
        throw new Error("[@mantine/core] Failed to parse color. Expected color to be a string, instead got ".concat(typeof color));
    }
    if (color === "bright") {
        return {
            color,
            value: colorScheme === "dark" ? theme.white : theme.black,
            shade: void 0,
            isThemeColor: false,
            isLight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$luminance$2f$luminance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLightColor"])(colorScheme === "dark" ? theme.white : theme.black, theme.luminanceThreshold),
            variable: "--mantine-color-bright"
        };
    }
    if (color === "dimmed") {
        return {
            color,
            value: colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[7],
            shade: void 0,
            isThemeColor: false,
            isLight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$luminance$2f$luminance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLightColor"])(colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6], theme.luminanceThreshold),
            variable: "--mantine-color-dimmed"
        };
    }
    if (color === "white" || color === "black") {
        return {
            color,
            value: color === "white" ? theme.white : theme.black,
            shade: void 0,
            isThemeColor: false,
            isLight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$luminance$2f$luminance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLightColor"])(color === "white" ? theme.white : theme.black, theme.luminanceThreshold),
            variable: "--mantine-color-".concat(color)
        };
    }
    const [_color, shade] = color.split(".");
    const colorShade = shade ? Number(shade) : void 0;
    const isThemeColor = _color in theme.colors;
    if (isThemeColor) {
        const colorValue = colorShade !== void 0 ? theme.colors[_color][colorShade] : theme.colors[_color][(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$primary$2d$shade$2f$get$2d$primary$2d$shade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrimaryShade"])(theme, colorScheme || "light")];
        return {
            color: _color,
            value: colorValue,
            shade: colorShade,
            isThemeColor,
            isLight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$luminance$2f$luminance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLightColor"])(colorValue, theme.luminanceThreshold),
            variable: shade ? "--mantine-color-".concat(_color, "-").concat(colorShade) : "--mantine-color-".concat(_color, "-filled")
        };
    }
    return {
        color,
        value: color,
        isThemeColor,
        isLight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$luminance$2f$luminance$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLightColor"])(color, theme.luminanceThreshold),
        shade: colorShade,
        variable: void 0
    };
}
;
 //# sourceMappingURL=parse-theme-color.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getThemeColor",
    ()=>getThemeColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs [app-client] (ecmascript)");
'use client';
;
function getThemeColor(color, theme) {
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseThemeColor"])({
        color: color || theme.primaryColor,
        theme
    });
    return parsed.variable ? "var(".concat(parsed.variable, ")") : color;
}
;
 //# sourceMappingURL=get-theme-color.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGradient",
    ()=>getGradient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-client] (ecmascript)");
'use client';
;
function getGradient(gradient, theme) {
    var _gradient_deg, _ref;
    const merged = {
        from: (gradient === null || gradient === void 0 ? void 0 : gradient.from) || theme.defaultGradient.from,
        to: (gradient === null || gradient === void 0 ? void 0 : gradient.to) || theme.defaultGradient.to,
        deg: (_ref = (_gradient_deg = gradient === null || gradient === void 0 ? void 0 : gradient.deg) !== null && _gradient_deg !== void 0 ? _gradient_deg : theme.defaultGradient.deg) !== null && _ref !== void 0 ? _ref : 0
    };
    const fromColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeColor"])(merged.from, theme);
    const toColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeColor"])(merged.to, theme);
    return "linear-gradient(".concat(merged.deg, "deg, ").concat(fromColor, " 0%, ").concat(toColor, " 100%)");
}
;
 //# sourceMappingURL=get-gradient.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alpha",
    ()=>alpha,
    "rgba",
    ()=>rgba
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$to$2d$rgba$2f$to$2d$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs [app-client] (ecmascript)");
;
function rgba(color, alpha2) {
    if (typeof color !== "string" || alpha2 > 1 || alpha2 < 0) {
        return "rgba(0, 0, 0, 1)";
    }
    if (color.startsWith("var(")) {
        const mixPercentage = (1 - alpha2) * 100;
        return "color-mix(in srgb, ".concat(color, ", transparent ").concat(mixPercentage, "%)");
    }
    if (color.startsWith("oklch")) {
        if (color.includes("/")) {
            return color.replace(/\/\s*[\d.]+\s*\)/, "/ ".concat(alpha2, ")"));
        }
        return color.replace(")", " / ".concat(alpha2, ")"));
    }
    const { r, g, b } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$to$2d$rgba$2f$to$2d$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRgba"])(color);
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha2, ")");
}
const alpha = rgba;
;
 //# sourceMappingURL=rgba.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultVariantColorsResolver",
    ()=>defaultVariantColorsResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$darken$2f$darken$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/darken/darken.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$gradient$2f$get$2d$gradient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const defaultVariantColorsResolver = (param)=>{
    let { color, theme, variant, gradient, autoContrast } = param;
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseThemeColor"])({
        color,
        theme
    });
    const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
    if (variant === "filled") {
        const textColor = _autoContrast ? parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)" : "var(--mantine-color-white)";
        if (parsed.isThemeColor) {
            if (parsed.shade === void 0) {
                return {
                    background: "var(--mantine-color-".concat(color, "-filled)"),
                    hover: "var(--mantine-color-".concat(color, "-filled-hover)"),
                    color: textColor,
                    border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
                };
            }
            return {
                background: "var(--mantine-color-".concat(parsed.color, "-").concat(parsed.shade, ")"),
                hover: "var(--mantine-color-".concat(parsed.color, "-").concat(parsed.shade === 9 ? 8 : parsed.shade + 1, ")"),
                color: textColor,
                border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
            };
        }
        return {
            background: color,
            hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$darken$2f$darken$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darken"])(color, 0.1),
            color: textColor,
            border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
        };
    }
    if (variant === "light") {
        if (parsed.isThemeColor) {
            if (parsed.shade === void 0) {
                return {
                    background: "var(--mantine-color-".concat(color, "-light)"),
                    hover: "var(--mantine-color-".concat(color, "-light-hover)"),
                    color: "var(--mantine-color-".concat(color, "-light-color)"),
                    border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
                };
            }
            const parsedColor = theme.colors[parsed.color][parsed.shade];
            return {
                background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"])(parsedColor, 0.1),
                hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"])(parsedColor, 0.12),
                color: "var(--mantine-color-".concat(parsed.color, "-").concat(Math.min(parsed.shade, 6), ")"),
                border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
            };
        }
        return {
            background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"])(color, 0.1),
            hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"])(color, 0.12),
            color,
            border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
        };
    }
    if (variant === "outline") {
        if (parsed.isThemeColor) {
            if (parsed.shade === void 0) {
                return {
                    background: "transparent",
                    hover: "var(--mantine-color-".concat(color, "-outline-hover)"),
                    color: "var(--mantine-color-".concat(color, "-outline)"),
                    border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid var(--mantine-color-").concat(color, "-outline)")
                };
            }
            return {
                background: "transparent",
                hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"])(theme.colors[parsed.color][parsed.shade], 0.05),
                color: "var(--mantine-color-".concat(parsed.color, "-").concat(parsed.shade, ")"),
                border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid var(--mantine-color-").concat(parsed.color, "-").concat(parsed.shade, ")")
            };
        }
        return {
            background: "transparent",
            hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"])(color, 0.05),
            color,
            border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid ").concat(color)
        };
    }
    if (variant === "subtle") {
        if (parsed.isThemeColor) {
            if (parsed.shade === void 0) {
                return {
                    background: "transparent",
                    hover: "var(--mantine-color-".concat(color, "-light-hover)"),
                    color: "var(--mantine-color-".concat(color, "-light-color)"),
                    border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
                };
            }
            const parsedColor = theme.colors[parsed.color][parsed.shade];
            return {
                background: "transparent",
                hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"])(parsedColor, 0.12),
                color: "var(--mantine-color-".concat(parsed.color, "-").concat(Math.min(parsed.shade, 6), ")"),
                border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
            };
        }
        return {
            background: "transparent",
            hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"])(color, 0.12),
            color,
            border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
        };
    }
    if (variant === "transparent") {
        if (parsed.isThemeColor) {
            if (parsed.shade === void 0) {
                return {
                    background: "transparent",
                    hover: "transparent",
                    color: "var(--mantine-color-".concat(color, "-light-color)"),
                    border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
                };
            }
            return {
                background: "transparent",
                hover: "transparent",
                color: "var(--mantine-color-".concat(parsed.color, "-").concat(Math.min(parsed.shade, 6), ")"),
                border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
            };
        }
        return {
            background: "transparent",
            hover: "transparent",
            color,
            border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
        };
    }
    if (variant === "white") {
        if (parsed.isThemeColor) {
            if (parsed.shade === void 0) {
                return {
                    background: "var(--mantine-color-white)",
                    hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$darken$2f$darken$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darken"])(theme.white, 0.01),
                    color: "var(--mantine-color-".concat(color, "-filled)"),
                    border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
                };
            }
            return {
                background: "var(--mantine-color-white)",
                hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$darken$2f$darken$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darken"])(theme.white, 0.01),
                color: "var(--mantine-color-".concat(parsed.color, "-").concat(parsed.shade, ")"),
                border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
            };
        }
        return {
            background: "var(--mantine-color-white)",
            hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$darken$2f$darken$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darken"])(theme.white, 0.01),
            color,
            border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid transparent")
        };
    }
    if (variant === "gradient") {
        return {
            background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$gradient$2f$get$2d$gradient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGradient"])(gradient, theme),
            hover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$gradient$2f$get$2d$gradient$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGradient"])(gradient, theme),
            color: "var(--mantine-color-white)",
            border: "none"
        };
    }
    if (variant === "default") {
        return {
            background: "var(--mantine-color-default)",
            hover: "var(--mantine-color-default-hover)",
            color: "var(--mantine-color-default-color)",
            border: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " solid var(--mantine-color-default-border)")
        };
    }
    return {};
};
;
 //# sourceMappingURL=default-variant-colors-resolver.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/default-colors.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_COLORS",
    ()=>DEFAULT_COLORS
]);
const DEFAULT_COLORS = {
    dark: [
        "#C9C9C9",
        "#b8b8b8",
        "#828282",
        "#696969",
        "#424242",
        "#3b3b3b",
        "#2e2e2e",
        "#242424",
        "#1f1f1f",
        "#141414"
    ],
    gray: [
        "#f8f9fa",
        "#f1f3f5",
        "#e9ecef",
        "#dee2e6",
        "#ced4da",
        "#adb5bd",
        "#868e96",
        "#495057",
        "#343a40",
        "#212529"
    ],
    red: [
        "#fff5f5",
        "#ffe3e3",
        "#ffc9c9",
        "#ffa8a8",
        "#ff8787",
        "#ff6b6b",
        "#fa5252",
        "#f03e3e",
        "#e03131",
        "#c92a2a"
    ],
    pink: [
        "#fff0f6",
        "#ffdeeb",
        "#fcc2d7",
        "#faa2c1",
        "#f783ac",
        "#f06595",
        "#e64980",
        "#d6336c",
        "#c2255c",
        "#a61e4d"
    ],
    grape: [
        "#f8f0fc",
        "#f3d9fa",
        "#eebefa",
        "#e599f7",
        "#da77f2",
        "#cc5de8",
        "#be4bdb",
        "#ae3ec9",
        "#9c36b5",
        "#862e9c"
    ],
    violet: [
        "#f3f0ff",
        "#e5dbff",
        "#d0bfff",
        "#b197fc",
        "#9775fa",
        "#845ef7",
        "#7950f2",
        "#7048e8",
        "#6741d9",
        "#5f3dc4"
    ],
    indigo: [
        "#edf2ff",
        "#dbe4ff",
        "#bac8ff",
        "#91a7ff",
        "#748ffc",
        "#5c7cfa",
        "#4c6ef5",
        "#4263eb",
        "#3b5bdb",
        "#364fc7"
    ],
    blue: [
        "#e7f5ff",
        "#d0ebff",
        "#a5d8ff",
        "#74c0fc",
        "#4dabf7",
        "#339af0",
        "#228be6",
        "#1c7ed6",
        "#1971c2",
        "#1864ab"
    ],
    cyan: [
        "#e3fafc",
        "#c5f6fa",
        "#99e9f2",
        "#66d9e8",
        "#3bc9db",
        "#22b8cf",
        "#15aabf",
        "#1098ad",
        "#0c8599",
        "#0b7285"
    ],
    teal: [
        "#e6fcf5",
        "#c3fae8",
        "#96f2d7",
        "#63e6be",
        "#38d9a9",
        "#20c997",
        "#12b886",
        "#0ca678",
        "#099268",
        "#087f5b"
    ],
    green: [
        "#ebfbee",
        "#d3f9d8",
        "#b2f2bb",
        "#8ce99a",
        "#69db7c",
        "#51cf66",
        "#40c057",
        "#37b24d",
        "#2f9e44",
        "#2b8a3e"
    ],
    lime: [
        "#f4fce3",
        "#e9fac8",
        "#d8f5a2",
        "#c0eb75",
        "#a9e34b",
        "#94d82d",
        "#82c91e",
        "#74b816",
        "#66a80f",
        "#5c940d"
    ],
    yellow: [
        "#fff9db",
        "#fff3bf",
        "#ffec99",
        "#ffe066",
        "#ffd43b",
        "#fcc419",
        "#fab005",
        "#f59f00",
        "#f08c00",
        "#e67700"
    ],
    orange: [
        "#fff4e6",
        "#ffe8cc",
        "#ffd8a8",
        "#ffc078",
        "#ffa94d",
        "#ff922b",
        "#fd7e14",
        "#f76707",
        "#e8590c",
        "#d9480f"
    ]
};
;
 //# sourceMappingURL=default-colors.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_THEME",
    ()=>DEFAULT_THEME
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$default$2d$variant$2d$colors$2d$resolver$2f$default$2d$variant$2d$colors$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$default$2d$colors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/default-colors.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
const DEFAULT_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";
const DEFAULT_THEME = {
    scale: 1,
    fontSmoothing: true,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$default$2d$colors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_COLORS"],
    primaryShade: {
        light: 6,
        dark: 8
    },
    primaryColor: "blue",
    variantColorResolver: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$default$2d$variant$2d$colors$2d$resolver$2f$default$2d$variant$2d$colors$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultVariantColorsResolver"],
    autoContrast: false,
    luminanceThreshold: 0.3,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: false,
    cursorType: "default",
    defaultGradient: {
        from: "blue",
        to: "cyan",
        deg: 45
    },
    defaultRadius: "sm",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
        fontFamily: DEFAULT_FONT_FAMILY,
        fontWeight: "700",
        textWrap: "wrap",
        sizes: {
            h1: {
                fontSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(34),
                lineHeight: "1.3"
            },
            h2: {
                fontSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(26),
                lineHeight: "1.35"
            },
            h3: {
                fontSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(22),
                lineHeight: "1.4"
            },
            h4: {
                fontSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(18),
                lineHeight: "1.45"
            },
            h5: {
                fontSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(16),
                lineHeight: "1.5"
            },
            h6: {
                fontSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(14),
                lineHeight: "1.5"
            }
        }
    },
    fontSizes: {
        xs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(12),
        sm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(14),
        md: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(16),
        lg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(18),
        xl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(20)
    },
    lineHeights: {
        xs: "1.4",
        sm: "1.45",
        md: "1.55",
        lg: "1.6",
        xl: "1.65"
    },
    radius: {
        xs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(2),
        sm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(4),
        md: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(8),
        lg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(16),
        xl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(32)
    },
    spacing: {
        xs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(10),
        sm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(12),
        md: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(16),
        lg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(20),
        xl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(32)
    },
    breakpoints: {
        xs: "36em",
        sm: "48em",
        md: "62em",
        lg: "75em",
        xl: "88em"
    },
    shadows: {
        xs: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(3), " rgba(0, 0, 0, 0.05), 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(2), " rgba(0, 0, 0, 0.1)"),
        sm: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(3), " rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(10), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(15), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(-5), ", rgba(0, 0, 0, 0.04) 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(7), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(7), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(-5)),
        md: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(3), " rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(20), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(25), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(-5), ", rgba(0, 0, 0, 0.04) 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(10), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(10), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(-5)),
        lg: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(3), " rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(28), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(23), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(-7), ", rgba(0, 0, 0, 0.04) 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(12), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(12), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(-7)),
        xl: "0 ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(3), " rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(36), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(28), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(-7), ", rgba(0, 0, 0, 0.04) 0 ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(17), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(17), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(-7))
    },
    other: {},
    components: {}
};
;
 //# sourceMappingURL=default-theme.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepMerge",
    ()=>deepMerge
]);
function isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, source) {
    const result = {
        ...target
    };
    const _source = source;
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key)=>{
            if (isObject(_source[key])) {
                if (!(key in target)) {
                    result[key] = _source[key];
                } else {
                    result[key] = deepMerge(result[key], _source[key]);
                }
            } else {
                result[key] = _source[key];
            }
        });
    }
    return result;
}
;
 //# sourceMappingURL=deep-merge.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/merge-mantine-theme/merge-mantine-theme.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INVALID_PRIMARY_COLOR_ERROR",
    ()=>INVALID_PRIMARY_COLOR_ERROR,
    "INVALID_PRIMARY_SHADE_ERROR",
    ()=>INVALID_PRIMARY_SHADE_ERROR,
    "mergeMantineTheme",
    ()=>mergeMantineTheme,
    "validateMantineTheme",
    ()=>validateMantineTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$deep$2d$merge$2f$deep$2d$merge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
const INVALID_PRIMARY_COLOR_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more \u2013 https://mantine.dev/theming/colors/#primary-color";
const INVALID_PRIMARY_SHADE_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function isValidPrimaryShade(shade) {
    if (shade < 0 || shade > 9) {
        return false;
    }
    return parseInt(shade.toString(), 10) === shade;
}
function validateMantineTheme(theme) {
    if (!(theme.primaryColor in theme.colors)) {
        throw new Error(INVALID_PRIMARY_COLOR_ERROR);
    }
    if (typeof theme.primaryShade === "object") {
        if (!isValidPrimaryShade(theme.primaryShade.dark) || !isValidPrimaryShade(theme.primaryShade.light)) {
            throw new Error(INVALID_PRIMARY_SHADE_ERROR);
        }
    }
    if (typeof theme.primaryShade === "number" && !isValidPrimaryShade(theme.primaryShade)) {
        throw new Error(INVALID_PRIMARY_SHADE_ERROR);
    }
}
function mergeMantineTheme(currentTheme, themeOverride) {
    var _themeOverride_headings;
    if (!themeOverride) {
        validateMantineTheme(currentTheme);
        return currentTheme;
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$deep$2d$merge$2f$deep$2d$merge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepMerge"])(currentTheme, themeOverride);
    if (themeOverride.fontFamily && !((_themeOverride_headings = themeOverride.headings) === null || _themeOverride_headings === void 0 ? void 0 : _themeOverride_headings.fontFamily)) {
        result.headings.fontFamily = themeOverride.fontFamily;
    }
    validateMantineTheme(result);
    return result;
}
;
 //# sourceMappingURL=merge-mantine-theme.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MantineThemeContext",
    ()=>MantineThemeContext,
    "MantineThemeProvider",
    ()=>MantineThemeProvider,
    "useMantineTheme",
    ()=>useMantineTheme,
    "useSafeMantineTheme",
    ()=>useSafeMantineTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$default$2d$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$merge$2d$mantine$2d$theme$2f$merge$2d$mantine$2d$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/merge-mantine-theme/merge-mantine-theme.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
const MantineThemeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useSafeMantineTheme = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MantineThemeContext) || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$default$2d$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_THEME"];
function useMantineTheme() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MantineThemeContext);
    if (!ctx) {
        throw new Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");
    }
    return ctx;
}
function MantineThemeProvider(param) {
    let { theme, children, inherit = true } = param;
    const parentTheme = useSafeMantineTheme();
    const mergedTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MantineThemeProvider.useMemo[mergedTheme]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$merge$2d$mantine$2d$theme$2f$merge$2d$mantine$2d$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeMantineTheme"])(inherit ? parentTheme : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$default$2d$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_THEME"], theme)
    }["MantineThemeProvider.useMemo[mergedTheme]"], [
        theme,
        parentTheme,
        inherit
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MantineThemeContext.Provider, {
        value: mergedTheme,
        children
    });
}
MantineThemeProvider.displayName = "@mantine/core/MantineThemeProvider";
;
 //# sourceMappingURL=MantineThemeProvider.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MantineClasses",
    ()=>MantineClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function MantineClasses() {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineStyleNonce"])();
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(theme.breakpoints).reduce((acc, breakpoint)=>{
        const isPxBreakpoint = theme.breakpoints[breakpoint].includes("px");
        const pxValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$px$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["px"])(theme.breakpoints[breakpoint]);
        const maxWidthBreakpoint = isPxBreakpoint ? "".concat(pxValue - 0.1, "px") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["em"])(pxValue - 0.1);
        const minWidthBreakpoint = isPxBreakpoint ? "".concat(pxValue, "px") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["em"])(pxValue);
        return "".concat(acc, "@media (max-width: ").concat(maxWidthBreakpoint, ") {.mantine-visible-from-").concat(breakpoint, " {display: none !important;}}@media (min-width: ").concat(minWidthBreakpoint, ") {.mantine-hidden-from-").concat(breakpoint, " {display: none !important;}}");
    }, "");
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
        "data-mantine-styles": "classes",
        nonce: nonce === null || nonce === void 0 ? void 0 : nonce(),
        dangerouslySetInnerHTML: {
            __html: classes
        }
    });
}
;
 //# sourceMappingURL=MantineClasses.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/css-variables-object-to-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cssVariablesObjectToString",
    ()=>cssVariablesObjectToString
]);
'use client';
function cssVariablesObjectToString(variables) {
    return Object.entries(variables).map((param)=>{
        let [name, value] = param;
        return "".concat(name, ": ").concat(value, ";");
    }).join("");
}
;
 //# sourceMappingURL=css-variables-object-to-string.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/wrap-with-selector.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapWithSelector",
    ()=>wrapWithSelector
]);
'use client';
function wrapWithSelector(selectors, code) {
    const _selectors = Array.isArray(selectors) ? selectors : [
        selectors
    ];
    return _selectors.reduce((acc, selector)=>"".concat(selector, "{").concat(acc, "}"), code);
}
;
 //# sourceMappingURL=wrap-with-selector.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/convert-css-variables.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertCssVariables",
    ()=>convertCssVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$convert$2d$css$2d$variables$2f$css$2d$variables$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/css-variables-object-to-string.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$convert$2d$css$2d$variables$2f$wrap$2d$with$2d$selector$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/wrap-with-selector.mjs [app-client] (ecmascript)");
'use client';
;
;
function convertCssVariables(input, selector) {
    const sharedVariables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$convert$2d$css$2d$variables$2f$css$2d$variables$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssVariablesObjectToString"])(input.variables);
    const shared = sharedVariables ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$convert$2d$css$2d$variables$2f$wrap$2d$with$2d$selector$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapWithSelector"])(selector, sharedVariables) : "";
    const dark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$convert$2d$css$2d$variables$2f$css$2d$variables$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssVariablesObjectToString"])(input.dark);
    const light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$convert$2d$css$2d$variables$2f$css$2d$variables$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssVariablesObjectToString"])(input.light);
    const darkForced = dark ? selector === ":host" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$convert$2d$css$2d$variables$2f$wrap$2d$with$2d$selector$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapWithSelector"])("".concat(selector, '([data-mantine-color-scheme="dark"])'), dark) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$convert$2d$css$2d$variables$2f$wrap$2d$with$2d$selector$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapWithSelector"])("".concat(selector, '[data-mantine-color-scheme="dark"]'), dark) : "";
    const lightForced = light ? selector === ":host" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$convert$2d$css$2d$variables$2f$wrap$2d$with$2d$selector$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapWithSelector"])("".concat(selector, '([data-mantine-color-scheme="light"])'), light) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$convert$2d$css$2d$variables$2f$wrap$2d$with$2d$selector$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapWithSelector"])("".concat(selector, '[data-mantine-color-scheme="light"]'), light) : "";
    return "".concat(shared).concat(darkForced).concat(lightForced);
}
;
 //# sourceMappingURL=convert-css-variables.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getContrastColor",
    ()=>getContrastColor,
    "getPrimaryContrastColor",
    ()=>getPrimaryContrastColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$primary$2d$shade$2f$get$2d$primary$2d$shade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs [app-client] (ecmascript)");
'use client';
;
;
function getContrastColor(param) {
    let { color, theme, autoContrast } = param;
    const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
    if (!_autoContrast) {
        return "var(--mantine-color-white)";
    }
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseThemeColor"])({
        color: color || theme.primaryColor,
        theme
    });
    return parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function getPrimaryContrastColor(theme, colorScheme) {
    return getContrastColor({
        color: theme.colors[theme.primaryColor][(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$primary$2d$shade$2f$get$2d$primary$2d$shade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrimaryShade"])(theme, colorScheme)],
        theme,
        autoContrast: null
    });
}
;
 //# sourceMappingURL=get-contrast-color.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-css-color-variables.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCSSColorVariables",
    ()=>getCSSColorVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$primary$2d$shade$2f$get$2d$primary$2d$shade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function getCSSColorVariables(param) {
    let { theme, color, colorScheme, name = color, withColorValues = true } = param;
    if (!theme.colors[color]) {
        return {};
    }
    if (colorScheme === "light") {
        const primaryShade2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$primary$2d$shade$2f$get$2d$primary$2d$shade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrimaryShade"])(theme, "light");
        const dynamicVariables2 = {
            ["--mantine-color-".concat(name, "-text")]: "var(--mantine-color-".concat(name, "-filled)"),
            ["--mantine-color-".concat(name, "-filled")]: "var(--mantine-color-".concat(name, "-").concat(primaryShade2, ")"),
            ["--mantine-color-".concat(name, "-filled-hover")]: "var(--mantine-color-".concat(name, "-").concat(primaryShade2 === 9 ? 8 : primaryShade2 + 1, ")"),
            ["--mantine-color-".concat(name, "-light")]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.colors[color][primaryShade2], 0.1),
            ["--mantine-color-".concat(name, "-light-hover")]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.colors[color][primaryShade2], 0.12),
            ["--mantine-color-".concat(name, "-light-color")]: "var(--mantine-color-".concat(name, "-").concat(primaryShade2, ")"),
            ["--mantine-color-".concat(name, "-outline")]: "var(--mantine-color-".concat(name, "-").concat(primaryShade2, ")"),
            ["--mantine-color-".concat(name, "-outline-hover")]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.colors[color][primaryShade2], 0.05)
        };
        if (!withColorValues) {
            return dynamicVariables2;
        }
        return {
            ["--mantine-color-".concat(name, "-0")]: theme.colors[color][0],
            ["--mantine-color-".concat(name, "-1")]: theme.colors[color][1],
            ["--mantine-color-".concat(name, "-2")]: theme.colors[color][2],
            ["--mantine-color-".concat(name, "-3")]: theme.colors[color][3],
            ["--mantine-color-".concat(name, "-4")]: theme.colors[color][4],
            ["--mantine-color-".concat(name, "-5")]: theme.colors[color][5],
            ["--mantine-color-".concat(name, "-6")]: theme.colors[color][6],
            ["--mantine-color-".concat(name, "-7")]: theme.colors[color][7],
            ["--mantine-color-".concat(name, "-8")]: theme.colors[color][8],
            ["--mantine-color-".concat(name, "-9")]: theme.colors[color][9],
            ...dynamicVariables2
        };
    }
    const primaryShade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$primary$2d$shade$2f$get$2d$primary$2d$shade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrimaryShade"])(theme, "dark");
    const dynamicVariables = {
        ["--mantine-color-".concat(name, "-text")]: "var(--mantine-color-".concat(name, "-4)"),
        ["--mantine-color-".concat(name, "-filled")]: "var(--mantine-color-".concat(name, "-").concat(primaryShade, ")"),
        ["--mantine-color-".concat(name, "-filled-hover")]: "var(--mantine-color-".concat(name, "-").concat(primaryShade === 9 ? 8 : primaryShade + 1, ")"),
        ["--mantine-color-".concat(name, "-light")]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.colors[color][Math.max(0, primaryShade - 2)], 0.15),
        ["--mantine-color-".concat(name, "-light-hover")]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.colors[color][Math.max(0, primaryShade - 2)], 0.2),
        ["--mantine-color-".concat(name, "-light-color")]: "var(--mantine-color-".concat(name, "-").concat(Math.max(primaryShade - 5, 0), ")"),
        ["--mantine-color-".concat(name, "-outline")]: "var(--mantine-color-".concat(name, "-").concat(Math.max(primaryShade - 4, 0), ")"),
        ["--mantine-color-".concat(name, "-outline-hover")]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.colors[color][Math.max(primaryShade - 4, 0)], 0.05)
    };
    if (!withColorValues) {
        return dynamicVariables;
    }
    return {
        ["--mantine-color-".concat(name, "-0")]: theme.colors[color][0],
        ["--mantine-color-".concat(name, "-1")]: theme.colors[color][1],
        ["--mantine-color-".concat(name, "-2")]: theme.colors[color][2],
        ["--mantine-color-".concat(name, "-3")]: theme.colors[color][3],
        ["--mantine-color-".concat(name, "-4")]: theme.colors[color][4],
        ["--mantine-color-".concat(name, "-5")]: theme.colors[color][5],
        ["--mantine-color-".concat(name, "-6")]: theme.colors[color][6],
        ["--mantine-color-".concat(name, "-7")]: theme.colors[color][7],
        ["--mantine-color-".concat(name, "-8")]: theme.colors[color][8],
        ["--mantine-color-".concat(name, "-9")]: theme.colors[color][9],
        ...dynamicVariables
    };
}
;
 //# sourceMappingURL=get-css-color-variables.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/colors-tuple/colors-tuple.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colorsTuple",
    ()=>colorsTuple
]);
function colorsTuple(input) {
    if (Array.isArray(input)) {
        return input;
    }
    return Array(10).fill(input);
}
;
 //# sourceMappingURL=colors-tuple.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/virtual-color/virtual-color.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isVirtualColor",
    ()=>isVirtualColor,
    "virtualColor",
    ()=>virtualColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$colors$2d$tuple$2f$colors$2d$tuple$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/colors-tuple/colors-tuple.mjs [app-client] (ecmascript)");
;
;
;
;
function virtualColor(input) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$colors$2d$tuple$2f$colors$2d$tuple$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorsTuple"])(Array.from({
        length: 10
    }).map((_, i)=>"var(--mantine-color-".concat(input.name, "-").concat(i, ")")));
    Object.defineProperty(result, "mantine-virtual-color", {
        enumerable: false,
        writable: false,
        configurable: false,
        value: true
    });
    Object.defineProperty(result, "dark", {
        enumerable: false,
        writable: false,
        configurable: false,
        value: input.dark
    });
    Object.defineProperty(result, "light", {
        enumerable: false,
        writable: false,
        configurable: false,
        value: input.light
    });
    Object.defineProperty(result, "name", {
        enumerable: false,
        writable: false,
        configurable: false,
        value: input.name
    });
    return result;
}
function isVirtualColor(value) {
    return !!value && typeof value === "object" && "mantine-virtual-color" in value;
}
;
 //# sourceMappingURL=virtual-color.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultCssVariablesResolver",
    ()=>defaultCssVariablesResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$primary$2d$shade$2f$get$2d$primary$2d$shade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$contrast$2d$color$2f$get$2d$contrast$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$get$2d$css$2d$color$2d$variables$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-css-color-variables.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$virtual$2d$color$2f$virtual$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/virtual-color/virtual-color.mjs [app-client] (ecmascript)");
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
function assignSizeVariables(variables, sizes, name) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(sizes).forEach((size)=>Object.assign(variables, {
            ["--mantine-".concat(name, "-").concat(size)]: sizes[size]
        }));
}
const defaultCssVariablesResolver = (theme)=>{
    const lightPrimaryShade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$primary$2d$shade$2f$get$2d$primary$2d$shade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrimaryShade"])(theme, "light");
    const defaultRadius = theme.defaultRadius in theme.radius ? theme.radius[theme.defaultRadius] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(theme.defaultRadius);
    const result = {
        variables: {
            "--mantine-scale": theme.scale.toString(),
            "--mantine-cursor-type": theme.cursorType,
            "--mantine-color-scheme": "light dark",
            "--mantine-webkit-font-smoothing": theme.fontSmoothing ? "antialiased" : "unset",
            "--mantine-moz-font-smoothing": theme.fontSmoothing ? "grayscale" : "unset",
            "--mantine-color-white": theme.white,
            "--mantine-color-black": theme.black,
            "--mantine-line-height": theme.lineHeights.md,
            "--mantine-font-family": theme.fontFamily,
            "--mantine-font-family-monospace": theme.fontFamilyMonospace,
            "--mantine-font-family-headings": theme.headings.fontFamily,
            "--mantine-heading-font-weight": theme.headings.fontWeight,
            "--mantine-heading-text-wrap": theme.headings.textWrap,
            "--mantine-radius-default": defaultRadius,
            // Primary colors
            "--mantine-primary-color-filled": "var(--mantine-color-".concat(theme.primaryColor, "-filled)"),
            "--mantine-primary-color-filled-hover": "var(--mantine-color-".concat(theme.primaryColor, "-filled-hover)"),
            "--mantine-primary-color-light": "var(--mantine-color-".concat(theme.primaryColor, "-light)"),
            "--mantine-primary-color-light-hover": "var(--mantine-color-".concat(theme.primaryColor, "-light-hover)"),
            "--mantine-primary-color-light-color": "var(--mantine-color-".concat(theme.primaryColor, "-light-color)")
        },
        light: {
            "--mantine-primary-color-contrast": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$contrast$2d$color$2f$get$2d$contrast$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrimaryContrastColor"])(theme, "light"),
            "--mantine-color-bright": "var(--mantine-color-black)",
            "--mantine-color-text": theme.black,
            "--mantine-color-body": theme.white,
            "--mantine-color-error": "var(--mantine-color-red-6)",
            "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
            "--mantine-color-anchor": "var(--mantine-color-".concat(theme.primaryColor, "-").concat(lightPrimaryShade, ")"),
            "--mantine-color-default": "var(--mantine-color-white)",
            "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
            "--mantine-color-default-color": "var(--mantine-color-black)",
            "--mantine-color-default-border": "var(--mantine-color-gray-4)",
            "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
        },
        dark: {
            "--mantine-primary-color-contrast": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$contrast$2d$color$2f$get$2d$contrast$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrimaryContrastColor"])(theme, "dark"),
            "--mantine-color-bright": "var(--mantine-color-white)",
            "--mantine-color-text": "var(--mantine-color-dark-0)",
            "--mantine-color-body": "var(--mantine-color-dark-7)",
            "--mantine-color-error": "var(--mantine-color-red-8)",
            "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
            "--mantine-color-anchor": "var(--mantine-color-".concat(theme.primaryColor, "-4)"),
            "--mantine-color-default": "var(--mantine-color-dark-6)",
            "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
            "--mantine-color-default-color": "var(--mantine-color-white)",
            "--mantine-color-default-border": "var(--mantine-color-dark-4)",
            "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
        }
    };
    assignSizeVariables(result.variables, theme.breakpoints, "breakpoint");
    assignSizeVariables(result.variables, theme.spacing, "spacing");
    assignSizeVariables(result.variables, theme.fontSizes, "font-size");
    assignSizeVariables(result.variables, theme.lineHeights, "line-height");
    assignSizeVariables(result.variables, theme.shadows, "shadow");
    assignSizeVariables(result.variables, theme.radius, "radius");
    theme.colors[theme.primaryColor].forEach((_, index)=>{
        result.variables["--mantine-primary-color-".concat(index)] = "var(--mantine-color-".concat(theme.primaryColor, "-").concat(index, ")");
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(theme.colors).forEach((color)=>{
        const value = theme.colors[color];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$virtual$2d$color$2f$virtual$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVirtualColor"])(value)) {
            Object.assign(result.light, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$get$2d$css$2d$color$2d$variables$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCSSColorVariables"])({
                theme,
                name: value.name,
                color: value.light,
                colorScheme: "light",
                withColorValues: true
            }));
            Object.assign(result.dark, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$get$2d$css$2d$color$2d$variables$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCSSColorVariables"])({
                theme,
                name: value.name,
                color: value.dark,
                colorScheme: "dark",
                withColorValues: true
            }));
            return;
        }
        value.forEach((shade, index)=>{
            result.variables["--mantine-color-".concat(color, "-").concat(index)] = shade;
        });
        Object.assign(result.light, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$get$2d$css$2d$color$2d$variables$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCSSColorVariables"])({
            theme,
            color,
            colorScheme: "light",
            withColorValues: false
        }));
        Object.assign(result.dark, (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$get$2d$css$2d$color$2d$variables$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCSSColorVariables"])({
            theme,
            color,
            colorScheme: "dark",
            withColorValues: false
        }));
    });
    const headings = theme.headings.sizes;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(headings).forEach((heading)=>{
        result.variables["--mantine-".concat(heading, "-font-size")] = headings[heading].fontSize;
        result.variables["--mantine-".concat(heading, "-line-height")] = headings[heading].lineHeight;
        result.variables["--mantine-".concat(heading, "-font-weight")] = headings[heading].fontWeight || theme.headings.fontWeight;
    });
    return result;
};
;
 //# sourceMappingURL=default-css-variables-resolver.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-merged-variables.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMergedVariables",
    ()=>getMergedVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$deep$2d$merge$2f$deep$2d$merge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$default$2d$css$2d$variables$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function getMergedVariables(param) {
    let { theme, generator } = param;
    const defaultResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$default$2d$css$2d$variables$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCssVariablesResolver"])(theme);
    const providerGenerator = generator === null || generator === void 0 ? void 0 : generator(theme);
    return providerGenerator ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$deep$2d$merge$2f$deep$2d$merge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepMerge"])(defaultResolver, providerGenerator) : defaultResolver;
}
;
 //# sourceMappingURL=get-merged-variables.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/remove-default-variables.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removeDefaultVariables",
    ()=>removeDefaultVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$default$2d$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$default$2d$css$2d$variables$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const defaultCssVariables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$default$2d$css$2d$variables$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCssVariablesResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$default$2d$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_THEME"]);
function removeDefaultVariables(input) {
    const cleaned = {
        variables: {},
        light: {},
        dark: {}
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(input.variables).forEach((key)=>{
        if (defaultCssVariables.variables[key] !== input.variables[key]) {
            cleaned.variables[key] = input.variables[key];
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(input.light).forEach((key)=>{
        if (defaultCssVariables.light[key] !== input.light[key]) {
            cleaned.light[key] = input.light[key];
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(input.dark).forEach((key)=>{
        if (defaultCssVariables.dark[key] !== input.dark[key]) {
            cleaned.dark[key] = input.dark[key];
        }
    });
    return cleaned;
}
;
 //# sourceMappingURL=remove-default-variables.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MantineCssVariables",
    ()=>MantineCssVariables
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$convert$2d$css$2d$variables$2f$convert$2d$css$2d$variables$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/convert-css-variables.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$get$2d$merged$2d$variables$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-merged-variables.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$remove$2d$default$2d$variables$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/remove-default-variables.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function getColorSchemeCssVariables(selector) {
    return "\n  ".concat(selector, '[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }\n  ').concat(selector, '[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }\n');
}
function MantineCssVariables(param) {
    let { cssVariablesSelector, deduplicateCssVariables } = param;
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineStyleNonce"])();
    const generator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineCssVariablesResolver"])();
    const mergedVariables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$get$2d$merged$2d$variables$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMergedVariables"])({
        theme,
        generator
    });
    const shouldCleanVariables = cssVariablesSelector === ":root" && deduplicateCssVariables;
    const cleanedVariables = shouldCleanVariables ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$remove$2d$default$2d$variables$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeDefaultVariables"])(mergedVariables) : mergedVariables;
    const css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$convert$2d$css$2d$variables$2f$convert$2d$css$2d$variables$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertCssVariables"])(cleanedVariables, cssVariablesSelector);
    if (css) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
            "data-mantine-styles": true,
            nonce: nonce === null || nonce === void 0 ? void 0 : nonce(),
            dangerouslySetInnerHTML: {
                __html: "".concat(css).concat(shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector))
            }
        });
    }
    return null;
}
MantineCssVariables.displayName = "@mantine/CssVariables";
;
 //# sourceMappingURL=MantineCssVariables.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/suppress-nextjs-warning.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "suppressNextjsWarning",
    ()=>suppressNextjsWarning
]);
'use client';
function suppressNextjsWarning() {
    const originalError = console.error;
    console.error = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (args.length > 1 && typeof args[0] === "string" && args[0].toLowerCase().includes("extra attributes from the server") && typeof args[1] === "string" && args[1].toLowerCase().includes("data-mantine-color-scheme")) ;
        else {
            originalError(...args);
        }
    };
}
;
 //# sourceMappingURL=suppress-nextjs-warning.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-provider-color-scheme.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProviderColorScheme",
    ()=>useProviderColorScheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs [app-client] (ecmascript)");
'use client';
;
;
function setColorSchemeAttribute(colorScheme, getRootElement) {
    var _window_matchMedia, _getRootElement;
    const hasDarkColorScheme = typeof window !== "undefined" && "matchMedia" in window && ((_window_matchMedia = window.matchMedia("(prefers-color-scheme: dark)")) === null || _window_matchMedia === void 0 ? void 0 : _window_matchMedia.matches);
    const computedColorScheme = colorScheme !== "auto" ? colorScheme : hasDarkColorScheme ? "dark" : "light";
    (_getRootElement = getRootElement()) === null || _getRootElement === void 0 ? void 0 : _getRootElement.setAttribute("data-mantine-color-scheme", computedColorScheme);
}
function useProviderColorScheme(param) {
    let { manager, defaultColorScheme, getRootElement, forceColorScheme } = param;
    const media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useProviderColorScheme.useState": ()=>manager.get(defaultColorScheme)
    }["useProviderColorScheme.useState"]);
    const colorSchemeValue = forceColorScheme || value;
    const setColorScheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProviderColorScheme.useCallback[setColorScheme]": (colorScheme)=>{
            if (!forceColorScheme) {
                setColorSchemeAttribute(colorScheme, getRootElement);
                setValue(colorScheme);
                manager.set(colorScheme);
            }
        }
    }["useProviderColorScheme.useCallback[setColorScheme]"], [
        manager.set,
        colorSchemeValue,
        forceColorScheme
    ]);
    const clearColorScheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProviderColorScheme.useCallback[clearColorScheme]": ()=>{
            setValue(defaultColorScheme);
            setColorSchemeAttribute(defaultColorScheme, getRootElement);
            manager.clear();
        }
    }["useProviderColorScheme.useCallback[clearColorScheme]"], [
        manager.clear,
        defaultColorScheme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProviderColorScheme.useEffect": ()=>{
            manager.subscribe(setColorScheme);
            return manager.unsubscribe;
        }
    }["useProviderColorScheme.useEffect"], [
        manager.subscribe,
        manager.unsubscribe
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicEffect"])({
        "useProviderColorScheme.useIsomorphicEffect": ()=>{
            setColorSchemeAttribute(manager.get(defaultColorScheme), getRootElement);
        }
    }["useProviderColorScheme.useIsomorphicEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProviderColorScheme.useEffect": ()=>{
            var _media_current;
            if (forceColorScheme) {
                setColorSchemeAttribute(forceColorScheme, getRootElement);
                return ({
                    "useProviderColorScheme.useEffect": ()=>{}
                })["useProviderColorScheme.useEffect"];
            }
            if (forceColorScheme === void 0) {
                setColorSchemeAttribute(value, getRootElement);
            }
            if (typeof window !== "undefined" && "matchMedia" in window) {
                media.current = window.matchMedia("(prefers-color-scheme: dark)");
            }
            const listener = {
                "useProviderColorScheme.useEffect.listener": (event)=>{
                    if (value === "auto") {
                        setColorSchemeAttribute(event.matches ? "dark" : "light", getRootElement);
                    }
                }
            }["useProviderColorScheme.useEffect.listener"];
            (_media_current = media.current) === null || _media_current === void 0 ? void 0 : _media_current.addEventListener("change", listener);
            return ({
                "useProviderColorScheme.useEffect": ()=>{
                    var _media_current;
                    return (_media_current = media.current) === null || _media_current === void 0 ? void 0 : _media_current.removeEventListener("change", listener);
                }
            })["useProviderColorScheme.useEffect"];
        }
    }["useProviderColorScheme.useEffect"], [
        value,
        forceColorScheme
    ]);
    return {
        colorScheme: colorSchemeValue,
        setColorScheme,
        clearColorScheme
    };
}
;
 //# sourceMappingURL=use-provider-color-scheme.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-respect-reduce-motion/use-respect-reduce-motion.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRespectReduceMotion",
    ()=>useRespectReduceMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs [app-client] (ecmascript)");
'use client';
;
function useRespectReduceMotion(param) {
    let { respectReducedMotion, getRootElement } = param;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicEffect"])({
        "useRespectReduceMotion.useIsomorphicEffect": ()=>{
            if (respectReducedMotion) {
                var _getRootElement;
                (_getRootElement = getRootElement()) === null || _getRootElement === void 0 ? void 0 : _getRootElement.setAttribute("data-respect-reduced-motion", "true");
            }
        }
    }["useRespectReduceMotion.useIsomorphicEffect"], [
        respectReducedMotion
    ]);
}
;
 //# sourceMappingURL=use-respect-reduce-motion.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadlessMantineProvider",
    ()=>HeadlessMantineProvider,
    "MantineProvider",
    ()=>MantineProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$scheme$2d$managers$2f$local$2d$storage$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/local-storage-manager.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineClasses$2f$MantineClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$MantineCssVariables$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$suppress$2d$nextjs$2d$warning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/suppress-nextjs-warning.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$mantine$2d$color$2d$scheme$2f$use$2d$provider$2d$color$2d$scheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-provider-color-scheme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$respect$2d$reduce$2d$motion$2f$use$2d$respect$2d$reduce$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-respect-reduce-motion/use-respect-reduce-motion.mjs [app-client] (ecmascript)");
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$suppress$2d$nextjs$2d$warning$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suppressNextjsWarning"])();
function MantineProvider(param) {
    let { theme, children, getStyleNonce, withStaticClasses = true, withGlobalClasses = true, deduplicateCssVariables = true, withCssVariables = true, cssVariablesSelector = ":root", classNamesPrefix = "mantine", colorSchemeManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$scheme$2d$managers$2f$local$2d$storage$2d$manager$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localStorageColorSchemeManager"])(), defaultColorScheme = "light", getRootElement = ()=>document.documentElement, cssVariablesResolver, forceColorScheme, stylesTransform, env } = param;
    const { colorScheme, setColorScheme, clearColorScheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$mantine$2d$color$2d$scheme$2f$use$2d$provider$2d$color$2d$scheme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProviderColorScheme"])({
        defaultColorScheme,
        forceColorScheme,
        manager: colorSchemeManager,
        getRootElement
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$respect$2d$reduce$2d$motion$2f$use$2d$respect$2d$reduce$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRespectReduceMotion"])({
        respectReducedMotion: (theme === null || theme === void 0 ? void 0 : theme.respectReducedMotion) || false,
        getRootElement
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MantineContext"].Provider, {
        value: {
            colorScheme,
            setColorScheme,
            clearColorScheme,
            getRootElement,
            classNamesPrefix,
            getStyleNonce,
            cssVariablesResolver,
            cssVariablesSelector,
            withStaticClasses,
            stylesTransform,
            env
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MantineThemeProvider"], {
            theme,
            children: [
                withCssVariables && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineCssVariables$2f$MantineCssVariables$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MantineCssVariables"], {
                    cssVariablesSelector,
                    deduplicateCssVariables
                }),
                withGlobalClasses && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineClasses$2f$MantineClasses$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MantineClasses"], {}),
                children
            ]
        })
    });
}
MantineProvider.displayName = "@mantine/core/MantineProvider";
function HeadlessMantineProvider(param) {
    let { children, theme } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MantineContext"].Provider, {
        value: {
            colorScheme: "auto",
            setColorScheme: ()=>{},
            clearColorScheme: ()=>{},
            getRootElement: ()=>document.documentElement,
            classNamesPrefix: "mantine",
            cssVariablesSelector: ":root",
            withStaticClasses: false,
            headless: true
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MantineThemeProvider"], {
            theme,
            children
        })
    });
}
HeadlessMantineProvider.displayName = "@mantine/core/HeadlessMantineProvider";
;
 //# sourceMappingURL=MantineProvider.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createVarsResolver",
    ()=>createVarsResolver
]);
'use client';
function createVarsResolver(resolver) {
    return resolver;
}
;
 //# sourceMappingURL=create-vars-resolver.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterProps",
    ()=>filterProps
]);
'use client';
function filterProps(props) {
    return Object.keys(props).reduce((acc, key)=>{
        if (props[key] !== void 0) {
            acc[key] = props[key];
        }
        return acc;
    }, {});
}
;
 //# sourceMappingURL=filter-props.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProps",
    ()=>useProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function useProps(component, defaultProps, props) {
    var _theme_components_component;
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const contextPropsPayload = (_theme_components_component = theme.components[component]) === null || _theme_components_component === void 0 ? void 0 : _theme_components_component.defaultProps;
    const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;
    return {
        ...defaultProps,
        ...contextProps,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"])(props)
    };
}
;
 //# sourceMappingURL=use-props.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FOCUS_CLASS_NAMES",
    ()=>FOCUS_CLASS_NAMES,
    "getGlobalClassNames",
    ()=>getGlobalClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
'use client';
;
const FOCUS_CLASS_NAMES = {
    always: "mantine-focus-always",
    auto: "mantine-focus-auto",
    never: "mantine-focus-never"
};
function getGlobalClassNames(param) {
    let { theme, options, unstyled } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((options === null || options === void 0 ? void 0 : options.focusable) && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]), (options === null || options === void 0 ? void 0 : options.active) && !unstyled && theme.activeClassName);
}
;
 //# sourceMappingURL=get-global-class-names.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveClassNames",
    ()=>resolveClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
'use client';
;
const EMPTY_CLASS_NAMES = {};
function mergeClassNames(objects) {
    const merged = {};
    objects.forEach((obj)=>{
        Object.entries(obj).forEach((param)=>{
            let [key, value] = param;
            if (merged[key]) {
                merged[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(merged[key], value);
            } else {
                merged[key] = value;
            }
        });
    });
    return merged;
}
function resolveClassNames(param) {
    let { theme, classNames, props, stylesCtx } = param;
    const arrayClassNames = Array.isArray(classNames) ? classNames : [
        classNames
    ];
    const resolvedClassNames = arrayClassNames.map((item)=>typeof item === "function" ? item(theme, props, stylesCtx) : item || EMPTY_CLASS_NAMES);
    return mergeClassNames(resolvedClassNames);
}
;
 //# sourceMappingURL=resolve-class-names.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOptionsClassNames",
    ()=>getOptionsClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-client] (ecmascript)");
'use client';
;
function getOptionsClassNames(param) {
    let { selector, stylesCtx, options, props, theme } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveClassNames"])({
        theme,
        classNames: options === null || options === void 0 ? void 0 : options.classNames,
        props: (options === null || options === void 0 ? void 0 : options.props) || props,
        stylesCtx
    })[selector];
}
;
 //# sourceMappingURL=get-options-class-names.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getResolvedClassNames",
    ()=>getResolvedClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-client] (ecmascript)");
'use client';
;
function getResolvedClassNames(param) {
    let { selector, stylesCtx, theme, classNames, props } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveClassNames"])({
        theme,
        classNames,
        props,
        stylesCtx
    })[selector];
}
;
 //# sourceMappingURL=get-resolved-class-names.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRootClassName",
    ()=>getRootClassName
]);
'use client';
function getRootClassName(param) {
    let { rootSelector, selector, className } = param;
    return rootSelector === selector ? className : void 0;
}
;
 //# sourceMappingURL=get-root-class-name.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSelectorClassName",
    ()=>getSelectorClassName
]);
'use client';
function getSelectorClassName(param) {
    let { selector, classes, unstyled } = param;
    return unstyled ? void 0 : classes[selector];
}
;
 //# sourceMappingURL=get-selector-class-name.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStaticClassNames",
    ()=>getStaticClassNames
]);
'use client';
function getStaticClassNames(param) {
    let { themeName, classNamesPrefix, selector, withStaticClass } = param;
    if (withStaticClass === false) {
        return [];
    }
    return themeName.map((n)=>"".concat(classNamesPrefix, "-").concat(n, "-").concat(selector));
}
;
 //# sourceMappingURL=get-static-class-names.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getThemeClassNames",
    ()=>getThemeClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs [app-client] (ecmascript)");
'use client';
;
function getThemeClassNames(param) {
    let { themeName, theme, selector, props, stylesCtx } = param;
    return themeName.map((n)=>{
        var _resolveClassNames, _theme_components_n;
        return (_resolveClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$resolve$2d$class$2d$names$2f$resolve$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveClassNames"])({
            theme,
            classNames: (_theme_components_n = theme.components[n]) === null || _theme_components_n === void 0 ? void 0 : _theme_components_n.classNames,
            props,
            stylesCtx
        })) === null || _resolveClassNames === void 0 ? void 0 : _resolveClassNames[selector];
    });
}
;
 //# sourceMappingURL=get-theme-class-names.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVariantClassName",
    ()=>getVariantClassName
]);
'use client';
function getVariantClassName(param) {
    let { options, classes, selector, unstyled } = param;
    return (options === null || options === void 0 ? void 0 : options.variant) && !unstyled ? classes["".concat(selector, "--").concat(options.variant)] : void 0;
}
;
 //# sourceMappingURL=get-variant-class-name.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClassName",
    ()=>getClassName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$global$2d$class$2d$names$2f$get$2d$global$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$options$2d$class$2d$names$2f$get$2d$options$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$resolved$2d$class$2d$names$2f$get$2d$resolved$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$root$2d$class$2d$name$2f$get$2d$root$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$selector$2d$class$2d$name$2f$get$2d$selector$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$static$2d$class$2d$names$2f$get$2d$static$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$theme$2d$class$2d$names$2f$get$2d$theme$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$variant$2d$class$2d$name$2f$get$2d$variant$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs [app-client] (ecmascript)");
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
function getClassName(param) {
    let { theme, options, themeName, selector, classNamesPrefix, classNames, classes, unstyled, className, rootSelector, props, stylesCtx, withStaticClasses, headless, transformedStyles } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$global$2d$class$2d$names$2f$get$2d$global$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalClassNames"])({
        theme,
        options,
        unstyled: unstyled || headless
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$theme$2d$class$2d$names$2f$get$2d$theme$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeClassNames"])({
        theme,
        themeName,
        selector,
        props,
        stylesCtx
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$variant$2d$class$2d$name$2f$get$2d$variant$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariantClassName"])({
        options,
        classes,
        selector,
        unstyled
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$resolved$2d$class$2d$names$2f$get$2d$resolved$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResolvedClassNames"])({
        selector,
        stylesCtx,
        theme,
        classNames,
        props
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$resolved$2d$class$2d$names$2f$get$2d$resolved$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResolvedClassNames"])({
        selector,
        stylesCtx,
        theme,
        classNames: transformedStyles,
        props
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$options$2d$class$2d$names$2f$get$2d$options$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionsClassNames"])({
        selector,
        stylesCtx,
        options,
        props,
        theme
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$root$2d$class$2d$name$2f$get$2d$root$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootClassName"])({
        rootSelector,
        selector,
        className
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$selector$2d$class$2d$name$2f$get$2d$selector$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelectorClassName"])({
        selector,
        classes,
        unstyled: unstyled || headless
    }), withStaticClasses && !headless && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$static$2d$class$2d$names$2f$get$2d$static$2d$class$2d$names$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStaticClassNames"])({
        themeName,
        classNamesPrefix,
        selector,
        withStaticClass: options === null || options === void 0 ? void 0 : options.withStaticClass
    }), options === null || options === void 0 ? void 0 : options.className);
}
;
 //# sourceMappingURL=get-class-name.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveStyles",
    ()=>resolveStyles
]);
'use client';
function resolveStyles(param) {
    let { theme, styles, props, stylesCtx } = param;
    const arrayStyles = Array.isArray(styles) ? styles : [
        styles
    ];
    return arrayStyles.reduce((acc, style)=>{
        if (typeof style === "function") {
            return {
                ...acc,
                ...style(theme, props, stylesCtx)
            };
        }
        return {
            ...acc,
            ...style
        };
    }, {});
}
;
 //# sourceMappingURL=resolve-styles.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getThemeStyles",
    ()=>getThemeStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs [app-client] (ecmascript)");
'use client';
;
function getThemeStyles(param) {
    let { theme, themeName, props, stylesCtx, selector } = param;
    return themeName.map((n)=>{
        var _theme_components_n;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyles"])({
            theme,
            styles: (_theme_components_n = theme.components[n]) === null || _theme_components_n === void 0 ? void 0 : _theme_components_n.styles,
            props,
            stylesCtx
        })[selector];
    }).reduce((acc, val)=>({
            ...acc,
            ...val
        }), {});
}
;
 //# sourceMappingURL=get-theme-styles.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveStyle",
    ()=>resolveStyle
]);
'use client';
function resolveStyle(param) {
    let { style, theme } = param;
    if (Array.isArray(style)) {
        return [
            ...style
        ].reduce((acc, item)=>({
                ...acc,
                ...resolveStyle({
                    style: item,
                    theme
                })
            }), {});
    }
    if (typeof style === "function") {
        return style(theme);
    }
    if (style == null) {
        return {};
    }
    return style;
}
;
 //# sourceMappingURL=resolve-style.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeVars",
    ()=>mergeVars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function mergeVars(vars) {
    return vars.reduce((acc, current)=>{
        if (current) {
            Object.keys(current).forEach((key)=>{
                acc[key] = {
                    ...acc[key],
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"])(current[key])
                };
            });
        }
        return acc;
    }, {});
}
;
 //# sourceMappingURL=merge-vars.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveVars",
    ()=>resolveVars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$vars$2f$merge$2d$vars$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs [app-client] (ecmascript)");
'use client';
;
function resolveVars(param) {
    let { vars, varsResolver, theme, props, stylesCtx, selector, themeName, headless } = param;
    var _mergeVars;
    return (_mergeVars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$vars$2f$merge$2d$vars$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeVars"])([
        headless ? {} : varsResolver === null || varsResolver === void 0 ? void 0 : varsResolver(theme, props, stylesCtx),
        ...themeName.map((name)=>{
            var _theme_components_name_vars, _theme_components_name, _theme_components;
            return (_theme_components = theme.components) === null || _theme_components === void 0 ? void 0 : (_theme_components_name = _theme_components[name]) === null || _theme_components_name === void 0 ? void 0 : (_theme_components_name_vars = _theme_components_name.vars) === null || _theme_components_name_vars === void 0 ? void 0 : _theme_components_name_vars.call(_theme_components_name, theme, props, stylesCtx);
        }),
        vars === null || vars === void 0 ? void 0 : vars(theme, props, stylesCtx)
    ])) === null || _mergeVars === void 0 ? void 0 : _mergeVars[selector];
}
;
 //# sourceMappingURL=resolve-vars.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStyle",
    ()=>getStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$get$2d$theme$2d$styles$2f$get$2d$theme$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$style$2f$resolve$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$vars$2f$resolve$2d$vars$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
function getStyle(param) {
    let { theme, themeName, selector, options, props, stylesCtx, rootSelector, styles, style, vars, varsResolver, headless, withStylesTransform } = param;
    return {
        ...!withStylesTransform && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$get$2d$theme$2d$styles$2f$get$2d$theme$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeStyles"])({
            theme,
            themeName,
            props,
            stylesCtx,
            selector
        }),
        ...!withStylesTransform && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyles"])({
            theme,
            styles,
            props,
            stylesCtx
        })[selector],
        ...!withStylesTransform && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$styles$2f$resolve$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyles"])({
            theme,
            styles: options === null || options === void 0 ? void 0 : options.styles,
            props: (options === null || options === void 0 ? void 0 : options.props) || props,
            stylesCtx
        })[selector],
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$vars$2f$resolve$2d$vars$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVars"])({
            theme,
            props,
            stylesCtx,
            vars,
            varsResolver,
            selector,
            themeName,
            headless
        }),
        ...rootSelector === selector ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$style$2f$resolve$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyle"])({
            style,
            theme
        }) : null,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$resolve$2d$style$2f$resolve$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStyle"])({
            style: options === null || options === void 0 ? void 0 : options.style,
            theme
        })
    };
}
;
 //# sourceMappingURL=get-style.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-transformed-styles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStylesTransform",
    ()=>useStylesTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function useStylesTransform(param) {
    let { props, stylesCtx, themeName } = param;
    var _useMantineStylesTransform;
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const stylesTransform = (_useMantineStylesTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineStylesTransform"])()) === null || _useMantineStylesTransform === void 0 ? void 0 : _useMantineStylesTransform();
    const getTransformedStyles = (styles)=>{
        if (!stylesTransform) {
            return [];
        }
        const transformedStyles = styles.map((style)=>stylesTransform(style, {
                props,
                theme,
                ctx: stylesCtx
            }));
        return [
            ...transformedStyles,
            ...themeName.map((n)=>{
                var _theme_components_n;
                return stylesTransform((_theme_components_n = theme.components[n]) === null || _theme_components_n === void 0 ? void 0 : _theme_components_n.styles, {
                    props,
                    theme,
                    ctx: stylesCtx
                });
            })
        ].filter(Boolean);
    };
    return {
        getTransformedStyles,
        withStylesTransform: !!stylesTransform
    };
}
;
 //# sourceMappingURL=use-transformed-styles.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStyles",
    ()=>useStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$get$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$transformed$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-transformed-styles.mjs [app-client] (ecmascript)");
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
function useStyles(param) {
    let { name, classes, props, stylesCtx, className, style, rootSelector = "root", unstyled, classNames, styles, vars, varsResolver } = param;
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const classNamesPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineClassNamesPrefix"])();
    const withStaticClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineWithStaticClasses"])();
    const headless = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineIsHeadless"])();
    const themeName = (Array.isArray(name) ? name : [
        name
    ]).filter((n)=>n);
    const { withStylesTransform, getTransformedStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$transformed$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStylesTransform"])({
        props,
        stylesCtx,
        themeName
    });
    return (selector, options)=>({
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$class$2d$name$2f$get$2d$class$2d$name$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClassName"])({
                theme,
                options,
                themeName,
                selector,
                classNamesPrefix,
                classNames,
                classes,
                unstyled,
                className,
                rootSelector,
                props,
                stylesCtx,
                withStaticClasses,
                headless,
                transformedStyles: getTransformedStyles([
                    options === null || options === void 0 ? void 0 : options.styles,
                    styles
                ])
            }),
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$get$2d$style$2f$get$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyle"])({
                theme,
                themeName,
                selector,
                options,
                props,
                stylesCtx,
                rootSelector,
                styles,
                style,
                vars,
                varsResolver,
                headless,
                withStylesTransform
            })
        });
}
;
 //# sourceMappingURL=use-styles.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPolymorphicComponent",
    ()=>createPolymorphicComponent
]);
function createPolymorphicComponent(component) {
    return component;
}
;
 //# sourceMappingURL=create-polymorphic-component.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "camelToKebabCase",
    ()=>camelToKebabCase
]);
'use client';
function camelToKebabCase(value) {
    return value.replace(/[A-Z]/g, (letter)=>"-".concat(letter.toLowerCase()));
}
;
 //# sourceMappingURL=camel-to-kebab-case.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cssObjectToString",
    ()=>cssObjectToString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$camel$2d$to$2d$kebab$2d$case$2f$camel$2d$to$2d$kebab$2d$case$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function cssObjectToString(css) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(css).reduce((acc, rule)=>css[rule] !== void 0 ? "".concat(acc).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$camel$2d$to$2d$kebab$2d$case$2f$camel$2d$to$2d$kebab$2d$case$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelToKebabCase"])(rule), ":").concat(css[rule], ";") : acc, "").trim();
}
;
 //# sourceMappingURL=css-object-to-string.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesToString",
    ()=>stylesToString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$css$2d$object$2d$to$2d$string$2f$css$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs [app-client] (ecmascript)");
'use client';
;
function stylesToString(param) {
    let { selector, styles, media, container } = param;
    const baseStyles = styles ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$css$2d$object$2d$to$2d$string$2f$css$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssObjectToString"])(styles) : "";
    const mediaQueryStyles = !Array.isArray(media) ? [] : media.map((item)=>"@media".concat(item.query, "{").concat(selector, "{").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$css$2d$object$2d$to$2d$string$2f$css$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssObjectToString"])(item.styles), "}}"));
    const containerStyles = !Array.isArray(container) ? [] : container.map((item)=>"@container ".concat(item.query, "{").concat(selector, "{").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$css$2d$object$2d$to$2d$string$2f$css$2d$object$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cssObjectToString"])(item.styles), "}}"));
    return "".concat(baseStyles ? "".concat(selector, "{").concat(baseStyles, "}") : "").concat(mediaQueryStyles.join("")).concat(containerStyles.join("")).trim();
}
;
 //# sourceMappingURL=styles-to-string.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InlineStyles",
    ()=>InlineStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$styles$2d$to$2d$string$2f$styles$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs [app-client] (ecmascript)");
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
function InlineStyles(props) {
    const nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineStyleNonce"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
        "data-mantine-styles": "inline",
        nonce: nonce === null || nonce === void 0 ? void 0 : nonce(),
        dangerouslySetInnerHTML: {
            __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$styles$2d$to$2d$string$2f$styles$2d$to$2d$string$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stylesToString"])(props)
        }
    });
}
;
 //# sourceMappingURL=InlineStyles.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNumberLike",
    ()=>isNumberLike
]);
'use client';
function isNumberLike(value) {
    if (typeof value === "number") {
        return true;
    }
    if (typeof value === "string") {
        if (value.startsWith("calc(") || value.startsWith("var(") || value.includes(" ") && value.trim() !== "") {
            return true;
        }
        const cssUnitsRegex = /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
        const values = value.trim().split(/\s+/);
        return values.every((val)=>cssUnitsRegex.test(val));
    }
    return false;
}
;
 //# sourceMappingURL=is-number-like.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBoxMod",
    ()=>getBoxMod,
    "getMod",
    ()=>getMod
]);
'use client';
function transformModKey(key) {
    return key.startsWith("data-") ? key : "data-".concat(key);
}
function getMod(props) {
    return Object.keys(props).reduce((acc, key)=>{
        const value = props[key];
        if (value === void 0 || value === "" || value === false || value === null) {
            return acc;
        }
        acc[transformModKey(key)] = props[key];
        return acc;
    }, {});
}
function getBoxMod(mod) {
    if (!mod) {
        return null;
    }
    if (typeof mod === "string") {
        return {
            [transformModKey(mod)]: true
        };
    }
    if (Array.isArray(mod)) {
        return [
            ...mod
        ].reduce((acc, value)=>({
                ...acc,
                ...getBoxMod(value)
            }), {});
    }
    return getMod(mod);
}
;
 //# sourceMappingURL=get-box-mod.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBoxStyle",
    ()=>getBoxStyle
]);
'use client';
function mergeStyles(styles, theme) {
    if (Array.isArray(styles)) {
        return [
            ...styles
        ].reduce((acc, item)=>({
                ...acc,
                ...mergeStyles(item, theme)
            }), {});
    }
    if (typeof styles === "function") {
        return styles(theme);
    }
    if (styles == null) {
        return {};
    }
    return styles;
}
function getBoxStyle(param) {
    let { theme, style, vars, styleProps } = param;
    const _style = mergeStyles(style, theme);
    const _vars = mergeStyles(vars, theme);
    return {
        ..._style,
        ..._vars,
        ...styleProps
    };
}
;
 //# sourceMappingURL=get-box-style.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractStyleProps",
    ()=>extractStyleProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function extractStyleProps(others) {
    const { m, mx, my, mt, mb, ml, mr, me, ms, p, px, py, pt, pb, pl, pr, pe, ps, bd, bg, c, opacity, ff, fz, fw, lts, ta, lh, fs, tt, td, w, miw, maw, h, mih, mah, bgsz, bgp, bgr, bga, pos, top, left, bottom, right, inset, display, flex, hiddenFrom, visibleFrom, lightHidden, darkHidden, sx, ...rest } = others;
    const styleProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$filter$2d$props$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"])({
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        me,
        ms,
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        pe,
        ps,
        bd,
        bg,
        c,
        opacity,
        ff,
        fz,
        fw,
        lts,
        ta,
        lh,
        fs,
        tt,
        td,
        w,
        miw,
        maw,
        h,
        mih,
        mah,
        bgsz,
        bgp,
        bgr,
        bga,
        pos,
        top,
        left,
        bottom,
        right,
        inset,
        display,
        flex,
        hiddenFrom,
        visibleFrom,
        lightHidden,
        darkHidden,
        sx
    });
    return {
        styleProps,
        rest
    };
}
;
 //# sourceMappingURL=extract-style-props.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STYlE_PROPS_DATA",
    ()=>STYlE_PROPS_DATA
]);
'use client';
const STYlE_PROPS_DATA = {
    m: {
        type: "spacing",
        property: "margin"
    },
    mt: {
        type: "spacing",
        property: "marginTop"
    },
    mb: {
        type: "spacing",
        property: "marginBottom"
    },
    ml: {
        type: "spacing",
        property: "marginLeft"
    },
    mr: {
        type: "spacing",
        property: "marginRight"
    },
    ms: {
        type: "spacing",
        property: "marginInlineStart"
    },
    me: {
        type: "spacing",
        property: "marginInlineEnd"
    },
    mx: {
        type: "spacing",
        property: "marginInline"
    },
    my: {
        type: "spacing",
        property: "marginBlock"
    },
    p: {
        type: "spacing",
        property: "padding"
    },
    pt: {
        type: "spacing",
        property: "paddingTop"
    },
    pb: {
        type: "spacing",
        property: "paddingBottom"
    },
    pl: {
        type: "spacing",
        property: "paddingLeft"
    },
    pr: {
        type: "spacing",
        property: "paddingRight"
    },
    ps: {
        type: "spacing",
        property: "paddingInlineStart"
    },
    pe: {
        type: "spacing",
        property: "paddingInlineEnd"
    },
    px: {
        type: "spacing",
        property: "paddingInline"
    },
    py: {
        type: "spacing",
        property: "paddingBlock"
    },
    bd: {
        type: "border",
        property: "border"
    },
    bg: {
        type: "color",
        property: "background"
    },
    c: {
        type: "textColor",
        property: "color"
    },
    opacity: {
        type: "identity",
        property: "opacity"
    },
    ff: {
        type: "fontFamily",
        property: "fontFamily"
    },
    fz: {
        type: "fontSize",
        property: "fontSize"
    },
    fw: {
        type: "identity",
        property: "fontWeight"
    },
    lts: {
        type: "size",
        property: "letterSpacing"
    },
    ta: {
        type: "identity",
        property: "textAlign"
    },
    lh: {
        type: "lineHeight",
        property: "lineHeight"
    },
    fs: {
        type: "identity",
        property: "fontStyle"
    },
    tt: {
        type: "identity",
        property: "textTransform"
    },
    td: {
        type: "identity",
        property: "textDecoration"
    },
    w: {
        type: "spacing",
        property: "width"
    },
    miw: {
        type: "spacing",
        property: "minWidth"
    },
    maw: {
        type: "spacing",
        property: "maxWidth"
    },
    h: {
        type: "spacing",
        property: "height"
    },
    mih: {
        type: "spacing",
        property: "minHeight"
    },
    mah: {
        type: "spacing",
        property: "maxHeight"
    },
    bgsz: {
        type: "size",
        property: "backgroundSize"
    },
    bgp: {
        type: "identity",
        property: "backgroundPosition"
    },
    bgr: {
        type: "identity",
        property: "backgroundRepeat"
    },
    bga: {
        type: "identity",
        property: "backgroundAttachment"
    },
    pos: {
        type: "identity",
        property: "position"
    },
    top: {
        type: "size",
        property: "top"
    },
    left: {
        type: "size",
        property: "left"
    },
    bottom: {
        type: "size",
        property: "bottom"
    },
    right: {
        type: "size",
        property: "right"
    },
    inset: {
        type: "size",
        property: "inset"
    },
    display: {
        type: "identity",
        property: "display"
    },
    flex: {
        type: "identity",
        property: "flex"
    }
};
;
 //# sourceMappingURL=style-props-data.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colorResolver",
    ()=>colorResolver,
    "textColorResolver",
    ()=>textColorResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
function colorResolver(color, theme) {
    const parsedColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseThemeColor"])({
        color,
        theme
    });
    if (parsedColor.color === "dimmed") {
        return "var(--mantine-color-dimmed)";
    }
    if (parsedColor.color === "bright") {
        return "var(--mantine-color-bright)";
    }
    return parsedColor.variable ? "var(".concat(parsedColor.variable, ")") : parsedColor.color;
}
function textColorResolver(color, theme) {
    const parsedColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$parse$2d$theme$2d$color$2f$parse$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseThemeColor"])({
        color,
        theme
    });
    if (parsedColor.isThemeColor && parsedColor.shade === void 0) {
        return "var(--mantine-color-".concat(parsedColor.color, "-text)");
    }
    return colorResolver(color, theme);
}
;
 //# sourceMappingURL=color-resolver.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "borderResolver",
    ()=>borderResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function borderResolver(value, theme) {
    if (typeof value === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    if (typeof value === "string") {
        const [size, style, ...colorTuple] = value.split(" ").filter((val)=>val.trim() !== "");
        let result = "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(size));
        style && (result += " ".concat(style));
        colorTuple.length > 0 && (result += " ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorResolver"])(colorTuple.join(" "), theme)));
        return result.trim();
    }
    return value;
}
;
 //# sourceMappingURL=border-resolver.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-family-resolver/font-family-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fontFamilyResolver",
    ()=>fontFamilyResolver
]);
'use client';
const values = {
    text: "var(--mantine-font-family)",
    mono: "var(--mantine-font-family-monospace)",
    monospace: "var(--mantine-font-family-monospace)",
    heading: "var(--mantine-font-family-headings)",
    headings: "var(--mantine-font-family-headings)"
};
function fontFamilyResolver(fontFamily) {
    if (typeof fontFamily === "string" && fontFamily in values) {
        return values[fontFamily];
    }
    return fontFamily;
}
;
 //# sourceMappingURL=font-family-resolver.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fontSizeResolver",
    ()=>fontSizeResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const headings = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
];
function fontSizeResolver(value, theme) {
    if (typeof value === "string" && value in theme.fontSizes) {
        return "var(--mantine-font-size-".concat(value, ")");
    }
    if (typeof value === "string" && headings.includes(value)) {
        return "var(--mantine-".concat(value, "-font-size)");
    }
    if (typeof value === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    if (typeof value === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    return value;
}
;
 //# sourceMappingURL=font-size-resolver.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "identityResolver",
    ()=>identityResolver
]);
'use client';
function identityResolver(value) {
    return value;
}
;
 //# sourceMappingURL=identity-resolver.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lineHeightResolver",
    ()=>lineHeightResolver
]);
'use client';
const headings = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
];
function lineHeightResolver(value, theme) {
    if (typeof value === "string" && value in theme.lineHeights) {
        return "var(--mantine-line-height-".concat(value, ")");
    }
    if (typeof value === "string" && headings.includes(value)) {
        return "var(--mantine-".concat(value, "-line-height)");
    }
    return value;
}
;
 //# sourceMappingURL=line-height-resolver.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sizeResolver",
    ()=>sizeResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function sizeResolver(value) {
    if (typeof value === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    return value;
}
;
 //# sourceMappingURL=size-resolver.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "spacingResolver",
    ()=>spacingResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function spacingResolver(value, theme) {
    if (typeof value === "number") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
    }
    if (typeof value === "string") {
        const mod = value.replace("-", "");
        if (!(mod in theme.spacing)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(value);
        }
        const variable = "--mantine-spacing-".concat(mod);
        return value.startsWith("-") ? "calc(var(".concat(variable, ") * -1)") : "var(".concat(variable, ")");
    }
    return value;
}
;
 //# sourceMappingURL=spacing-resolver.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolvers",
    ()=>resolvers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$border$2d$resolver$2f$border$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$font$2d$family$2d$resolver$2f$font$2d$family$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-family-resolver/font-family-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$font$2d$size$2d$resolver$2f$font$2d$size$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$identity$2d$resolver$2f$identity$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$line$2d$height$2d$resolver$2f$line$2d$height$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$size$2d$resolver$2f$size$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$spacing$2d$resolver$2f$spacing$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const resolvers = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorResolver"],
    textColor: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$color$2d$resolver$2f$color$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textColorResolver"],
    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$font$2d$size$2d$resolver$2f$font$2d$size$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontSizeResolver"],
    spacing: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$spacing$2d$resolver$2f$spacing$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacingResolver"],
    identity: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$identity$2d$resolver$2f$identity$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identityResolver"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$size$2d$resolver$2f$size$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeResolver"],
    lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$line$2d$height$2d$resolver$2f$line$2d$height$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lineHeightResolver"],
    fontFamily: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$font$2d$family$2d$resolver$2f$font$2d$family$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontFamilyResolver"],
    border: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$border$2d$resolver$2f$border$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["borderResolver"]
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sortMediaQueries",
    ()=>sortMediaQueries
]);
'use client';
function replaceMediaQuery(query) {
    return query.replace("(min-width: ", "").replace("em)", "");
}
function sortMediaQueries(param) {
    let { media, ...props } = param;
    const breakpoints = Object.keys(media);
    const sortedMedia = breakpoints.sort((a, b)=>Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b))).map((query)=>({
            query,
            styles: media[query]
        }));
    return {
        ...props,
        media: sortedMedia
    };
}
;
 //# sourceMappingURL=sort-media-queries.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseStyleProps",
    ()=>parseStyleProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$parse$2d$style$2d$props$2f$sort$2d$media$2d$queries$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function hasResponsiveStyles(styleProp) {
    if (typeof styleProp !== "object" || styleProp === null) {
        return false;
    }
    const breakpoints = Object.keys(styleProp);
    if (breakpoints.length === 1 && breakpoints[0] === "base") {
        return false;
    }
    return true;
}
function getBaseValue(value) {
    if (typeof value === "object" && value !== null) {
        if ("base" in value) {
            return value.base;
        }
        return void 0;
    }
    return value;
}
function getBreakpointKeys(value) {
    if (typeof value === "object" && value !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(value).filter((key)=>key !== "base");
    }
    return [];
}
function getBreakpointValue(value, breakpoint) {
    if (typeof value === "object" && value !== null && breakpoint in value) {
        return value[breakpoint];
    }
    return value;
}
function parseStyleProps(param) {
    let { styleProps, data, theme } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$parse$2d$style$2d$props$2f$sort$2d$media$2d$queries$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortMediaQueries"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keys"])(styleProps).reduce((acc, styleProp)=>{
        if (styleProp === "hiddenFrom" || styleProp === "visibleFrom" || styleProp === "sx") {
            return acc;
        }
        const propertyData = data[styleProp];
        const properties = Array.isArray(propertyData.property) ? propertyData.property : [
            propertyData.property
        ];
        const baseValue = getBaseValue(styleProps[styleProp]);
        if (!hasResponsiveStyles(styleProps[styleProp])) {
            properties.forEach((property)=>{
                acc.inlineStyles[property] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvers"][propertyData.type](baseValue, theme);
            });
            return acc;
        }
        acc.hasResponsiveStyles = true;
        const breakpoints = getBreakpointKeys(styleProps[styleProp]);
        properties.forEach((property)=>{
            if (baseValue) {
                acc.styles[property] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvers"][propertyData.type](baseValue, theme);
            }
            breakpoints.forEach((breakpoint)=>{
                const bp = "(min-width: ".concat(theme.breakpoints[breakpoint], ")");
                acc.media[bp] = {
                    ...acc.media[bp],
                    [property]: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$resolvers$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvers"][propertyData.type](getBreakpointValue(styleProps[styleProp], breakpoint), theme)
                };
            });
        });
        return acc;
    }, {
        hasResponsiveStyles: false,
        styles: {},
        inlineStyles: {},
        media: {}
    }));
}
;
 //# sourceMappingURL=parse-style-props.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRandomClassName",
    ()=>useRandomClassName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useRandomClassName() {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    return "__m__-".concat(id);
}
;
 //# sourceMappingURL=use-random-classname.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Box",
    ()=>Box
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$create$2d$polymorphic$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$InlineStyles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$number$2d$like$2f$is$2d$number$2d$like$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$box$2d$mod$2f$get$2d$box$2d$mod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$box$2d$style$2f$get$2d$box$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$extract$2d$style$2d$props$2f$extract$2d$style$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$style$2d$props$2d$data$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$parse$2d$style$2d$props$2f$parse$2d$style$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$use$2d$random$2d$classname$2f$use$2d$random$2d$classname$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs [app-client] (ecmascript)");
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
const _Box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { component, style, __vars, className, variant, mod, size, hiddenFrom, visibleFrom, lightHidden, darkHidden, renderRoot, __size, ...others } = param;
    var _useSxTransform;
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const Element = component || "div";
    const { styleProps, rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$extract$2d$style$2d$props$2f$extract$2d$style$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractStyleProps"])(others);
    const useSxTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineSxTransform"])();
    const transformedSx = useSxTransform === null || useSxTransform === void 0 ? void 0 : (_useSxTransform = useSxTransform()) === null || _useSxTransform === void 0 ? void 0 : _useSxTransform(styleProps.sx);
    const responsiveClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$use$2d$random$2d$classname$2f$use$2d$random$2d$classname$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRandomClassName"])();
    const parsedStyleProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$parse$2d$style$2d$props$2f$parse$2d$style$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStyleProps"])({
        styleProps,
        theme,
        data: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$style$2d$props$2f$style$2d$props$2d$data$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STYlE_PROPS_DATA"]
    });
    const props = {
        ref,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$box$2d$style$2f$get$2d$box$2d$style$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBoxStyle"])({
            theme,
            style,
            vars: __vars,
            styleProps: parsedStyleProps.inlineStyles
        }),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, transformedSx, {
            [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
            "mantine-light-hidden": lightHidden,
            "mantine-dark-hidden": darkHidden,
            ["mantine-hidden-from-".concat(hiddenFrom)]: hiddenFrom,
            ["mantine-visible-from-".concat(visibleFrom)]: visibleFrom
        }),
        "data-variant": variant,
        "data-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$number$2d$like$2f$is$2d$number$2d$like$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumberLike"])(size) ? void 0 : size || void 0,
        size: __size,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$get$2d$box$2d$mod$2f$get$2d$box$2d$mod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBoxMod"])(mod),
        ...rest
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$InlineStyles$2f$InlineStyles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineStyles"], {
                selector: ".".concat(responsiveClassName),
                styles: parsedStyleProps.styles,
                media: parsedStyleProps.media
            }),
            typeof renderRoot === "function" ? renderRoot(props) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Element, {
                ...props
            })
        ]
    });
});
_Box.displayName = "@mantine/core/Box";
const Box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$create$2d$polymorphic$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPolymorphicComponent"])(_Box);
;
 //# sourceMappingURL=Box.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "factory",
    ()=>factory,
    "getWithProps",
    ()=>getWithProps,
    "identity",
    ()=>identity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function identity(value) {
    return value;
}
function getWithProps(Component) {
    const _Component = Component;
    return (fixedProps)=>{
        const Extended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_Component, {
                ...fixedProps,
                ...props,
                ref
            }));
        Extended.extend = _Component.extend;
        Extended.displayName = "WithProps(".concat(_Component.displayName, ")");
        return Extended;
    };
}
function factory(ui) {
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(ui);
    Component.extend = identity;
    Component.withProps = (fixedProps)=>{
        const Extended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
                ...fixedProps,
                ...props,
                ref
            }));
        Extended.extend = Component.extend;
        Extended.displayName = "WithProps(".concat(Component.displayName, ")");
        return Extended;
    };
    return Component;
}
;
 //# sourceMappingURL=factory.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSafeContext",
    ()=>createSafeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function createSafeContext(errorMessage) {
    const Context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
    const useSafeContext = ()=>{
        const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
        if (ctx === null) {
            throw new Error(errorMessage);
        }
        return ctx;
    };
    const Provider = (param)=>{
        let { children, value } = param;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    };
    return [
        Provider,
        useSafeContext
    ];
}
;
 //# sourceMappingURL=create-safe-context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaProvider",
    ()=>ScrollAreaProvider,
    "useScrollAreaContext",
    ()=>useScrollAreaContext
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
const [ScrollAreaProvider, useScrollAreaContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSafeContext"])("ScrollArea.Root component was not found in tree");
;
 //# sourceMappingURL=ScrollArea.context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/use-resize-observer.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResizeObserver",
    ()=>useResizeObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$callback$2d$ref$2f$use$2d$callback$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-callback-ref/use-callback-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs [app-client] (ecmascript)");
'use client';
;
function useResizeObserver(element, onResize) {
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$callback$2d$ref$2f$use$2d$callback$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onResize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicEffect"])({
        "useResizeObserver.useIsomorphicEffect": ()=>{
            let rAF = 0;
            if (element) {
                const resizeObserver = new ResizeObserver({
                    "useResizeObserver.useIsomorphicEffect": ()=>{
                        cancelAnimationFrame(rAF);
                        rAF = window.requestAnimationFrame(handleResize);
                    }
                }["useResizeObserver.useIsomorphicEffect"]);
                resizeObserver.observe(element);
                return ({
                    "useResizeObserver.useIsomorphicEffect": ()=>{
                        window.cancelAnimationFrame(rAF);
                        resizeObserver.unobserve(element);
                    }
                })["useResizeObserver.useIsomorphicEffect"];
            }
            return void 0;
        }
    }["useResizeObserver.useIsomorphicEffect"], [
        element,
        handleResize
    ]);
}
;
 //# sourceMappingURL=use-resize-observer.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaCorner/ScrollAreaCorner.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Corner",
    ()=>Corner,
    "ScrollAreaCorner",
    ()=>ScrollAreaCorner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$use$2d$resize$2d$observer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/use-resize-observer.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
const Corner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { style, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAreaContext"])();
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const hasSize = Boolean(width && height);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$use$2d$resize$2d$observer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResizeObserver"])(ctx.scrollbarX, {
        "Corner.useResizeObserver": ()=>{
            var _ctx_scrollbarX;
            const h = ((_ctx_scrollbarX = ctx.scrollbarX) === null || _ctx_scrollbarX === void 0 ? void 0 : _ctx_scrollbarX.offsetHeight) || 0;
            ctx.onCornerHeightChange(h);
            setHeight(h);
        }
    }["Corner.useResizeObserver"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$use$2d$resize$2d$observer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResizeObserver"])(ctx.scrollbarY, {
        "Corner.useResizeObserver": ()=>{
            var _ctx_scrollbarY;
            const w = ((_ctx_scrollbarY = ctx.scrollbarY) === null || _ctx_scrollbarY === void 0 ? void 0 : _ctx_scrollbarY.offsetWidth) || 0;
            ctx.onCornerWidthChange(w);
            setWidth(w);
        }
    }["Corner.useResizeObserver"]);
    return hasSize ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ...others,
        ref,
        style: {
            ...style,
            width,
            height
        }
    }) : null;
});
const ScrollAreaCorner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAreaContext"])();
    const hasBothScrollbarsVisible = Boolean(ctx.scrollbarX && ctx.scrollbarY);
    const hasCorner = ctx.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Corner, {
        ...props,
        ref
    }) : null;
});
;
 //# sourceMappingURL=ScrollAreaCorner.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaRoot/ScrollAreaRoot.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaRoot",
    ()=>ScrollAreaRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs [app-client] (ecmascript)");
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
const defaultProps = {
    scrollHideDelay: 1e3,
    type: "hover"
};
const ScrollAreaRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ScrollAreaRoot", defaultProps, _props);
    const { type, scrollHideDelay, scrollbars, ...others } = props;
    const [scrollArea, setScrollArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scrollbarX, setScrollbarX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scrollbarY, setScrollbarY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cornerWidth, setCornerWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cornerHeight, setCornerHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRef"])(ref, {
        "ScrollAreaRoot.useMergedRef[rootRef]": (node)=>setScrollArea(node)
    }["ScrollAreaRoot.useMergedRef[rootRef]"]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaProvider"], {
        value: {
            type,
            scrollHideDelay,
            scrollArea,
            viewport,
            onViewportChange: setViewport,
            content,
            onContentChange: setContent,
            scrollbarX,
            onScrollbarXChange: setScrollbarX,
            scrollbarXEnabled,
            onScrollbarXEnabledChange: setScrollbarXEnabled,
            scrollbarY,
            onScrollbarYChange: setScrollbarY,
            scrollbarYEnabled,
            onScrollbarYEnabledChange: setScrollbarYEnabled,
            onCornerWidthChange: setCornerWidth,
            onCornerHeightChange: setCornerHeight
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            ...others,
            ref: rootRef,
            __vars: {
                "--sa-corner-width": scrollbars !== "xy" ? "0px" : "".concat(cornerWidth, "px"),
                "--sa-corner-height": scrollbars !== "xy" ? "0px" : "".concat(cornerHeight, "px")
            }
        })
    });
});
ScrollAreaRoot.displayName = "@mantine/core/ScrollAreaRoot";
;
 //# sourceMappingURL=ScrollAreaRoot.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-ratio.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getThumbRatio",
    ()=>getThumbRatio
]);
'use client';
function getThumbRatio(viewportSize, contentSize) {
    const ratio = viewportSize / contentSize;
    return Number.isNaN(ratio) ? 0 : ratio;
}
;
 //# sourceMappingURL=get-thumb-ratio.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-size.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getThumbSize",
    ()=>getThumbSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$ratio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-ratio.mjs [app-client] (ecmascript)");
'use client';
;
function getThumbSize(sizes) {
    const ratio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$ratio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThumbRatio"])(sizes.viewport, sizes.content);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
    return Math.max(thumbSize, 18);
}
;
 //# sourceMappingURL=get-thumb-size.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/linear-scale.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "linearScale",
    ()=>linearScale
]);
'use client';
function linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) {
            return output[0];
        }
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
;
 //# sourceMappingURL=linear-scale.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-offset-from-scroll.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getThumbOffsetFromScroll",
    ()=>getThumbOffsetFromScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$linear$2d$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/linear-scale.mjs [app-client] (ecmascript)");
'use client';
;
;
function clamp(value, param) {
    let [min, max] = param;
    return Math.min(max, Math.max(min, value));
}
function getThumbOffsetFromScroll(scrollPos, sizes) {
    let dir = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "ltr";
    const thumbSizePx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThumbSize"])(sizes);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const scrollbar = sizes.scrollbar.size - scrollbarPadding;
    const maxScrollPos = sizes.content - sizes.viewport;
    const maxThumbPos = scrollbar - thumbSizePx;
    const scrollClampRange = dir === "ltr" ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange);
    const interpolate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$linear$2d$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearScale"])([
        0,
        maxScrollPos
    ], [
        0,
        maxThumbPos
    ]);
    return interpolate(scrollWithoutMomentum);
}
;
 //# sourceMappingURL=get-thumb-offset-from-scroll.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-scroll-position-from-pointer.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getScrollPositionFromPointer",
    ()=>getScrollPositionFromPointer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$linear$2d$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/linear-scale.mjs [app-client] (ecmascript)");
'use client';
;
;
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes) {
    let dir = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "ltr";
    const thumbSizePx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThumbSize"])(sizes);
    const thumbCenter = thumbSizePx / 2;
    const offset = pointerOffset || thumbCenter;
    const thumbOffsetFromEnd = thumbSizePx - offset;
    const minPointerPos = sizes.scrollbar.paddingStart + offset;
    const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
    const maxScrollPos = sizes.content - sizes.viewport;
    const scrollRange = dir === "ltr" ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const interpolate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$linear$2d$scale$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearScale"])([
        minPointerPos,
        maxPointerPos
    ], scrollRange);
    return interpolate(pointerPos);
}
;
 //# sourceMappingURL=get-scroll-position-from-pointer.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/is-scrolling-within-scrollbar-bounds.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isScrollingWithinScrollbarBounds",
    ()=>isScrollingWithinScrollbarBounds
]);
'use client';
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
    return scrollPos > 0 && scrollPos < maxScrollPos;
}
;
 //# sourceMappingURL=is-scrolling-within-scrollbar-bounds.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/to-int.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toInt",
    ()=>toInt
]);
'use client';
function toInt(value) {
    return value ? parseInt(value, 10) : 0;
}
;
 //# sourceMappingURL=to-int.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/compose-event-handlers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "composeEventHandlers",
    ()=>composeEventHandlers
]);
'use client';
function composeEventHandlers(originalEventHandler, ourEventHandler) {
    let { checkForDefaultPrevented = true } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return (event)=>{
        originalEventHandler === null || originalEventHandler === void 0 ? void 0 : originalEventHandler(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
        }
    };
}
;
 //# sourceMappingURL=compose-event-handlers.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollbarProvider",
    ()=>ScrollbarProvider,
    "useScrollbarContext",
    ()=>useScrollbarContext
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
const [ScrollbarProvider, useScrollbarContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSafeContext"])("ScrollAreaScrollbar was not found in tree");
;
 //# sourceMappingURL=Scrollbar.context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scrollbar",
    ()=>Scrollbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$callback$2d$ref$2f$use$2d$callback$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-callback-ref/use-callback-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$debounced$2d$callback$2f$use$2d$debounced$2d$callback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-debounced-callback/use-debounced-callback.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$use$2d$resize$2d$observer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/use-resize-observer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$compose$2d$event$2d$handlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/compose-event-handlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$Scrollbar$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.context.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const Scrollbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
    const { sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAreaContext"])();
    const [scrollbar, setScrollbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRef"])(forwardedRef, {
        "Scrollbar.useMergedRef[composeRefs]": (node)=>setScrollbar(node)
    }["Scrollbar.useMergedRef[composeRefs]"]);
    const rectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevWebkitUserSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const { viewport } = context;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$callback$2d$ref$2f$use$2d$callback$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onWheelScroll);
    const handleThumbPositionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$callback$2d$ref$2f$use$2d$callback$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPositionChange);
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$debounced$2d$callback$2f$use$2d$debounced$2d$callback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"])(onResize, 10);
    const handleDragScroll = (event)=>{
        if (rectRef.current) {
            const x = event.clientX - rectRef.current.left;
            const y = event.clientY - rectRef.current.top;
            onDragScroll({
                x,
                y
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Scrollbar.useEffect": ()=>{
            const handleWheel = {
                "Scrollbar.useEffect.handleWheel": (event)=>{
                    const element = event.target;
                    const isScrollbarWheel = scrollbar === null || scrollbar === void 0 ? void 0 : scrollbar.contains(element);
                    if (isScrollbarWheel) {
                        handleWheelScroll(event, maxScrollPos);
                    }
                }
            }["Scrollbar.useEffect.handleWheel"];
            document.addEventListener("wheel", handleWheel, {
                passive: false
            });
            return ({
                "Scrollbar.useEffect": ()=>document.removeEventListener("wheel", handleWheel, {
                        passive: false
                    })
            })["Scrollbar.useEffect"];
        }
    }["Scrollbar.useEffect"], [
        viewport,
        scrollbar,
        maxScrollPos,
        handleWheelScroll
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(handleThumbPositionChange, [
        sizes,
        handleThumbPositionChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$use$2d$resize$2d$observer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResizeObserver"])(scrollbar, handleResize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$use$2d$resize$2d$observer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResizeObserver"])(context.content, handleResize);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$Scrollbar$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollbarProvider"], {
        value: {
            scrollbar,
            hasThumb,
            onThumbChange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$callback$2d$ref$2f$use$2d$callback$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbChange),
            onThumbPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$callback$2d$ref$2f$use$2d$callback$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPointerUp),
            onThumbPositionChange: handleThumbPositionChange,
            onThumbPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$callback$2d$ref$2f$use$2d$callback$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPointerDown)
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ...scrollbarProps,
            ref: composeRefs,
            "data-mantine-scrollbar": true,
            style: {
                position: "absolute",
                ...scrollbarProps.style
            },
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$compose$2d$event$2d$handlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, (event)=>{
                event.preventDefault();
                const mainPointer = 0;
                if (event.button === mainPointer) {
                    const element = event.target;
                    element.setPointerCapture(event.pointerId);
                    rectRef.current = scrollbar.getBoundingClientRect();
                    prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
                    document.body.style.webkitUserSelect = "none";
                    handleDragScroll(event);
                }
            }),
            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$compose$2d$event$2d$handlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, handleDragScroll),
            onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$compose$2d$event$2d$handlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, (event)=>{
                const element = event.target;
                if (element.hasPointerCapture(event.pointerId)) {
                    event.preventDefault();
                    element.releasePointerCapture(event.pointerId);
                }
            }),
            onLostPointerCapture: ()=>{
                document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
                rectRef.current = null;
            }
        })
    });
});
;
 //# sourceMappingURL=Scrollbar.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollbarX.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbarX",
    ()=>ScrollAreaScrollbarX
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$is$2d$scrolling$2d$within$2d$scrollbar$2d$bounds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/is-scrolling-within-scrollbar-bounds.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$to$2d$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/to-int.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$Scrollbar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const ScrollAreaScrollbarX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
    const { sizes, onSizesChange, style, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAreaContext"])();
    const [computedStyle, setComputedStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRef"])(forwardedRef, ref, ctx.onScrollbarXChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollAreaScrollbarX.useEffect": ()=>{
            if (ref.current) {
                setComputedStyle(getComputedStyle(ref.current));
            }
        }
    }["ScrollAreaScrollbarX.useEffect"], [
        ref
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$Scrollbar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scrollbar"], {
        "data-orientation": "horizontal",
        ...others,
        ref: composeRefs,
        sizes,
        style: {
            ...style,
            ["--sa-thumb-width"]: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThumbSize"])(sizes), "px")
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos)=>{
            if (ctx.viewport) {
                const scrollPos = ctx.viewport.scrollLeft + event.deltaX;
                props.onWheelScroll(scrollPos);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$is$2d$scrolling$2d$within$2d$scrollbar$2d$bounds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScrollingWithinScrollbarBounds"])(scrollPos, maxScrollPos)) {
                    event.preventDefault();
                }
            }
        },
        onResize: ()=>{
            if (ref.current && ctx.viewport && computedStyle) {
                onSizesChange({
                    content: ctx.viewport.scrollWidth,
                    viewport: ctx.viewport.offsetWidth,
                    scrollbar: {
                        size: ref.current.clientWidth,
                        paddingStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$to$2d$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toInt"])(computedStyle.paddingLeft),
                        paddingEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$to$2d$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toInt"])(computedStyle.paddingRight)
                    }
                });
            }
        }
    });
});
ScrollAreaScrollbarX.displayName = "@mantine/core/ScrollAreaScrollbarX";
;
 //# sourceMappingURL=ScrollbarX.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollbarY.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbarY",
    ()=>ScrollAreaScrollbarY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$is$2d$scrolling$2d$within$2d$scrollbar$2d$bounds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/is-scrolling-within-scrollbar-bounds.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$to$2d$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/to-int.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$Scrollbar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const ScrollAreaScrollbarY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
    const { sizes, onSizesChange, style, ...others } = props;
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAreaContext"])();
    const [computedStyle, setComputedStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRef"])(forwardedRef, ref, context.onScrollbarYChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollAreaScrollbarY.useEffect": ()=>{
            if (ref.current) {
                setComputedStyle(window.getComputedStyle(ref.current));
            }
        }
    }["ScrollAreaScrollbarY.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$Scrollbar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scrollbar"], {
        ...others,
        "data-orientation": "vertical",
        ref: composeRefs,
        sizes,
        style: {
            ["--sa-thumb-height"]: "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThumbSize"])(sizes), "px"),
            ...style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollTop + event.deltaY;
                props.onWheelScroll(scrollPos);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$is$2d$scrolling$2d$within$2d$scrollbar$2d$bounds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScrollingWithinScrollbarBounds"])(scrollPos, maxScrollPos)) {
                    event.preventDefault();
                }
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) {
                onSizesChange({
                    content: context.viewport.scrollHeight,
                    viewport: context.viewport.offsetHeight,
                    scrollbar: {
                        size: ref.current.clientHeight,
                        paddingStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$to$2d$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toInt"])(computedStyle.paddingTop),
                        paddingEnd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$to$2d$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toInt"])(computedStyle.paddingBottom)
                    }
                });
            }
        }
    });
});
ScrollAreaScrollbarY.displayName = "@mantine/core/ScrollAreaScrollbarY";
;
 //# sourceMappingURL=ScrollbarY.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbarVisible",
    ()=>ScrollAreaScrollbarVisible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$ratio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-ratio.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$offset$2d$from$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-offset-from-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$scroll$2d$position$2d$from$2d$pointer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/get-scroll-position-from-pointer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollbarX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollbarX.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollbarY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollbarY.mjs [app-client] (ecmascript)");
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
const ScrollAreaScrollbarVisible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
    const { orientation = "vertical", ...scrollbarProps } = props;
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"])();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAreaContext"])();
    const thumbRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerOffsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [sizes, setSizes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        content: 0,
        viewport: 0,
        scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
        }
    });
    const thumbRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$ratio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThumbRatio"])(sizes.viewport, sizes.content);
    const commonProps = {
        ...scrollbarProps,
        sizes,
        onSizesChange: setSizes,
        hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
        onThumbChange: (thumb)=>{
            thumbRef.current = thumb;
        },
        onThumbPointerUp: ()=>{
            pointerOffsetRef.current = 0;
        },
        onThumbPointerDown: (pointerPos)=>{
            pointerOffsetRef.current = pointerPos;
        }
    };
    const getScrollPosition = (pointerPos, direction)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$scroll$2d$position$2d$from$2d$pointer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScrollPositionFromPointer"])(pointerPos, pointerOffsetRef.current, sizes, direction);
    if (orientation === "horizontal") {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollbarX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarX"], {
            ...commonProps,
            ref: forwardedRef,
            onThumbPositionChange: ()=>{
                if (context.viewport && thumbRef.current) {
                    const scrollPos = context.viewport.scrollLeft;
                    const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$offset$2d$from$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThumbOffsetFromScroll"])(scrollPos, sizes, dir);
                    thumbRef.current.style.transform = "translate3d(".concat(offset, "px, 0, 0)");
                }
            },
            onWheelScroll: (scrollPos)=>{
                if (context.viewport) {
                    context.viewport.scrollLeft = scrollPos;
                }
            },
            onDragScroll: (pointerPos)=>{
                if (context.viewport) {
                    context.viewport.scrollLeft = getScrollPosition(pointerPos, dir);
                }
            }
        });
    }
    if (orientation === "vertical") {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollbarY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarY"], {
            ...commonProps,
            ref: forwardedRef,
            onThumbPositionChange: ()=>{
                if (context.viewport && thumbRef.current) {
                    const scrollPos = context.viewport.scrollTop;
                    const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$get$2d$thumb$2d$offset$2d$from$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThumbOffsetFromScroll"])(scrollPos, sizes);
                    if (sizes.scrollbar.size === 0) {
                        thumbRef.current.style.setProperty("--thumb-opacity", "0");
                    } else {
                        thumbRef.current.style.setProperty("--thumb-opacity", "1");
                    }
                    thumbRef.current.style.transform = "translate3d(0, ".concat(offset, "px, 0)");
                }
            },
            onWheelScroll: (scrollPos)=>{
                if (context.viewport) {
                    context.viewport.scrollTop = scrollPos;
                }
            },
            onDragScroll: (pointerPos)=>{
                if (context.viewport) {
                    context.viewport.scrollTop = getScrollPosition(pointerPos);
                }
            }
        });
    }
    return null;
});
ScrollAreaScrollbarVisible.displayName = "@mantine/core/ScrollAreaScrollbarVisible";
;
 //# sourceMappingURL=ScrollAreaScrollbarVisible.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarAuto.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbarAuto",
    ()=>ScrollAreaScrollbarAuto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$debounced$2d$callback$2f$use$2d$debounced$2d$callback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-debounced-callback/use-debounced-callback.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$use$2d$resize$2d$observer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/use-resize-observer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const ScrollAreaScrollbarAuto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAreaContext"])();
    const { forceMount, ...scrollbarProps } = props;
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isHorizontal = props.orientation === "horizontal";
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$debounced$2d$callback$2f$use$2d$debounced$2d$callback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"])({
        "ScrollAreaScrollbarAuto.useDebouncedCallback[handleResize]": ()=>{
            if (context.viewport) {
                const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
                const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
                setVisible(isHorizontal ? isOverflowX : isOverflowY);
            }
        }
    }["ScrollAreaScrollbarAuto.useDebouncedCallback[handleResize]"], 10);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$use$2d$resize$2d$observer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResizeObserver"])(context.viewport, handleResize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$use$2d$resize$2d$observer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResizeObserver"])(context.content, handleResize);
    if (forceMount || visible) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarVisible"], {
            "data-state": visible ? "visible" : "hidden",
            ...scrollbarProps,
            ref
        });
    }
    return null;
});
ScrollAreaScrollbarAuto.displayName = "@mantine/core/ScrollAreaScrollbarAuto";
;
 //# sourceMappingURL=ScrollAreaScrollbarAuto.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarHover.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbarHover",
    ()=>ScrollAreaScrollbarHover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarAuto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarAuto.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
const ScrollAreaScrollbarHover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAreaContext"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollAreaScrollbarHover.useEffect": ()=>{
            const { scrollArea } = context;
            let hideTimer = 0;
            if (scrollArea) {
                const handlePointerEnter = {
                    "ScrollAreaScrollbarHover.useEffect.handlePointerEnter": ()=>{
                        window.clearTimeout(hideTimer);
                        setVisible(true);
                    }
                }["ScrollAreaScrollbarHover.useEffect.handlePointerEnter"];
                const handlePointerLeave = {
                    "ScrollAreaScrollbarHover.useEffect.handlePointerLeave": ()=>{
                        hideTimer = window.setTimeout({
                            "ScrollAreaScrollbarHover.useEffect.handlePointerLeave": ()=>setVisible(false)
                        }["ScrollAreaScrollbarHover.useEffect.handlePointerLeave"], context.scrollHideDelay);
                    }
                }["ScrollAreaScrollbarHover.useEffect.handlePointerLeave"];
                scrollArea.addEventListener("pointerenter", handlePointerEnter);
                scrollArea.addEventListener("pointerleave", handlePointerLeave);
                return ({
                    "ScrollAreaScrollbarHover.useEffect": ()=>{
                        window.clearTimeout(hideTimer);
                        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
                        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
                    }
                })["ScrollAreaScrollbarHover.useEffect"];
            }
            return void 0;
        }
    }["ScrollAreaScrollbarHover.useEffect"], [
        context.scrollArea,
        context.scrollHideDelay
    ]);
    if (forceMount || visible) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarAuto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarAuto"], {
            "data-state": visible ? "visible" : "hidden",
            ...scrollbarProps,
            ref
        });
    }
    return null;
});
ScrollAreaScrollbarHover.displayName = "@mantine/core/ScrollAreaScrollbarHover";
;
 //# sourceMappingURL=ScrollAreaScrollbarHover.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarScroll.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbarScroll",
    ()=>ScrollAreaScrollbarScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$debounced$2d$callback$2f$use$2d$debounced$2d$callback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-debounced-callback/use-debounced-callback.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$compose$2d$event$2d$handlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/compose-event-handlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const ScrollAreaScrollbarScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, red)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAreaContext"])();
    const isHorizontal = props.orientation === "horizontal";
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hidden");
    const debounceScrollEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$debounced$2d$callback$2f$use$2d$debounced$2d$callback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"])({
        "ScrollAreaScrollbarScroll.useDebouncedCallback[debounceScrollEnd]": ()=>setState("idle")
    }["ScrollAreaScrollbarScroll.useDebouncedCallback[debounceScrollEnd]"], 100);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollAreaScrollbarScroll.useEffect": ()=>{
            if (state === "idle") {
                const hideTimer = window.setTimeout({
                    "ScrollAreaScrollbarScroll.useEffect.hideTimer": ()=>setState("hidden")
                }["ScrollAreaScrollbarScroll.useEffect.hideTimer"], context.scrollHideDelay);
                return ({
                    "ScrollAreaScrollbarScroll.useEffect": ()=>window.clearTimeout(hideTimer)
                })["ScrollAreaScrollbarScroll.useEffect"];
            }
            return void 0;
        }
    }["ScrollAreaScrollbarScroll.useEffect"], [
        state,
        context.scrollHideDelay
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollAreaScrollbarScroll.useEffect": ()=>{
            const { viewport } = context;
            const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
            if (viewport) {
                let prevScrollPos = viewport[scrollDirection];
                const handleScroll = {
                    "ScrollAreaScrollbarScroll.useEffect.handleScroll": ()=>{
                        const scrollPos = viewport[scrollDirection];
                        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
                        if (hasScrollInDirectionChanged) {
                            setState("scrolling");
                            debounceScrollEnd();
                        }
                        prevScrollPos = scrollPos;
                    }
                }["ScrollAreaScrollbarScroll.useEffect.handleScroll"];
                viewport.addEventListener("scroll", handleScroll);
                return ({
                    "ScrollAreaScrollbarScroll.useEffect": ()=>viewport.removeEventListener("scroll", handleScroll)
                })["ScrollAreaScrollbarScroll.useEffect"];
            }
            return void 0;
        }
    }["ScrollAreaScrollbarScroll.useEffect"], [
        context.viewport,
        isHorizontal,
        debounceScrollEnd
    ]);
    if (forceMount || state !== "hidden") {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarVisible"], {
            "data-state": state === "hidden" ? "hidden" : "visible",
            ...scrollbarProps,
            ref: red,
            onPointerEnter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$compose$2d$event$2d$handlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerEnter, ()=>setState("interacting")),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$compose$2d$event$2d$handlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, ()=>setState("idle"))
        });
    }
    return null;
});
;
 //# sourceMappingURL=ScrollAreaScrollbarScroll.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbar.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaScrollbar",
    ()=>ScrollAreaScrollbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarAuto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarAuto.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarScroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarScroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const ScrollAreaScrollbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAreaContext"])();
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollAreaScrollbar.useEffect": ()=>{
            isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
            return ({
                "ScrollAreaScrollbar.useEffect": ()=>{
                    isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
                }
            })["ScrollAreaScrollbar.useEffect"];
        }
    }["ScrollAreaScrollbar.useEffect"], [
        isHorizontal,
        onScrollbarXEnabledChange,
        onScrollbarYEnabledChange
    ]);
    return context.type === "hover" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarHover"], {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "scroll" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarScroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarScroll"], {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "auto" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarAuto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarAuto"], {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "always" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbarVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbarVisible"], {
        ...scrollbarProps,
        ref: forwardedRef
    }) : null;
});
ScrollAreaScrollbar.displayName = "@mantine/core/ScrollAreaScrollbar";
;
 //# sourceMappingURL=ScrollAreaScrollbar.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/add-unlinked-scroll-listener.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUnlinkedScrollListener",
    ()=>addUnlinkedScrollListener
]);
'use client';
function addUnlinkedScrollListener(node) {
    let handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ()=>{};
    let prevPosition = {
        left: node.scrollLeft,
        top: node.scrollTop
    };
    let rAF = 0;
    (function loop() {
        const position = {
            left: node.scrollLeft,
            top: node.scrollTop
        };
        const isHorizontalScroll = prevPosition.left !== position.left;
        const isVerticalScroll = prevPosition.top !== position.top;
        if (isHorizontalScroll || isVerticalScroll) {
            handler();
        }
        prevPosition = position;
        rAF = window.requestAnimationFrame(loop);
    })();
    return ()=>window.cancelAnimationFrame(rAF);
}
;
 //# sourceMappingURL=add-unlinked-scroll-listener.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaThumb/ScrollAreaThumb.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaThumb",
    ()=>ScrollAreaThumb,
    "Thumb",
    ()=>Thumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$debounced$2d$callback$2f$use$2d$debounced$2d$callback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-debounced-callback/use-debounced-callback.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$Scrollbar$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$compose$2d$event$2d$handlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/compose-event-handlers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$add$2d$unlinked$2d$scroll$2d$listener$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/add-unlinked-scroll-listener.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const Thumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
    const { style, ...others } = props;
    const scrollAreaContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAreaContext"])();
    const scrollbarContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$Scrollbar$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollbarContext"])();
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRef"])(forwardedRef, {
        "Thumb.useMergedRef[composedRef]": (node)=>scrollbarContext.onThumbChange(node)
    }["Thumb.useMergedRef[composedRef]"]);
    const removeUnlinkedScrollListenerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    const debounceScrollEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$debounced$2d$callback$2f$use$2d$debounced$2d$callback$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"])({
        "Thumb.useDebouncedCallback[debounceScrollEnd]": ()=>{
            if (removeUnlinkedScrollListenerRef.current) {
                removeUnlinkedScrollListenerRef.current();
                removeUnlinkedScrollListenerRef.current = void 0;
            }
        }
    }["Thumb.useDebouncedCallback[debounceScrollEnd]"], 100);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Thumb.useEffect": ()=>{
            const { viewport } = scrollAreaContext;
            if (viewport) {
                const handleScroll = {
                    "Thumb.useEffect.handleScroll": ()=>{
                        debounceScrollEnd();
                        if (!removeUnlinkedScrollListenerRef.current) {
                            const listener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$add$2d$unlinked$2d$scroll$2d$listener$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addUnlinkedScrollListener"])(viewport, onThumbPositionChange);
                            removeUnlinkedScrollListenerRef.current = listener;
                            onThumbPositionChange();
                        }
                    }
                }["Thumb.useEffect.handleScroll"];
                onThumbPositionChange();
                viewport.addEventListener("scroll", handleScroll);
                return ({
                    "Thumb.useEffect": ()=>viewport.removeEventListener("scroll", handleScroll)
                })["Thumb.useEffect"];
            }
            return void 0;
        }
    }["Thumb.useEffect"], [
        scrollAreaContext.viewport,
        debounceScrollEnd,
        onThumbPositionChange
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...others,
        ref: composedRef,
        style: {
            width: "var(--sa-thumb-width)",
            height: "var(--sa-thumb-height)",
            ...style
        },
        onPointerDownCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$compose$2d$event$2d$handlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownCapture, (event)=>{
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({
                x,
                y
            });
        }),
        onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$compose$2d$event$2d$handlers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, scrollbarContext.onThumbPointerUp)
    });
});
Thumb.displayName = "@mantine/core/ScrollAreaThumb";
const ScrollAreaThumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, forwardedRef)=>{
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$Scrollbar$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollbarContext"])();
    if (forceMount || scrollbarContext.hasThumb) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Thumb, {
            ref: forwardedRef,
            ...thumbProps
        });
    }
    return null;
});
ScrollAreaThumb.displayName = "@mantine/core/ScrollAreaThumb";
;
 //# sourceMappingURL=ScrollAreaThumb.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaViewport/ScrollAreaViewport.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollAreaViewport",
    ()=>ScrollAreaViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs [app-client] (ecmascript)");
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
const ScrollAreaViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { children, style, ...others } = param;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAreaContext"])();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRef"])(ref, ctx.onViewportChange);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ...others,
        ref: rootRef,
        style: {
            overflowX: ctx.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: ctx.scrollbarYEnabled ? "scroll" : "hidden",
            ...style
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            style: {
                minWidth: "100%"
            },
            ref: ctx.onContentChange,
            children
        })
    });
});
ScrollAreaViewport.displayName = "@mantine/core/ScrollAreaViewport";
;
 //# sourceMappingURL=ScrollAreaViewport.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_d57069b5",
    "viewport": "m_c0783ff9",
    "viewportInner": "m_f8f631dd",
    "scrollbar": "m_c44ba933",
    "thumb": "m_d8b5e363",
    "corner": "m_21657268"
};
;
 //# sourceMappingURL=ScrollArea.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollAreaAutosize",
    ()=>ScrollAreaAutosize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaCorner$2f$ScrollAreaCorner$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaCorner/ScrollAreaCorner.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaRoot$2f$ScrollAreaRoot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaRoot/ScrollAreaRoot.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbar.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaThumb$2f$ScrollAreaThumb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaThumb/ScrollAreaThumb.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaViewport$2f$ScrollAreaViewport$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaViewport/ScrollAreaViewport.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.module.css.mjs [app-client] (ecmascript)");
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
    scrollHideDelay: 1e3,
    type: "hover",
    scrollbars: "xy"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, param)=>{
    let { scrollbarSize, overscrollBehavior } = param;
    return {
        root: {
            "--scrollarea-scrollbar-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(scrollbarSize),
            "--scrollarea-over-scroll-behavior": overscrollBehavior
        }
    };
});
const ScrollArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ScrollArea", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, scrollbarSize, vars, type, scrollHideDelay, viewportProps, viewportRef, onScrollPositionChange, children, offsetScrollbars, scrollbars, onBottomReached, onTopReached, overscrollBehavior, ...others } = props;
    const [scrollbarHovered, setScrollbarHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [verticalThumbVisible, setVerticalThumbVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [horizontalThumbVisible, setHorizontalThumbVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "ScrollArea",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    const localViewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const combinedViewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMergeRefs"])([
        viewportRef,
        localViewportRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollArea.useEffect": ()=>{
            if (!localViewportRef.current) {
                return;
            }
            if (offsetScrollbars !== "present") {
                return;
            }
            const element = localViewportRef.current;
            const observer = new ResizeObserver({
                "ScrollArea.useEffect": ()=>{
                    const { scrollHeight, clientHeight, scrollWidth, clientWidth } = element;
                    setVerticalThumbVisible(scrollHeight > clientHeight);
                    setHorizontalThumbVisible(scrollWidth > clientWidth);
                }
            }["ScrollArea.useEffect"]);
            observer.observe(element);
            return ({
                "ScrollArea.useEffect": ()=>observer.disconnect()
            })["ScrollArea.useEffect"];
        }
    }["ScrollArea.useEffect"], [
        localViewportRef,
        offsetScrollbars
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaRoot$2f$ScrollAreaRoot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaRoot"], {
        type: type === "never" ? "always" : type,
        scrollHideDelay,
        ref,
        scrollbars,
        ...getStyles("root"),
        ...others,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaViewport$2f$ScrollAreaViewport$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaViewport"], {
                ...viewportProps,
                ...getStyles("viewport", {
                    style: viewportProps === null || viewportProps === void 0 ? void 0 : viewportProps.style
                }),
                ref: combinedViewportRef,
                "data-offset-scrollbars": offsetScrollbars === true ? "xy" : offsetScrollbars || void 0,
                "data-scrollbars": scrollbars || void 0,
                "data-horizontal-hidden": offsetScrollbars === "present" && !horizontalThumbVisible ? "true" : void 0,
                "data-vertical-hidden": offsetScrollbars === "present" && !verticalThumbVisible ? "true" : void 0,
                onScroll: (e)=>{
                    var _viewportProps_onScroll;
                    viewportProps === null || viewportProps === void 0 ? void 0 : (_viewportProps_onScroll = viewportProps.onScroll) === null || _viewportProps_onScroll === void 0 ? void 0 : _viewportProps_onScroll.call(viewportProps, e);
                    onScrollPositionChange === null || onScrollPositionChange === void 0 ? void 0 : onScrollPositionChange({
                        x: e.currentTarget.scrollLeft,
                        y: e.currentTarget.scrollTop
                    });
                    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
                    if (scrollTop - (scrollHeight - clientHeight) >= -0.6) {
                        onBottomReached === null || onBottomReached === void 0 ? void 0 : onBottomReached();
                    }
                    if (scrollTop === 0) {
                        onTopReached === null || onTopReached === void 0 ? void 0 : onTopReached();
                    }
                },
                children
            }),
            (scrollbars === "xy" || scrollbars === "x") && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
                ...getStyles("scrollbar"),
                orientation: "horizontal",
                "data-hidden": type === "never" || offsetScrollbars === "present" && !horizontalThumbVisible ? true : void 0,
                forceMount: true,
                onMouseEnter: ()=>setScrollbarHovered(true),
                onMouseLeave: ()=>setScrollbarHovered(false),
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaThumb$2f$ScrollAreaThumb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
                    ...getStyles("thumb")
                })
            }),
            (scrollbars === "xy" || scrollbars === "y") && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaScrollbar$2f$ScrollAreaScrollbar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
                ...getStyles("scrollbar"),
                orientation: "vertical",
                "data-hidden": type === "never" || offsetScrollbars === "present" && !verticalThumbVisible ? true : void 0,
                forceMount: true,
                onMouseEnter: ()=>setScrollbarHovered(true),
                onMouseLeave: ()=>setScrollbarHovered(false),
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaThumb$2f$ScrollAreaThumb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
                    ...getStyles("thumb")
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollAreaCorner$2f$ScrollAreaCorner$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaCorner"], {
                ...getStyles("corner"),
                "data-hovered": scrollbarHovered || void 0,
                "data-hidden": type === "never" || void 0
            })
        ]
    });
});
ScrollArea.displayName = "@mantine/core/ScrollArea";
const ScrollAreaAutosize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((props, ref)=>{
    const { children, classNames, styles, scrollbarSize, scrollHideDelay, type, dir, offsetScrollbars, viewportRef, onScrollPositionChange, unstyled, variant, viewportProps, scrollbars, style, vars, onBottomReached, onTopReached, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ScrollAreaAutosize", defaultProps, props);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ...others,
        ref,
        style: [
            {
                display: "flex",
                overflow: "auto"
            },
            style
        ],
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            style: {
                display: "flex",
                flexDirection: "column",
                flex: 1
            },
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollArea, {
                classNames,
                styles,
                scrollHideDelay,
                scrollbarSize,
                type,
                dir,
                offsetScrollbars,
                viewportRef,
                onScrollPositionChange,
                unstyled,
                variant,
                viewportProps,
                vars,
                scrollbars,
                onBottomReached,
                onTopReached,
                children
            })
        })
    });
});
ScrollArea.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ScrollAreaAutosize.displayName = "@mantine/core/ScrollAreaAutosize";
ScrollAreaAutosize.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ScrollArea.Autosize = ScrollAreaAutosize;
;
 //# sourceMappingURL=ScrollArea.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/create-theme/create-theme.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTheme",
    ()=>createTheme
]);
function createTheme(theme) {
    return theme;
}
;
 //# sourceMappingURL=create-theme.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/create-use-external-events/create-use-external-events.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUseExternalEvents",
    ()=>createUseExternalEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs [app-client] (ecmascript)");
'use client';
;
function dispatchEvent(type, detail) {
    window.dispatchEvent(new CustomEvent(type, {
        detail
    }));
}
function createUseExternalEvents(prefix) {
    function _useExternalEvents(events) {
        const handlers = Object.keys(events).reduce((acc, eventKey)=>{
            acc["".concat(prefix, ":").concat(eventKey)] = (event)=>events[eventKey](event.detail);
            return acc;
        }, {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicEffect"])({
            "createUseExternalEvents._useExternalEvents.useIsomorphicEffect": ()=>{
                Object.keys(handlers).forEach({
                    "createUseExternalEvents._useExternalEvents.useIsomorphicEffect": (eventKey)=>{
                        window.removeEventListener(eventKey, handlers[eventKey]);
                        window.addEventListener(eventKey, handlers[eventKey]);
                    }
                }["createUseExternalEvents._useExternalEvents.useIsomorphicEffect"]);
                return ({
                    "createUseExternalEvents._useExternalEvents.useIsomorphicEffect": ()=>Object.keys(handlers).forEach({
                            "createUseExternalEvents._useExternalEvents.useIsomorphicEffect": (eventKey)=>{
                                window.removeEventListener(eventKey, handlers[eventKey]);
                            }
                        }["createUseExternalEvents._useExternalEvents.useIsomorphicEffect"])
                })["createUseExternalEvents._useExternalEvents.useIsomorphicEffect"];
            }
        }["createUseExternalEvents._useExternalEvents.useIsomorphicEffect"], [
            handlers
        ]);
    }
    function createEvent(event) {
        return function() {
            for(var _len = arguments.length, payload = new Array(_len), _key = 0; _key < _len; _key++){
                payload[_key] = arguments[_key];
            }
            return dispatchEvent("".concat(prefix, ":").concat(String(event)), payload[0]);
        };
    }
    return [
        _useExternalEvents,
        createEvent
    ];
}
;
 //# sourceMappingURL=create-use-external-events.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultZIndex",
    ()=>getDefaultZIndex
]);
'use client';
const elevations = {
    app: 100,
    modal: 200,
    popover: 300,
    overlay: 400,
    max: 9999
};
function getDefaultZIndex(level) {
    return elevations[level];
}
;
 //# sourceMappingURL=get-default-z-index.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalBaseProvider",
    ()=>ModalBaseProvider,
    "useModalBaseContext",
    ()=>useModalBaseContext
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
const [ModalBaseProvider, useModalBaseContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSafeContext"])("ModalBase component was not found in tree");
;
 //# sourceMappingURL=ModalBase.context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/use-modal-body-id.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModalBodyId",
    ()=>useModalBodyId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.context.mjs [app-client] (ecmascript)");
'use client';
;
;
function useModalBodyId() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalBaseContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useModalBodyId.useEffect": ()=>{
            ctx.setBodyMounted(true);
            return ({
                "useModalBodyId.useEffect": ()=>ctx.setBodyMounted(false)
            })["useModalBodyId.useEffect"];
        }
    }["useModalBodyId.useEffect"], []);
    return ctx.getBodyId();
}
;
 //# sourceMappingURL=use-modal-body-id.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "title": "m_615af6c9",
    "header": "m_b5489c3c",
    "inner": "m_60c222c7",
    "content": "m_fd1ab0aa",
    "close": "m_606cb269",
    "body": "m_5df29311"
};
;
 //# sourceMappingURL=ModalBase.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBaseBody.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalBaseBody",
    ()=>ModalBaseBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$use$2d$modal$2d$body$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/use-modal-body-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.module.css.mjs [app-client] (ecmascript)");
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
const ModalBaseBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { className, ...others } = param;
    const bodyId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$use$2d$modal$2d$body$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalBodyId"])();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalBaseContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        ...others,
        id: bodyId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].body]: !ctx.unstyled
        }, className)
    });
});
ModalBaseBody.displayName = "@mantine/core/ModalBaseBody";
;
 //# sourceMappingURL=ModalBaseBody.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalProvider",
    ()=>ModalProvider,
    "useModalContext",
    ()=>useModalContext
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
const [ModalProvider, useModalContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSafeContext"])("Modal component was not found in tree");
;
 //# sourceMappingURL=Modal.context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_9df02822",
    "content": "m_54c44539",
    "inner": "m_1f958f16",
    "header": "m_d0e2b9cd"
};
;
 //# sourceMappingURL=Modal.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalBody.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalBody",
    ()=>ModalBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBaseBody$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBaseBody.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.module.css.mjs [app-client] (ecmascript)");
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
const defaultProps = {};
const ModalBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ModalBody", defaultProps, _props);
    const { classNames, className, style, styles, vars, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBaseBody$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalBaseBody"], {
        ref,
        ...ctx.getStyles("body", {
            classNames,
            style,
            styles,
            className
        }),
        ...others
    });
});
ModalBody.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ModalBody.displayName = "@mantine/core/ModalBody";
;
 //# sourceMappingURL=ModalBody.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFontSize",
    ()=>getFontSize,
    "getLineHeight",
    ()=>getLineHeight,
    "getRadius",
    ()=>getRadius,
    "getShadow",
    ()=>getShadow,
    "getSize",
    ()=>getSize,
    "getSpacing",
    ()=>getSpacing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$number$2d$like$2f$is$2d$number$2d$like$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
'use client';
;
;
function getSize(size) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "size", convertToRem = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    if (size === void 0) {
        return void 0;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$number$2d$like$2f$is$2d$number$2d$like$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumberLike"])(size) ? convertToRem ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(size) : size : "var(--".concat(prefix, "-").concat(size, ")");
}
function getSpacing(size) {
    return getSize(size, "mantine-spacing");
}
function getRadius(size) {
    if (size === void 0) {
        return "var(--mantine-radius-default)";
    }
    return getSize(size, "mantine-radius");
}
function getFontSize(size) {
    return getSize(size, "mantine-font-size");
}
function getLineHeight(size) {
    return getSize(size, "mantine-line-height", false);
}
function getShadow(size) {
    if (!size) {
        return void 0;
    }
    return getSize(size, "mantine-shadow", false);
}
;
 //# sourceMappingURL=get-size.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "polymorphicFactory",
    ()=>polymorphicFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function polymorphicFactory(ui) {
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(ui);
    Component.withProps = (fixedProps)=>{
        const Extended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
                ...fixedProps,
                ...props,
                ref
            }));
        Extended.extend = Component.extend;
        Extended.displayName = "WithProps(".concat(Component.displayName, ")");
        return Extended;
    };
    Component.extend = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
    return Component;
}
;
 //# sourceMappingURL=polymorphic-factory.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_87cf2631"
};
;
 //# sourceMappingURL=UnstyledButton.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnstyledButton",
    ()=>UnstyledButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.module.css.mjs [app-client] (ecmascript)");
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
const defaultProps = {
    __staticSelector: "UnstyledButton"
};
const UnstyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("UnstyledButton", defaultProps, _props);
    const { className, component = "button", __staticSelector, unstyled, classNames, styles, style, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: __staticSelector,
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("root", {
            focusable: true
        }),
        component,
        ref,
        type: component === "button" ? "button" : void 0,
        ...others
    });
});
UnstyledButton.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
UnstyledButton.displayName = "@mantine/core/UnstyledButton";
;
 //# sourceMappingURL=UnstyledButton.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/CloseButton/CloseIcon.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseIcon",
    ()=>CloseIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
const CloseIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { size = "var(--cb-icon-size, 70%)", style, ...others } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            ...style,
            width: size,
            height: size
        },
        ref,
        ...others,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd"
        })
    });
});
CloseIcon.displayName = "@mantine/core/CloseIcon";
;
 //# sourceMappingURL=CloseIcon.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/CloseButton/CloseButton.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_86a44da5",
    "root--subtle": "m_220c80f2"
};
;
 //# sourceMappingURL=CloseButton.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseButton",
    ()=>CloseButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$CloseButton$2f$CloseIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/CloseButton/CloseIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$CloseButton$2f$CloseButton$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/CloseButton/CloseButton.module.css.mjs [app-client] (ecmascript)");
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
    variant: "subtle"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, param)=>{
    let { size, radius, iconSize } = param;
    return {
        root: {
            "--cb-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, "cb-size"),
            "--cb-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--cb-icon-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(iconSize)
        }
    };
});
const CloseButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("CloseButton", defaultProps, _props);
    const { iconSize, children, vars, radius, className, classNames, style, styles, unstyled, "data-disabled": dataDisabled, disabled, variant, icon, mod, __staticSelector, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: __staticSelector || "CloseButton",
        props,
        className,
        style,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$CloseButton$2f$CloseButton$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnstyledButton"], {
        ref,
        ...others,
        unstyled,
        variant,
        disabled,
        mod: [
            {
                disabled: disabled || dataDisabled
            },
            mod
        ],
        ...getStyles("root", {
            variant,
            active: !disabled && !dataDisabled
        }),
        children: [
            icon || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$CloseButton$2f$CloseIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"], {}),
            children
        ]
    });
});
CloseButton.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$CloseButton$2f$CloseButton$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
CloseButton.displayName = "@mantine/core/CloseButton";
;
 //# sourceMappingURL=CloseButton.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBaseCloseButton.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalBaseCloseButton",
    ()=>ModalBaseCloseButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$CloseButton$2f$CloseButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.module.css.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const ModalBaseCloseButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { className, onClick, ...others } = param;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalBaseContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$CloseButton$2f$CloseButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseButton"], {
        ref,
        ...others,
        onClick: (event)=>{
            ctx.onClose();
            onClick === null || onClick === void 0 ? void 0 : onClick(event);
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].close]: !ctx.unstyled
        }, className),
        unstyled: ctx.unstyled
    });
});
ModalBaseCloseButton.displayName = "@mantine/core/ModalBaseCloseButton";
;
 //# sourceMappingURL=ModalBaseCloseButton.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalCloseButton.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalCloseButton",
    ()=>ModalCloseButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBaseCloseButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBaseCloseButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.module.css.mjs [app-client] (ecmascript)");
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
const defaultProps = {};
const ModalCloseButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ModalCloseButton", defaultProps, _props);
    const { classNames, className, style, styles, vars, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBaseCloseButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalBaseCloseButton"], {
        ref,
        ...ctx.getStyles("close", {
            classNames,
            style,
            styles,
            className
        }),
        ...others
    });
});
ModalCloseButton.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ModalCloseButton.displayName = "@mantine/core/ModalCloseButton";
;
 //# sourceMappingURL=ModalCloseButton.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElement",
    ()=>isElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function isElement(value) {
    if (Array.isArray(value) || value === null) {
        return false;
    }
    if (typeof value === "object") {
        if (value.type === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
            return false;
        }
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=is-element.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/VisuallyHidden/VisuallyHidden.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_515a97f8"
};
;
 //# sourceMappingURL=VisuallyHidden.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/VisuallyHidden/VisuallyHidden.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisuallyHidden",
    ()=>VisuallyHidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$VisuallyHidden$2f$VisuallyHidden$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/VisuallyHidden/VisuallyHidden.module.css.mjs [app-client] (ecmascript)");
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
const VisuallyHidden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("VisuallyHidden", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "VisuallyHidden",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$VisuallyHidden$2f$VisuallyHidden$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        component: "span",
        ref,
        ...getStyles("root"),
        ...others
    });
});
VisuallyHidden.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$VisuallyHidden$2f$VisuallyHidden$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
VisuallyHidden.displayName = "@mantine/core/VisuallyHidden";
;
 //# sourceMappingURL=VisuallyHidden.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/FocusTrap/FocusTrap.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusTrap",
    ()=>FocusTrap,
    "FocusTrapInitialFocus",
    ()=>FocusTrapInitialFocus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$trap$2f$use$2d$focus$2d$trap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-focus-trap/use-focus-trap.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$element$2f$is$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$VisuallyHidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/VisuallyHidden/VisuallyHidden.mjs [app-client] (ecmascript)");
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
function FocusTrap(param) {
    let { children, active = true, refProp = "ref", innerRef } = param;
    const focusTrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$trap$2f$use$2d$focus$2d$trap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusTrap"])(active);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRef"])(focusTrapRef, innerRef);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$is$2d$element$2f$is$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(children)) {
        return children;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, {
        [refProp]: ref
    });
}
function FocusTrapInitialFocus(props) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$VisuallyHidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisuallyHidden"], {
        tabIndex: -1,
        "data-autofocus": true,
        ...props
    });
}
FocusTrap.displayName = "@mantine/core/FocusTrap";
FocusTrapInitialFocus.displayName = "@mantine/core/FocusTrapInitialFocus";
FocusTrap.InitialFocus = FocusTrapInitialFocus;
;
 //# sourceMappingURL=FocusTrap.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Paper/Paper.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_1b7284a3"
};
;
 //# sourceMappingURL=Paper.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Paper",
    ()=>Paper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Paper/Paper.module.css.mjs [app-client] (ecmascript)");
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
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, param)=>{
    let { radius, shadow } = param;
    return {
        root: {
            "--paper-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--paper-shadow": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShadow"])(shadow)
        }
    };
});
const Paper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("Paper", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, withBorder, vars, radius, shadow, variant, mod, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Paper",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
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
                "data-with-border": withBorder
            },
            mod
        ],
        ...getStyles("root"),
        variant,
        ...others
    });
});
Paper.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Paper.displayName = "@mantine/core/Paper";
;
 //# sourceMappingURL=Paper.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Transition/transitions.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transitions",
    ()=>transitions
]);
'use client';
const popIn = (from)=>({
        in: {
            opacity: 1,
            transform: "scale(1)"
        },
        out: {
            opacity: 0,
            transform: "scale(.9) translateY(".concat(from === "bottom" ? 10 : -10, "px)")
        },
        transitionProperty: "transform, opacity"
    });
const transitions = {
    fade: {
        in: {
            opacity: 1
        },
        out: {
            opacity: 0
        },
        transitionProperty: "opacity"
    },
    "fade-up": {
        in: {
            opacity: 1,
            transform: "translateY(0)"
        },
        out: {
            opacity: 0,
            transform: "translateY(30px)"
        },
        transitionProperty: "opacity, transform"
    },
    "fade-down": {
        in: {
            opacity: 1,
            transform: "translateY(0)"
        },
        out: {
            opacity: 0,
            transform: "translateY(-30px)"
        },
        transitionProperty: "opacity, transform"
    },
    "fade-left": {
        in: {
            opacity: 1,
            transform: "translateX(0)"
        },
        out: {
            opacity: 0,
            transform: "translateX(30px)"
        },
        transitionProperty: "opacity, transform"
    },
    "fade-right": {
        in: {
            opacity: 1,
            transform: "translateX(0)"
        },
        out: {
            opacity: 0,
            transform: "translateX(-30px)"
        },
        transitionProperty: "opacity, transform"
    },
    scale: {
        in: {
            opacity: 1,
            transform: "scale(1)"
        },
        out: {
            opacity: 0,
            transform: "scale(0)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "scale-y": {
        in: {
            opacity: 1,
            transform: "scaleY(1)"
        },
        out: {
            opacity: 0,
            transform: "scaleY(0)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "scale-x": {
        in: {
            opacity: 1,
            transform: "scaleX(1)"
        },
        out: {
            opacity: 0,
            transform: "scaleX(0)"
        },
        common: {
            transformOrigin: "left"
        },
        transitionProperty: "transform, opacity"
    },
    "skew-up": {
        in: {
            opacity: 1,
            transform: "translateY(0) skew(0deg, 0deg)"
        },
        out: {
            opacity: 0,
            transform: "translateY(-20px) skew(-10deg, -5deg)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "skew-down": {
        in: {
            opacity: 1,
            transform: "translateY(0) skew(0deg, 0deg)"
        },
        out: {
            opacity: 0,
            transform: "translateY(20px) skew(-10deg, -5deg)"
        },
        common: {
            transformOrigin: "bottom"
        },
        transitionProperty: "transform, opacity"
    },
    "rotate-left": {
        in: {
            opacity: 1,
            transform: "translateY(0) rotate(0deg)"
        },
        out: {
            opacity: 0,
            transform: "translateY(20px) rotate(-5deg)"
        },
        common: {
            transformOrigin: "bottom"
        },
        transitionProperty: "transform, opacity"
    },
    "rotate-right": {
        in: {
            opacity: 1,
            transform: "translateY(0) rotate(0deg)"
        },
        out: {
            opacity: 0,
            transform: "translateY(20px) rotate(5deg)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-down": {
        in: {
            opacity: 1,
            transform: "translateY(0)"
        },
        out: {
            opacity: 0,
            transform: "translateY(-100%)"
        },
        common: {
            transformOrigin: "top"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-up": {
        in: {
            opacity: 1,
            transform: "translateY(0)"
        },
        out: {
            opacity: 0,
            transform: "translateY(100%)"
        },
        common: {
            transformOrigin: "bottom"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-left": {
        in: {
            opacity: 1,
            transform: "translateX(0)"
        },
        out: {
            opacity: 0,
            transform: "translateX(100%)"
        },
        common: {
            transformOrigin: "left"
        },
        transitionProperty: "transform, opacity"
    },
    "slide-right": {
        in: {
            opacity: 1,
            transform: "translateX(0)"
        },
        out: {
            opacity: 0,
            transform: "translateX(-100%)"
        },
        common: {
            transformOrigin: "right"
        },
        transitionProperty: "transform, opacity"
    },
    pop: {
        ...popIn("bottom"),
        common: {
            transformOrigin: "center center"
        }
    },
    "pop-bottom-left": {
        ...popIn("bottom"),
        common: {
            transformOrigin: "bottom left"
        }
    },
    "pop-bottom-right": {
        ...popIn("bottom"),
        common: {
            transformOrigin: "bottom right"
        }
    },
    "pop-top-left": {
        ...popIn("top"),
        common: {
            transformOrigin: "top left"
        }
    },
    "pop-top-right": {
        ...popIn("top"),
        common: {
            transformOrigin: "top right"
        }
    }
};
;
 //# sourceMappingURL=transitions.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Transition/get-transition-styles/get-transition-styles.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTransitionStyles",
    ()=>getTransitionStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$transitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Transition/transitions.mjs [app-client] (ecmascript)");
'use client';
;
const transitionStatuses = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out"
};
function getTransitionStyles(param) {
    let { transition, state, duration, timingFunction } = param;
    const shared = {
        WebkitBackfaceVisibility: "hidden",
        willChange: "transform, opacity",
        transitionDuration: "".concat(duration, "ms"),
        transitionTimingFunction: timingFunction
    };
    if (typeof transition === "string") {
        if (!(transition in __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$transitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"])) {
            return {};
        }
        return {
            transitionProperty: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$transitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"][transition].transitionProperty,
            ...shared,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$transitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"][transition].common,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$transitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"][transition][transitionStatuses[state]]
        };
    }
    return {
        transitionProperty: transition.transitionProperty,
        ...shared,
        ...transition.common,
        ...transition[transitionStatuses[state]]
    };
}
;
 //# sourceMappingURL=get-transition-styles.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Transition/use-transition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransition",
    ()=>useTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$did$2d$update$2f$use$2d$did$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
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
function useTransition(param) {
    let { duration, exitDuration, timingFunction, mounted, onEnter, onExit, onEntered, onExited, enterDelay, exitDelay } = param;
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const shouldReduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
    const [transitionDuration, setTransitionDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reduceMotion ? 0 : duration);
    const [transitionStatus, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mounted ? "entered" : "exited");
    const transitionTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const delayTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    function clearAllTimeouts() {
        window.clearTimeout(transitionTimeoutRef.current);
        window.clearTimeout(delayTimeoutRef.current);
        cancelAnimationFrame(rafRef.current);
    }
    const handleStateChange = (shouldMount)=>{
        clearAllTimeouts();
        const preHandler = shouldMount ? onEnter : onExit;
        const handler = shouldMount ? onEntered : onExited;
        const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
        setTransitionDuration(newTransitionDuration);
        if (newTransitionDuration === 0) {
            typeof preHandler === "function" && preHandler();
            typeof handler === "function" && handler();
            setStatus(shouldMount ? "entered" : "exited");
        } else {
            rafRef.current = requestAnimationFrame(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].flushSync(()=>{
                    setStatus(shouldMount ? "pre-entering" : "pre-exiting");
                });
                rafRef.current = requestAnimationFrame(()=>{
                    typeof preHandler === "function" && preHandler();
                    setStatus(shouldMount ? "entering" : "exiting");
                    transitionTimeoutRef.current = window.setTimeout(()=>{
                        typeof handler === "function" && handler();
                        setStatus(shouldMount ? "entered" : "exited");
                    }, newTransitionDuration);
                });
            });
        }
    };
    const handleTransitionWithDelay = (shouldMount)=>{
        clearAllTimeouts();
        const delay = shouldMount ? enterDelay : exitDelay;
        if (typeof delay !== "number") {
            handleStateChange(shouldMount);
            return;
        }
        delayTimeoutRef.current = window.setTimeout(()=>{
            handleStateChange(shouldMount);
        }, shouldMount ? enterDelay : exitDelay);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$did$2d$update$2f$use$2d$did$2d$update$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDidUpdate"])({
        "useTransition.useDidUpdate": ()=>{
            handleTransitionWithDelay(mounted);
        }
    }["useTransition.useDidUpdate"], [
        mounted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTransition.useEffect": ()=>({
                "useTransition.useEffect": ()=>{
                    clearAllTimeouts();
                }
            })["useTransition.useEffect"]
    }["useTransition.useEffect"], []);
    return {
        transitionDuration,
        transitionStatus,
        transitionTimingFunction: timingFunction || "ease"
    };
}
;
 //# sourceMappingURL=use-transition.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Transition/Transition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transition",
    ()=>Transition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$get$2d$transition$2d$styles$2f$get$2d$transition$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Transition/get-transition-styles/get-transition-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$use$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Transition/use-transition.mjs [app-client] (ecmascript)");
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
function Transition(param) {
    let { keepMounted, transition = "fade", duration = 250, exitDuration = duration, mounted, children, timingFunction = "ease", onExit, onEntered, onEnter, onExited, enterDelay, exitDelay } = param;
    const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineEnv"])();
    const { transitionDuration, transitionStatus, transitionTimingFunction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$use$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])({
        mounted,
        exitDuration,
        duration,
        timingFunction,
        onExit,
        onEntered,
        onEnter,
        onExited,
        enterDelay,
        exitDelay
    });
    if (transitionDuration === 0 || env === "test") {
        return mounted ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children({})
        }) : keepMounted ? children({
            display: "none"
        }) : null;
    }
    return transitionStatus === "exited" ? keepMounted ? children({
        display: "none"
    }) : null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$get$2d$transition$2d$styles$2f$get$2d$transition$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionStyles"])({
            transition,
            duration: transitionDuration,
            state: transitionStatus,
            timingFunction: transitionTimingFunction
        }))
    });
}
Transition.displayName = "@mantine/core/Transition";
;
 //# sourceMappingURL=Transition.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBaseContent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalBaseContent",
    ()=>ModalBaseContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$FocusTrap$2f$FocusTrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/FocusTrap/FocusTrap.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Transition/Transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.module.css.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const ModalBaseContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { transitionProps, className, innerProps, onKeyDown, style, ...others } = param;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalBaseContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
        mounted: ctx.opened,
        transition: "pop",
        ...ctx.transitionProps,
        onExited: ()=>{
            var _ctx_onExitTransitionEnd, _ctx_transitionProps_onExited, _ctx_transitionProps;
            (_ctx_onExitTransitionEnd = ctx.onExitTransitionEnd) === null || _ctx_onExitTransitionEnd === void 0 ? void 0 : _ctx_onExitTransitionEnd.call(ctx);
            (_ctx_transitionProps = ctx.transitionProps) === null || _ctx_transitionProps === void 0 ? void 0 : (_ctx_transitionProps_onExited = _ctx_transitionProps.onExited) === null || _ctx_transitionProps_onExited === void 0 ? void 0 : _ctx_transitionProps_onExited.call(_ctx_transitionProps);
        },
        onEntered: ()=>{
            var _ctx_onEnterTransitionEnd, _ctx_transitionProps_onEntered, _ctx_transitionProps;
            (_ctx_onEnterTransitionEnd = ctx.onEnterTransitionEnd) === null || _ctx_onEnterTransitionEnd === void 0 ? void 0 : _ctx_onEnterTransitionEnd.call(ctx);
            (_ctx_transitionProps = ctx.transitionProps) === null || _ctx_transitionProps === void 0 ? void 0 : (_ctx_transitionProps_onEntered = _ctx_transitionProps.onEntered) === null || _ctx_transitionProps_onEntered === void 0 ? void 0 : _ctx_transitionProps_onEntered.call(_ctx_transitionProps);
        },
        ...transitionProps,
        children: (transitionStyles)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ...innerProps,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].inner]: !ctx.unstyled
                }, innerProps.className),
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$FocusTrap$2f$FocusTrap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusTrap"], {
                    active: ctx.opened && ctx.trapFocus,
                    innerRef: ref,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                        ...others,
                        component: "section",
                        role: "dialog",
                        tabIndex: -1,
                        "aria-modal": true,
                        "aria-describedby": ctx.bodyMounted ? ctx.getBodyId() : void 0,
                        "aria-labelledby": ctx.titleMounted ? ctx.getTitleId() : void 0,
                        style: [
                            style,
                            transitionStyles
                        ],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                            [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].content]: !ctx.unstyled
                        }, className),
                        unstyled: ctx.unstyled,
                        children: others.children
                    })
                })
            })
    });
});
ModalBaseContent.displayName = "@mantine/core/ModalBaseContent";
;
 //# sourceMappingURL=ModalBaseContent.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/NativeScrollArea.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeScrollArea",
    ()=>NativeScrollArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
function NativeScrollArea(param) {
    let { children } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    });
}
;
 //# sourceMappingURL=NativeScrollArea.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalContent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalContent",
    ()=>ModalContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBaseContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBaseContent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$NativeScrollArea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/NativeScrollArea.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.module.css.mjs [app-client] (ecmascript)");
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
const defaultProps = {};
const ModalContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ModalContent", defaultProps, _props);
    const { classNames, className, style, styles, vars, children, __hidden, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalContext"])();
    const Scroll = ctx.scrollAreaComponent || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$NativeScrollArea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NativeScrollArea"];
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBaseContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalBaseContent"], {
        ...ctx.getStyles("content", {
            className,
            style,
            styles,
            classNames
        }),
        innerProps: ctx.getStyles("inner", {
            className,
            style,
            styles,
            classNames
        }),
        "data-full-screen": ctx.fullScreen || void 0,
        "data-modal-content": true,
        "data-hidden": __hidden || void 0,
        ref,
        ...others,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Scroll, {
            style: {
                maxHeight: ctx.fullScreen ? "100dvh" : "calc(100dvh - (".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(ctx.yOffset), " * 2))")
            },
            children
        })
    });
});
ModalContent.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ModalContent.displayName = "@mantine/core/ModalContent";
;
 //# sourceMappingURL=ModalContent.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBaseHeader.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalBaseHeader",
    ()=>ModalBaseHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.module.css.mjs [app-client] (ecmascript)");
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
const ModalBaseHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { className, ...others } = param;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalBaseContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        component: "header",
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].header]: !ctx.unstyled
        }, className),
        ...others
    });
});
ModalBaseHeader.displayName = "@mantine/core/ModalBaseHeader";
;
 //# sourceMappingURL=ModalBaseHeader.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalHeader.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalHeader",
    ()=>ModalHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBaseHeader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBaseHeader.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.module.css.mjs [app-client] (ecmascript)");
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
const defaultProps = {};
const ModalHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ModalHeader", defaultProps, _props);
    const { classNames, className, style, styles, vars, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBaseHeader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalBaseHeader"], {
        ref,
        ...ctx.getStyles("header", {
            classNames,
            style,
            styles,
            className
        }),
        ...others
    });
});
ModalHeader.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ModalHeader.displayName = "@mantine/core/ModalHeader";
;
 //# sourceMappingURL=ModalHeader.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Overlay/Overlay.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_9814e45f"
};
;
 //# sourceMappingURL=Overlay.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Overlay/Overlay.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overlay",
    ()=>Overlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Overlay$2f$Overlay$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Overlay/Overlay.module.css.mjs [app-client] (ecmascript)");
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
    zIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultZIndex"])("modal")
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, param)=>{
    let { gradient, color, backgroundOpacity, blur, radius, zIndex } = param;
    return {
        root: {
            "--overlay-bg": gradient || (color !== void 0 || backgroundOpacity !== void 0) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$rgba$2f$rgba$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgba"])(color || "#000", backgroundOpacity !== null && backgroundOpacity !== void 0 ? backgroundOpacity : 0.6) || void 0,
            "--overlay-filter": blur ? "blur(".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(blur), ")") : void 0,
            "--overlay-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--overlay-z-index": zIndex === null || zIndex === void 0 ? void 0 : zIndex.toString()
        }
    };
});
const Overlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("Overlay", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, fixed, center, children, radius, zIndex, gradient, blur, color, backgroundOpacity, mod, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Overlay",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Overlay$2f$Overlay$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
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
        ...getStyles("root"),
        mod: [
            {
                center,
                fixed
            },
            mod
        ],
        ...others,
        children
    });
});
Overlay.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Overlay$2f$Overlay$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Overlay.displayName = "@mantine/core/Overlay";
;
 //# sourceMappingURL=Overlay.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/use-modal-transition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModalTransition",
    ()=>useModalTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.context.mjs [app-client] (ecmascript)");
'use client';
;
const DEFAULT_TRANSITION = {
    duration: 200,
    timingFunction: "ease",
    transition: "fade"
};
function useModalTransition(transitionOverride) {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalBaseContext"])();
    return {
        ...DEFAULT_TRANSITION,
        ...ctx.transitionProps,
        ...transitionOverride
    };
}
;
 //# sourceMappingURL=use-modal-transition.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBaseOverlay.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalBaseOverlay",
    ()=>ModalBaseOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Overlay$2f$Overlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Overlay/Overlay.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Transition/Transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$use$2d$modal$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/use-modal-transition.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const ModalBaseOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { onClick, transitionProps, style, visible, ...others } = param;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalBaseContext"])();
    const transition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$use$2d$modal$2d$transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalTransition"])(transitionProps);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
        mounted: visible !== void 0 ? visible : ctx.opened,
        ...transition,
        transition: "fade",
        children: (transitionStyles)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Overlay$2f$Overlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
                ref,
                fixed: true,
                style: [
                    style,
                    transitionStyles
                ],
                zIndex: ctx.zIndex,
                unstyled: ctx.unstyled,
                onClick: (event)=>{
                    onClick === null || onClick === void 0 ? void 0 : onClick(event);
                    ctx.closeOnClickOutside && ctx.onClose();
                },
                ...others
            })
    });
});
ModalBaseOverlay.displayName = "@mantine/core/ModalBaseOverlay";
;
 //# sourceMappingURL=ModalBaseOverlay.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalOverlay.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalOverlay",
    ()=>ModalOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBaseOverlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBaseOverlay.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.module.css.mjs [app-client] (ecmascript)");
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
const defaultProps = {};
const ModalOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ModalOverlay", defaultProps, _props);
    const { classNames, className, style, styles, vars, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBaseOverlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalBaseOverlay"], {
        ref,
        ...ctx.getStyles("overlay", {
            classNames,
            style,
            styles,
            className
        }),
        ...others
    });
});
ModalOverlay.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ModalOverlay.displayName = "@mantine/core/ModalOverlay";
;
 //# sourceMappingURL=ModalOverlay.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Portal/Portal.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portal",
    ()=>Portal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
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
function createPortalNode(props) {
    const node = document.createElement("div");
    node.setAttribute("data-portal", "true");
    typeof props.className === "string" && node.classList.add(...props.className.split(" ").filter(Boolean));
    typeof props.style === "object" && Object.assign(node.style, props.style);
    typeof props.id === "string" && node.setAttribute("id", props.id);
    return node;
}
function getTargetNode(param) {
    let { target, reuseTargetNode, ...others } = param;
    if (target) {
        if (typeof target === "string") {
            return document.querySelector(target) || createPortalNode(others);
        }
        return target;
    }
    if (reuseTargetNode) {
        const existingNode = document.querySelector("[data-mantine-shared-portal-node]");
        if (existingNode) {
            return existingNode;
        }
        const node = createPortalNode(others);
        node.setAttribute("data-mantine-shared-portal-node", "true");
        document.body.appendChild(node);
        return node;
    }
    return createPortalNode(others);
}
const defaultProps = {};
const Portal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((props, ref)=>{
    const { children, target, reuseTargetNode, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("Portal", defaultProps, props);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$isomorphic$2d$effect$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicEffect"])({
        "Portal.useIsomorphicEffect": ()=>{
            setMounted(true);
            nodeRef.current = getTargetNode({
                target,
                reuseTargetNode,
                ...others
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, nodeRef.current);
            if (!target && !reuseTargetNode && nodeRef.current) {
                document.body.appendChild(nodeRef.current);
            }
            return ({
                "Portal.useIsomorphicEffect": ()=>{
                    if (!target && !reuseTargetNode && nodeRef.current) {
                        document.body.removeChild(nodeRef.current);
                    }
                }
            })["Portal.useIsomorphicEffect"];
        }
    }["Portal.useIsomorphicEffect"], [
        target
    ]);
    if (!mounted || !nodeRef.current) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    }), nodeRef.current);
});
Portal.displayName = "@mantine/core/Portal";
;
 //# sourceMappingURL=Portal.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptionalPortal",
    ()=>OptionalPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$Portal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Portal/Portal.mjs [app-client] (ecmascript)");
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
const OptionalPortal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((param, ref)=>{
    let { withinPortal = true, children, ...others } = param;
    const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$Mantine$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineEnv"])();
    if (env === "test" || !withinPortal) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$Portal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        ref,
        ...others,
        children
    });
});
OptionalPortal.displayName = "@mantine/core/OptionalPortal";
;
 //# sourceMappingURL=OptionalPortal.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/use-lock-scroll.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLockScroll",
    ()=>useLockScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
'use client';
;
;
function useLockScroll(param) {
    let { opened, transitionDuration } = param;
    const [shouldLockScroll, setShouldLockScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(opened);
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const _transitionDuration = reduceMotion ? 0 : transitionDuration;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLockScroll.useEffect": ()=>{
            if (opened) {
                setShouldLockScroll(true);
                window.clearTimeout(timeout.current);
            } else if (_transitionDuration === 0) {
                setShouldLockScroll(false);
            } else {
                timeout.current = window.setTimeout({
                    "useLockScroll.useEffect": ()=>setShouldLockScroll(false)
                }["useLockScroll.useEffect"], _transitionDuration);
            }
            return ({
                "useLockScroll.useEffect": ()=>window.clearTimeout(timeout.current)
            })["useLockScroll.useEffect"];
        }
    }["useLockScroll.useEffect"], [
        opened,
        _transitionDuration
    ]);
    return shouldLockScroll;
}
;
 //# sourceMappingURL=use-lock-scroll.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/use-modal.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModal",
    ()=>useModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-id/use-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$window$2d$event$2f$use$2d$window$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-window-event/use-window-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$return$2f$use$2d$focus$2d$return$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-focus-return/use-focus-return.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$use$2d$lock$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/use-lock-scroll.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function useModal(param) {
    let { id, transitionProps, opened, trapFocus, closeOnEscape, onClose, returnFocus } = param;
    const _id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(id);
    const [titleMounted, setTitleMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bodyMounted, setBodyMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const transitionDuration = typeof (transitionProps === null || transitionProps === void 0 ? void 0 : transitionProps.duration) === "number" ? transitionProps === null || transitionProps === void 0 ? void 0 : transitionProps.duration : 200;
    const shouldLockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$use$2d$lock$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLockScroll"])({
        opened,
        transitionDuration
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$window$2d$event$2f$use$2d$window$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWindowEvent"])("keydown", {
        "useModal.useWindowEvent": (event)=>{
            if (event.key === "Escape" && closeOnEscape && !event.isComposing && opened) {
                var _event_target;
                const shouldTrigger = ((_event_target = event.target) === null || _event_target === void 0 ? void 0 : _event_target.getAttribute("data-mantine-stop-propagation")) !== "true";
                shouldTrigger && onClose();
            }
        }
    }["useModal.useWindowEvent"], {
        capture: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$focus$2d$return$2f$use$2d$focus$2d$return$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusReturn"])({
        opened,
        shouldReturnFocus: trapFocus && returnFocus
    });
    return {
        _id,
        titleMounted,
        bodyMounted,
        shouldLockScroll,
        setTitleMounted,
        setBodyMounted
    };
}
;
 //# sourceMappingURL=use-modal.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalBase",
    ()=>ModalBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$use$2d$modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/use-modal.mjs [app-client] (ecmascript)");
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
const ModalBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { keepMounted, opened, onClose, id, transitionProps, onExitTransitionEnd, onEnterTransitionEnd, trapFocus, closeOnEscape, returnFocus, closeOnClickOutside, withinPortal, portalProps, lockScroll, children, zIndex, shadow, padding, __vars, unstyled, removeScrollProps, ...others } = param;
    const { _id, titleMounted, bodyMounted, shouldLockScroll, setTitleMounted, setBodyMounted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$use$2d$modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"])({
        id,
        transitionProps,
        opened,
        trapFocus,
        closeOnEscape,
        onClose,
        returnFocus
    });
    const { key: removeScrollKey, ...otherRemoveScrollProps } = removeScrollProps || {};
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Portal$2f$OptionalPortal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionalPortal"], {
        ...portalProps,
        withinPortal,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalBaseProvider"], {
            value: {
                opened,
                onClose,
                closeOnClickOutside,
                onExitTransitionEnd,
                onEnterTransitionEnd,
                transitionProps: {
                    ...transitionProps,
                    keepMounted
                },
                getTitleId: ()=>"".concat(_id, "-title"),
                getBodyId: ()=>"".concat(_id, "-body"),
                titleMounted,
                bodyMounted,
                setTitleMounted,
                setBodyMounted,
                trapFocus,
                closeOnEscape,
                zIndex,
                unstyled
            },
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"], {
                enabled: shouldLockScroll && lockScroll,
                ...otherRemoveScrollProps,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    ref,
                    ...others,
                    __vars: {
                        ...__vars,
                        "--mb-z-index": (zIndex || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultZIndex"])("modal")).toString(),
                        "--mb-shadow": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getShadow"])(shadow),
                        "--mb-padding": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpacing"])(padding)
                    },
                    children
                })
            }, removeScrollKey)
        })
    });
});
ModalBase.displayName = "@mantine/core/ModalBase";
;
 //# sourceMappingURL=ModalBase.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalRoot.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalRoot",
    ()=>ModalRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.module.css.mjs [app-client] (ecmascript)");
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
;
const defaultProps = {
    __staticSelector: "Modal",
    closeOnClickOutside: true,
    withinPortal: true,
    lockScroll: true,
    trapFocus: true,
    returnFocus: true,
    closeOnEscape: true,
    keepMounted: false,
    zIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultZIndex"])("modal"),
    transitionProps: {
        duration: 200,
        transition: "fade-down"
    },
    yOffset: "5dvh"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, param)=>{
    let { radius, size, yOffset, xOffset } = param;
    return {
        root: {
            "--modal-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--modal-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, "modal-size"),
            "--modal-y-offset": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(yOffset),
            "--modal-x-offset": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(xOffset)
        }
    };
});
const ModalRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ModalRoot", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, yOffset, scrollAreaComponent, radius, fullScreen, centered, xOffset, __staticSelector, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: __staticSelector,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalProvider"], {
        value: {
            yOffset,
            scrollAreaComponent,
            getStyles,
            fullScreen
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalBase"], {
            ref,
            ...getStyles("root"),
            "data-full-screen": fullScreen || void 0,
            "data-centered": centered || void 0,
            "data-offset-scrollbars": scrollAreaComponent === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"].Autosize || void 0,
            unstyled,
            ...others
        })
    });
});
ModalRoot.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ModalRoot.displayName = "@mantine/core/ModalRoot";
;
 //# sourceMappingURL=ModalRoot.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/create-optional-context/create-optional-context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOptionalContext",
    ()=>createOptionalContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function createOptionalContext() {
    let initialValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    const Context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(initialValue);
    const useOptionalContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
    const Provider = (param)=>{
        let { children, value } = param;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    };
    return [
        Provider,
        useOptionalContext
    ];
}
;
 //# sourceMappingURL=create-optional-context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalStack.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalStack",
    ()=>ModalStack,
    "useModalStackContext",
    ()=>useModalStackContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$optional$2d$context$2f$create$2d$optional$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/create-optional-context/create-optional-context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-client] (ecmascript)");
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
;
const [ModalStackProvider, useModalStackContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$optional$2d$context$2f$create$2d$optional$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOptionalContext"])();
function ModalStack(param) {
    let { children } = param;
    const [stack, setStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [maxZIndex, setMaxZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultZIndex"])("modal"));
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ModalStackProvider, {
        value: {
            stack,
            addModal: (id, zIndex)=>{
                setStack((current)=>[
                        .../* @__PURE__ */ new Set([
                            ...current,
                            id
                        ])
                    ]);
                setMaxZIndex((current)=>typeof zIndex === "number" && typeof current === "number" ? Math.max(current, zIndex) : current);
            },
            removeModal: (id)=>setStack((current)=>current.filter((currentId)=>currentId !== id)),
            getZIndex: (id)=>"calc(".concat(maxZIndex, " + ").concat(stack.indexOf(id), " + 1)"),
            currentId: stack[stack.length - 1],
            maxZIndex
        },
        children
    });
}
ModalStack.displayName = "@mantine/core/ModalStack";
;
 //# sourceMappingURL=ModalStack.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/use-modal-title-id.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModalTitle",
    ()=>useModalTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.context.mjs [app-client] (ecmascript)");
'use client';
;
;
function useModalTitle() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalBaseContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useModalTitle.useEffect": ()=>{
            ctx.setTitleMounted(true);
            return ({
                "useModalTitle.useEffect": ()=>ctx.setTitleMounted(false)
            })["useModalTitle.useEffect"];
        }
    }["useModalTitle.useEffect"], []);
    return ctx.getTitleId();
}
;
 //# sourceMappingURL=use-modal-title-id.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBaseTitle.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalBaseTitle",
    ()=>ModalBaseTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$use$2d$modal$2d$title$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/use-modal-title-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBase.module.css.mjs [app-client] (ecmascript)");
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
const ModalBaseTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { className, ...others } = param;
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$use$2d$modal$2d$title$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalTitle"])();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalBaseContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        component: "h2",
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            [__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBase$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].title]: !ctx.unstyled
        }, className),
        ...others,
        id
    });
});
ModalBaseTitle.displayName = "@mantine/core/ModalBaseTitle";
;
 //# sourceMappingURL=ModalBaseTitle.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalTitle.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalTitle",
    ()=>ModalTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBaseTitle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ModalBase/ModalBaseTitle.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.module.css.mjs [app-client] (ecmascript)");
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
const defaultProps = {};
const ModalTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ModalTitle", defaultProps, _props);
    const { classNames, className, style, styles, vars, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ModalBase$2f$ModalBaseTitle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalBaseTitle"], {
        ref,
        ...ctx.getStyles("title", {
            classNames,
            style,
            styles,
            className
        }),
        ...others
    });
});
ModalTitle.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ModalTitle.displayName = "@mantine/core/ModalTitle";
;
 //# sourceMappingURL=ModalTitle.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalBody$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalBody.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalCloseButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalCloseButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalContent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalHeader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalHeader.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalOverlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalOverlay.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalRoot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalRoot.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalStack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalStack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalTitle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/ModalTitle.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Modal/Modal.module.css.mjs [app-client] (ecmascript)");
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
    closeOnClickOutside: true,
    withinPortal: true,
    lockScroll: true,
    trapFocus: true,
    returnFocus: true,
    closeOnEscape: true,
    keepMounted: false,
    zIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultZIndex"])("modal"),
    transitionProps: {
        duration: 200,
        transition: "fade-down"
    },
    withOverlay: true,
    withCloseButton: true
};
const Modal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const { title, withOverlay, overlayProps, withCloseButton, closeButtonProps, children, radius, opened, stackId, zIndex, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("Modal", defaultProps, _props);
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalStack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalStackContext"])();
    const hasHeader = !!title || withCloseButton;
    const stackProps = ctx && stackId ? {
        closeOnEscape: ctx.currentId === stackId,
        trapFocus: ctx.currentId === stackId,
        zIndex: ctx.getZIndex(stackId)
    } : {};
    const overlayVisible = withOverlay === false ? false : stackId && ctx ? ctx.currentId === stackId : opened;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            if (ctx && stackId) {
                opened ? ctx.addModal(stackId, zIndex || (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$default$2d$z$2d$index$2f$get$2d$default$2d$z$2d$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultZIndex"])("modal")) : ctx.removeModal(stackId);
            }
        }
    }["Modal.useEffect"], [
        opened,
        stackId,
        zIndex
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalRoot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalRoot"], {
        ref,
        radius,
        opened,
        zIndex: ctx && stackId ? ctx.getZIndex(stackId) : zIndex,
        ...others,
        ...stackProps,
        children: [
            withOverlay && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalOverlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalOverlay"], {
                visible: overlayVisible,
                transitionProps: ctx && stackId ? {
                    duration: 0
                } : void 0,
                ...overlayProps
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalContent"], {
                radius,
                __hidden: ctx && stackId && opened ? stackId !== ctx.currentId : false,
                children: [
                    hasHeader && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalHeader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalHeader"], {
                        children: [
                            title && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalTitle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalTitle"], {
                                children: title
                            }),
                            withCloseButton && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalCloseButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalCloseButton"], {
                                ...closeButtonProps
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalBody$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalBody"], {
                        children
                    })
                ]
            })
        ]
    });
});
Modal.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Modal.displayName = "@mantine/core/Modal";
Modal.Root = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalRoot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalRoot"];
Modal.Overlay = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalOverlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalOverlay"];
Modal.Content = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalContent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalContent"];
Modal.Body = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalBody$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalBody"];
Modal.Header = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalHeader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalHeader"];
Modal.Title = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalTitle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalTitle"];
Modal.CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalCloseButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalCloseButton"];
Modal.Stack = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$ModalStack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalStack"];
;
 //# sourceMappingURL=Modal.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Group/filter-falsy-children/filter-falsy-children.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterFalsyChildren",
    ()=>filterFalsyChildren
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function filterFalsyChildren(children) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children).filter(Boolean);
}
;
 //# sourceMappingURL=filter-falsy-children.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Group/Group.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_4081bf90"
};
;
 //# sourceMappingURL=Group.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Group",
    ()=>Group
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$filter$2d$falsy$2d$children$2f$filter$2d$falsy$2d$children$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Group/filter-falsy-children/filter-falsy-children.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Group/Group.module.css.mjs [app-client] (ecmascript)");
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
    preventGrowOverflow: true,
    gap: "md",
    align: "center",
    justify: "flex-start",
    wrap: "wrap"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, param, param1)=>{
    let { grow, preventGrowOverflow, gap, align, justify, wrap } = param, { childWidth } = param1;
    return {
        root: {
            "--group-child-width": grow && preventGrowOverflow ? childWidth : void 0,
            "--group-gap": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpacing"])(gap),
            "--group-align": align,
            "--group-justify": justify,
            "--group-wrap": wrap
        }
    };
});
const Group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("Group", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, children, gap, align, justify, wrap, grow, preventGrowOverflow, vars, variant, __size, mod, ...others } = props;
    const filteredChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$filter$2d$falsy$2d$children$2f$filter$2d$falsy$2d$children$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterFalsyChildren"])(children);
    const childrenCount = filteredChildren.length;
    const resolvedGap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpacing"])(gap !== null && gap !== void 0 ? gap : "md");
    const childWidth = "calc(".concat(100 / childrenCount, "% - (").concat(resolvedGap, " - ").concat(resolvedGap, " / ").concat(childrenCount, "))");
    const stylesCtx = {
        childWidth
    };
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Group",
        props,
        stylesCtx,
        className,
        style,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("root"),
        ref,
        variant,
        mod: [
            {
                grow
            },
            mod
        ],
        size: __size,
        ...others,
        children: filteredChildren
    });
});
Group.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Group.displayName = "@mantine/core/Group";
;
 //# sourceMappingURL=Group.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_5ae2e3c",
    "barsLoader": "m_7a2bd4cd",
    "bar": "m_870bb79",
    "bars-loader-animation": "m_5d2b3b9d",
    "dotsLoader": "m_4e3f22d7",
    "dot": "m_870c4af",
    "loader-dots-animation": "m_aac34a1",
    "ovalLoader": "m_b34414df",
    "oval-loader-animation": "m_f8e89c4b"
};
;
 //# sourceMappingURL=Loader.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bars",
    ()=>Bars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs [app-client] (ecmascript)");
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
const Bars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { className, ...others } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        component: "span",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].barsLoader, className),
        ...others,
        ref,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bar
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bar
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bar
            })
        ]
    });
});
Bars.displayName = "@mantine/core/Bars";
;
 //# sourceMappingURL=Bars.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Loader/loaders/Dots.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dots",
    ()=>Dots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs [app-client] (ecmascript)");
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
const Dots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { className, ...others } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        component: "span",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dotsLoader, className),
        ...others,
        ref,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dot
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dot
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dot
            })
        ]
    });
});
Dots.displayName = "@mantine/core/Dots";
;
 //# sourceMappingURL=Dots.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Loader/loaders/Oval.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Oval",
    ()=>Oval
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs [app-client] (ecmascript)");
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
const Oval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { className, ...others } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        component: "span",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ovalLoader, className),
        ...others,
        ref
    });
});
Oval.displayName = "@mantine/core/Oval";
;
 //# sourceMappingURL=Oval.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Loader/Loader.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader",
    ()=>Loader,
    "defaultLoaders",
    ()=>defaultLoaders
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$loaders$2f$Bars$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$loaders$2f$Dots$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Loader/loaders/Dots.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$loaders$2f$Oval$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Loader/loaders/Oval.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs [app-client] (ecmascript)");
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
const defaultLoaders = {
    bars: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$loaders$2f$Bars$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bars"],
    oval: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$loaders$2f$Oval$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Oval"],
    dots: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$loaders$2f$Dots$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dots"]
};
const defaultProps = {
    loaders: defaultLoaders,
    type: "oval"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, param)=>{
    let { size, color } = param;
    return {
        root: {
            "--loader-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, "loader-size"),
            "--loader-color": color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0
        }
    };
});
const Loader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("Loader", defaultProps, _props);
    const { size, color, type, vars, className, style, classNames, styles, unstyled, loaders, variant, children, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Loader",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    if (children) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            ...getStyles("root"),
            ref,
            ...others,
            children
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("root"),
        ref,
        component: loaders[type],
        variant,
        size,
        ...others
    });
});
Loader.defaultLoaders = defaultLoaders;
Loader.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Loader.displayName = "@mantine/core/Loader";
;
 //# sourceMappingURL=Loader.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_77c9d27d",
    "inner": "m_80f1301b",
    "label": "m_811560b9",
    "section": "m_a74036a",
    "loader": "m_a25b86ee",
    "group": "m_80d6d844",
    "groupSection": "m_70be2a01"
};
;
 //# sourceMappingURL=Button.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonGroup",
    ()=>ButtonGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs [app-client] (ecmascript)");
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
const defaultProps = {
    orientation: "horizontal"
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, param)=>{
    let { borderWidth } = param;
    return {
        group: {
            "--button-border-width": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(borderWidth)
        }
    };
});
const ButtonGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ButtonGroup", defaultProps, _props);
    const { className, style, classNames, styles, unstyled, orientation, vars, borderWidth, variant, mod, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ButtonGroup", defaultProps, _props);
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "ButtonGroup",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver,
        rootSelector: "group"
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("group"),
        ref,
        variant,
        mod: [
            {
                "data-orientation": orientation
            },
            mod
        ],
        role: "group",
        ...others
    });
});
ButtonGroup.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ButtonGroup.displayName = "@mantine/core/ButtonGroup";
;
 //# sourceMappingURL=ButtonGroup.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Button/ButtonGroupSection/ButtonGroupSection.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonGroupSection",
    ()=>ButtonGroupSection
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs [app-client] (ecmascript)");
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
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, param)=>{
    let { radius, color, gradient, variant, autoContrast, size } = param;
    const colors = theme.variantColorResolver({
        color: color || theme.primaryColor,
        theme,
        gradient,
        variant: variant || "filled",
        autoContrast
    });
    return {
        groupSection: {
            "--section-height": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, "section-height"),
            "--section-padding-x": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, "section-padding-x"),
            "--section-fz": (size === null || size === void 0 ? void 0 : size.includes("compact")) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontSize"])(size.replace("compact-", "")) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontSize"])(size),
            "--section-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--section-bg": color || variant ? colors.background : void 0,
            "--section-color": colors.color,
            "--section-bd": color || variant ? colors.border : void 0
        }
    };
});
const ButtonGroupSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ButtonGroupSection", defaultProps, _props);
    const { className, style, classNames, styles, unstyled, vars, variant, gradient, radius, autoContrast, ...others } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("ButtonGroupSection", defaultProps, _props);
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "ButtonGroupSection",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver,
        rootSelector: "groupSection"
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("groupSection"),
        ref,
        variant,
        ...others
    });
});
ButtonGroupSection.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
ButtonGroupSection.displayName = "@mantine/core/ButtonGroupSection";
;
 //# sourceMappingURL=ButtonGroupSection.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Loader/Loader.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Transition/Transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$ButtonGroup$2f$ButtonGroup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$ButtonGroupSection$2f$ButtonGroupSection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/ButtonGroupSection/ButtonGroupSection.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs [app-client] (ecmascript)");
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
const loaderTransition = {
    in: {
        opacity: 1,
        transform: "translate(-50%, calc(-50% + ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(1), "))")
    },
    out: {
        opacity: 0,
        transform: "translate(-50%, -200%)"
    },
    common: {
        transformOrigin: "center"
    },
    transitionProperty: "transform, opacity"
};
const defaultProps = {};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, param)=>{
    let { radius, color, gradient, variant, size, justify, autoContrast } = param;
    const colors = theme.variantColorResolver({
        color: color || theme.primaryColor,
        theme,
        gradient,
        variant: variant || "filled",
        autoContrast
    });
    return {
        root: {
            "--button-justify": justify,
            "--button-height": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, "button-height"),
            "--button-padding-x": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, "button-padding-x"),
            "--button-fz": (size === null || size === void 0 ? void 0 : size.includes("compact")) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontSize"])(size.replace("compact-", "")) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontSize"])(size),
            "--button-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--button-bg": color || variant ? colors.background : void 0,
            "--button-hover": color || variant ? colors.hover : void 0,
            "--button-color": colors.color,
            "--button-bd": color || variant ? colors.border : void 0,
            "--button-hover-color": color || variant ? colors.hoverColor : void 0
        }
    };
});
const Button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("Button", defaultProps, _props);
    const { style, vars, className, color, disabled, children, leftSection, rightSection, fullWidth, variant, radius, loading, loaderProps, gradient, classNames, styles, unstyled, "data-disabled": dataDisabled, autoContrast, mod, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Button",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    const hasLeftSection = !!leftSection;
    const hasRightSection = !!rightSection;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnstyledButton"], {
        ref,
        ...getStyles("root", {
            active: !disabled && !loading && !dataDisabled
        }),
        unstyled,
        variant,
        disabled: disabled || loading,
        mod: [
            {
                disabled: disabled || dataDisabled,
                loading,
                block: fullWidth,
                "with-left-section": hasLeftSection,
                "with-right-section": hasRightSection
            },
            mod
        ],
        ...others,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
                mounted: !!loading,
                transition: loaderTransition,
                duration: 150,
                children: (transitionStyles)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                        component: "span",
                        ...getStyles("loader", {
                            style: transitionStyles
                        }),
                        "aria-hidden": true,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                            color: "var(--button-color)",
                            size: "calc(var(--button-height) / 1.8)",
                            ...loaderProps
                        })
                    })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                ...getStyles("inner"),
                children: [
                    leftSection && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                        component: "span",
                        ...getStyles("section"),
                        mod: {
                            position: "left"
                        },
                        children: leftSection
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                        component: "span",
                        mod: {
                            loading
                        },
                        ...getStyles("label"),
                        children
                    }),
                    rightSection && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                        component: "span",
                        ...getStyles("section"),
                        mod: {
                            position: "right"
                        },
                        children: rightSection
                    })
                ]
            })
        ]
    });
});
Button.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Button.displayName = "@mantine/core/Button";
Button.Group = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$ButtonGroup$2f$ButtonGroup$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonGroup"];
Button.GroupSection = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$ButtonGroupSection$2f$ButtonGroupSection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonGroupSection"];
;
 //# sourceMappingURL=Button.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Notification/Notification.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_a513464",
    "icon": "m_a4ceffb",
    "loader": "m_b0920b15",
    "body": "m_a49ed24",
    "title": "m_3feedf16",
    "description": "m_3d733a3a",
    "closeButton": "m_919a4d88"
};
;
 //# sourceMappingURL=Notification.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Notification/Notification.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Notification",
    ()=>Notification
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$CloseButton$2f$CloseButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Loader/Loader.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Notification$2f$Notification$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Notification/Notification.module.css.mjs [app-client] (ecmascript)");
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
    withCloseButton: true
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, param)=>{
    let { radius, color } = param;
    return {
        root: {
            "--notification-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--notification-color": color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0
        }
    };
});
const Notification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("Notification", defaultProps, _props);
    const { className, color, radius, loading, withCloseButton, withBorder, title, icon, children, onClose, closeButtonProps, classNames, style, styles, unstyled, variant, vars, mod, loaderProps, role, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Notification",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Notification$2f$Notification$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("root"),
        mod: [
            {
                "data-with-icon": !!icon || loading,
                "data-with-border": withBorder
            },
            mod
        ],
        ref,
        variant,
        role: role || "alert",
        ...others,
        children: [
            icon && !loading && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ...getStyles("icon"),
                children: icon
            }),
            loading && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                size: 28,
                color,
                ...loaderProps,
                ...getStyles("loader")
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                ...getStyles("body"),
                children: [
                    title && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        ...getStyles("title"),
                        children: title
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                        ...getStyles("description"),
                        mod: {
                            "data-with-title": !!title
                        },
                        children
                    })
                ]
            }),
            withCloseButton && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$CloseButton$2f$CloseButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseButton"], {
                iconSize: 16,
                color: "gray",
                ...closeButtonProps,
                unstyled,
                onClick: onClose,
                ...getStyles("closeButton")
            })
        ]
    });
});
Notification.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Notification$2f$Notification$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Notification.displayName = "@mantine/core/Notification";
;
 //# sourceMappingURL=Notification.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/ColorSchemeScript/ColorSchemeScript.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorSchemeScript",
    ()=>ColorSchemeScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
'use client';
;
const getScript = (param)=>{
    let { defaultColorScheme, localStorageKey, forceColorScheme } = param;
    return forceColorScheme ? 'document.documentElement.setAttribute("data-mantine-color-scheme", \''.concat(forceColorScheme, "');") : 'try {\n  var _colorScheme = window.localStorage.getItem("'.concat(localStorageKey, '");\n  var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" ? _colorScheme : "').concat(defaultColorScheme, '";\n  var computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";\n  document.documentElement.setAttribute("data-mantine-color-scheme", computedColorScheme);\n} catch (e) {}\n');
};
function ColorSchemeScript(param) {
    let { defaultColorScheme = "light", localStorageKey = "mantine-color-scheme-value", forceColorScheme, ...others } = param;
    const _defaultColorScheme = [
        "light",
        "dark",
        "auto"
    ].includes(defaultColorScheme) ? defaultColorScheme : "light";
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("script", {
        ...others,
        "data-mantine-script": true,
        dangerouslySetInnerHTML: {
            __html: getScript({
                defaultColorScheme: _defaultColorScheme,
                localStorageKey,
                forceColorScheme
            })
        }
    });
}
;
 //# sourceMappingURL=ColorSchemeScript.mjs.map
}),
]);

//# sourceMappingURL=9e883_%40mantine_core_esm_19aed89e._.js.map