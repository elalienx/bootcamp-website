// NPM Packages
import { FC } from "react";
import { Link } from "react-router-dom";

// Project files
import iCandidate from "interfaces/iCandidate";
import "styles/components/item-candidate.sass";

// Interface
interface MyProps {
  item: iCandidate;
}

const ItemCandidate: FC<MyProps> = ({ item }) => {
  const { name, url } = item;

  // Properties
  const imageObject = require(`assets/images/candidates/${url}.jpg`);
  const imageFile = imageObject.default;
  const imageDescription = `${name} thumbnail`;

  return (
    <li className="item-candidate">
      <Link to={"/profile/" + url}>
        <img src={imageFile} alt={imageDescription} />
        {name}
      </Link>
    </li>
  );
};

export default ItemCandidate;
