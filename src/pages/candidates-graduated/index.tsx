// NPM packages
import { useHistory } from "react-router-dom";

// Project files
import Item from "components/ItemCandidate";
import iCandidate from "interfaces/iCandidate";

// Interfaces
interface iProps {
  data: iCandidate[];
}

export default function CandidatesGraduated({ data }: iProps) {
  // Properties
  const history = useHistory();

  // Components
  const Items = data.map((item) => <Item key={item.id} item={item} />);

  return (
    <div id="candidates" className="container">
      <h1>Officially graduated candidates</h1>
      <p>Here is the list of the candidates graduated in this iteration.</p>
      <div className="component-items">{Items}</div>
      <button className="button" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}
