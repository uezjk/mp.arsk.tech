import { Handlers } from "$fresh/server.ts";
import { supabase } from "~utils/supabase.ts";
import { JsonResponse } from "~utils/helpers.ts";
import * as auth from "~utils/api/auth.ts";

export const handler: Handlers = {
  async POST(req, _) {
    try {
      const { email, password, code } = await req.json();
      const resp = await auth.signUp(code, { email, password });
      const used_by = resp.user?.id ?? null;
      const now = new Date().toLocaleString();
      await supabase.from("invite_codes").update({ used_by, used_at: now }).eq("code", code);
      return JsonResponse();
    } catch (e) {
      return JsonResponse({ error: e.message });
    }
  },
};
