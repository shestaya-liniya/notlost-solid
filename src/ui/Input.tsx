import { createSignal } from "solid-js";

const CustomInput = (props: {
  label: string;
  value: string;
  onInput: (value: string) => void;
}) => {
  const [inputValue, setInputValue] = createSignal(props.value);

  const handleInputChange = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setInputValue(value);
    props.onInput(value);
  };

  return (
    <input
      class="appearance-none border-none rounded-full px-6 py-2 w-full focus:outline-none focus:ring-transparent bg-primary"
      type="text"
      placeholder={"hello"}
      value={inputValue()}
      onInput={handleInputChange}
    />
  );
};

export default CustomInput;
