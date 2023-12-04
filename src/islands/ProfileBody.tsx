import { useEffect, useState } from "preact/hooks";
import { Button, InputItem } from "~components/ui/mod.ts";
import { auth } from "~utils/state/auth.ts";
import ajax from "~utils/ajax.ts";

export default function ProfileBody() {
  const [input, setInput] = useState({ email: "", nick: "", avatar: "" });

  const inputUpdate = (e: Event) => {
    const t = e.target as HTMLInputElement;
    setInput({ ...input, [t.name]: t.value });
  };

  useEffect(() => {
    if (!auth.isAuthenticated.value) {
      location.href = "/x/sign-in";
    } else {
      ajax.get("/api/profile").then((data) => {
        const [ok, resp] = data;
        if (ok) {
          setInput({ ...input, ...resp.data });
        } else {
          auth.destroy();
          location.href = "/x/sign-in";
        }
      });
    }
  }, []);

  const destroyFn = () => {
    auth.destroy();
    location.href = "/x/sign-in";
  };

  const saveFn = async () => {
    await ajax.json("/api/profile", { nick: input.nick, avatar: input.avatar });
  };

  return (
    <>
      <div class="grid gap-4">
        <InputItem title="邮箱" name="email" value={input.email} disabled={true} />
        <InputItem title="昵称" name="nick" value={input.nick} onInput={inputUpdate} />
        <InputItem title="头像" name="avatar" value={input.avatar} onInput={inputUpdate} />

        <Button class="text-center bg-gray-800 text-white" onClick={saveFn}>提交</Button>
        <Button class="text-center bg-gray-400 text-white" onClick={destroyFn}>退出</Button>
      </div>
    </>
  );
}
