import { Handlers } from "$fresh/server.ts";
import { JsonResponse } from "~utils/helpers.ts";
import { supabase } from "~utils/supabase.ts";
import { OAUTH_REDIRECT } from "~utils/costants.ts";

export const handler: Handlers = {
  async GET(req, _ctx) {
    const requestURL = new URL(req.url);
    const provider: any = requestURL.searchParams.get("provider");
    const { data } = await supabase.auth.signInWithOAuth({ provider, options: { redirectTo: OAUTH_REDIRECT } });
    return JsonResponse({ data });
  },

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
