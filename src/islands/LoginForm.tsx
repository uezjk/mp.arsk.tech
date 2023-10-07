import { useState } from "preact/hooks";
import { Button, InputItem } from "~components/ui/index.ts";

export default function LoginForm(props: { title: string }) {
  const [input, setInput] = useState({ email: "", password: "123456" });

  const inputUpdate = (e: Event) => {
    const t = e.target as HTMLInputElement;
    setInput({ ...input, [t.name]: t.value });
  };

  const submitFn = async () => {
    const form = new FormData();
    form.append("email", input.email);
    form.append("password", input.password);
    const resp = await fetch("/api/auth/sign-in", { method: "POST", body: form }).then((r) => r.json());
    console.log(resp);
  };

  return (
    <div class="w-full px-10 md:(px-20 max-w-screen-sm pb-10)">
      <div class="grid gap-4 pb-4 text-white">
        <h3 class="text-4xl">{props.title}</h3>
        <div class="text-sm">获取账号请联系 support@energytrust-cn.com</div>
      </div>
      <div class="grid gap-2">
        <InputItem title="邮箱" name="email" value={input.email} onInput={inputUpdate} />
        <InputItem title="密码" name="password" value={input.password} onInput={inputUpdate} />
      </div>
      <div class="grid gap-2 pt-8">
        <Button className="block bg-white text-center" onClick={submitFn}>登录</Button>
        <div class="text-center p-4">
          <a href="/x/sign-up" class="text-white border-b">注册账号</a>
        </div>
      </div>
    </div>
  );
}
