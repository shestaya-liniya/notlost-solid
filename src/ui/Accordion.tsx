import { createSignal, JSX /* onMount */ } from "solid-js";
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
        toggleExpanded={() => setExpanded((prev) => !prev)}
        expanded={expanded()}
      />
      {expanded() && <AccordionContent>{props.children}</AccordionContent>}
    </div>
  );
}

const AccordionHeader = (props: {
  title: string;
  toggleExpanded: () => void;
  expanded: boolean;
}) => {
  return (
    <div
      class="rounded-2xl bg-primary px-6 py-4"
      onClick={() => props.toggleExpanded()}
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-4">
          <FolderIcon class="w-7 h-7 text-link" />
          <div class="font-bold">{props.title}</div>
        </div>
        <ChevronIcon
          class={`w-5 h-5 text-link transition-transform duration-300 ease-in-out ${
            props.expanded ? "-rotate-90" : "rotate-90"
          }`}
        />
      </div>
    </div>
  );
};

const AccordionContent = (props: { children: JSX.Element }) => {
  /* let contentRef: HTMLDivElement | undefined;
  const [contentHeight, setContentHeight] = createSignal(0);
  onMount(() => {
    if (contentRef) {
      setContentHeight(contentRef.scrollHeight);
    }
  }); */
  return (
    <div class="p-4 bg-secondary rounded-b-2xl animate-fadeIn">
      {props.children}
    </div>
  );
};
