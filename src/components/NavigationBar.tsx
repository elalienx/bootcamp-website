// Node modules
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Project files
import Logo from "assets/images/logo-white.png";
import MobileMenu from "components/MobileMenu";
import { useModal } from "state/ModalProvider";

export default function NavigationBar() {
  // Global state
  const { setModal } = useModal();

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
          <Link to="/course/frontend">Frontend</Link>
          <Link to="/course/backend">Backend</Link>
          <Link to="/candidates">Candidates</Link>
        </div>

        {/* Parent link */}
        <a className="parent-link" href={NOVARE_WEBSITE} target="_blank">
          Back to Novare Potential
        </a>

        {/* Mobile menu button */}
        <button onClick={()=> setModal(MobileMenu)}>
          <FontAwesomeIcon className="icon" icon={["fas", "bars"]} />
        </button>
      </div>
    </nav>
  );
}
