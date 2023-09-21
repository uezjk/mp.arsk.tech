import { Head } from "$fresh/runtime.ts";
import UtmUtlForm from "~/islands/UtmUrlForm.tsx";
import GlobalFooter from "~/components/GlobalFooter.tsx";

export default function UtmUrl() {
  return (
    <>
      <Head>
        <title>广告系列网址构建工具</title>
      </Head>

      <main class="w-full flex flex-col gap-4 pt-2 pb-4 place-items-center min-h-screen md:(pt-4)">
        <div class="px-2 w-full md:(max-w-screen-md)">
          <UtmUtlForm title="广告系列网址构建工具" />
        </div>
        <GlobalFooter />
      </main>
    </>
  );
}
