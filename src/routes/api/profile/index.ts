import { Handlers } from "$fresh/server.ts";
import { requestUser, supabase } from "~utils/supabase.ts";
import { JsonResponse } from "~utils/helpers.ts";

export const handler: Handlers = {
  async GET(req, _) {
    const user = await requestUser(req);
    const resp = await supabase.from("profiles").select().eq("uid", user.id).single();
    const profile = Object.assign({}, resp.data, { email: user.email });
    return JsonResponse({ data: profile });
  },
  async POST(req, _) {
    const user = await requestUser(req);
    const { nick = "", avatar = "" } = await req.json();
    await supabase.from("profiles").update({ nick, avatar }).eq("uid", user.id);
    return JsonResponse();
  },
};
