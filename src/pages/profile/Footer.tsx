// NPM packages
import { Link } from "react-router-dom";

// Project files
import iCandidate from "interfaces/iCandidate";

// Interface refactor and make it shareable
interface Props {
  candidate: iCandidate;
}

export default function Footer({ candidate }: Props) {
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
