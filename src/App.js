
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListeBlagues from "./pages/ListeBlagues";
import ListeDevinettes from "./pages/ListeDevinettes";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/liste-devinettes" exact component={ListeDevinettes} />
          <Route path="/liste-blagues" exact component={ListeBlagues} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
