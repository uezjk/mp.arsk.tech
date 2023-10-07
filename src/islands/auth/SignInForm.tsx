import { useState } from "preact/hooks";
import { Button, InputItem } from "~components/ui/index.ts";
import { useAuth } from "~utils/state/auth.ts";
import ajax from "~utils/ajax.ts";

export default function SignInForm(props: { title: string }) {
  const auth = useAuth();
  const [input, setInput] = useState({ email: "", password: "123456" });
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
    setLoading(true);
    setError("");
    const [ok, resp] = await ajax.json("/api/auth/sign-in", input);
    setLoading(false);
    if (resp.error) {
      setError(resp.error);
      return;
    }
    auth.save(JSON.stringify(resp.data));
    location.href = "/x/profile";
  };

  return (
    <div class="w-full px-10 md:(px-20 max-w-screen-sm pb-10)">
      <div class="grid gap-4 pb-4 text-white">
        <h3 class="text-4xl">{props.title}</h3>
        <div class="text-sm">找回账号请联系 support@energytrust-cn.com</div>
      </div>
      <div class="grid gap-2">
        <InputItem title="邮箱" name="email" value={input.email} onInput={inputUpdate} />
        <InputItem title="密码" name="password" value={input.password} onInput={inputUpdate} />
      </div>
      <div class="grid gap-2 pt-8">
        <Button className="block bg-[#130f40] text-center text-white" onClick={submitFn}>
          {loading ? "请稍后" : "登录"}
        </Button>
        <div class="flex items-start justify-between text-white">
          <div>{error}</div>
          <div class="flex-none">
            <a href="/x/sign-up" class="border-b">注册账号</a>
          </div>
        </div>
      </div>
    </div>
  );
}
