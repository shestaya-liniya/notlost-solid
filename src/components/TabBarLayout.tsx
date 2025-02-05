import { A, useLocation } from "@solidjs/router";
import { Component, ParentProps } from "solid-js";
import tgWallpaper from "@/assets/tg-wallpaper-paris.svg";
import graphIcon from "@/assets/graph-icon.svg";
import { hexToRgba } from "@/helpers/css/hex-to-rgba.js";

export default function TabBarLayout(props: ParentProps) {
  return (
    <div class="flex flex-col" style={{ height: "100dvh" }}>
      <div class="flex-1 overflow-auto text-white">
        <div
          class="h-full w-full -z-10 absolute"
          style={{
            mask: `url(${tgWallpaper}) center / contain`,
            "background-color": `${hexToRgba("#008080", 0.05)}`,
          }}
        />
        <div style={{ "padding-top": "40px" }}>
          <div>{props.children}</div>;
        </div>
      </div>
      <TabBar />
    </div>
  );
}

function TabBar() {
  return (
    <div class="bg-primary border-t-[1px] border-primary">
      <div class="max-w-screen-xl mx-auto px-4 pt-2 pb-4">
        <div class="flex justify-around items-center">
          <BottomBarLink 
            to={'/tab/try'} 
            title="Try" 
          />
          <BottomBarLink
            to={'/tab/folders'}
            title="Folders"
          />
        </div>
      </div>
    </div>
  );
}

interface BottomBarLinkProps {
  to: string;
  title: string;
}

const BottomBarLink: Component<BottomBarLinkProps> = (props) => {
  const location = useLocation();
  const isActive = () => {
    return location.pathname.concat("/").includes(props.to)
  }

  return (
    <A
      href={props.to}
      class="w-full text-[12px] flex flex-col items-center gap-0.5 cursor-pointer transition-all duration-300 ease-in-out"
    >
      <div
        class={`h-8 w-8 rounded-full transition-all duration-150 ease-in-out ${
          isActive() ? "bg-[#6ab2f2]" : "bg-transparent"
        }`}
      >
        <div
          style={{
            color: isActive()
              ? "#008080"
              : "white",
            padding: isActive() ? "6px" : "4px",
          }}
          class="flex items-center justify-center transition-all duration-150 ease-in-out"
        >
          <div class={`h-6 w-6 ${isActive() ? "text-link" : "text-white"}`}>
            <img src={graphIcon} alt="graph" />
          </div>
        </div>
      </div>
      <span
        class={`font-medium ${isActive() ? "px-2 rounded-2xl text-accent" : ""}`}
      >
        {props.title}
      </span>
    </A>
  );
};