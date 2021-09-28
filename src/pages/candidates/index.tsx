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
        Here you can learn more about the candidates's skills, previous work
        life experience, education and personality. Make sure to check out their
        portfolios.
      </p>
      <div className="component-items">{Items}</div>
      <button className="button" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}
