import { createSignal, JSX } from "solid-js";

export default function Tappable(props: { children: JSX.Element }) {
  const [active, setActive] = createSignal(false);

  const handleClick = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 100);
  };

  return (
    <div
      class={`rounded-xl transition duration-150 ${
        active() ? "opacity-85 scale-95" : "opacity-100 scale-100"
      }`}
      onPointerDown={() => setActive(true)}
      onPointerUp={() => setActive(false)}
      onPointerLeave={() => setActive(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
      onTouchCancel={() => setActive(false)}
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
}
