type Props = { style: "dark" | "light"; siteName: string; children?: unknown };

export function Footer(props: Props) {
  return <div className="bg-gray-100 text-sm text-gray-400 text-center p-10">
    &copy; { new Date().getFullYear() } 安瑞信杰数字科技
  </div>;
}
