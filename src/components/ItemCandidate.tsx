// NPM Packages
import { FC } from "react";
import { Link } from "react-router-dom";

// Project files
import iCandidate from "interfaces/iCandidate";
import "./ItemCandidate.sass";

// Interface
interface Props {
  item: iCandidate;
}

const ItemCandidate: FC<Props> = ({ item }) => {
  const { name, url } = item;

  // Properties
  const imageObject = require(`assets/images/candidates/${url}.jpg`);
  const imageFile = imageObject.default;

  return (
    <li className="item-candidate">
      <Link to={"/profile/" + url}>
        <img src={imageFile} alt="Candidate thumbnail" />
        {name}
      </Link>
    </li>
  );
};

export default ItemCandidate;
