import { Head } from "$fresh/runtime.ts";
import Welcome from "~islands/Welcome.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>欢迎访问</title>
      </Head>
      <div class="p-0 h-screen w-screen flex items-center justify-center bg-gradient-to-t from-black to-[#130f40]"
        style="background-image: radial-gradient(circle, #1280e1 0%, #002069 100%)">
        <Welcome />
      </div>
    </>
  );
}
