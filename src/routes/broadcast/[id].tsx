import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { queryBroadcastView } from "~/utils/strapi.ts";
import dayjs from "dayjs";

type pagedata = { item: BoradcastView };

export const handler: Handlers<pagedata> = {
  GET: async (_req, ctx) => {
    const item = await queryBroadcastView({ id: ctx.params.id });
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
      <div class="p-2 font-light">
        <div class="mt-2 text-xl">{item.title}</div>
        <div class="py-2 text-xs text-gray-600 flex gap-2">
          <span>发布日期 {dayjs(item.publishedAt).format("YYYY-MM-DD HH:mm")}</span>
          <span>浏览 {item.views}</span>
        </div>
        <div class="mt-4 text-lg" dangerouslySetInnerHTML={{ __html: fulltext }} />
      </div>
    </>
  );
}
