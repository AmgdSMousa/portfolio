import { NextResponse } from 'next/server';

/**
 * Vercel Middleware handles content negotiation for AI agents.
 * It serves the markdown version of the site if the Accept header includes 'text/markdown'.
 */
export default async function middleware(request) {
  const accept = request.headers.get("accept") || "";
  const url = new URL(request.url);

  // Check if the agent is requesting markdown for the homepage
  if (url.pathname === "/" && accept.includes("text/markdown")) {
    const markdownUrl = new URL("/index.md", request.url);
    const response = await fetch(markdownUrl);
    
    if (response.ok) {
      const markdown = await response.text();
      
      // Calculate a rough token count for x-markdown-tokens
      const wordCount = markdown.split(/\s+/).length;
      const approxTokens = Math.ceil(wordCount * 1.35);

      const headers = new Headers();
      headers.set("Content-Type", "text/markdown; charset=utf-8");
      headers.set("x-markdown-tokens", approxTokens.toString());
      headers.set("Vary", "Accept");
      
      // Standard discovery headers
      headers.set("Link", '</.well-known/api-catalog>; rel="api-catalog", <https://github.com/AmgdSMousa/portfolio>; rel="describedby"');

      // Return the markdown content directly
      return new Response(markdown, { headers });
    }
  }

  // Fallback to normal behavior for browsers and other paths
  return NextResponse.next();
}

/**
 * Limit middleware execution to the homepage to optimize performance.
 */
export const config = {
  matcher: "/",
};
