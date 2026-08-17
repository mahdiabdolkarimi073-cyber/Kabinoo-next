(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/frontend/node_modules/jalaali-js/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*
  Expose functions.
*/ module.exports = {
    toJalaali: toJalaali,
    toGregorian: toGregorian,
    isValidJalaaliDate: isValidJalaaliDate,
    isLeapJalaaliYear: isLeapJalaaliYear,
    jalaaliMonthLength: jalaaliMonthLength,
    jalCal: jalCal,
    j2d: j2d,
    d2j: d2j,
    g2d: g2d,
    d2g: d2g,
    jalaaliToDateObject: jalaaliToDateObject,
    jalaaliWeek: jalaaliWeek
};
/*
  Jalaali years starting the 33-year rule.
*/ var breaks = [
    -61,
    9,
    38,
    199,
    426,
    686,
    756,
    818,
    1111,
    1181,
    1210,
    1635,
    2060,
    2097,
    2192,
    2262,
    2324,
    2394,
    2456,
    3178
];
/*
  Converts a Gregorian date to Jalaali.
*/ function toJalaali(gy, gm, gd) {
    if (Object.prototype.toString.call(gy) === '[object Date]') {
        gd = gy.getDate();
        gm = gy.getMonth() + 1;
        gy = gy.getFullYear();
    }
    return d2j(g2d(gy, gm, gd));
}
/*
  Converts a Jalaali date to Gregorian.
*/ function toGregorian(jy, jm, jd) {
    return d2g(j2d(jy, jm, jd));
}
/*
  Checks whether a Jalaali date is valid or not.
*/ function isValidJalaaliDate(jy, jm, jd) {
    return jy >= -61 && jy <= 3177 && jm >= 1 && jm <= 12 && jd >= 1 && jd <= jalaaliMonthLength(jy, jm);
}
/*
  Is this a leap year or not?
*/ function isLeapJalaaliYear(jy) {
    return jalCalLeap(jy) === 0;
}
/*
  Number of days in a given month in a Jalaali year.
*/ function jalaaliMonthLength(jy, jm) {
    if (jm <= 6) return 31;
    if (jm <= 11) return 30;
    if (isLeapJalaaliYear(jy)) return 30;
    return 29;
}
/*
    This function determines if the Jalaali (Persian) year is
    leap (366-day long) or is the common year (365 days)

    @param jy Jalaali calendar year (-61 to 3177)
    @returns number of years since the last leap year (0 to 4)
 */ function jalCalLeap(jy) {
    var bl = breaks.length, jp = breaks[0], jm, jump, leap, n, i;
    if (jy < jp || jy >= breaks[bl - 1]) throw new Error('Invalid Jalaali year ' + jy);
    for(i = 1; i < bl; i += 1){
        jm = breaks[i];
        jump = jm - jp;
        if (jy < jm) break;
        jp = jm;
    }
    n = jy - jp;
    if (jump - n < 6) n = n - jump + div(jump + 4, 33) * 33;
    leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
        leap = 4;
    }
    return leap;
}
/*
  This function determines if the Jalaali (Persian) year is
  leap (366-day long) or is the common year (365 days), and
  finds the day in March (Gregorian calendar) of the first
  day of the Jalaali year (jy).

  @param jy Jalaali calendar year (-61 to 3177)
  @param withoutLeap when don't need leap (true or false) default is false
  @return
    leap: number of years since the last leap year (0 to 4)
    gy: Gregorian year of the beginning of Jalaali year
    march: the March day of Farvardin the 1st (1st day of jy)
  @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
  @see: http://www.fourmilab.ch/documents/calendar/
*/ function jalCal(jy, withoutLeap) {
    var bl = breaks.length, gy = jy + 621, leapJ = -14, jp = breaks[0], jm, jump, leap, leapG, march, n, i;
    if (jy < jp || jy >= breaks[bl - 1]) throw new Error('Invalid Jalaali year ' + jy);
    // Find the limiting years for the Jalaali year jy.
    for(i = 1; i < bl; i += 1){
        jm = breaks[i];
        jump = jm - jp;
        if (jy < jm) break;
        leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
        jp = jm;
    }
    n = jy - jp;
    // Find the number of leap years from AD 621 to the beginning
    // of the current Jalaali year in the Persian calendar.
    leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
    if (mod(jump, 33) === 4 && jump - n === 4) leapJ += 1;
    // And the same in the Gregorian calendar (until the year gy).
    leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
    // Determine the Gregorian date of Farvardin the 1st.
    march = 20 + leapJ - leapG;
    // return with gy and march when we don't need leap
    if (withoutLeap) return {
        gy: gy,
        march: march
    };
    // Find how many years have passed since the last leap year.
    if (jump - n < 6) n = n - jump + div(jump + 4, 33) * 33;
    leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
        leap = 4;
    }
    return {
        leap: leap,
        gy: gy,
        march: march
    };
}
/*
  Converts a date of the Jalaali calendar to the Julian Day number.

  @param jy Jalaali year (1 to 3100)
  @param jm Jalaali month (1 to 12)
  @param jd Jalaali day (1 to 29/31)
  @return Julian Day number
*/ function j2d(jy, jm, jd) {
    var r = jalCal(jy, true);
    return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
}
/*
  Converts the Julian Day number to a date in the Jalaali calendar.

  @param jdn Julian Day number
  @return
    jy: Jalaali year (1 to 3100)
    jm: Jalaali month (1 to 12)
    jd: Jalaali day (1 to 29/31)
*/ function d2j(jdn) {
    var gy = d2g(jdn).gy // Calculate Gregorian year (gy).
    , jy = gy - 621, r = jalCal(jy, false), jdn1f = g2d(gy, 3, r.march), jd, jm, k;
    // Find number of days that passed since 1 Farvardin.
    k = jdn - jdn1f;
    if (k >= 0) {
        if (k <= 185) {
            // The first 6 months.
            jm = 1 + div(k, 31);
            jd = mod(k, 31) + 1;
            return {
                jy: jy,
                jm: jm,
                jd: jd
            };
        } else {
            // The remaining months.
            k -= 186;
        }
    } else {
        // Previous Jalaali year.
        jy -= 1;
        k += 179;
        if (r.leap === 1) k += 1;
    }
    jm = 7 + div(k, 30);
    jd = mod(k, 30) + 1;
    return {
        jy: jy,
        jm: jm,
        jd: jd
    };
}
/*
  Calculates the Julian Day number from Gregorian or Julian
  calendar dates. This integer number corresponds to the noon of
  the date (i.e. 12 hours of Universal Time).
  The procedure was tested to be good since 1 March, -100100 (of both
  calendars) up to a few million years into the future.

  @param gy Calendar year (years BC numbered 0, -1, -2, ...)
  @param gm Calendar month (1 to 12)
  @param gd Calendar day of the month (1 to 28/29/30/31)
  @return Julian Day number
*/ function g2d(gy, gm, gd) {
    var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
    d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
    return d;
}
/*
  Calculates Gregorian and Julian calendar dates from the Julian Day number
  (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
  calendars) to some millions years ahead of the present.

  @param jdn Julian Day number
  @return
    gy: Calendar year (years BC numbered 0, -1, -2, ...)
    gm: Calendar month (1 to 12)
    gd: Calendar day of the month M (1 to 28/29/30/31)
*/ function d2g(jdn) {
    var j, i, gd, gm, gy;
    j = 4 * jdn + 139361631;
    j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
    i = div(mod(j, 1461), 4) * 5 + 308;
    gd = div(mod(i, 153), 5) + 1;
    gm = mod(div(i, 153), 12) + 1;
    gy = div(j, 1461) - 100100 + div(8 - gm, 6);
    return {
        gy: gy,
        gm: gm,
        gd: gd
    };
}
/**
 * Return Saturday and Friday day of current week(week start in Saturday)
 * @param {number} jy jalaali year
 * @param {number} jm jalaali month
 * @param {number} jd jalaali day
 * @returns Saturday and Friday of current week
 */ function jalaaliWeek(jy, jm, jd) {
    var dayOfWeek = jalaaliToDateObject(jy, jm, jd).getDay();
    var startDayDifference = dayOfWeek == 6 ? 0 : -(dayOfWeek + 1);
    var endDayDifference = 6 + startDayDifference;
    return {
        saturday: d2j(j2d(jy, jm, jd + startDayDifference)),
        friday: d2j(j2d(jy, jm, jd + endDayDifference))
    };
}
/**
 * Convert Jalaali calendar dates to javascript Date object
 * @param {number} jy jalaali year
 * @param {number} jm jalaali month
 * @param {number} jd jalaali day
 * @param {number} [h] hours
 * @param {number} [m] minutes
 * @param {number} [s] seconds
 * @param {number} [ms] milliseconds
 * @returns Date object of the jalaali calendar dates
 */ function jalaaliToDateObject(jy, jm, jd, h, m, s, ms) {
    var gregorianCalenderDate = toGregorian(jy, jm, jd);
    return new Date(gregorianCalenderDate.gy, gregorianCalenderDate.gm - 1, gregorianCalenderDate.gd, h || 0, m || 0, s || 0, ms || 0);
}
/*
  Utility helper functions.
*/ function div(a, b) {
    return ~~(a / b);
}
function mod(a, b) {
    return a - ~~(a / b) * b;
}
}),
"[project]/frontend/node_modules/moment-jalaali/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = jMoment;
var moment = __turbopack_context__.r("[project]/frontend/node_modules/moment/moment.js [app-client] (ecmascript)"), jalaali = __turbopack_context__.r("[project]/frontend/node_modules/jalaali-js/index.js [app-client] (ecmascript)");
/************************************
    Constants
************************************/ var formattingTokens = /(\[[^\[]*\])|(\\)?j(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?|)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS?|LL?L?L?|l{1,4})/g, parseTokenOneOrTwoDigits = /\d\d?/, parseTokenOneToThreeDigits = /\d{1,3}/, parseTokenThreeDigits = /\d{3}/, parseTokenFourDigits = /\d{1,4}/, parseTokenSixDigits = /[+\-]?\d{1,6}/, parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, parseTokenT = /T/i, parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, symbolMap = {
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹',
    '0': '۰'
}, numberMap = {
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
    '۰': '0'
}, unitAliases = {
    jm: 'jmonth',
    jmonths: 'jmonth',
    jy: 'jyear',
    jyears: 'jyear'
}, formatFunctions = {}, ordinalizeTokens = 'DDD w M D'.split(' '), paddedTokens = 'M D w'.split(' '), formatTokenFunctions = {
    jM: function() {
        return this.jMonth() + 1;
    },
    jMMM: function(format) {
        return this.localeData().jMonthsShort(this, format);
    },
    jMMMM: function(format) {
        return this.localeData().jMonths(this, format);
    },
    jD: function() {
        return this.jDate();
    },
    jDDD: function() {
        return this.jDayOfYear();
    },
    jw: function() {
        return this.jWeek();
    },
    jYY: function() {
        return leftZeroFill(this.jYear() % 100, 2);
    },
    jYYYY: function() {
        return leftZeroFill(this.jYear(), 4);
    },
    jYYYYY: function() {
        return leftZeroFill(this.jYear(), 5);
    },
    jgg: function() {
        return leftZeroFill(this.jWeekYear() % 100, 2);
    },
    jgggg: function() {
        return this.jWeekYear();
    },
    jggggg: function() {
        return leftZeroFill(this.jWeekYear(), 5);
    }
};
function padToken(func, count) {
    return function(a) {
        return leftZeroFill(func.call(this, a), count);
    };
}
function ordinalizeToken(func, period) {
    return function(a) {
        return this.localeData().ordinal(func.call(this, a), period);
    };
}
(function() {
    var i;
    while(ordinalizeTokens.length){
        i = ordinalizeTokens.pop();
        formatTokenFunctions['j' + i + 'o'] = ordinalizeToken(formatTokenFunctions['j' + i], i);
    }
    while(paddedTokens.length){
        i = paddedTokens.pop();
        formatTokenFunctions['j' + i + i] = padToken(formatTokenFunctions['j' + i], 2);
    }
    formatTokenFunctions.jDDDD = padToken(formatTokenFunctions.jDDD, 3);
})();
/************************************
    Helpers
************************************/ function extend(a, b) {
    var key;
    for(key in b)if (b.hasOwnProperty(key)) a[key] = b[key];
    return a;
}
function leftZeroFill(number, targetLength) {
    var output = number + '';
    while(output.length < targetLength)output = '0' + output;
    return output;
}
function isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
}
// function compareArrays(array1, array2) {
//   var len = Math.min(array1.length, array2.length)
//     , lengthDiff = Math.abs(array1.length - array2.length)
//     , diffs = 0
//     , i
//   for (i = 0; i < len; i += 1)
//     if (~~array1[i] !== ~~array2[i])
//       diffs += 1
//   return diffs + lengthDiff
// }
function normalizeUnits(units) {
    if (units) {
        var lowered = units.toLowerCase();
        units = unitAliases[lowered] || lowered;
    }
    return units;
}
function setDate(m, year, month, date) {
    var d = m._d;
    if (isNaN(year)) {
        m._isValid = false;
    }
    if (m._isUTC) {
        /*eslint-disable new-cap*/ m._d = new Date(Date.UTC(year, month, date, d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()));
    /*eslint-enable new-cap*/ } else {
        m._d = new Date(year, month, date, d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
    }
}
function objectCreate(parent) {
    function F() {}
    F.prototype = parent;
    return new F();
}
function getPrototypeOf(object) {
    if (Object.getPrototypeOf) return Object.getPrototypeOf(object);
    else if (''.__proto__) return object.__proto__;
    else return object.constructor.prototype;
}
/************************************
    Languages
************************************/ extend(getPrototypeOf(moment.localeData()), {
    _jMonths: [
        'Farvardin',
        'Ordibehesht',
        'Khordaad',
        'Tir',
        'Amordaad',
        'Shahrivar',
        'Mehr',
        'Aabaan',
        'Aazar',
        'Dey',
        'Bahman',
        'Esfand'
    ],
    jMonths: function(m) {
        return this._jMonths[m.jMonth()];
    },
    _jMonthsShort: [
        'Far',
        'Ord',
        'Kho',
        'Tir',
        'Amo',
        'Sha',
        'Meh',
        'Aab',
        'Aaz',
        'Dey',
        'Bah',
        'Esf'
    ],
    jMonthsShort: function(m) {
        return this._jMonthsShort[m.jMonth()];
    },
    jMonthsParse: function(monthName) {
        var i, mom, regex;
        if (!this._jMonthsParse) this._jMonthsParse = [];
        for(i = 0; i < 12; i += 1){
            // Make the regex if we don't have it already.
            if (!this._jMonthsParse[i]) {
                mom = jMoment([
                    2000,
                    (2 + i) % 12,
                    25
                ]);
                regex = '^' + this.jMonths(mom, '') + '|^' + this.jMonthsShort(mom, '');
                this._jMonthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // Test the regex.
            if (this._jMonthsParse[i].test(monthName)) return i;
        }
    }
});
/************************************
    Formatting
************************************/ function makeFormatFunction(format) {
    var array = format.match(formattingTokens), length = array.length, i;
    for(i = 0; i < length; i += 1)if (formatTokenFunctions[array[i]]) array[i] = formatTokenFunctions[array[i]];
    return function(mom) {
        var output = '';
        for(i = 0; i < length; i += 1)output += array[i] instanceof Function ? '[' + array[i].call(mom, format) + ']' : array[i];
        return output;
    };
}
/************************************
    Parsing
************************************/ function getParseRegexForToken(token, config) {
    switch(token){
        case 'jDDDD':
            return parseTokenThreeDigits;
        case 'jYYYY':
            return parseTokenFourDigits;
        case 'jYYYYY':
            return parseTokenSixDigits;
        case 'jDDD':
            return parseTokenOneToThreeDigits;
        case 'jMMM':
        case 'jMMMM':
            return parseTokenWord;
        case 'jMM':
        case 'jDD':
        case 'jYY':
        case 'jM':
        case 'jD':
            return parseTokenOneOrTwoDigits;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
            return parseTokenFourDigits;
        case 'YYYYY':
            return parseTokenSixDigits;
        case 'S':
        case 'SS':
        case 'SSS':
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return moment.localeData(config._l)._meridiemParse;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
            return parseTokenOneOrTwoDigits;
        default:
            return new RegExp(token.replace('\\', ''));
    }
}
function addTimeToArrayFromToken(token, input, config) {
    var a, datePartArray = config._a;
    switch(token){
        case 'jM':
        case 'jMM':
            datePartArray[1] = input == null ? 0 : ~~input - 1;
            break;
        case 'jMMM':
        case 'jMMMM':
            a = moment.localeData(config._l).jMonthsParse(input);
            if (a != null) datePartArray[1] = a;
            else config._isValid = false;
            break;
        case 'jD':
        case 'jDD':
        case 'jDDD':
        case 'jDDDD':
            if (input != null) datePartArray[2] = ~~input;
            break;
        case 'jYY':
            datePartArray[0] = ~~input + (~~input > 47 ? 1300 : 1400);
            break;
        case 'jYYYY':
        case 'jYYYYY':
            datePartArray[0] = ~~input;
    }
    if (input == null) config._isValid = false;
}
function dateFromArray(config) {
    var g, j, jy = config._a[0], jm = config._a[1], jd = config._a[2];
    if (jy == null && jm == null && jd == null) return [
        0,
        0,
        1
    ];
    jy = jy != null ? jy : 0;
    jm = jm != null ? jm : 0;
    jd = jd != null ? jd : 1;
    if (jd < 1 || jd > jMoment.jDaysInMonth(jy, jm) || jm < 0 || jm > 11) config._isValid = false;
    g = toGregorian(jy, jm, jd);
    j = toJalaali(g.gy, g.gm, g.gd);
    if (isNaN(g.gy)) config._isValid = false;
    config._jDiff = 0;
    if (~~j.jy !== jy) config._jDiff += 1;
    if (~~j.jm !== jm) config._jDiff += 1;
    if (~~j.jd !== jd) config._jDiff += 1;
    return [
        g.gy,
        g.gm,
        g.gd
    ];
}
function makeDateFromStringAndFormat(config) {
    var tokens = config._f.match(formattingTokens), string = config._i + '', len = tokens.length, i, token, parsedInput;
    config._a = [];
    for(i = 0; i < len; i += 1){
        token = tokens[i];
        parsedInput = (getParseRegexForToken(token, config).exec(string) || [])[0];
        if (parsedInput) string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        if (formatTokenFunctions[token]) addTimeToArrayFromToken(token, parsedInput, config);
    }
    if (string) config._il = string;
    return dateFromArray(config);
}
function makeDateFromStringAndArray(config, utc) {
    var len = config._f.length, i, format, tempMoment, bestMoment, currentScore, scoreToBeat;
    if (len === 0) {
        return makeMoment(new Date(NaN));
    }
    for(i = 0; i < len; i += 1){
        format = config._f[i];
        currentScore = 0;
        tempMoment = makeMoment(config._i, format, config._l, config._strict, utc);
        if (!tempMoment.isValid()) continue;
        // currentScore = compareArrays(tempMoment._a, tempMoment.toArray())
        currentScore += tempMoment._jDiff;
        if (tempMoment._il) currentScore += tempMoment._il.length;
        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempMoment;
        }
    }
    return bestMoment;
}
function removeParsedTokens(config) {
    var string = config._i + '', input = '', format = '', array = config._f.match(formattingTokens), len = array.length, i, match, parsed;
    for(i = 0; i < len; i += 1){
        match = array[i];
        parsed = (getParseRegexForToken(match, config).exec(string) || [])[0];
        if (parsed) string = string.slice(string.indexOf(parsed) + parsed.length);
        if (!(formatTokenFunctions[match] instanceof Function)) {
            format += match;
            if (parsed) input += parsed;
        }
    }
    config._i = input;
    config._f = format;
}
/************************************
    Week of Year
************************************/ function jWeekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
    var end = firstDayOfWeekOfYear - firstDayOfWeek, daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(), adjustedMoment;
    if (daysToDayOfWeek > end) {
        daysToDayOfWeek -= 7;
    }
    if (daysToDayOfWeek < end - 7) {
        daysToDayOfWeek += 7;
    }
    adjustedMoment = jMoment(mom).add(daysToDayOfWeek, 'd');
    return {
        week: Math.ceil(adjustedMoment.jDayOfYear() / 7),
        year: adjustedMoment.jYear()
    };
}
/************************************
    Top Level Functions
************************************/ var maxTimestamp = 57724432199999;
function makeMoment(input, format, lang, strict, utc) {
    if (typeof lang === 'boolean') {
        strict = lang;
        lang = undefined;
    }
    if (format && typeof format === 'string') format = fixFormat(format, moment);
    var config = {
        _i: input,
        _f: format,
        _l: lang,
        _strict: strict,
        _isUTC: utc
    }, date, m, jm, origInput = input, origFormat = format;
    if (format) {
        if (isArray(format)) {
            return makeDateFromStringAndArray(config, utc);
        } else {
            date = makeDateFromStringAndFormat(config);
            removeParsedTokens(config);
            format = 'YYYY-MM-DD-' + config._f;
            input = leftZeroFill(date[0], 4) + '-' + leftZeroFill(date[1] + 1, 2) + '-' + leftZeroFill(date[2], 2) + '-' + config._i;
        }
    }
    if (utc) m = moment.utc(input, format, lang, strict);
    else m = moment(input, format, lang, strict);
    if (config._isValid === false) m._isValid = false;
    m._jDiff = config._jDiff || 0;
    jm = objectCreate(jMoment.fn);
    extend(jm, m);
    if (strict && format && jm.isValid()) {
        jm._isValid = jm.format(origFormat) === origInput;
    }
    if (m._d.getTime() > maxTimestamp) {
        jm._isValid = false;
    }
    return jm;
}
function jMoment(input, format, lang, strict) {
    return makeMoment(input, format, lang, strict, false);
}
extend(jMoment, moment);
jMoment.fn = objectCreate(moment.fn);
jMoment.utc = function(input, format, lang, strict) {
    return makeMoment(input, format, lang, strict, true);
};
jMoment.unix = function(input) {
    return makeMoment(input * 1000);
};
/************************************
    jMoment Prototype
************************************/ function fixFormat(format, _moment) {
    var i = 5;
    var replace = function(input) {
        return _moment.localeData().longDateFormat(input) || input;
    };
    while(i > 0 && localFormattingTokens.test(format)){
        i -= 1;
        format = format.replace(localFormattingTokens, replace);
    }
    return format;
}
jMoment.fn.format = function(format) {
    if (format) {
        format = fixFormat(format, this);
        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }
        format = formatFunctions[format](this);
    }
    return moment.fn.format.call(this, format);
};
jMoment.fn.jYear = function(input) {
    var lastDay, j, g;
    if (typeof input === 'number') {
        j = toJalaali(this.year(), this.month(), this.date());
        lastDay = Math.min(j.jd, jMoment.jDaysInMonth(input, j.jm));
        g = toGregorian(input, j.jm, lastDay);
        setDate(this, g.gy, g.gm, g.gd);
        moment.updateOffset(this);
        return this;
    } else {
        return toJalaali(this.year(), this.month(), this.date()).jy;
    }
};
jMoment.fn.jMonth = function(input) {
    var lastDay, j, g;
    if (input != null) {
        if (typeof input === 'string') {
            input = this.localeData().jMonthsParse(input);
            if (typeof input !== 'number') return this;
        }
        j = toJalaali(this.year(), this.month(), this.date());
        lastDay = Math.min(j.jd, jMoment.jDaysInMonth(j.jy, input));
        this.jYear(j.jy + div(input, 12));
        input = mod(input, 12);
        if (input < 0) {
            input += 12;
            this.jYear(this.jYear() - 1);
        }
        g = toGregorian(this.jYear(), input, lastDay);
        setDate(this, g.gy, g.gm, g.gd);
        moment.updateOffset(this);
        return this;
    } else {
        return toJalaali(this.year(), this.month(), this.date()).jm;
    }
};
jMoment.fn.jDate = function(input) {
    var j, g;
    if (typeof input === 'number') {
        j = toJalaali(this.year(), this.month(), this.date());
        g = toGregorian(j.jy, j.jm, input);
        setDate(this, g.gy, g.gm, g.gd);
        moment.updateOffset(this);
        return this;
    } else {
        return toJalaali(this.year(), this.month(), this.date()).jd;
    }
};
jMoment.fn.jDayOfYear = function(input) {
    var dayOfYear = Math.round((jMoment(this).startOf('day') - jMoment(this).startOf('jYear')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
};
jMoment.fn.jWeek = function(input) {
    var week = jWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
};
jMoment.fn.jWeekYear = function(input) {
    var year = jWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
    return input == null ? year : this.add(input - year, 'y');
};
jMoment.fn.add = function(val, units) {
    var temp;
    if (units !== null && !isNaN(+units)) {
        temp = val;
        val = units;
        units = temp;
    }
    units = normalizeUnits(units);
    if (units === 'jyear') {
        this.jYear(this.jYear() + val);
    } else if (units === 'jmonth') {
        this.jMonth(this.jMonth() + val);
    } else {
        moment.fn.add.call(this, val, units);
        if (isNaN(this.jYear())) {
            this._isValid = false;
        }
    }
    return this;
};
jMoment.fn.subtract = function(val, units) {
    var temp;
    if (units !== null && !isNaN(+units)) {
        temp = val;
        val = units;
        units = temp;
    }
    units = normalizeUnits(units);
    if (units === 'jyear') {
        this.jYear(this.jYear() - val);
    } else if (units === 'jmonth') {
        this.jMonth(this.jMonth() - val);
    } else {
        moment.fn.subtract.call(this, val, units);
    }
    return this;
};
jMoment.fn.startOf = function(units) {
    units = normalizeUnits(units);
    if (units === 'jyear' || units === 'jmonth') {
        if (units === 'jyear') {
            this.jMonth(0);
        }
        this.jDate(1);
        this.hours(0);
        this.minutes(0);
        this.seconds(0);
        this.milliseconds(0);
        return this;
    } else {
        return moment.fn.startOf.call(this, units);
    }
};
jMoment.fn.endOf = function(units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'milisecond') {
        return this;
    }
    return this.startOf(units).add(1, units === 'isoweek' ? 'week' : units).subtract(1, 'ms');
};
jMoment.fn.isSame = function(other, units) {
    units = normalizeUnits(units);
    if (units === 'jyear' || units === 'jmonth') {
        return moment.fn.isSame.call(this.startOf(units), other.startOf(units));
    }
    return moment.fn.isSame.call(this, other, units);
};
jMoment.fn.clone = function() {
    return jMoment(this);
};
jMoment.fn.jYears = jMoment.fn.jYear;
jMoment.fn.jMonths = jMoment.fn.jMonth;
jMoment.fn.jDates = jMoment.fn.jDate;
jMoment.fn.jWeeks = jMoment.fn.jWeek;
/************************************
    jMoment Statics
************************************/ jMoment.jDaysInMonth = function(year, month) {
    year += div(month, 12);
    month = mod(month, 12);
    if (month < 0) {
        month += 12;
        year -= 1;
    }
    if (month < 6) {
        return 31;
    } else if (month < 11) {
        return 30;
    } else if (jMoment.jIsLeapYear(year)) {
        return 30;
    } else {
        return 29;
    }
};
jMoment.jIsLeapYear = jalaali.isLeapJalaaliYear;
jMoment.loadPersian = function(args) {
    var usePersianDigits = args !== undefined && args.hasOwnProperty('usePersianDigits') ? args.usePersianDigits : false;
    var dialect = args !== undefined && args.hasOwnProperty('dialect') ? args.dialect : 'persian';
    moment.locale('fa');
    moment.updateLocale('fa', {
        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays: {
            'persian': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_آدینه_شنبه'.split('_'),
            'persian-modern': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_')
        }[dialect],
        weekdaysShort: {
            'persian': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_آدینه_شنبه'.split('_'),
            'persian-modern': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_')
        }[dialect],
        weekdaysMin: {
            'persian': 'ی_د_س_چ_پ_آ_ش'.split('_'),
            'persian-modern': 'ی_د_س_چ_پ_ج_ش'.split('_')
        }[dialect],
        longDateFormat: {
            LT: 'HH:mm',
            L: 'jYYYY/jMM/jDD',
            LL: 'jD jMMMM jYYYY',
            LLL: 'jD jMMMM jYYYY LT',
            LLLL: 'dddd، jD jMMMM jYYYY LT'
        },
        calendar: {
            sameDay: '[امروز ساعت] LT',
            nextDay: '[فردا ساعت] LT',
            nextWeek: 'dddd [ساعت] LT',
            lastDay: '[دیروز ساعت] LT',
            lastWeek: 'dddd [ی پیش ساعت] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'در %s',
            past: '%s پیش',
            s: 'چند ثانیه',
            m: '1 دقیقه',
            mm: '%d دقیقه',
            h: '1 ساعت',
            hh: '%d ساعت',
            d: '1 روز',
            dd: '%d روز',
            M: '1 ماه',
            MM: '%d ماه',
            y: '1 سال',
            yy: '%d سال'
        },
        preparse: function(string) {
            if (usePersianDigits) {
                return string.replace(/[۰-۹]/g, function(match) {
                    return numberMap[match];
                }).replace(/،/g, ',');
            }
            return string;
        },
        postformat: function(string) {
            if (usePersianDigits) {
                return string.replace(/\d/g, function(match) {
                    return symbolMap[match];
                }).replace(/,/g, '،');
            }
            return string;
        },
        ordinal: '%dم',
        week: {
            dow: 6 // Saturday is the first day of the week.
            ,
            doy: 12 // The week that contains Jan 1st is the first week of the year.
        },
        meridiem: function(hour) {
            return hour < 12 ? 'ق.ظ' : 'ب.ظ';
        },
        jMonths: {
            'persian': 'فروردین_اردیبهشت_خرداد_تیر_امرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split('_'),
            'persian-modern': 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split('_')
        }[dialect],
        jMonthsShort: {
            'persian': 'فرو_ارد_خرد_تیر_امر_شهر_مهر_آبا_آذر_دی_بهم_اسف'.split('_'),
            'persian-modern': 'فرو_ارد_خرد_تیر_مرد_شهر_مهر_آبا_آذر_دی_بهم_اسف'.split('_')
        }[dialect]
    });
};
jMoment.loadPersian_dari = function(args) {
    var usePersianDigits = args !== undefined && args.hasOwnProperty('usePersianDigits') ? args.usePersianDigits : false;
    var dialect = args !== undefined && args.hasOwnProperty('dialect') ? args.dialect : 'persian-dari';
    moment.locale('fa-af');
    moment.updateLocale('fa-af', {
        months: 'جنوری_فبروری_مارچ_اپریل_می_جون_جولای_آگست_سپتمبر_اکتوبر_نومبر_دیسمبر'.split('_'),
        monthsShort: 'جنوری_فبروری_مارچ_اپریل_می_جون_جولای_آگست_سپتمبر_اکتوبر_نومبر_دیسمبر'.split('_'),
        weekdays: {
            'persian': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_آدینه_شنبه'.split('_'),
            'persian-modern': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_')
        }[dialect],
        weekdaysShort: {
            'persian': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_آدینه_شنبه'.split('_'),
            'persian-modern': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_')
        }[dialect],
        weekdaysMin: {
            'persian': 'ی_د_س_چ_پ_آ_ش'.split('_'),
            'persian-modern': 'ی_د_س_چ_پ_ج_ش'.split('_')
        }[dialect],
        longDateFormat: {
            LT: 'HH:mm',
            L: 'jYYYY/jMM/jDD',
            LL: 'jD jMMMM jYYYY',
            LLL: 'jD jMMMM jYYYY LT',
            LLLL: 'dddd، jD jMMMM jYYYY LT'
        },
        calendar: {
            sameDay: '[امروز ساعت] LT',
            nextDay: '[فردا ساعت] LT',
            nextWeek: 'dddd [ساعت] LT',
            lastDay: '[دیروز ساعت] LT',
            lastWeek: 'dddd [ی پیش ساعت] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'در %s',
            past: '%s پیش',
            s: 'چند ثانیه',
            m: '1 دقیقه',
            mm: '%d دقیقه',
            h: '1 ساعت',
            hh: '%d ساعت',
            d: '1 روز',
            dd: '%d روز',
            M: '1 ماه',
            MM: '%d ماه',
            y: '1 سال',
            yy: '%d سال'
        },
        preparse: function(string) {
            if (usePersianDigits) {
                return string.replace(/[۰-۹]/g, function(match) {
                    return numberMap[match];
                }).replace(/،/g, ',');
            }
            return string;
        },
        postformat: function(string) {
            if (usePersianDigits) {
                return string.replace(/\d/g, function(match) {
                    return symbolMap[match];
                }).replace(/,/g, '،');
            }
            return string;
        },
        ordinal: '%dم',
        week: {
            dow: 6 // Saturday is the first day of the week.
            ,
            doy: 12 // The week that contains Jan 1st is the first week of the year.
        },
        meridiem: function(hour) {
            return hour < 12 ? 'ق.ظ' : 'ب.ظ';
        },
        jMonths: {
            'persian-dari': 'حمل_ثور_جوزا_سرطان_اسد_سنبله_میزان_عقرب_قوس_جدی_دلو_حوت'.split('_'),
            'persian-modern-dari': 'حمل_ثور_جوزا_سرطان_اسد_سنبله_میزان_عقرب_قوس_جدی_دلو_حوت'.split('_')
        }[dialect],
        jMonthsShort: {
            'persian-dari': 'حمل_ثور_جوزا_سرط_اسد_سنب_میز_عقر_قوس_جدی_دلو_حوت'.split('_'),
            'persian-modern-dari': 'حمل_ثور_جوزا_سرط_اسد_سنب_میز_عقر_قوس_جدی_دلو_حوت'.split('_')
        }[dialect]
    });
};
jMoment.loadPashto = function(args) {
    var usePersianDigits = args !== undefined && args.hasOwnProperty('usePersianDigits') ? args.usePersianDigits : false;
    var dialect = args !== undefined && args.hasOwnProperty('dialect') ? args.dialect : 'pashto';
    moment.locale('ps-af');
    moment.updateLocale('ps-af', {
        months: 'جنوری_فبروری_مارچ_اپریل_می_جون_جولای_آگست_سپتمبر_اکتوبر_نومبر_دیسمبر'.split('_'),
        monthsShort: 'جنوری_فبروری_مارچ_اپریل_می_جون_جولای_آگست_سپتمبر_اکتوبر_نومبر_دیسمبر'.split('_'),
        weekdays: {
            'pashto': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_آدینه_شنبه'.split('_'),
            'pashto-modern': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_')
        }[dialect],
        weekdaysShort: {
            'pashto': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_آدینه_شنبه'.split('_'),
            'pashto-modern': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_')
        }[dialect],
        weekdaysMin: {
            'pashto': 'ی_د_س_چ_پ_آ_ش'.split('_'),
            'pashto-modern': 'ی_د_س_چ_پ_ج_ش'.split('_')
        }[dialect],
        longDateFormat: {
            LT: 'HH:mm',
            L: 'jYYYY/jMM/jDD',
            LL: 'jD jMMMM jYYYY',
            LLL: 'jD jMMMM jYYYY LT',
            LLLL: 'dddd، jD jMMMM jYYYY LT'
        },
        calendar: {
            sameDay: '[امروز ساعت] LT',
            nextDay: '[فردا ساعت] LT',
            nextWeek: 'dddd [ساعت] LT',
            lastDay: '[دیروز ساعت] LT',
            lastWeek: 'dddd [ی پیش ساعت] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'در %s',
            past: '%s پیش',
            s: 'چند ثانیه',
            m: '1 دقیقه',
            mm: '%d دقیقه',
            h: '1 ساعت',
            hh: '%d ساعت',
            d: '1 روز',
            dd: '%d روز',
            M: '1 ماه',
            MM: '%d ماه',
            y: '1 سال',
            yy: '%d سال'
        },
        preparse: function(string) {
            if (usePersianDigits) {
                return string.replace(/[۰-۹]/g, function(match) {
                    return numberMap[match];
                }).replace(/،/g, ',');
            }
            return string;
        },
        postformat: function(string) {
            if (usePersianDigits) {
                return string.replace(/\d/g, function(match) {
                    return symbolMap[match];
                }).replace(/,/g, '،');
            }
            return string;
        },
        ordinal: '%dم',
        week: {
            dow: 6 // Saturday is the first day of the week.
            ,
            doy: 12 // The week that contains Jan 1st is the first week of the year.
        },
        meridiem: function(hour) {
            return hour < 12 ? 'ق.ظ' : 'ب.ظ';
        },
        jMonths: {
            'pashto': 'وری_غویی_غبرګولی_چنګاښ_زمری_وږی_تله_لړم_لیندی_مرغومی_سلواغه_کب'.split('_'),
            'pashto-modern': 'وری_غویی_غبرګولی_چنګاښ_زمری_وږی_تله_لړم_لیندی_مرغومی_سلواغه_کب'.split('_')
        }[dialect],
        jMonthsShort: {
            'pashto': 'وری_غوی_غبر_چنګ_زمر_وږی_لړم_لین_مرغ_سلو_کب'.split('_'),
            'pashto-modern': 'وری_غوی_غبر_چنګ_زمر_وږی_لړم_لین_مرغ_سلو_کب'.split('_')
        }[dialect]
    });
};
jMoment.jConvert = {
    toJalaali: toJalaali,
    toGregorian: toGregorian
};
/************************************
    Jalaali Conversion
************************************/ function toJalaali(gy, gm, gd) {
    try {
        var j = jalaali.toJalaali(gy, gm + 1, gd);
        j.jm -= 1;
        return j;
    } catch (e) {
        return {
            jy: NaN,
            jm: NaN,
            jd: NaN
        };
    }
}
function toGregorian(jy, jm, jd) {
    try {
        var g = jalaali.toGregorian(jy, jm + 1, jd);
        g.gm -= 1;
        return g;
    } catch (e) {
        return {
            gy: NaN,
            gm: NaN,
            gd: NaN
        };
    }
}
/*
  Utility helper functions.
*/ function div(a, b) {
    return ~~(a / b);
}
function mod(a, b) {
    return a - ~~(a / b) * b;
}
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>IconAlertCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconAlertCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "alert-circle", "IconAlertCircle", [
    [
        "path",
        {
            "d": "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M12 8v4",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M12 16h.01",
            "key": "svg-2"
        }
    ]
]);
;
 //# sourceMappingURL=IconAlertCircle.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs [app-client] (ecmascript) <export default as IconAlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconAlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconAlertCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconAlertCircle.mjs [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>IconCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "check", "IconCheck", [
    [
        "path",
        {
            "d": "M5 12l5 5l10 -10",
            "key": "svg-0"
        }
    ]
]);
;
 //# sourceMappingURL=IconCheck.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript) <export default as IconCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>IconFileText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconFileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "file-text", "IconFileText", [
    [
        "path",
        {
            "d": "M14 3v4a1 1 0 0 0 1 1h4",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M9 9l1 0",
            "key": "svg-2"
        }
    ],
    [
        "path",
        {
            "d": "M9 13l6 0",
            "key": "svg-3"
        }
    ],
    [
        "path",
        {
            "d": "M9 17l6 0",
            "key": "svg-4"
        }
    ]
]);
;
 //# sourceMappingURL=IconFileText.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-client] (ecmascript) <export default as IconFileText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconFileText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFileText$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconFileText.mjs [app-client] (ecmascript)");
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconUpload.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license @tabler/icons-react v3.34.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>IconUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs [app-client] (ecmascript)");
;
var IconUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$createReactComponent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("outline", "upload", "IconUpload", [
    [
        "path",
        {
            "d": "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",
            "key": "svg-0"
        }
    ],
    [
        "path",
        {
            "d": "M7 9l5 -5l5 5",
            "key": "svg-1"
        }
    ],
    [
        "path",
        {
            "d": "M12 4l0 12",
            "key": "svg-2"
        }
    ]
]);
;
 //# sourceMappingURL=IconUpload.mjs.map
}),
"[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconUpload.mjs [app-client] (ecmascript) <export default as IconUpload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconUpload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUpload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUpload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tabler/icons-react/dist/esm/icons/IconUpload.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=9e883_86315d85._.js.map