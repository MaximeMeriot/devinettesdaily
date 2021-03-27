
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListeDevinettes from "./pages/ListeDevinettes";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MeilleuresDevinettes from "./pages/MeilleuresDevinettes";
import DeposerDevinette from "./pages/DeposerDevinette";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/liste-devinettes" exact component={ListeDevinettes} />
          <Route path="/meilleures-devinettes" exact component={MeilleuresDevinettes}/>
          <Route path="/deposer-une-devinette" exact component={DeposerDevinette}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
