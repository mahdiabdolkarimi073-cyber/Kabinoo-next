(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/frontend/node_modules/@mantine/hooks/esm/use-move/use-move.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clampUseMovePosition",
    ()=>clampUseMovePosition,
    "useMove",
    ()=>useMove
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/utils/clamp/clamp.mjs [app-client] (ecmascript)");
'use client';
;
;
function clampUseMovePosition(position) {
    return {
        x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(position.x, 0, 1),
        y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(position.y, 0, 1)
    };
}
function useMove(onChange, handlers) {
    let dir = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "ltr";
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isSliding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMove.useEffect": ()=>{
            mounted.current = true;
        }
    }["useMove.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMove.useEffect": ()=>{
            const node = ref.current;
            const onScrub = {
                "useMove.useEffect.onScrub": (param)=>{
                    let { x, y } = param;
                    cancelAnimationFrame(frame.current);
                    frame.current = requestAnimationFrame({
                        "useMove.useEffect.onScrub": ()=>{
                            if (mounted.current && node) {
                                node.style.userSelect = "none";
                                const rect = node.getBoundingClientRect();
                                if (rect.width && rect.height) {
                                    const _x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((x - rect.left) / rect.width, 0, 1);
                                    onChange({
                                        x: dir === "ltr" ? _x : 1 - _x,
                                        y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((y - rect.top) / rect.height, 0, 1)
                                    });
                                }
                            }
                        }
                    }["useMove.useEffect.onScrub"]);
                }
            }["useMove.useEffect.onScrub"];
            const bindEvents = {
                "useMove.useEffect.bindEvents": ()=>{
                    document.addEventListener("mousemove", onMouseMove);
                    document.addEventListener("mouseup", stopScrubbing);
                    document.addEventListener("touchmove", onTouchMove);
                    document.addEventListener("touchend", stopScrubbing);
                }
            }["useMove.useEffect.bindEvents"];
            const unbindEvents = {
                "useMove.useEffect.unbindEvents": ()=>{
                    document.removeEventListener("mousemove", onMouseMove);
                    document.removeEventListener("mouseup", stopScrubbing);
                    document.removeEventListener("touchmove", onTouchMove);
                    document.removeEventListener("touchend", stopScrubbing);
                }
            }["useMove.useEffect.unbindEvents"];
            const startScrubbing = {
                "useMove.useEffect.startScrubbing": ()=>{
                    if (!isSliding.current && mounted.current) {
                        isSliding.current = true;
                        typeof (handlers === null || handlers === void 0 ? void 0 : handlers.onScrubStart) === "function" && handlers.onScrubStart();
                        setActive(true);
                        bindEvents();
                    }
                }
            }["useMove.useEffect.startScrubbing"];
            const stopScrubbing = {
                "useMove.useEffect.stopScrubbing": ()=>{
                    if (isSliding.current && mounted.current) {
                        isSliding.current = false;
                        setActive(false);
                        unbindEvents();
                        setTimeout({
                            "useMove.useEffect.stopScrubbing": ()=>{
                                typeof (handlers === null || handlers === void 0 ? void 0 : handlers.onScrubEnd) === "function" && handlers.onScrubEnd();
                            }
                        }["useMove.useEffect.stopScrubbing"], 0);
                    }
                }
            }["useMove.useEffect.stopScrubbing"];
            const onMouseDown = {
                "useMove.useEffect.onMouseDown": (event)=>{
                    startScrubbing();
                    event.preventDefault();
                    onMouseMove(event);
                }
            }["useMove.useEffect.onMouseDown"];
            const onMouseMove = {
                "useMove.useEffect.onMouseMove": (event)=>onScrub({
                        x: event.clientX,
                        y: event.clientY
                    })
            }["useMove.useEffect.onMouseMove"];
            const onTouchStart = {
                "useMove.useEffect.onTouchStart": (event)=>{
                    if (event.cancelable) {
                        event.preventDefault();
                    }
                    startScrubbing();
                    onTouchMove(event);
                }
            }["useMove.useEffect.onTouchStart"];
            const onTouchMove = {
                "useMove.useEffect.onTouchMove": (event)=>{
                    if (event.cancelable) {
                        event.preventDefault();
                    }
                    onScrub({
                        x: event.changedTouches[0].clientX,
                        y: event.changedTouches[0].clientY
                    });
                }
            }["useMove.useEffect.onTouchMove"];
            node === null || node === void 0 ? void 0 : node.addEventListener("mousedown", onMouseDown);
            node === null || node === void 0 ? void 0 : node.addEventListener("touchstart", onTouchStart, {
                passive: false
            });
            return ({
                "useMove.useEffect": ()=>{
                    if (node) {
                        node.removeEventListener("mousedown", onMouseDown);
                        node.removeEventListener("touchstart", onTouchStart);
                    }
                }
            })["useMove.useEffect"];
        }
    }["useMove.useEffect"], [
        dir,
        onChange
    ]);
    return {
        ref,
        active
    };
}
;
 //# sourceMappingURL=use-move.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/core/utils/find-closest-number/find-closest-number.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findClosestNumber",
    ()=>findClosestNumber
]);
'use client';
function findClosestNumber(value, numbers) {
    if (numbers.length === 0) {
        return value;
    }
    return numbers.reduce((prev, curr)=>Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
}
;
 //# sourceMappingURL=find-closest-number.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderProvider",
    ()=>SliderProvider,
    "useSliderContext",
    ()=>useSliderContext
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
const [SliderProvider, useSliderContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSafeContext"])("SliderProvider was not found in tree");
;
 //# sourceMappingURL=Slider.context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/SliderRoot/SliderRoot.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SliderRoot",
    ()=>SliderRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.context.mjs [app-client] (ecmascript)");
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
const SliderRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { size, disabled, variant, color, thumbSize, radius, ...others } = param;
    const { getStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        tabIndex: -1,
        variant,
        size,
        ref,
        ...getStyles("root"),
        ...others
    });
});
SliderRoot.displayName = "@mantine/core/SliderRoot";
;
 //# sourceMappingURL=SliderRoot.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Thumb/Thumb.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Thumb",
    ()=>Thumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Transition/Transition.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.context.mjs [app-client] (ecmascript)");
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
const Thumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { max, min, value, position, label, dragging, onMouseDown, onKeyDownCapture, labelTransitionProps, labelAlwaysOn, thumbLabel, onFocus, onBlur, showLabelOnHover, isHovered, children = null, disabled } = param;
    const { getStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderContext"])();
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isVisible = labelAlwaysOn || dragging || focused || showLabelOnHover && isHovered;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        tabIndex: 0,
        role: "slider",
        "aria-label": thumbLabel,
        "aria-valuemax": max,
        "aria-valuemin": min,
        "aria-valuenow": value,
        ref,
        __vars: {
            "--slider-thumb-offset": "".concat(position, "%")
        },
        ...getStyles("thumb", {
            focusable: true
        }),
        mod: {
            dragging,
            disabled
        },
        onFocus: (event)=>{
            setFocused(true);
            typeof onFocus === "function" && onFocus(event);
        },
        onBlur: (event)=>{
            setFocused(false);
            typeof onBlur === "function" && onBlur(event);
        },
        onTouchStart: onMouseDown,
        onMouseDown,
        onKeyDownCapture,
        onClick: (event)=>event.stopPropagation(),
        children: [
            children,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Transition$2f$Transition$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
                mounted: label != null && !!isVisible,
                transition: "fade",
                duration: 0,
                ...labelTransitionProps,
                children: (transitionStyles)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        ...getStyles("label", {
                            style: transitionStyles
                        }),
                        children: label
                    })
            })
        ]
    });
});
Thumb.displayName = "@mantine/core/SliderThumb";
;
 //# sourceMappingURL=Thumb.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-position/get-position.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPosition",
    ()=>getPosition
]);
'use client';
function getPosition(param) {
    let { value, min, max } = param;
    const position = (value - min) / (max - min) * 100;
    return Math.min(Math.max(position, 0), 100);
}
;
 //# sourceMappingURL=get-position.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Marks/is-mark-filled.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMarkFilled",
    ()=>isMarkFilled
]);
'use client';
function isMarkFilled(param) {
    let { mark, offset, value, inverted = false } = param;
    return inverted ? typeof offset === "number" ? mark.value <= offset || mark.value >= value : mark.value >= value : typeof offset === "number" ? mark.value >= offset && mark.value <= value : mark.value <= value;
}
;
 //# sourceMappingURL=is-mark-filled.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Marks/Marks.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Marks",
    ()=>Marks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$position$2f$get$2d$position$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-position/get-position.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Marks$2f$is$2d$mark$2d$filled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Marks/is-mark-filled.mjs [app-client] (ecmascript)");
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
function Marks(param) {
    let { marks, min, max, disabled, value, offset, inverted } = param;
    const { getStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderContext"])();
    if (!marks) {
        return null;
    }
    const items = marks.map((mark, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            ...getStyles("markWrapper"),
            __vars: {
                "--mark-offset": "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$position$2f$get$2d$position$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosition"])({
                    value: mark.value,
                    min,
                    max
                }), "%")
            },
            key: index
        }, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            ...getStyles("mark"),
            mod: {
                filled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Marks$2f$is$2d$mark$2d$filled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMarkFilled"])({
                    mark,
                    value,
                    offset,
                    inverted
                }),
                disabled
            }
        }), mark.label && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ...getStyles("markLabel"),
            children: mark.label
        })));
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        children: items
    });
}
Marks.displayName = "@mantine/core/SliderMarks";
;
 //# sourceMappingURL=Marks.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Track/Track.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Track",
    ()=>Track
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Marks$2f$Marks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Marks/Marks.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.context.mjs [app-client] (ecmascript)");
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
function Track(param) {
    let { filled, children, offset, disabled, marksOffset, inverted, containerProps, ...others } = param;
    const { getStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("trackContainer"),
        mod: {
            disabled
        },
        ...containerProps,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            ...getStyles("track"),
            mod: {
                inverted,
                disabled
            },
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    mod: {
                        inverted,
                        disabled
                    },
                    __vars: {
                        "--slider-bar-width": "calc(".concat(filled, "% + var(--slider-size))"),
                        "--slider-bar-offset": "calc(".concat(offset, "% - var(--slider-size))")
                    },
                    ...getStyles("bar")
                }),
                children,
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Marks$2f$Marks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marks"], {
                    ...others,
                    offset: marksOffset,
                    disabled,
                    inverted
                })
            ]
        })
    });
}
Track.displayName = "@mantine/core/SliderTrack";
;
 //# sourceMappingURL=Track.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-change-value/get-change-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChangeValue",
    ()=>getChangeValue
]);
'use client';
function getChangeValue(param) {
    let { value, containerWidth, min, max, step, precision } = param;
    const left = !containerWidth ? value : Math.min(Math.max(value, 0), containerWidth) / containerWidth;
    const dx = left * (max - min);
    const nextValue = (dx !== 0 ? Math.round(dx / step) * step : 0) + min;
    const nextValueWithinStep = Math.max(nextValue, min);
    if (precision !== void 0) {
        return Number(nextValueWithinStep.toFixed(precision));
    }
    return nextValueWithinStep;
}
;
 //# sourceMappingURL=get-change-value.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-floating-value/get-gloating-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFloatingValue",
    ()=>getFloatingValue
]);
'use client';
function getFloatingValue(value, precision) {
    return parseFloat(value.toFixed(precision));
}
;
 //# sourceMappingURL=get-gloating-value.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-precision/get-precision.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPrecision",
    ()=>getPrecision
]);
'use client';
function getPrecision(step) {
    if (!step) {
        return 0;
    }
    const split = step.toString().split(".");
    return split.length > 1 ? split[1].length : 0;
}
;
 //# sourceMappingURL=get-precision.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-step-mark-value/get-step-mark-value.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFirstMarkValue",
    ()=>getFirstMarkValue,
    "getLastMarkValue",
    ()=>getLastMarkValue,
    "getNextMarkValue",
    ()=>getNextMarkValue,
    "getPreviousMarkValue",
    ()=>getPreviousMarkValue
]);
'use client';
function getNextMarkValue(currentValue, marks) {
    const sortedMarks = [
        ...marks
    ].sort((a, b)=>a.value - b.value);
    const nextMark = sortedMarks.find((mark)=>mark.value > currentValue);
    return nextMark ? nextMark.value : currentValue;
}
function getPreviousMarkValue(currentValue, marks) {
    const sortedMarks = [
        ...marks
    ].sort((a, b)=>b.value - a.value);
    const previousMark = sortedMarks.find((mark)=>mark.value < currentValue);
    return previousMark ? previousMark.value : currentValue;
}
function getFirstMarkValue(marks) {
    const sortedMarks = [
        ...marks
    ].sort((a, b)=>a.value - b.value);
    return sortedMarks.length > 0 ? sortedMarks[0].value : 0;
}
function getLastMarkValue(marks) {
    const sortedMarks = [
        ...marks
    ].sort((a, b)=>a.value - b.value);
    return sortedMarks.length > 0 ? sortedMarks[sortedMarks.length - 1].value : 100;
}
;
 //# sourceMappingURL=get-step-mark-value.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_dd36362e",
    "label": "m_c9357328",
    "thumb": "m_c9a9a60a",
    "trackContainer": "m_a8645c2",
    "track": "m_c9ade57f",
    "bar": "m_38aeed47",
    "markWrapper": "m_b7b0423a",
    "mark": "m_dd33bc19",
    "markLabel": "m_68c77a5b"
};
;
 //# sourceMappingURL=Slider.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider/Slider.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/utils/clamp/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$move$2f$use$2d$move$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-move/use-move.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$closest$2d$number$2f$find$2d$closest$2d$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/find-closest-number/find-closest-number.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$SliderRoot$2f$SliderRoot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/SliderRoot/SliderRoot.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Thumb$2f$Thumb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Thumb/Thumb.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Track$2f$Track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Track/Track.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$change$2d$value$2f$get$2d$change$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-change-value/get-change-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-floating-value/get-gloating-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$position$2f$get$2d$position$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-position/get-position.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$precision$2f$get$2d$precision$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-precision/get-precision.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/utils/get-step-mark-value/get-step-mark-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Slider/Slider.module.css.mjs [app-client] (ecmascript)");
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
;
const defaultProps = {
    radius: "xl",
    min: 0,
    max: 100,
    step: 1,
    marks: [],
    label: (f)=>f,
    labelTransitionProps: {
        transition: "fade",
        duration: 0
    },
    labelAlwaysOn: false,
    thumbLabel: "",
    showLabelOnHover: true,
    disabled: false,
    scale: (v)=>v
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, param)=>{
    let { size, color, thumbSize, radius } = param;
    return {
        root: {
            "--slider-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, "slider-size"),
            "--slider-color": color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0,
            "--slider-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--slider-thumb-size": thumbSize !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rem"])(thumbSize) : "calc(var(--slider-size) * 2)"
        }
    };
});
const Slider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("Slider", defaultProps, _props);
    const { classNames, styles, value, onChange, onChangeEnd, size, min, max, step, precision: _precision, defaultValue, name, marks, label, labelTransitionProps, labelAlwaysOn, thumbLabel, showLabelOnHover, thumbChildren, disabled, unstyled, scale, inverted, className, style, vars, hiddenInputProps, restrictToMarks, thumbProps, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Slider",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        classNames,
        className,
        styles,
        style,
        vars,
        varsResolver,
        unstyled
    });
    const { dir } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$DirectionProvider$2f$DirectionProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"])();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [_value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUncontrolled"])({
        value: typeof value === "number" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(value, min, max) : value,
        defaultValue: typeof defaultValue === "number" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(defaultValue, min, max) : defaultValue,
        finalValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$clamp$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, min, max),
        onChange
    });
    const valueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(_value);
    const onChangeEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onChangeEnd);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slider.useEffect": ()=>{
            onChangeEndRef.current = onChangeEnd;
        }
    }["Slider.useEffect"], [
        onChangeEnd
    ]);
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const thumb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$position$2f$get$2d$position$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosition"])({
        value: _value,
        min,
        max
    });
    const scaledValue = scale(_value);
    const _label = typeof label === "function" ? label(scaledValue) : label;
    const precision = _precision !== null && _precision !== void 0 ? _precision : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$precision$2f$get$2d$precision$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrecision"])(step);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Slider.useCallback[handleChange]": (param)=>{
            let { x } = param;
            if (!disabled) {
                const nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$change$2d$value$2f$get$2d$change$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChangeValue"])({
                    value: x,
                    min,
                    max,
                    step,
                    precision
                });
                setValue(restrictToMarks && (marks === null || marks === void 0 ? void 0 : marks.length) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$closest$2d$number$2f$find$2d$closest$2d$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findClosestNumber"])(nextValue, marks.map({
                    "Slider.useCallback[handleChange]": (mark)=>mark.value
                }["Slider.useCallback[handleChange]"])) : nextValue);
                valueRef.current = nextValue;
            }
        }
    }["Slider.useCallback[handleChange]"], [
        disabled,
        min,
        max,
        step,
        precision,
        setValue,
        marks,
        restrictToMarks
    ]);
    const handleScrubEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Slider.useCallback[handleScrubEnd]": ()=>{
            if (!disabled && onChangeEndRef.current) {
                const finalValue = restrictToMarks && (marks === null || marks === void 0 ? void 0 : marks.length) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$find$2d$closest$2d$number$2f$find$2d$closest$2d$number$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findClosestNumber"])(valueRef.current, marks.map({
                    "Slider.useCallback[handleScrubEnd]": (mark)=>mark.value
                }["Slider.useCallback[handleScrubEnd]"])) : valueRef.current;
                onChangeEndRef.current(finalValue);
            }
        }
    }["Slider.useCallback[handleScrubEnd]"], [
        disabled,
        marks,
        restrictToMarks
    ]);
    const { ref: container, active } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$move$2f$use$2d$move$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMove"])(handleChange, {
        onScrubEnd: handleScrubEnd
    }, dir);
    const callOnChangeEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Slider.useCallback[callOnChangeEnd]": (value2)=>{
            if (!disabled && onChangeEndRef.current) {
                onChangeEndRef.current(value2);
            }
        }
    }["Slider.useCallback[callOnChangeEnd]"], [
        disabled
    ]);
    const handleTrackKeydownCapture = (event)=>{
        if (!disabled) {
            switch(event.key){
                case "ArrowUp":
                    {
                        var _thumb_current;
                        event.preventDefault();
                        (_thumb_current = thumb.current) === null || _thumb_current === void 0 ? void 0 : _thumb_current.focus();
                        if (restrictToMarks && marks) {
                            const nextValue2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextMarkValue"])(_value, marks);
                            setValue(nextValue2);
                            callOnChangeEnd(nextValue2);
                            break;
                        }
                        const nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFloatingValue"])(Math.min(Math.max(_value + step, min), max), precision);
                        setValue(nextValue);
                        callOnChangeEnd(nextValue);
                        break;
                    }
                case "ArrowRight":
                    {
                        var _thumb_current1;
                        event.preventDefault();
                        (_thumb_current1 = thumb.current) === null || _thumb_current1 === void 0 ? void 0 : _thumb_current1.focus();
                        if (restrictToMarks && marks) {
                            const nextValue2 = dir === "rtl" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousMarkValue"])(_value, marks) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextMarkValue"])(_value, marks);
                            setValue(nextValue2);
                            callOnChangeEnd(nextValue2);
                            break;
                        }
                        const nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFloatingValue"])(Math.min(Math.max(dir === "rtl" ? _value - step : _value + step, min), max), precision);
                        setValue(nextValue);
                        callOnChangeEnd(nextValue);
                        break;
                    }
                case "ArrowDown":
                    {
                        var _thumb_current2;
                        event.preventDefault();
                        (_thumb_current2 = thumb.current) === null || _thumb_current2 === void 0 ? void 0 : _thumb_current2.focus();
                        if (restrictToMarks && marks) {
                            const nextValue2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousMarkValue"])(_value, marks);
                            setValue(nextValue2);
                            callOnChangeEnd(nextValue2);
                            break;
                        }
                        const nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFloatingValue"])(Math.min(Math.max(_value - step, min), max), precision);
                        setValue(nextValue);
                        callOnChangeEnd(nextValue);
                        break;
                    }
                case "ArrowLeft":
                    {
                        var _thumb_current3;
                        event.preventDefault();
                        (_thumb_current3 = thumb.current) === null || _thumb_current3 === void 0 ? void 0 : _thumb_current3.focus();
                        if (restrictToMarks && marks) {
                            const nextValue2 = dir === "rtl" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextMarkValue"])(_value, marks) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousMarkValue"])(_value, marks);
                            setValue(nextValue2);
                            callOnChangeEnd(nextValue2);
                            break;
                        }
                        const nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$floating$2d$value$2f$get$2d$gloating$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFloatingValue"])(Math.min(Math.max(dir === "rtl" ? _value + step : _value - step, min), max), precision);
                        setValue(nextValue);
                        callOnChangeEnd(nextValue);
                        break;
                    }
                case "Home":
                    {
                        var _thumb_current4;
                        event.preventDefault();
                        (_thumb_current4 = thumb.current) === null || _thumb_current4 === void 0 ? void 0 : _thumb_current4.focus();
                        if (restrictToMarks && marks) {
                            setValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirstMarkValue"])(marks));
                            callOnChangeEnd((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirstMarkValue"])(marks));
                            break;
                        }
                        setValue(min);
                        callOnChangeEnd(min);
                        break;
                    }
                case "End":
                    {
                        var _thumb_current5;
                        event.preventDefault();
                        (_thumb_current5 = thumb.current) === null || _thumb_current5 === void 0 ? void 0 : _thumb_current5.focus();
                        if (restrictToMarks && marks) {
                            setValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastMarkValue"])(marks));
                            callOnChangeEnd((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$utils$2f$get$2d$step$2d$mark$2d$value$2f$get$2d$step$2d$mark$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastMarkValue"])(marks));
                            break;
                        }
                        setValue(max);
                        callOnChangeEnd(max);
                        break;
                    }
            }
        }
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderProvider"], {
        value: {
            getStyles
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$SliderRoot$2f$SliderRoot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SliderRoot"], {
            ...others,
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRef"])(ref, root),
            onKeyDownCapture: handleTrackKeydownCapture,
            onMouseDownCapture: ()=>{
                var _root_current;
                return (_root_current = root.current) === null || _root_current === void 0 ? void 0 : _root_current.focus();
            },
            size,
            disabled,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Track$2f$Track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"], {
                    inverted,
                    offset: 0,
                    filled: position,
                    marks,
                    min,
                    max,
                    value: scaledValue,
                    disabled,
                    containerProps: {
                        ref: container,
                        onMouseEnter: showLabelOnHover ? ()=>setHovered(true) : void 0,
                        onMouseLeave: showLabelOnHover ? ()=>setHovered(false) : void 0
                    },
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Thumb$2f$Thumb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
                        max,
                        min,
                        value: scaledValue,
                        position,
                        dragging: active,
                        label: _label,
                        ref: thumb,
                        labelTransitionProps,
                        labelAlwaysOn,
                        thumbLabel,
                        showLabelOnHover,
                        isHovered: hovered,
                        disabled,
                        ...thumbProps,
                        children: thumbChildren
                    })
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                    type: "hidden",
                    name,
                    value: scaledValue,
                    ...hiddenInputProps
                })
            ]
        })
    });
});
Slider.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Slider$2f$Slider$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Slider.displayName = "@mantine/core/Slider";
;
 //# sourceMappingURL=Slider.mjs.map
}),
"[project]/frontend/node_modules/@mantine/hooks/esm/use-mounted/use-mounted.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMounted",
    ()=>useMounted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useMounted() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMounted.useEffect": ()=>setMounted(true)
    }["useMounted.useEffect"], []);
    return mounted;
}
;
 //# sourceMappingURL=use-mounted.mjs.map
}),
"[project]/frontend/node_modules/@mantine/hooks/esm/utils/shallow-equal/shallow-equal.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shallowEqual",
    ()=>shallowEqual
]);
'use client';
function shallowEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    }
    if (!(a instanceof Object) || !(b instanceof Object)) {
        return false;
    }
    const keys = Object.keys(a);
    const { length } = keys;
    if (length !== Object.keys(b).length) {
        return false;
    }
    for(let i = 0; i < length; i += 1){
        const key = keys[i];
        if (!(key in b)) {
            return false;
        }
        if (a[key] !== b[key] && !(Number.isNaN(a[key]) && Number.isNaN(b[key]))) {
            return false;
        }
    }
    return true;
}
;
 //# sourceMappingURL=shallow-equal.mjs.map
}),
"[project]/frontend/node_modules/@mantine/hooks/esm/use-shallow-effect/use-shallow-effect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useShallowEffect",
    ()=>useShallowEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$shallow$2d$equal$2f$shallow$2d$equal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/utils/shallow-equal/shallow-equal.mjs [app-client] (ecmascript)");
