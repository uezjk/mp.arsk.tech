import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { queryBroadcasts } from "~/utils/strapi.ts";
import BroadcastCard from "~/components/BroadcastCard.tsx";

type pagedata = { items: BoardcastListItem[] };

export const handler: Handlers<pagedata> = {
  GET: async (_req, ctx) => {
    const items = await queryBroadcasts();
    return ctx.render({ ...ctx.state, items });
  },
};

export default function Broadcast({ data }: PageProps<pagedata>) {
  const { items } = data;
  return (
    <>
      <Head>
        <title>热点播报</title>
      </Head>
      <div class="max-w-md mx-auto md:max-w-3xl grid gap-4 p-4">
        {items.map((item) => <BroadcastCard item={item} key={item.id} />)}
      </div>
    </>
  );
}
