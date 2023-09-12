import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import { tw } from "twind";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function about(props: PageProps) {
  const example = tw`text-red-500 bg-blue-500`;
  return <h1 className={example}>HELLO about</h1>;
}
