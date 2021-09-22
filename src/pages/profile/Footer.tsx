// NPM packages
import { Link } from "react-router-dom";

// Project files
import PropsCandidate from "./PropsCandidate";

export default function Footer({ candidate }: PropsCandidate) {
  const { portofolio_url } = candidate;

  return (
    <footer className="container">
      <a
        className="button"
        href={portofolio_url}
        target="_blank"
        rel="noreferrer"
      >
        View portfolio
      </a>
      <br />
      <Link to="/candidates">View other candidates</Link>
    </footer>
  );
}
