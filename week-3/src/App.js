import './App.css';
import Characters from "./pages/Characters/index";
import CharacterDetail from "./pages/CharacterDetail/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './style.css';

function App() {
  return (
    <Router>
        <Switch>
          <main>
            <Route exact path="/" component={Characters} />
            <Route exact path="/character/:id" component={CharacterDetail} />
          </main>
        </Switch>
    </Router>
  );
}

export default App;
