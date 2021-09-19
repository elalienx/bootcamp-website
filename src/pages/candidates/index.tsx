// NPM Packaged
import { useHistory } from "react-router-dom";
import data from "data/candidates.json";
import ItemCandidate from "components/ItemCandidate";

export default function Candidates() {
  // Properties
  const history = useHistory();

  console.log(data);

  // Components
  const CandidateItems = data.map((item) => (
    <ItemCandidate key={item.id} item={item} />
  ));

  return (
    <div id="candidates" className="container">
      <h1>All the candidates</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <ul id="bar">{CandidateItems}</ul>
      <button
        className="button"
        onClick={() => {
          history.goBack();
        }}
      >
        Go back
      </button>
    </div>
  );
}
