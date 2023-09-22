import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { queryBroadcastView } from "🛠️/strapi.ts";
import dayjs from "dayjs";

type pagedata = { item: BoradcastView };

export const handler: Handlers<pagedata> = {
  GET: async (_req, ctx) => {
    const item = await queryBroadcastView({ id: ctx.params.id });
    if (!item) return ctx.renderNotFound();
    return ctx.render({ ...ctx.state, item });
  },
};

export default function BroadcastView({ data }: PageProps<pagedata>) {
  const { item } = data;
  const fulltext = item.fulltext.replaceAll("/pages/single/webview?url=", "");
  return (
    <>
      <Head>
        <title>{item.title} ✗ 热点播报</title>
      </Head>
      <div class="max-w-md mx-auto md:max-w-3xl grid gap-4 p-4 font-light">
        <div class="mt-2 text-xl text-center">{item.title}</div>
        <div class="py-2 text-sm text-gray-600 flex justify-center gap-2">
          <span>日期 {dayjs(item.publishedAt).format("YYYY-MM-DD HH:mm")}</span>
          <span>浏览 {item.views}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: fulltext }} />
      </div>
    </>
  );
}
