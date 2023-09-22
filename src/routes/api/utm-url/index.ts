import { Handlers } from "$fresh/server.ts";
import { putItems } from "🛠️/database.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const form = await req.formData();
    const text = (form.get("url") || "") as string;
    if (!text) {
      return new Response("Missing url", { status: 400 });
    }

    const id = crypto.randomUUID();
    await putItems("x:utm-urls", [{ id, text, "completed": true }]);
    return new Response("OK");
  },
};
