import Accordion from "@/ui/Accordion.jsx";
import Input from "@/ui/Input.jsx";

export default function Folders() {
  return (
    <div class="p-4 space-y-4">
      <Input label="Folder Name" value="" onInput={() => {}} />
      <Accordion title="Folder 13">
        <div>Hello</div>
      </Accordion>
      <Accordion title="Folder 2">
        <div>Hello</div>
      </Accordion>
    </div>
  );
}
