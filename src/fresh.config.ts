import { defineConfig } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts"
import twindConfig from "./twind.config.ts";
export default defineConfig({
  port: 3123,
  plugins: [twindPlugin(twindConfig)]
});
