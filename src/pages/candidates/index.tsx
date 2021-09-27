// NPM packages
import { useHistory } from "react-router-dom";
import data from "data/candidates.json";
import Item from "components/ItemCandidate";
import "styles/pages/candidates/Candidates.sass";

export default function Candidates() {
  // Properties
  const history = useHistory();

  // Components
  const Items = data.map((item) => <Item key={item.id} item={item} />);

  return (
    <div id="candidates" className="container">
      <h1>All the candidates</h1>
      <p>
        Here is the full list of the students taking the 2021 Front End Course.
        Feel free to explore all the profiles to discover the unique set of
        skills each student can bring to your company.
      </p>
      <div className="component-items">{Items}</div>
      <button className="button" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}
