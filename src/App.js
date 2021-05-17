import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import isAuthenticated from "./utils/isAuthenticated";
import routes from "./routes";
import { GlobalProvider } from "./context/Provider";

const RenderRoute = (route) => {
  const history = useHistory();

  document.title = route.title || "Portal Cola Labo";

  if (route.needsAuth && isAuthenticated) {
    history.push("/");
  }
  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Switch>
          {routes.map((route, index) => (
            <RenderRoute {...route} key={index} />
          ))}
        </Switch>
      </GlobalProvider>
    </Router>
  );
}

export default App;
