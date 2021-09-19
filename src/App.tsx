// NPM Packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import "./styles/style.sass";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import About from "./pages/about";
import Candidates from "./pages/candidates";
import Home from "./pages/home";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/candidates" component={Candidates} />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
