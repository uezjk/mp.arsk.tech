import { Handlers, PageProps } from "$fresh/server.ts";
import { extract } from "$std/front_matter/yaml.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import { join } from "$std/path/mod.ts";

type BlogProps = { markdown: string; attrs: Record<string, unknown> };

export const handler: Handlers<BlogProps> = {
  async GET(_req, ctx) {
    const slug = ctx.params.slug as string;
    try {
      const md = await Deno.readTextFile(join(Deno.cwd(), "src/contents/blog", `${slug}.md`));
      const { attrs, body: markdown } = extract(md);
      return ctx.render({ markdown, attrs });
    } catch (err) {
      return ctx.renderNotFound();
    }
  },
};

export default function Article({ data }: PageProps<BlogProps | null>) {
  if (!data) return null;
  const { attrs, markdown } = data;
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <article class="p-10 min-h-screen w-screen">
        <div class="text-4xl">{attrs.title as string}</div>
        <div class="markdown-body" dangerouslySetInnerHTML={{ __html: render(markdown) }} />
      </article>
    </>
  );
}
