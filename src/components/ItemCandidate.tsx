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
  const { isHired, name, url } = item;

  // Properties
  const imageObject = require(`assets/images/candidates/${url}.jpg`);
  const imageFile = imageObject.default;
  const showIsHired = isHired ? <b>(hired)</b> : "";

  return (
    <Link className="item-candidate" to={"/profile/" + url}>
      <img src={imageFile} alt="Candidate thumbnail" />
      {name} {showIsHired}
    </Link>
  );
}
