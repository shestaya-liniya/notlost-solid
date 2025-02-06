import BottomModal from "@/ui/BottomModal.jsx";
import FolderIcon from "@/assets/folder.svg?component-solid";
import { For, onCleanup } from "solid-js";
import Dialog from "@/ui/Dialog.jsx";
import { Motion } from "solid-motionone";

interface ManageDialogsModal {
  isOpen: boolean;
  close: () => void;
}

export default function ManageDialogsModal(props: ManageDialogsModal) {
  const dialogRefs: Record<string, HTMLDivElement | undefined> = {};
  let newFolderRef: HTMLDivElement | undefined;

  const handleTouchStart = (
    e: TouchEvent,
    draggableItemType: "contact" | "folder",
    dialog?: { username: string; name: string }
  ) => {
    let touch = e.touches[0];
    const ref =
      draggableItemType === "folder"
        ? newFolderRef
        : dialogRefs[dialog!.username];

    if (!ref) {
      return;
    }

    const startPos = {
      x: touch.clientX,
      y: touch.clientY,
    };

    const handleTouchMove = (e: TouchEvent) => {
      ref.style.transition = "";

      touch = e.touches[0];
      const dx = touch.clientX - startPos.x;
      const dy = touch.clientY - startPos.y;

      ref.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const handleTouchEnd = () => {
      ref.style.transition = `transform 0.3s ease`;
      ref.style.transform = `translate(0px, 0px)`;

      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    onCleanup(() => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    });
  };

  return (
    <BottomModal
      title="Manage dialogs"
      isOpen={props.isOpen}
      onClose={() => props.close()}
    >
      <div class="flex items-center text-link justify-center mb-6">
        <div class="absolute bg-secondary px-2 py-1 rounded-2xl -z-10 h-10 w-[180px] bg-opacity-30" />
        <div
          ref={(el) => (newFolderRef = el)}
          onTouchStart={(e) => handleTouchStart(e, "folder")}
          class="flex items-center bg-link/20 px-2 py-1 rounded-xl gap-2 font-medium touch-none no-select"
        >
          <div class="h-6 w-6">
            <FolderIcon />
          </div>
          <div>Place new folder</div>
        </div>
      </div>

      <div class="flex flex-wrap gap-4 justify-center">
        <For each={trialContacts}>
          {(contact) => (
            <Motion.div draggable class="relative">
              <div class="touch-none">
                <Dialog name={contact.name} username={contact.username} />
              </div>
              <div class="absolute top-2 left-1/2 -translate-x-1/2 h-12 w-12 bg-secondary rounded-full -z-10 animate-pulse" />
            </Motion.div>
          )}
        </For>
      </div>
    </BottomModal>
  );
}

const trialContacts = [
  { username: "shestaya_liniya", name: "Andrei", unreadCount: 0 },
  { username: "skywl_k", name: "Andrei", unreadCount: 0 },
  { username: "PiraJoke", name: "Max", unreadCount: 0 },
];
