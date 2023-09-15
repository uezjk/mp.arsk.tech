type Props = { style: "dark" | "light"; siteName: string; children?: unknown };

export function Header(props: Props) {
  return (
    <div class="bg-gray-200 p-4">
      <a href="/mp/broadcast">
        <img class="mx-auto block h-8" src="/images/title-broadcast.png" alt="热点播报站" />
      </a>
    </div>
  );
}
