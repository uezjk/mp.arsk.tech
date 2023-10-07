import { signal } from "@preact/signals";

export default function Welcome() {
  const title = signal("Welcome !");
  return <div class="text-6xl text-white" onClick={() => title.value = "You clicked me!"}>{title}</div>;
}
