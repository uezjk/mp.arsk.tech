import { Head } from "$fresh/runtime.ts";
import GlobalFooter from "~components/GlobalFooter.tsx";
import ProfileBody from "~islands/ProfileBody.tsx";

export default function Profile() {
  return (
    <>
      <Head>
        <title>用户中心</title>
      </Head>

      <main class="v-profile min-h-screen flex flex-col place-items-center pb-4">
        <div class="w-full flex flex-col place-items-center gap-4 p-2">
          <div class="bg-gray-500 p-8 w-full md:max-w-screen-md">
            <h1 class="text-4xl text-center p-4">Welcome</h1>
            <ProfileBody />
          </div>
        </div>
        <GlobalFooter />
      </main>
    </>
  );
}
