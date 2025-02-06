import BottomModal from "@/ui/BottomModal.jsx";
import FolderIcon from "@/assets/folder.svg?component-solid";
import { createSignal, For } from "solid-js";
import Dialog from "@/ui/Dialog.jsx";

interface ManageDialogsModal {
  isOpen: boolean;
  close: () => void;
}

export default function ManageDialogsModal(props: ManageDialogsModal) {
  return (
    <BottomModal
      title="Manage dialogs"
      isOpen={props.isOpen}
      onClose={() => props.close()}
    >
      <div class="flex items-center text-link justify-center mb-6">
        <div class="absolute bg-secondary px-2 py-1 rounded-2xl -z-10 h-10 w-[180px] bg-opacity-30" />
        <div
          /* ref={(el) => (newFolderRef = el)}
          onTouchStart={(e) => handleTouchStart(e, "folder")} */
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
            <div class="relative">
              <div class="touch-none">
                <DraggableDialog
                  name={contact.name}
                  username={contact.username}
                />
              </div>
              <div class="absolute top-2 left-1/2 -translate-x-1/2 h-12 w-12 bg-secondary rounded-full -z-10 animate-pulse" />
            </div>
          )}
        </For>
      </div>
    </BottomModal>
  );
}

interface DraggableDialogProps {
  name: string;
  username: string;
}

const DraggableDialog = (props: DraggableDialogProps) => {
  let dialogRef!: HTMLDivElement;
  const [position, setPosition] = createSignal<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [initialPosition, setInitialPosition] = createSignal<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  let dragging = false;
  let startX: number, startY: number, startLeft: number, startTop: number;

  const startDrag = (e: MouseEvent | TouchEvent) => {
    dragging = true;
    startX = "touches" in e ? e.touches[0].clientX : e.clientX;
    startY = "touches" in e ? e.touches[0].clientY : e.clientY;
    startLeft = position().x;
    startTop = position().y;
    setInitialPosition({ x: startLeft, y: startTop }); // Save the initial position on drag start
  };

  const onDrag = (e: MouseEvent | TouchEvent) => {
    if (!dragging) return;
    dialogRef.style.transition = "";
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    dialogRef.style.transform = `translate(${startLeft + (clientX - startX)}px, ${startTop + (clientY - startY)}px)`;
  };

  const endDrag = () => {
    dragging = false;
    // Reset the position to the initial position on drag end
    dialogRef.style.transition = "transform 0.3s ease";
    dialogRef.style.transform = `translate(${initialPosition().x}px, ${initialPosition().y}px)`;
    setPosition(initialPosition());
  };

  return (
    <div
      ref={(el) => (dialogRef = el)}
      class="relative touch-none"
      onPointerDown={startDrag}
      onPointerMove={onDrag}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <Dialog name={props.name} username={props.username} />
    </div>
  );
};

const trialContacts = [
  { username: "shestaya_liniya", name: "Andrei", unreadCount: 0 },
  { username: "skywl_k", name: "Andrei", unreadCount: 0 },
  { username: "PiraJoke", name: "Max", unreadCount: 0 },
];
