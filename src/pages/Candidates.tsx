// NPM packages
import { useHistory } from "react-router-dom";

// Project files
import data from "data/candidates.json";
import Item from "components/ItemCandidate";

export default function Candidates() {
  // Properties
  const history = useHistory();

  // Components
  const Items = data.map((item) => <Item key={item.id} item={item} />);

  return (
    <div id="candidates" className="page container">
      <h1>All the candidates</h1>
      <p>
        Learn more about the candidates' skills, education, and experience. Make
        sure to check out their portfolios. Candidates can be recruited through
        Novare Potential on an initial consultancy set up.
      </p>
      <div className="component-items">{Items}</div>
      <button className="button" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}
