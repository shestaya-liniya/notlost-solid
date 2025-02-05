import { createSignal, JSX } from "solid-js";

export default function Tappable(props: {
  children: JSX.Element;
  class?: string;
  onClick?: () => void;
}) {
  const [active, setActive] = createSignal(false);

  /* const handleClick = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 100);
    props.onClick?.();
  }; */

  return (
    <div
      class={`transition duration-150 ${
        active() ? "opacity-85 scale-98" : "opacity-100 scale-100"
      } ${props.class}`}
      onPointerDown={() => {
        setActive(true);
        props.onClick?.();
      }}
      onPointerUp={() => setActive(false)}
      onPointerLeave={() => setActive(false)}
      //onClick={handleClick}
    >
      {props.children}
    </div>
  );
}
