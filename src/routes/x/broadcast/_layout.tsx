import { LayoutProps } from "$fresh/server.ts";
import { Header } from "~/components/Header.tsx";
import { Footer } from "~/components/Footer.tsx";

export default function Layout({ Component }: LayoutProps) {
  return (
    <div class="viewport">
      <Header siteName="Broadcast" style="dark" />
      <main>
        <Component />
      </main>
      <Footer siteName="Broadcast" style="dark" />
    </div>
  );
}
