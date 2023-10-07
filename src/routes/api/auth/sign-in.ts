import { Handlers } from "$fresh/server.ts";
import { JsonResponse } from "~utils/helpers.ts";
import * as auth from "~utils/api/auth.ts";

export const handler: Handlers = {
  async POST(req, _) {
    try {
      const { email, password } = await req.json();
      const data = await auth.signIn({ email, password });
      return JsonResponse({ data: data.session });
    } catch (err) {
      return JsonResponse({ error: err.message });
    }
  },
};
