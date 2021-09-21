// NPM Packages
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

// Project files
import iTechnology from "interfaces/iTechnology";
import "./ItemTechnology.sass";

// Interface
interface MyProps {
  item: iTechnology;
}

const ItemTechnology: FC<MyProps> = ({ item }) => {
  const { name, description, icon } = item;

  return (
    <li className="item-technology">
      <div className="circle">
        <FontAwesomeIcon icon={["fab", icon as IconName]} />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default ItemTechnology;
