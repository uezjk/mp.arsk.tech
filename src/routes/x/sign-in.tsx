import { Head } from "$fresh/runtime.ts";
import SignInForm from "~islands/auth/SignInForm.tsx";

export default function Login() {
  return (
    <>
      <Head>
        <title>请登录</title>
      </Head>
      <div class="h-screen flex items-center justify-center bg-gradient-to-t from-black to-[#030f40]">
        <SignInForm title="请登录" />
      </div>
    </>
  );
}
