// NPM packages
import { useHistory } from "react-router-dom";

// Project files
import PropsCandidate from "./PropsCandidate";

export default function Footer({ candidate }: PropsCandidate) {
  const { portofolio_url } = candidate;

  // Properties
  const history = useHistory();

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
      <button className="link" onClick={() => history.goBack()}>
        Go back
      </button>
    </footer>
  );
}
