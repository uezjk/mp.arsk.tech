import { useSignal } from "@preact/signals";

export default function Welcome() {
  const title = useSignal("Welcome !");
  return <div class="text-6xl text-white" onClick={() => title.value = "You clicked me!"}>{title}</div>;
}
