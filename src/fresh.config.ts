import { defineConfig } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts"
import twindConfig from "./twind.config.ts";

const port = Deno.env.get("PORT") || "3123";

export default defineConfig({
  port: Number(port),
  plugins: [twindPlugin(twindConfig)]
});
