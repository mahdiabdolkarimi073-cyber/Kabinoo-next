const VARS = {
    BACKEND_URL: process.env['NEXT_PUBLIC_BACKEND_URL'] || process.env['BACKEND_URL'] || "http://localhost:3080",
    FRONTEND_URL: process.env['FRONTEND_URL'] || "http://localhost:3000",

}

export default VARS;