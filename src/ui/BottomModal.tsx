import { JSX } from "solid-js";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
  title: string;
}

const BottomModal = (props: ModalProps) => {
  const { children } = props;
  return (
    <div
      class={`fixed inset-0 flex items-center justify-center z-10 transition-all duration-500 ease ${
        props.isOpen
          ? "pointer-events-none translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div
        class={`bg-primary pointer-events-auto p-6 rounded-t-2xl shadow-lg transform transition-transform ease-in-out duration-500 absolute bottom-0 w-full`}
        onClick={(e) => e.stopPropagation()}
      >
        <div class="text-2xl font-semibold text-center mb-4">{props.title}</div>
        {children}
        <div
          class="absolute top-2 right-4 text-xl font-semibold text-link"
          onClick={props.onClose}
        >
          Done
        </div>
      </div>
    </div>
  );
};

export default BottomModal;
