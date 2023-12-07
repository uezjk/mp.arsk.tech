import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

const port = Deno.env.get("PORT") || "3123";

export default defineConfig({ port: Number(port), plugins: [tailwind()] });
