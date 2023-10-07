import { Handlers } from "$fresh/server.ts";
import { supabase } from "~utils/supabase.ts";
import { JsonResponse } from "~utils/helpers.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { uid } = ctx.params;
    const { data } = await supabase.from("profiles").select().eq("uid", uid).single();
    return JsonResponse({ data });
  },
};
