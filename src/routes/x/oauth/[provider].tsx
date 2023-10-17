import { Handlers } from "$fresh/server.ts";
import { JsonResponse } from "~utils/helpers.ts";
import { supabase } from "~utils/supabase.ts";
import { OAUTH_REDIRECT } from "~utils/costants.ts";

export const handler: Handlers = {
  GET: async (_req, ctx) => {
    const { provider } = ctx.params;
    const { error, data } = await supabase.auth.signInWithOAuth({ provider, options: { redirectTo: OAUTH_REDIRECT } });
    if (error) {
      return JsonResponse({ error });
    }
    return new Response(null, { status: 301, headers: { Location: data.url } });
  },
};