'use client';
;
;
function shallowCompare(prevValue, currValue) {
    if (!prevValue || !currValue) {
        return false;
    }
    if (prevValue === currValue) {
        return true;
    }
    if (prevValue.length !== currValue.length) {
        return false;
    }
    for(let i = 0; i < prevValue.length; i += 1){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$shallow$2d$equal$2f$shallow$2d$equal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(prevValue[i], currValue[i])) {
            return false;
        }
    }
    return true;
}
function useShallowCompare(dependencies) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const updateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    if (!shallowCompare(ref.current, dependencies)) {
        ref.current = dependencies;
        updateRef.current += 1;
    }
    return [
        updateRef.current
    ];
}
function useShallowEffect(cb, dependencies) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(cb, useShallowCompare(dependencies));
}
;
 //# sourceMappingURL=use-shallow-effect.mjs.map
}),
"[project]/frontend/node_modules/@mantine/hooks/esm/use-timeout/use-timeout.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTimeout",
    ()=>useTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useTimeout(callback, delay) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        autoInvoke: false
    };
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimeout.useCallback[start]": function() {
            for(var _len = arguments.length, callbackParams = new Array(_len), _key = 0; _key < _len; _key++){
                callbackParams[_key] = arguments[_key];
            }
            if (!timeoutRef.current) {
                timeoutRef.current = window.setTimeout({
                    "useTimeout.useCallback[start]": ()=>{
                        callback(callbackParams);
                        timeoutRef.current = null;
                    }
                }["useTimeout.useCallback[start]"], delay);
            }
        }
    }["useTimeout.useCallback[start]"], [
        delay
    ]);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimeout.useCallback[clear]": ()=>{
            if (timeoutRef.current) {
                window.clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        }
    }["useTimeout.useCallback[clear]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimeout.useEffect": ()=>{
            if (options.autoInvoke) {
                start();
            }
            return clear;
        }
    }["useTimeout.useEffect"], [
        clear,
        start
    ]);
    return {
        start,
        clear
    };
}
;
 //# sourceMappingURL=use-timeout.mjs.map
}),
"[project]/frontend/node_modules/@mantine/hooks/esm/use-mutation-observer/use-mutation-observer.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutationObserver",
    ()=>useMutationObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
