// NPM Packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import ScrollToTop from "components/ScrollToTop";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import About from "./pages/about";
import Candidates from "./pages/candidates";
import Home from "./pages/home";
import Profile from "./pages/profile";
import "./scripts/font-awesome";
import "./styles/style.sass";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/candidates" component={Candidates} />
            <Route path="/profile/:url" component={Profile} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}
