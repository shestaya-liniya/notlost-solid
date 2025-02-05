import { truncateWord } from "@/helpers/truncate-word.js";
import Tappable from "./Tappable.jsx";

export default function Dialog(props: { name: string; username: string }) {
  return (
    <Tappable class="flex flex-col items-center justify-center gap-1 rounded-xl p-2 relative">
      <img
        loading="lazy"
        src={`https://t.me/i/userpic/320/${props.username}.svg`}
        class="h-12 w-12 rounded-full"
        decoding="async"
        alt=""
      />
      <span
        class={`px-2 py-[0.5px] text-xs font-normal bg-link/10 text-link rounded-xl`}
      >
        {truncateWord(props.name || "", 5)}
      </span>
    </Tappable>
  );
}
