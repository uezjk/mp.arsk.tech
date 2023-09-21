import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>欢迎访问</title>
      </Head>
      <div class="p-0 h-screen w-screen flex items-center justify-center bg-blue-800" style="background: linear-gradient(45deg, #1CB5E0 0%, #000851 100%);">
        <div class="text-4xl text-white">Welcome !</div>
      </div>
    </>
  );
}
