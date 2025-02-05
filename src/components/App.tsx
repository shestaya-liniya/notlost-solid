import { Navigate, Route, Router } from "@solidjs/router";
import TabBarLayout from "./TabBarLayout.jsx";
import Folders from "@/pages/Folders.jsx";

export default function App() {
  return (
    <Router>
      <Route path="/tab" component={TabBarLayout}>
        <Route path="/folders" component={Folders} />
        <Route path="/try" component={() => <div>Try Page</div>} />
      </Route>
      <Route path="*" component={() => <Navigate href="/tab/folders" />} />
    </Router>
  );
}
