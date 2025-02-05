import { createSignal, JSX, ParentProps } from "solid-js";
import ChevronIcon from "@/assets/chevron-right.svg?component-solid";
import FolderIcon from "@/assets/folder.svg?component-solid";

export default function Accordion(props: {
  children: JSX.Element;
  title: string;
}) {
  const [expanded, setExpanded] = createSignal<boolean>(false);
  return (
    <div>
      <AccordionHeader
        title={props.title}
        setExpanded={setExpanded}
        expanded={expanded()}
      />
      {expanded() && <AccordionContent>{props.children}</AccordionContent>}
    </div>
  );
}

const AccordionHeader = (props: {
  title: string;
  setExpanded: (expanded: boolean) => void;
  expanded: boolean;
}) => {
  return (
    <div
      class="rounded-2xl bg-primary px-6 py-4"
      onClick={() => props.setExpanded(!props.expanded)}
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-4">
          <FolderIcon class="w-7 h-7 text-link" />
          <div class="font-bold">{props.title}</div>
        </div>
        <ChevronIcon
          class={`w-5 h-5 text-link transition-transform duration-150 ease-in-out ${
            props.expanded ? "-rotate-90" : "rotate-90"
          }`}
        />
      </div>
    </div>
  );
};

const AccordionContent = (props: ParentProps) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};
