import { JSX } from "solid-js";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
  title: string;
}

const BottomModal = (props: ModalProps) => {
  return (
    <div
      class={`bg-primary pointer-events-auto p-6 rounded-t-2xl shadow-lg transition-all ease-in-out duration-400 absolute bottom-0 w-full ${
        props.isOpen
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div class="text-2xl font-semibold text-center mb-4">{props.title}</div>
      {props.children}
      <div
        class="absolute top-2 right-4 text-xl font-semibold text-link"
        onClick={() => props.onClose()}
      >
        Done
      </div>
    </div>
  );
};

export default BottomModal;
