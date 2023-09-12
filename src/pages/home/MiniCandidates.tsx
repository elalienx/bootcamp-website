// Node modules
import { Link } from "react-router-dom";

// Project files
import Image from "assets/images/candidates.jpg";
import Item from "components/ItemCandidate";
import iCandidate from "interfaces/iCandidate";
import randomCandidates from "./randomCandidates";

interface iProps {
  candidates: iCandidate[];
}

export default function MiniCandidates({ candidates }: iProps) {
  // Properties
  const size = 3;
  const myCandidates = randomCandidates(candidates, size);

  // Components
  const Items = myCandidates.map((item) => <Item key={item.id} item={item} />);
  const InformationText = (
    <p>⚠️ We don't have candidates to present, wait until we end the course.</p>
  );

  return (
    <section className="candidates background-dark">
      <div className="container">
        <div className="content">
          <h2>Meet the candidates</h2>
          <p>
            Learn more about the candidates' skills, education, and experience.
            Make sure to check out their portfolios.
          </p>
          <div className="component-items">
            {myCandidates.length < size ? InformationText : Items}
          </div>
          <Link className="button" to="/candidates">
            View all candidates
          </Link>
        </div>
        <img
          className="support-picture"
          src={Image}
          alt="2 women sharing a single laptop"
        />
      </div>
    </section>
  );
}
