type Props = { style: "dark" | "light"; siteName: string; children?: unknown };

export function Header(props: Props) {
  return <div className="bg-black text-white text-center p-4">HEADER</div>;
}
