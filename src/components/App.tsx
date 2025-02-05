import { Navigate, Route, Router } from "@solidjs/router";
import TabBarLayout from "./TabBarLayout.jsx";
import Folders from "@/pages/Folders.jsx";
import { createSignal } from "solid-js";

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
              <div
                class={`w-screen absolute top-0 left-0 transition-all ease ${isFoldersTabActive() ? "duration-300 translate-x-0" : "duration-300 translate-x-full -z-10 opacity-0"}`}
              >
                <Folders />
              </div>
              <div
                class={`w-screen absolute top-0 left-0 transition-all ease ${isTryTabActive() ? "duration-300 translate-x-0" : "duration-300 -translate-x-full -z-10 opacity-0"}`}
              >
                <Folders />
              </div>
            </div>
          </TabBarLayout>
        )}
      />
      <Route path="*" component={() => <Navigate href="/tab" />} />
    </Router>
  );
}
