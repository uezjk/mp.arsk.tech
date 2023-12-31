import type { BoardcastListItem } from "~shared/types.ts";

type Props = { item: BoardcastListItem };

export default function BroadcastCard(props: Props) {
  const { item } = props;
  return (
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <a href={"/x/broadcast/" + item.id}>
          <img class="w-full h-56 object-cover md:w-72 md:h-44" src={item.thumb} />
        </a>
      </div>
      <div class="p-4 bg-gray-100 w-full">
        <a href={"/x/broadcast/" + item.id} class="tracking-wide text-indigo-500">{item.title}</a>
        <div class="text-gray-400 flex gap-2 text-sm pt-2">
          <span>日期 {item.publish}</span>
          <span>浏览 {item.views}</span>
        </div>
      </div>
    </div>
  );
}
