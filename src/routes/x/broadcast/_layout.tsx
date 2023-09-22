import { LayoutProps } from "$fresh/server.ts";
import { BroadcastHeader } from "../../../components/BroadcastHeader.tsx";
import GlobalFooter from "~/components/GlobalFooter.tsx";

export default function Layout({ Component }: LayoutProps) {
  return (
    <>
      <BroadcastHeader />
      <main class="w-full flex flex-col gap-4 pb-4 place-items-center min-h-screen">
        <div class="w-full">
          <Component />
        </div>
        <GlobalFooter />
      </main>
    </>
  );
}
