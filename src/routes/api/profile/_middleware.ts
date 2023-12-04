import { FreshContext } from "$fresh/server.ts";
import { requestUser } from "~utils/supabase.ts";
import type { User } from "@supabase/supabase-js";
import { JsonResponse } from "~utils/helpers.ts";

export async function handler(req: Request, ctx: FreshContext<{ user: User }>) {
  const user = await requestUser(req).catch((_) => null);
  if (user === null) {
    return JsonResponse({ error: "Unauthorized" }, { status: 401 });
  }
  ctx.state.user = user;
  return await ctx.next();
}
