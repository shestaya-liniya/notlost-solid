import Accordion from "@/ui/Accordion.jsx";
import Input from "@/ui/Input.jsx";
import Tappable from "@/ui/Tappable.jsx";
import PencilIcon from "@/assets/pencil-icon.svg?component-solid";

export default function Folders(props: { openDialogsModal: () => void }) {
  return (
    <div class="h-full flex flex-col">
      <div class="p-2">
        <Input label="Folder Name" value="" onInput={() => {}} />
      </div>
      <div class="space-y-4 p-4 mt-4 overflow-y-auto overscroll-none pb-20 max-h-screen">
        <Accordion title="Folder 13">
          <div>Hello</div>
        </Accordion>
        <Accordion title="Folder 2">
          <div>Hello</div>
        </Accordion>
      </div>

      <Tappable
        class="p-3 rounded-full bg-link fixed bottom-10 right-8 z-50"
        onClick={props.openDialogsModal}
      >
        <PencilIcon class="w-7 h-7" />
      </Tappable>
    </div>
  );
}
