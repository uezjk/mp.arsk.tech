import { asset, Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { frontMatter, renderMarkdown } from "~utils/markdown.ts";

type Page = {
  attrs: Record<string, unknown>;
  body: string;
};

export const handler: Handlers<Page> = {
  GET: async (_req, ctx) => {
    const file = new URL(`../../contents/privacy.md`, import.meta.url);
    const content = await Deno.readTextFile(file);
    const { body, attrs } = frontMatter<Record<string, unknown>>(content);
    return ctx.render({ body, attrs });
  },
};

export default function Privacy({ data }: PageProps<Page>) {
  const html = renderMarkdown(data.body);
  const { title } = data.attrs as { title: string };
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href={asset("/gfm.css")} />
      </Head>
      <div class="p-10 min-h-screen w-screen flex items-start justify-center bg-gradient-to-t from-black to-[#130f40]">
        <div class="markdown-body w-full md:max-w-screen-lg">
          <div class="px-4">
            <h1>{title}</h1>
          </div>
          <div class="p-4">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </>
  );
}
