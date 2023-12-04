import { FreshContext } from "$fresh/server.ts";

export async function handler(_req: Request, ctx: FreshContext) {
  if (_req.method == "OPTIONS") {
    const resp = new Response(null, { status: 204 });
    const origin = _req.headers.get("Origin") || "*";
    const headers = resp.headers;
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "DELETE");
    return resp;
  }

  const resp = await ctx.next();
  if (resp.status == 302 || resp.status == 301) {
    return resp;
  }

  // const headers = resp.headers;
  // headers.set(
  //   "Access-Control-Allow-Headers",
  //   "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
  // );
  // const origin = _req.headers.get("Origin") || "*";
  // headers.set("Access-Control-Allow-Origin", origin);
  // headers.set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE");

  return resp;
}
