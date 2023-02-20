// NPM Packages
import { Link } from "react-router-dom";

// Project files
import iCandidate from "interfaces/iCandidate";
import "styles/components/ItemCandidate.sass";

// Interface
interface iProps {
  item: iCandidate;
}

export default function ItemCandidate({ item }: iProps) {
  const { url, hired, graduated, name } = item;

  // Properties
  const imageObject = require(`assets/images/candidates/${url}.jpg`);
  const showHired = hired ? <b>(Hired)</b> : "";
  const showGraduated = graduated ? <b>(Graduated)</b> : "";

  return (
    <Link className="item-candidate" to={"/profile/" + url}>
      <img src={imageObject} alt="Candidate thumbnail" />
      {name} {showHired} {showGraduated}
    </Link>
  );
}
