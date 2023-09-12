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

  return (
    <nav id="navigation-bar" className="background-dark">
      <div className="container">
        {/* Logo */}
        <div className="red">
          <Link className="logo" to="/">
            <img
              src={LogoWhite}
              alt="Novare logo with a handwritting overlay"
            />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="button">
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </button>
        </div>

        {/* PrimaryLinks */}
        <div className={`green list ${toggleCSS}`}>
          <Link to="/course/frontend">Frontend</Link>
          <Link to="/course/backend">Backend</Link>
          <Link to="/candidates">Candidates</Link>
        </div>

        {/* SecondaryLinks */}
        <div className={`blue list ${toggleCSS}`}>
          <a className="parent-link" href={NOVARE_WEBSITE} target="_blank">
            Back to Novare Potential
          </a>
        </div>
      </div>
    </nav>
  );
}
