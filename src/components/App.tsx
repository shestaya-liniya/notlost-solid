import { Navigate, Route, Router } from "@solidjs/router";
import TabBarLayout from "./TabBarLayout.jsx";
import Folders from "@/pages/Folders.jsx";
import { createSignal, JSX } from "solid-js";

export default function App() {
  const [activeTab, setActiveTab] = createSignal<string>("folders");

  const isFoldersTabActive = () => activeTab() === "folders";
  const isTryTabActive = () => activeTab() === "try";

  return (
    <Router>
      <Route
        path="/tab"
        component={() => (
          <TabBarLayout activeTab={activeTab()} setActiveTab={setActiveTab}>
            <div class="relative w-screen h-full overflow-hidden">
              <TabTransition
                direction="toRight"
                isActive={isFoldersTabActive()}
              >
                <Folders />
              </TabTransition>
              <TabTransition direction="toLeft" isActive={isTryTabActive()}>
                <Folders />
              </TabTransition>
            </div>
          </TabBarLayout>
        )}
      />
      <Route path="*" component={() => <Navigate href="/tab" />} />
    </Router>
  );
}

function TabTransition(props: {
  children: JSX.Element;
  direction: "toLeft" | "toRight";
  isActive: boolean;
}) {
  return (
    <div
      class={`w-screen absolute top-0 left-0 transition-all ease ${props.isActive ? "duration-300 translate-x-0 scale-100" : `duration-300 ${props.direction === "toRight" ? "translate-x-full" : "-translate-x-full"} -z-10 opacity-0 scale-90`}`}
    >
      {props.children}
    </div>
  );
}
