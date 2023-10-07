export function Button(props: {
  children: Element | string;
  className?: string;
  onClick?: (e: Event) => void;
}) {
  return (
    <button
      onClick={props.onClick}
      class={`rounded-sm shadow-sm p-2 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
