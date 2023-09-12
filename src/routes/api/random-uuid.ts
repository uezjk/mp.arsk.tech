import { Handlers } from "$fresh/server.ts";
import { JsonResponse } from "../../utils/helpers.ts";

export const handler: Handlers = {
  GET(_req) {
    const uuid = crypto.randomUUID();
    return JsonResponse({ uuid });
  },
};
