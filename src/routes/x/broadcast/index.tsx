import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { queryBroadcasts } from "~utils/api/broadcast.ts";
import BroadcastCard from "~components/BroadcastCard.tsx";
import type { BoardcastListItem } from "~shared/types.ts";

type Data = { items: BoardcastListItem[] };

export const handler: Handlers<Data> = {
  GET: async (_req, ctx) => {
    const items = await queryBroadcasts();
    return ctx.render({ ...ctx.state, items });
  },
};

export default function Broadcast({ data }: PageProps<Data>) {
  const { items } = data;
  return (
    <>
      <Head>
        <title>热点播报</title>
      </Head>
      <div class="mx-auto md:max-w-3xl grid gap-4 p-4">
        {items.map((item) => <BroadcastCard item={item} key={item.id} />)}
      </div>
    </>
  );
}
