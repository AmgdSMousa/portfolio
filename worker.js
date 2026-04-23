export default {
  async fetch(request, env, ctx) {
    const response = await fetch(request);
    const newResponse = new Response(response.body, response);
    
    // Inject Link headers on the homepage for Agent Discovery
    const url = new URL(request.url);
    if (url.pathname === "/") {
      newResponse.headers.append("Link", '</.well-known/api-catalog>; rel="api-catalog"');
      newResponse.headers.append("Link", '<https://github.com/AmgdSMousa/portfolio>; rel="describedby"');
    }
    
    return newResponse;
  }
}
