import { JSX } from "preact";

export function LinkButton(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      class={`cursor-pointer rounded-sm shadow-sm p-2 ${props.class}`}
    />
  );
}
