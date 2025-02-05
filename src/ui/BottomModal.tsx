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
        props.isOpen ? "pointer-events-none" : "pointer-events-none"
      }`}
    >
      <div
        class={`bg-primary pointer-events-auto p-6 rounded-t-2xl shadow-lg transform transition-transform ease-in-out duration-300 absolute bottom-0 w-full ${
          props.isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div class="text-2xl font-semibold text-center mb-4">{props.title}</div>
        {props.children}
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
