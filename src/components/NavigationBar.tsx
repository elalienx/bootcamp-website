// Node modules
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import LogoWhite from "assets/images/logo-white.png";

export default function NavigationBar() {
  // Local state
  const [isOpen, setIsOpen] = useState(false);

  // Properties
  const NOVARE_WEBSITE = "https://novare.se/potential/";
  const toggleCSS = isOpen ? "show" : "hide";
  const logoAlt = "Novare logo with a handwritting overlay";

  return (
    <nav id="navigation-bar" className="background-dark">
      <div className="container">
        {/* Logo & mobile menu button */}
        <div className="primary">
          <Link to="/">
            <img className="logo" src={LogoWhite} alt={logoAlt} />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="button">
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </button>
        </div>

        {/* Links */}
        <div className={`secondary ${toggleCSS}`}>
          <Link to="/course/frontend">Frontend</Link>
          <Link to="/course/backend">Backend</Link>
          <Link to="/candidates">Candidates</Link>
          <a className="parent-link" href={NOVARE_WEBSITE} target="_blank">
            Back to Novare Potential
          </a>
        </div>
      </div>
    </nav>
  );
}
