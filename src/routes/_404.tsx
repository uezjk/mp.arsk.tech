import { Head } from "$fresh/runtime.ts";
import BrandLogo from "~/components/BrandLogo.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div
        class="h-screen flex items-center bg[#000851]"
        style="background: linear-gradient(45deg, #1CB5E0 0%, #000851 100%);"
      >
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center text-white font-light">
          <BrandLogo className="h-14" />
          <h1 class="text-4xl font-bold pt-10">404 - NOT FOUND</h1>
          <div class="my-4">您要访问的页面不存在</div>
          <a href="/" class="border-b">返回首页</a>
        </div>
      </div>
    </>
  );
}
