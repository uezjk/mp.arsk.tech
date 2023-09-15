import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>欢迎访问</title>
      </Head>
      <div style="font-weight:lighter;font-size:3rem;background:#000851;background: linear-gradient(45deg, #1CB5E0 0%, #000851 100%);color:#fff;font-family:system-ui, -apple-system,sans-serif;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;">
        Welcome !
      </div>
    </>
  );
}
