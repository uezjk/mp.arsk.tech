import { Head } from "$fresh/runtime.ts";
import SignUpForm from "~islands/auth/SignUpForm.tsx";

export default function Login() {
  return (
    <>
      <Head>
        <title>注册账号</title>
      </Head>
      <div class="h-screen flex items-center justify-center bg-gradient-to-t from-black to-[#130f40]">
        <SignUpForm title="注册账号" />
      </div>
    </>
  );
}
