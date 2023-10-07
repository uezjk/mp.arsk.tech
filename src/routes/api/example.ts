import { Handlers } from "$fresh/server.ts";
import { JsonResponse } from "~utils/helpers.ts";
import { getUsers } from "~utils/mysql.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const data = await getUsers();
    // const data = await new Promise((resolve) => resolve('Hello World!'));
    return JsonResponse({ data });
  },
};
