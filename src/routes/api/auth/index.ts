import { Handlers } from "$fresh/server.ts";
import { JsonResponse } from "~utils/helpers.ts";
import { supabase } from "~utils/supabase.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const { access_token } = await req.json();
    const { error, data } = await supabase.auth.getUser(access_token);
    if (error) {
      throw new Error(error.message);
    }
    if (data.user === null) {
      throw new Error("Unauthorized");
    }
    const resp = await supabase.from("profiles").upsert({
      uid: data.user.id,
      nick: data.user.user_metadata.name,
      avatar: data.user.user_metadata.avatar_url,
      metadata: data.user.user_metadata,
      provider: data.user.app_metadata.provider,
    }, { onConflict: "uid" });

    return JsonResponse({ error: resp.error });
  },
};
