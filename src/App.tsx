// NPM Packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Footer from "components/Footer";
import Modal from "components/Modal";
import ScrollToTop from "components/ScrollToTop";
import NavigationBar from "components/NavigationBar";
import DataGraduatedAutumn2021 from "data/graduates-autumn-2021.json";
import About from "pages/about";
import Candidates from "pages/candidates";
import CandidatesGraduated from "pages/candidates-graduated";
import Home from "pages/home";
import Profile from "pages/profile";
import "scripts/font-awesome";
import "styles/style.sass";

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

            {/* Hardcoded routes past iterations */}
            <Route path="/graduates-autumn-2021">
              <CandidatesGraduated data={DataGraduatedAutumn2021} />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
      <Modal />
    </div>
  );
}
