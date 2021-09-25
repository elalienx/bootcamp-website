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
      <header>
        <div className="content">
          <h1>All the candidates</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </header>
      <ul>{Items}</ul>
      <button className="button" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}
