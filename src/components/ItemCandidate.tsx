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
  const { name, url } = item;

  // Properties
  const imageObject = require(`assets/images/candidates/${url}.jpg`);
  const imageFile = imageObject.default;

  return (
    <Link className="item-candidate" to={"/profile/" + url}>
      <img src={imageFile} alt="Candidate thumbnail" />
      {name}
    </Link>
  );
}
