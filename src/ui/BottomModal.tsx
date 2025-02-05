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
      class={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        props.isOpen ? "opacity-100" : "opacity-100 pointer-events-none"
      }`}
    >
      <div
        class={`bg-primary p-6 rounded-t-2xl shadow-lg transform transition-transform ease-in-out duration-300 absolute bottom-0 w-full ${
          props.isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div class="text-2xl font-semibold text-center mb-4">{props.title}</div>
        {props.children}
        <button
          class="absolute top-4 right-4 text-link font-bold"
          onClick={props.onClose}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default BottomModal;