function useMutationObserver(callback, options, target) {
    const observer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMutationObserver.useEffect": ()=>{
            const targetElement = typeof target === "function" ? target() : target;
            if (targetElement || ref.current) {
                observer.current = new MutationObserver(callback);
                observer.current.observe(targetElement || ref.current, options);
            }
            return ({
                "useMutationObserver.useEffect": ()=>{
                    var _observer_current;
                    (_observer_current = observer.current) === null || _observer_current === void 0 ? void 0 : _observer_current.disconnect();
                }
            })["useMutationObserver.useEffect"];
        }
    }["useMutationObserver.useEffect"], [
        callback,
        options
    ]);
    return ref;
}
;
 //# sourceMappingURL=use-mutation-observer.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/FloatingIndicator/use-floating-indicator.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFloatingIndicator",
    ()=>useFloatingIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$timeout$2f$use$2d$timeout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-timeout/use-timeout.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$mutation$2d$observer$2f$use$2d$mutation$2d$observer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-mutation-observer/use-mutation-observer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$env$2f$get$2d$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-env/get-env.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$to$2d$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/ScrollArea/utils/to-int.mjs [app-client] (ecmascript)");
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
function isParent(parentElement, childElement) {
    if (!childElement || !parentElement) {
        return false;
    }
    let parent = childElement.parentNode;
    while(parent != null){
        if (parent === parentElement) {
            return true;
        }
        parent = parent.parentNode;
    }
    return false;
}
function useFloatingIndicator(param) {
    let { target, parent, ref, displayAfterTransitionEnd } = param;
    const transitionTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const [initialized, setInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hidden, setHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(typeof displayAfterTransitionEnd === "boolean" ? displayAfterTransitionEnd : false);
    const updatePosition = ()=>{
        if (!target || !parent || !ref.current) {
            return;
        }
        const targetRect = target.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();
        const targetComputedStyle = window.getComputedStyle(target);
        const parentComputedStyle = window.getComputedStyle(parent);
        const borderTopWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$to$2d$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toInt"])(targetComputedStyle.borderTopWidth) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$to$2d$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toInt"])(parentComputedStyle.borderTopWidth);
        const borderLeftWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$to$2d$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toInt"])(targetComputedStyle.borderLeftWidth) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$utils$2f$to$2d$int$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toInt"])(parentComputedStyle.borderLeftWidth);
        const position = {
            top: targetRect.top - parentRect.top - borderTopWidth,
            left: targetRect.left - parentRect.left - borderLeftWidth,
            width: targetRect.width,
            height: targetRect.height
        };
        ref.current.style.transform = "translateY(".concat(position.top, "px) translateX(").concat(position.left, "px)");
        ref.current.style.width = "".concat(position.width, "px");
        ref.current.style.height = "".concat(position.height, "px");
    };
    const updatePositionWithoutAnimation = ()=>{
        window.clearTimeout(transitionTimeout.current);
        if (ref.current) {
            ref.current.style.transitionDuration = "0ms";
        }
        updatePosition();
        transitionTimeout.current = window.setTimeout(()=>{
            if (ref.current) {
                ref.current.style.transitionDuration = "";
            }
        }, 30);
    };
    const targetResizeObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const parentResizeObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFloatingIndicator.useEffect": ()=>{
            updatePosition();
            if (target) {
                targetResizeObserver.current = new ResizeObserver(updatePositionWithoutAnimation);
                targetResizeObserver.current.observe(target);
                if (parent) {
                    parentResizeObserver.current = new ResizeObserver(updatePositionWithoutAnimation);
                    parentResizeObserver.current.observe(parent);
                }
                return ({
                    "useFloatingIndicator.useEffect": ()=>{
                        var _targetResizeObserver_current, _parentResizeObserver_current;
                        (_targetResizeObserver_current = targetResizeObserver.current) === null || _targetResizeObserver_current === void 0 ? void 0 : _targetResizeObserver_current.disconnect();
                        (_parentResizeObserver_current = parentResizeObserver.current) === null || _parentResizeObserver_current === void 0 ? void 0 : _parentResizeObserver_current.disconnect();
                    }
                })["useFloatingIndicator.useEffect"];
            }
            return void 0;
        }
    }["useFloatingIndicator.useEffect"], [
        parent,
        target
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFloatingIndicator.useEffect": ()=>{
            if (parent) {
                const handleTransitionEnd = {
                    "useFloatingIndicator.useEffect.handleTransitionEnd": (event)=>{
                        if (isParent(event.target, parent)) {
                            updatePositionWithoutAnimation();
                            setHidden(false);
                        }
                    }
                }["useFloatingIndicator.useEffect.handleTransitionEnd"];
                parent.addEventListener("transitionend", handleTransitionEnd);
                return ({
                    "useFloatingIndicator.useEffect": ()=>{
                        parent.removeEventListener("transitionend", handleTransitionEnd);
                    }
                })["useFloatingIndicator.useEffect"];
            }
            return void 0;
        }
    }["useFloatingIndicator.useEffect"], [
        parent
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$timeout$2f$use$2d$timeout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])({
        "useFloatingIndicator.useTimeout": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$env$2f$get$2d$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnv"])() !== "test") {
                setInitialized(true);
            }
        }
    }["useFloatingIndicator.useTimeout"], 20, {
        autoInvoke: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$mutation$2d$observer$2f$use$2d$mutation$2d$observer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutationObserver"])({
        "useFloatingIndicator.useMutationObserver": (mutations)=>{
            mutations.forEach({
                "useFloatingIndicator.useMutationObserver": (mutation)=>{
                    if (mutation.type === "attributes" && mutation.attributeName === "dir") {
                        updatePositionWithoutAnimation();
                    }
                }
            }["useFloatingIndicator.useMutationObserver"]);
        }
    }["useFloatingIndicator.useMutationObserver"], {
        attributes: true,
        attributeFilter: [
            "dir"
        ]
    }, {
        "useFloatingIndicator.useMutationObserver": ()=>document.documentElement
    }["useFloatingIndicator.useMutationObserver"]);
    return {
        initialized,
        hidden
    };
}
;
 //# sourceMappingURL=use-floating-indicator.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/FloatingIndicator/FloatingIndicator.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_96b553a6"
};
;
 //# sourceMappingURL=FloatingIndicator.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/FloatingIndicator/FloatingIndicator.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingIndicator",
    ()=>FloatingIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$FloatingIndicator$2f$use$2d$floating$2d$indicator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/FloatingIndicator/use-floating-indicator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$FloatingIndicator$2f$FloatingIndicator$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/FloatingIndicator/FloatingIndicator.module.css.mjs [app-client] (ecmascript)");
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
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_theme, param)=>{
    let { transitionDuration } = param;
    return {
        root: {
            "--transition-duration": typeof transitionDuration === "number" ? "".concat(transitionDuration, "ms") : transitionDuration
        }
    };
});
const FloatingIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("FloatingIndicator", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, target, parent, transitionDuration, mod, displayAfterTransitionEnd, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "FloatingIndicator",
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$FloatingIndicator$2f$FloatingIndicator$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { initialized, hidden } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$FloatingIndicator$2f$use$2d$floating$2d$indicator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFloatingIndicator"])({
        target,
        parent,
        ref: innerRef,
        displayAfterTransitionEnd
    });
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRef"])(ref, innerRef);
    if (!target || !parent) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ref: mergedRef,
        mod: [
            {
                initialized,
                hidden
            },
            mod
        ],
        ...getStyles("root"),
        ...others
    });
});
FloatingIndicator.displayName = "@mantine/core/FloatingIndicator";
FloatingIndicator.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$FloatingIndicator$2f$FloatingIndicator$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
;
 //# sourceMappingURL=FloatingIndicator.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/SegmentedControl/SegmentedControl.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_cf365364",
    "indicator": "m_9e182ccd",
    "label": "m_1738fcb2",
    "input": "m_1714d588",
    "control": "m_69686b9b",
    "innerLabel": "m_78882f40"
};
;
 //# sourceMappingURL=SegmentedControl.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/SegmentedControl/SegmentedControl.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SegmentedControl",
    ()=>SegmentedControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$mounted$2f$use$2d$mounted$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-mounted/use-mounted.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$random$2d$id$2f$random$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/utils/random-id/random-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-id/use-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$shallow$2d$effect$2f$use$2d$shallow$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/hooks/esm/use-shallow-effect/use-shallow-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$contrast$2d$color$2f$get$2d$contrast$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$FloatingIndicator$2f$FloatingIndicator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/FloatingIndicator/FloatingIndicator.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SegmentedControl$2f$SegmentedControl$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/SegmentedControl/SegmentedControl.module.css.mjs [app-client] (ecmascript)");
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
    withItemsBorders: true
};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((theme, param)=>{
    let { radius, color, transitionDuration, size, transitionTimingFunction } = param;
    return {
        root: {
            "--sc-radius": radius === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRadius"])(radius),
            "--sc-color": color ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$theme$2d$color$2f$get$2d$theme$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getThemeColor"])(color, theme) : void 0,
            "--sc-shadow": color ? void 0 : "var(--mantine-shadow-xs)",
            "--sc-transition-duration": transitionDuration === void 0 ? void 0 : "".concat(transitionDuration, "ms"),
            "--sc-transition-timing-function": transitionTimingFunction,
            "--sc-padding": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSize"])(size, "sc-padding"),
            "--sc-font-size": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFontSize"])(size)
        }
    };
});
const SegmentedControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["factory"])((_props, ref)=>{
    var _data_find, _data_;
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("SegmentedControl", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, data, value, defaultValue, onChange, size, name, disabled, readOnly, fullWidth, orientation, radius, color, transitionDuration, transitionTimingFunction, variant, autoContrast, withItemsBorders, mod, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "SegmentedControl",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SegmentedControl$2f$SegmentedControl$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineThemeProvider$2f$MantineThemeProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMantineTheme"])();
    const _data = data.map((item)=>typeof item === "string" ? {
            label: item,
            value: item
        } : item);
    const initialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$mounted$2f$use$2d$mounted$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"])();
    const [key, setKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$random$2d$id$2f$random$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomId"])());
    const [parent, setParent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [refs, setRefs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const setElementRef = (element, val)=>{
        refs[val] = element;
        setRefs(refs);
    };
    var _data_find_value, _ref;
    const [_value, handleValueChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$uncontrolled$2f$use$2d$uncontrolled$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUncontrolled"])({
        value,
        defaultValue,
        finalValue: Array.isArray(data) ? (_ref = (_data_find_value = (_data_find = _data.find({
            "SegmentedControl.useUncontrolled": (item)=>!item.disabled
        }["SegmentedControl.useUncontrolled"])) === null || _data_find === void 0 ? void 0 : _data_find.value) !== null && _data_find_value !== void 0 ? _data_find_value : (_data_ = data[0]) === null || _data_ === void 0 ? void 0 : _data_.value) !== null && _ref !== void 0 ? _ref : null : null,
        onChange
    });
    const uuid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$id$2f$use$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(name);
    const controls = _data.map((item)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            ...getStyles("control"),
            mod: {
                active: _value === item.value,
                orientation
            },
            key: item.value
        }, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("input", {
            ...getStyles("input"),
            disabled: disabled || item.disabled,
            type: "radio",
            name: uuid,
            value: item.value,
            id: "".concat(uuid, "-").concat(item.value),
            checked: _value === item.value,
            onChange: ()=>!readOnly && handleValueChange(item.value),
            "data-focus-ring": theme.focusRing,
            key: "".concat(item.value, "-input")
        }), /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            component: "label",
            ...getStyles("label"),
            mod: {
                active: _value === item.value && !(disabled || item.disabled),
                disabled: disabled || item.disabled,
                "read-only": readOnly
            },
            htmlFor: "".concat(uuid, "-").concat(item.value),
            ref: (node)=>setElementRef(node, item.value),
            __vars: {
                "--sc-label-color": color !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$color$2d$functions$2f$get$2d$contrast$2d$color$2f$get$2d$contrast$2d$color$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContrastColor"])({
                    color,
                    theme,
                    autoContrast
                }) : void 0
            },
            key: "".concat(item.value, "-label")
        }, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
            ...getStyles("innerLabel"),
            children: item.label
        }))));
    const mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$merged$2d$ref$2f$use$2d$merged$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergedRef"])(ref, {
        "SegmentedControl.useMergedRef[mergedRef]": (node)=>setParent(node)
    }["SegmentedControl.useMergedRef[mergedRef]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$shallow$2d$effect$2f$use$2d$shallow$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallowEffect"])({
        "SegmentedControl.useShallowEffect": ()=>{
            setKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$utils$2f$random$2d$id$2f$random$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomId"])());
        }
    }["SegmentedControl.useShallowEffect"], [
        data.length
    ]);
    if (data.length === 0) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ...getStyles("root"),
        variant,
        size,
        ref: mergedRef,
        mod: [
            {
                "full-width": fullWidth,
                orientation,
                initialized,
                "with-items-borders": withItemsBorders
            },
            mod
        ],
        ...others,
        role: "radiogroup",
        "data-disabled": disabled,
        children: [
            typeof _value === "string" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$FloatingIndicator$2f$FloatingIndicator$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingIndicator"], {
                target: refs[_value],
                parent,
                component: "span",
                transitionDuration: "var(--sc-transition-duration)",
                ...getStyles("indicator")
            }, key),
            controls
        ]
    });
});
SegmentedControl.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SegmentedControl$2f$SegmentedControl$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
SegmentedControl.displayName = "@mantine/core/SegmentedControl";
;
 //# sourceMappingURL=SegmentedControl.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Card/Card.context.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardProvider",
    ()=>CardProvider,
    "useCardContext",
    ()=>useCardContext
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
const [CardProvider, useCardContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$create$2d$safe$2d$context$2f$create$2d$safe$2d$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSafeContext"])("Card component was not found in tree");
;
 //# sourceMappingURL=Card.context.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Card/Card.module.css.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>classes
]);
'use client';
var classes = {
    "root": "m_e615b15f",
    "section": "m_599a2148"
};
;
 //# sourceMappingURL=Card.module.css.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Card/CardSection/CardSection.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardSection",
    ()=>CardSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Card/Card.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Card/Card.module.css.mjs [app-client] (ecmascript)");
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
const CardSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("CardSection", defaultProps, _props);
    const { classNames, className, style, styles, vars, withBorder, inheritPadding, mod, ...others } = props;
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardContext"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        ref,
        mod: [
            {
                "with-border": withBorder,
                "inherit-padding": inheritPadding
            },
            mod
        ],
        ...ctx.getStyles("section", {
            className,
            style,
            styles,
            classNames
        }),
        ...others
    });
});
CardSection.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
CardSection.displayName = "@mantine/core/CardSection";
;
 //# sourceMappingURL=CardSection.mjs.map
}),
"[project]/frontend/node_modules/@mantine/core/esm/components/Card/Card.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Card/Card.context.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$CardSection$2f$CardSection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Card/CardSection/CardSection.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@mantine/core/esm/components/Card/Card.module.css.mjs [app-client] (ecmascript)");
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
const defaultProps = {};
const varsResolver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$create$2d$vars$2d$resolver$2f$create$2d$vars$2d$resolver$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVarsResolver"])((_, param)=>{
    let { padding } = param;
    return {
        root: {
            "--card-padding": (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$get$2d$size$2f$get$2d$size$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSpacing"])(padding)
        }
    };
});
const Card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$factory$2f$polymorphic$2d$factory$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polymorphicFactory"])((_props, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$use$2d$props$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProps"])("Card", defaultProps, _props);
    const { classNames, className, style, styles, unstyled, vars, children, padding, ...others } = props;
    const getStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$styles$2d$api$2f$use$2d$styles$2f$use$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStyles"])({
        name: "Card",
        props,
        classes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        varsResolver
    });
    const _children = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    const content = _children.map((child, index)=>{
        if (typeof child === "object" && child && "type" in child && child.type === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$CardSection$2f$CardSection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSection"]) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                "data-first-section": index === 0 || void 0,
                "data-last-section": index === _children.length - 1 || void 0
            });
        }
        return child;
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$context$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardProvider"], {
        value: {
            getStyles
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
            ref,
            unstyled,
            ...getStyles("root"),
            ...others,
            children: content
        })
    });
});
Card.classes = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$module$2e$css$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
Card.displayName = "@mantine/core/Card";
Card.Section = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$CardSection$2f$CardSection$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSection"];
;
 //# sourceMappingURL=Card.mjs.map
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
]);

//# sourceMappingURL=9e883_947d5e29._.js.map