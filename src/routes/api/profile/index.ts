import { Handlers } from "$fresh/server.ts";
import { supabase } from "~utils/supabase.ts";
import { JsonResponse } from "~utils/helpers.ts";
import type { User } from "@supabase/supabase-js";

export const handler: Handlers<any, { user: User }> = {
  async GET(_, ctx) {
    const { user } = ctx.state;
    const resp = await supabase.from("profiles").select().eq("uid", user.id).single();
    const profile = Object.assign({}, resp.data, { email: user.email });
    return JsonResponse({ data: profile });
  },
  async POST(req, ctx) {
    const { user } = ctx.state;
    const { nick = "", avatar = "" } = await req.json();
    await supabase.from("profiles").update({ nick, avatar }).eq("uid", user.id);
    return JsonResponse();
  },
};
