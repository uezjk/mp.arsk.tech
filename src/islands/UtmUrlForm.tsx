import { tw } from "twind";
import { useEffect, useState } from "preact/hooks";

const styles = {
  title: tw`text-2xl text-center font-light text-indigo-700 pb-4`,
  label: tw`text-gray-600`,
  input: tw`block w-full p-2 outline-none rounded-sm shadow-sm`,
  button: tw`block bg-blue-600 text-white text-center p-3`,
};

const InputItem = (props: {
  title: string;
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  children?: HTMLElement;
  onChange?: (e: Event) => void;
}) => {
  return (
    <div class="flex flex-col gap-2">
      <div class={styles.label}>{props.title}</div>
      <input
        type={props.type || "text"}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        class={styles.input}
      />
      {props.children}
    </div>
  );
};

const initForm = () => ({ source: "", utm_source: "", utm_medium: "", utm_campaign: "" });

export default function UtmUtlForm() {
  const [input, setInput] = useState(initForm());
  const [finalUrl, setFinalUrl] = useState("");
  const [copyText, setCopyText] = useState("复制");

  const inputUpdate = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setInput({ ...input, [target.name]: target.value });
  };

  useEffect(() => {
    const { source, utm_source, utm_medium, utm_campaign } = input;
    if (!source) {
      setFinalUrl("");
    } else {
      const url = new URL(source);
      utm_source && url.searchParams.set("utm_source", utm_source);
      utm_medium && url.searchParams.set("utm_medium", utm_medium);
      utm_campaign && url.searchParams.set("utm_campaign", utm_campaign);
      setFinalUrl(url.toString());
    }
  }, [input]);

  const copyFn = () => {
    const input = document.getElementById("final-url") as HTMLInputElement;
    input.select();
    document.execCommand("copy");
    setCopyText("已复制");
  };

  return (
    <>
      <div class="bg-gray-100 p-4 md:p-10">
        <div class={styles.title}>广告系列网址构建工具</div>
        <div class="flex flex-col gap-2">
          <InputItem title="投放网址" name="source" type="url" value={input.source} onChange={inputUpdate} />
          <InputItem title="utm_source：引荐来源（例如：google、newsletter4、billboard）" name="utm_source" value={input.utm_source} onChange={inputUpdate} />
          <InputItem title="utm_medium：营销媒介（例如：cpc、banner、email）" name="utm_medium" value={input.utm_medium} onChange={inputUpdate} />
          <InputItem title="utm_campaign：产品、广告语、促销代码（例如：spring_sale）" name="utm_campaign" value={input.utm_campaign} onChange={inputUpdate} />

          <div class="flex flex-col gap-2 relative">
            <div class={styles.label}>UTM 网址</div>
            <input type="url" id="final-url" name="final-url" value={finalUrl} readonly class={styles.input} />
            <div class="pt-4">
              <a href="javascript:;" class={styles.button} onClick={copyFn}>{copyText}</a>
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-400 pt-10">
          参考资料：
          <a class="underline" href="https://support.google.com/analytics/answer/10917952?hl=zh-Hans">
            https://support.google.com/analytics/answer/10917952?hl=zh-Hans
          </a>
        </div>
      </div>
    </>
  );
}
