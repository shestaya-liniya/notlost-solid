import { Navigate, Route, Router } from '@solidjs/router';
import TabBarLayout from './TabBarLayout.jsx';

export default function App() {
  return (
    <Router>
      <Route path="/tab" component={TabBarLayout}>
          <Route 
            path="/folders" 
            component={() => <div>Folders Page</div>} 
          />
          <Route 
            path="/try" 
            component={() => <div>Try Page</div>} 
          />
        </Route>
      <Route path="*" component={() => <Navigate href="/tab/folders"/>}/>
    </Router>
  );
}
