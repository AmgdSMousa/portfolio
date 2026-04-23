export default {
  async fetch(request, env, ctx) {
    const accept = request.headers.get("Accept") || "";
    const url = new URL(request.url);

    // Support Markdown Content Negotiation for Agents
    if (url.pathname === "/" && accept.includes("text/markdown")) {
      const markdownUrl = new URL("/index.md", request.url);
      const mdResponse = await fetch(markdownUrl);
      
      if (mdResponse.ok) {
        const markdown = await mdResponse.text();
        const wordCount = markdown.split(/\s+/).length;
        const approxTokens = Math.ceil(wordCount * 1.35); // Rough estimate for x-markdown-tokens

        return new Response(markdown, {
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "x-markdown-tokens": approxTokens.toString(),
            "Vary": "Accept",
            "Link": '</.well-known/api-catalog>; rel="api-catalog", <https://github.com/AmgdSMousa/portfolio>; rel="describedby"'
          }
        });
      }
    }

    const response = await fetch(request);
    const newResponse = new Response(response.body, response);
    
    // Inject Link headers on the homepage for Agent Discovery
    if (url.pathname === "/") {
      newResponse.headers.append("Link", '</.well-known/api-catalog>; rel="api-catalog"');
      newResponse.headers.append("Link", '<https://github.com/AmgdSMousa/portfolio>; rel="describedby"');
      newResponse.headers.append("Vary", "Accept");
    }
    
    return newResponse;
  }
}
