import { Head } from "$fresh/runtime.ts";
import UtmUrlForm from "🏝️/UtmUrlForm.tsx";
import GlobalFooter from "🧱/GlobalFooter.tsx";
import TitleUtmUrl from "🧱/TitleUtmUrl.tsx";

export default function UtmUrl() {
  return (
    <>
      <Head>
        <title>广告系列网址构建工具</title>
      </Head>

      <main class="w-full flex flex-col gap-4 pt-2 pb-4 place-items-center min-h-screen">
        <div class="px-2 w-full md:(max-w-screen-md)">
          <div class="p-8">
            <TitleUtmUrl className="h-8 block mx-auto text-indigo-700" />
          </div>
          <UtmUrlForm />
        </div>
        <GlobalFooter />
      </main>
    </>
  );
}
