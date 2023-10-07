import { Handlers } from "$fresh/server.ts";
import { supabase } from "~utils/supabase.ts";
import { JsonResponse } from "~utils/helpers.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const { data } = await supabase.from("profiles").select().order("created_at", { ascending: false });
    return JsonResponse({ data });
  },
};
