import { NextRequest } from "next/server";

export const POST = handle;
export const GET = handle;
export const PATCH = handle;
export const PUT = handle;

async function handle(req: NextRequest) {
  try {
    // Get the target URL from query parameter or header
    const targetUrl = req.nextUrl.searchParams.get("url");
    
    if (!targetUrl) {
      return new Response(
        JSON.stringify({ error: "Missing 'url' query parameter" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Get the request body (if exists)
    const body = req.method !== "GET" && req.method !== "HEAD" 
      ? await req.text() 
      : undefined;

    // Copy headers from incoming request (excluding some)
    const headers = new Headers();
    req.headers.forEach((value, key) => {
      // Skip host and other Next.js specific headers
      if (!["host", "connection", "x-forwarded-for", "x-real-ip"].includes(key.toLowerCase())) {
        headers.set(key, value);
      }
    });

    // Make the proxied request
    const response = await fetch(targetUrl, {
      method: req.method,
      headers,
      body,
      redirect: "manual"
    });

    // Get response body
    const responseBody = await response.text();

    // Return the response with original status and headers
    return new Response(responseBody, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Proxy request failed", details: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}