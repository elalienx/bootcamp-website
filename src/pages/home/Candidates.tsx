// NPM Packaged
import { Link } from "react-router-dom";

// Project files
import "./Candidates.sass";

export default function Candidates() {
  return (
    <section className="candidates container">
      <h2>Meet the candidates</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <ul>
        <li>Armin Diszar</li>
        <li>Clement Cardona</li>
        <li>Dakouri Ikori</li>
      </ul>
      <Link className="button" to="/candidates">
        View all candidates
      </Link>
    </section>
  );
}
