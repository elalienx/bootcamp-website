// NPM Packages
import { FC } from "react";

// Project files
import iTechnology from "interfaces/iTechnology";
import "./ItemProject.sass";

// Interface
interface MyProps {
  item: iTechnology;
}

const ItemTechnology: FC<MyProps> = ({ item }) => {
  const { name, description, icon } = item;

  return (
    <li className="item-project">
      <span className="icon">@{icon}@</span>
      <h3>{name}</h3>
      <small>{description}</small>
    </li>
  );
};

export default ItemTechnology;
