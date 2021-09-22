// NPM Packaged
import { Link } from "react-router-dom";

// Project files
import "./Candidates.sass";
import data from "data/candidates.json";
import iCandidate from "interfaces/iCandidate";
import ItemCandidate from "components/ItemCandidate";
import Image from "assets/images/candidates.jpg";

export default function Candidates() {
  // Properties
  const candidates = randomCandidates(data, 3);

  // Methods
  function randomCandidates(array: iCandidate[], length: number): iCandidate[] {
    // safeguard
    if (array.length < length) {
      alert("You are trying to get more candidates than available");
      return [];
    }

    const clonedArray = [...array];
    const shuffled = clonedArray.sort(() => 0.5 - Math.random());
    const randomCandidates: iCandidate[] = shuffled.slice(0, length);

    return randomCandidates;
  }

  // Components
  const CandidateItems = candidates.map((item) => (
    <ItemCandidate key={item.id} item={item} />
  ));

  return (
    <section className="candidates">
      <div className="container">
        <div className="content">
          <h2>Meet the candidates</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <ul id="foo">{CandidateItems}</ul>
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
