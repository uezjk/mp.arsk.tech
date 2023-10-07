import { Handlers } from "$fresh/server.ts";
import { save } from "~utils/api/utm-url.ts";
import { JsonResponse } from "~utils/helpers.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const { url = "" } = await req.json();
    await save({ url }).catch((_) => {});
    return JsonResponse();
  },
};
