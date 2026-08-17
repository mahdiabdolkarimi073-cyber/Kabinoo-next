module.exports = [
"[project]/frontend/.next-internal/server/app/other/ruler/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/frontend/src/app/other/ruler/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
async function GET(req, res) {
    // Parse query parameters with defaults
    const { maxHeight = 170, width = 120, tickSpacing = 5, majorTickInterval = 10, minorTickInterval = 5, tickWidth = 30, minorTickWidth = 20, fontSize = 16, strokeColor = '#333', textColor = '#000' } = await req.json().catch(()=>({}));
    // Convert to numbers
    const max = parseInt(maxHeight);
    const svgWidth = parseInt(width);
    const spacing = parseFloat(tickSpacing);
    const majorInterval = parseInt(majorTickInterval);
    const minorInterval = parseInt(minorTickInterval);
    const majorTick = parseInt(tickWidth);
    const minorTick = parseInt(minorTickWidth);
    const fontSz = parseInt(fontSize);
    // Calculate dimensions
    const totalHeight = max * spacing + 60; // Extra padding
    const rulerHeight = max * spacing;
    const startY = 30;
    const endY = startY + rulerHeight;
    // Generate SVG
    let svg = `<svg width="${svgWidth}" height="${totalHeight}" viewBox="0 0 ${svgWidth} ${totalHeight}" xmlns="http://www.w3.org/2000/svg">
  <!-- Ruler background area -->
  <rect x="10" y="${startY}" width="60" height="${rulerHeight}" fill="none" stroke="none"/>
  
  <!-- Bottom border -->
  <line x1="10" y1="${endY}" x2="70" y2="${endY}" stroke="${strokeColor}" stroke-width="2"/>
  
  <!-- Major tick marks -->
  <g stroke="${strokeColor}" stroke-width="2">`;
    // Add tick marks and labels
    for(let cm = 0; cm <= max; cm++){
        const y = endY - cm * spacing;
        const isMajor = cm % majorInterval === 0;
        const isMinor = cm % minorInterval === 0 && !isMajor;
        if (isMajor) {
            // Major tick mark
            svg += `
    <!-- ${cm}cm -->
    <line x1="10" y1="${y}" x2="${10 + majorTick}" y2="${y}"/>`;
            // Other labels outside
            svg += `
    <text x="45" y="${y + 5}" font-family="Arial" font-size="${fontSz}" fill="${textColor}">${cm} cm</text>`;
        }
    }
    svg += `
  </g>
  
  <!-- Minor tick marks -->
  <g stroke="${strokeColor.replace('#', '#666')}" stroke-width="1">`;
    // Add minor ticks
    for(let cm = 0; cm <= max; cm++){
        if (cm % majorInterval !== 0 && cm % minorInterval === 0) {
            const y = endY - cm * spacing;
            svg += `
    <line x1="10" y1="${y}" x2="${10 + minorTick}" y2="${y}"/>`;
        }
    }
    svg += `
  </g>
</svg>`;
    return new Response(svg, {
        headers: {
            "content-type": "image/svg+xml"
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1eb56594._.js.map