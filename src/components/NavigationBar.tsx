// NPM Packaged
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import Logo from "assets/images/logo-white.png";

export default function NavigationBar() {
  // Properties
  const NOVARE_WEBSITE = "https://novare.se/potential/";

  return (
    <nav id="navigation-bar" className="background-dark">
      <div className="container">
        {/* Logo */}
        <Link className="logo" to="/">
          <img src={Logo} alt="Novare logo with a handwritting overlay" />
        </Link>

        {/* Desktop links */}
        <div className="desktop-links">
          <Link to="/about">About</Link>
          <Link to="/candidates">Meet the candidates</Link>
        </div>

        {/* Parent link */}
        <a className="parent-link" href={NOVARE_WEBSITE} target="_blank">
          Back to Novare Potential
        </a>
      </div>
    </nav>
  );
}
