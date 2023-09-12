// Node modules
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Footer from "components/Footer";
import NavigationBar from "components/NavigationBar";
import ScrollToTop from "components/ScrollToTop";
import Candidates from "pages/Candidates";
import Course from "pages/Course";
import Home from "pages/Home";
import Profile from "pages/Profile";
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
            <Route path="/course/:id" component={Course} />
            <Route path="/candidates" component={Candidates} />
            <Route path="/profile/:url" component={Profile} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}
