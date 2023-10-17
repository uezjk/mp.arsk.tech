import { Head } from "$fresh/runtime.ts";
import NotFound from "~components/NotFound.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="h-screen flex items-center bg-gradient-to-t from-black to-[#130f40]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center text-white font-light">
          <NotFound class="h-14" />
          <div class="my-4 pt-10">您要访问的页面不存在</div>
          <a href="/" class="border-b">返回首页</a>
        </div>
      </div>
    </>
  );
}
