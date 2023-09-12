// Node modules
import { useHistory } from "react-router-dom";

// Project files
import data from "data/candidates.json";
import Item from "components/ItemCandidate";

export default function Candidates() {
  // Global state
  const history = useHistory();

  // Properties
  const candidatesFrontend = data.filter((item) => item.course === "frontend");
  const candidatesBackend = data.filter((item) => item.course === "backend");

  // Components
  const ItemsFrontend = candidatesFrontend.map((item) => (
    <Item key={item.id} item={item} />
  ));
  const ItemsBackend = candidatesBackend.map((item) => (
    <Item key={item.id} item={item} />
  ));

  return (
    <div id="candidates" className="page container">
      <h1>All the candidates</h1>
      <p>
        Learn more about the candidates' skills, education, and experience. Make
        sure to check out their portfolios. Candidates can be recruited through
        Novare Potential on an initial consultancy set up.
      </p>

      <h2>Frontend Candidates</h2>
      <div className="component-items">{ItemsFrontend}</div>

      <h2>Backend Candidates </h2>
      <div className="component-items">{ItemsBackend}</div>

      <button className="button" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}
