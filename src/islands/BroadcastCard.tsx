type Props = { item: BoardcastListItem };

export default function BroadcastCard(props: Props) {
  const { item } = props;
  return (
    <div class="md:flex">
      <div class="md:shrink-0">
        <a href={"/mp/broadcast/" + item.id}><img class="h-36 w-full object-cover md:w-96" src={item.thumb} /></a>
      </div>
      <div class="p-4 bg-gray-100 w-full">
        <a href={"/mp/broadcast/" + item.id} class="tracking-wide text-indigo-500">{item.title}</a>
        <div class="text-gray-400 flex gap-2 text-sm pt-2">
          <span>发布日期 {item.publish}</span>
          <span>浏览 {item.views}</span>
        </div>
      </div>
    </div>
  );
}
