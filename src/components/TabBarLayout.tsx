import { Component, ParentProps } from "solid-js";
import tgWallpaper from "@/assets/tg-wallpaper-paris.svg";
import GraphIcon from "@/assets/graph-icon.svg?component-solid";
import FolderIcon from "@/assets/folder.svg?component-solid";

export default function TabBarLayout(props: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  children: ParentProps["children"];
}) {
  return (
    <div class="flex flex-col" style={{ height: "100dvh" }}>
      <div class="flex-1 overflow-auto text-white relative">
        <div
          class="h-full w-full -z-10 absolute bg-link/5"
          style={{
            mask: `url(${tgWallpaper}) center / contain`,
          }}
        />
        <div
          style={{
            "padding-top":
              "calc(var(--tg-viewport-safe-area-inset-top) + var(--tg-viewport-content-safe-area-inset-top))",
          }}
          // "calc(var(--tg-safe-area-inset-top) + var(--tg-content-safe-area-inset-top))",
          class="h-full"
        >
          {props.children}
        </div>
      </div>

      <TabBar activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
    </div>
  );
}

function TabBar(props: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const setActiveTab = (tab: string) => {
    props.setActiveTab(tab);
  };

  return (
    <div class="bg-primary">
      <div class="max-w-screen-xl mx-auto px-4 pt-2 pb-4">
        <div class="flex justify-around items-center">
          <BottomBarLink
            onClick={() => setActiveTab("try")}
            title="Try"
            isActive={props.activeTab === "try"}
            Icon={GraphIcon}
          />
          <BottomBarLink
            onClick={() => setActiveTab("folders")}
            title="Folders"
            isActive={props.activeTab === "folders"}
            Icon={FolderIcon}
          />
        </div>
      </div>
    </div>
  );
}

interface BottomBarLinkProps {
  onClick: () => void;
  title: string;
  isActive: boolean;
  Icon: Component;
}

const BottomBarLink: Component<BottomBarLinkProps> = (props) => {
  const { onClick, title } = props;
  return (
    <div
      onTouchStart={onClick}
      class="w-full text-[12px] flex flex-col items-center gap-0.5 cursor-pointer transition-all duration-150 ease-in-out"
    >
      <div
        class={`h-8 w-8 rounded-full transition-all duration-150 ease-in-out ${
          props.isActive ? "bg-link/10" : "bg-transparent"
        }`}
      >
        <div
          style={{
            color: props.isActive ? "#008080" : "white",
            padding: props.isActive ? "6px" : "4px",
          }}
          class="flex items-center justify-center transition-all duration-70 ease-in-out"
        >
          <div class={`h-6 w-6 ${props.isActive ? "text-link" : "text-white"}`}>
            <props.Icon />
          </div>
        </div>
      </div>
      <span
        class={`font-medium ${props.isActive ? "px-2 rounded-2xl text-accent" : ""}`}
      >
        {title}
      </span>
    </div>
  );
};
