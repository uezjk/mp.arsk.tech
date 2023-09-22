import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>欢迎访问</title>
      </Head>
      <div class="p-0 h-screen w-screen flex items-center justify-center bg-gradient-to-t from-black to-[#130f40]">
        <div class="text-6xl bg-clip-text text-white">Welcome !</div>
      </div>
    </>
  );
}
