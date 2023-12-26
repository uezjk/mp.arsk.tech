import { useSignal } from "@preact/signals";

export default function Welcome() {
  const title = useSignal("Welcome");
  return (
    <div class="text-white">
      <div class="text-6xl border-b pb-4 mb-4" onClick={() => title.value = "You clicked me!"}>{title}</div>
      <div class="flex gap-2 justify-center">
        <a href="/x/utm-url">投放网址构建</a>
        <span>/</span>
        <a href="/x/broadcast">ET热点播报</a>
      </div>
    </div>
  );
}
