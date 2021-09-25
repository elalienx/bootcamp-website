// NPM Packaged
import { Link } from "react-router-dom";

// Project files
import Logo from "assets/images/logo-white.png";
import "styles/components/NavigationBar.sass";

export default function NavigationBar() {
  return (
    <nav id="navigation-bar">
      <div className="container">
        {/* Company logo */}
        <Link to="/">
          <img src={Logo} alt="Novare logo with a handwritting overlay" />
        </Link>

        {/* Desktop links */}
        <div className="desktop-links">
          <Link to="/about">About</Link>
          <Link to="/candidates">Meet the candidates</Link>
        </div>
      </div>
    </nav>
  );
}
