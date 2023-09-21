import { Head } from "$fresh/runtime.ts";
import UtmUtlForm from "~/islands/UtmUrlForm.tsx";

export default function UtmUrl() {
  return (
    <>
      <Head>
        <title>广告系列网址构建工具</title>
      </Head>

      <main class="mx-auto max-w-screen-md pt-10">
        <UtmUtlForm />
      </main>
    </>
  );
}
