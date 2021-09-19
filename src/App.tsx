// NPM Packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import "./styles/style.sass";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/About";
import Candidates from "./pages/Candidates";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/candidates" component={Candidates} />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
