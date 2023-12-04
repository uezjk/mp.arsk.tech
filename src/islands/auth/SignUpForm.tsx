import { useState } from "preact/hooks";
import { Button, InputItem } from "../../components/ui/mod.ts";
import ajax from "~utils/ajax.ts";

export default function SignUpForm(props: { title: string }) {
  const [input, setInput] = useState({ email: "", password: "", invite_code: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputUpdate = (e: Event) => {
    const t = e.target as HTMLInputElement;
    setInput({ ...input, [t.name]: t.value });
  };

  const submitFn = async () => {
    const form = new FormData();
    form.append("email", input.email);
    form.append("password", input.password);
    form.append("invite_code", input.invite_code);
    setLoading(true);
    setError("");
    const [ok, resp] = await ajax.json("/api/auth/sign-up", input);
    setLoading(false);
    if (resp.error) {
      setError(resp.error);
      return;
    }
    location.href = "/x/sign-in";
  };

  return (
    <div class="w-full px-10 md:px-20 md:max-w-screen-sm md:pb-10">
      <div class="grid gap-4 pb-4 text-white">
        <h3 class="text-4xl">{props.title}</h3>
        <div class="text-sm">获取邀请码请联系 support@energytrust-cn.com</div>
      </div>
      <div class="grid gap-2">
        <InputItem title="邮箱" name="email" value={input.email} onInput={inputUpdate} />
        <InputItem title="密码" name="password" value={input.password} onInput={inputUpdate} type="password" />
        <InputItem title="邀请码" name="invite_code" value={input.invite_code} onInput={inputUpdate} />
      </div>
      <div class="grid gap-2 pt-8">
        <Button class="block bg-[#130f40] text-center text-white" onClick={submitFn}>
          {loading ? "请稍后" : "注册"}
        </Button>
        <div class="min-h-8 flex items-start justify-between text-white">
          <div>{error}</div>
          <div class="flex-none">
            <a href="/x/sign-in" class="border-b">登录</a>
          </div>
        </div>
      </div>
    </div>
  );
}
