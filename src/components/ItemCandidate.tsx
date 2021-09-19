// NPM Packages
import { FC } from "react";
import { Link } from "react-router-dom";

// Project files
import iCandidate from "interfaces/iCandidate";

// Interface
interface MyProps {
  item: iCandidate;
}

const ItemCandidate: FC<MyProps> = (props) => {
  const { name, url } = props.item;

  return (
    <li>
      <Link to={"/profile/" + url}>
        <img src="" alt="Profile picture" />
        {name}
      </Link>
    </li>
  );
};

export default ItemCandidate;
