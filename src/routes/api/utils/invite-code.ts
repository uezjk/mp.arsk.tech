import { Handlers } from "$fresh/server.ts";
import { requestUser, supabase } from "~utils/supabase.ts";
import { JsonResponse } from "~utils/helpers.ts";

export const handler: Handlers = {
  async POST(_req, _) {
    const user = await requestUser(_req).catch((_) => null);
    const created_by = user?.id || null;
    const code = crypto.randomUUID();
    const resp = await supabase.from("invite_codes").insert({ code, created_by });
    if (resp.error === null) {
      return JsonResponse({ data: code });
    }
    return JsonResponse({ error: resp.error });
  },
  async GET(_req, _) {
    const items = await supabase.from("invite_codes").select().order("created_at", { ascending: false });
    return JsonResponse({ data: items });
  },
};
