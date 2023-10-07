export const InputItem = (props: {
  title: string;
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  children?: HTMLElement;
  disabled?: boolean;
  onInput?: (e: Event) => void;
}) => {
  return (
    <div class="flex flex-col gap-2">
      <div class="text-gray-600">{props.title}</div>
      <input
        type={props.type || "text"}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onInput={props.onInput}
        disabled={props.disabled}
        class="block w-full p-2 outline-none rounded-sm shadow-sm"
      />
      {props.children}
    </div>
  );
};
