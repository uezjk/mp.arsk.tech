type Props = { item: BoardcastListItem };

export default function BroadcastCard(props: Props) {
  const { item } = props;
  return (
    <div className="bg-white">
      <a href={`/broadcast/${item.id}`} className="block relative">
        <img src={item.thumb} className="w-full block object-cover" style={{ height: "50vw" }} />
        <div className="px-2 grid items-center h-10 absolute w-full bg-opacity-60 bottom-0 bg-black text-white">{item.title}</div>
      </a>
    </div>
  );
}
