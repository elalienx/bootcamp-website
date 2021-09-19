// NPM Packages
import { FC } from "react";

// Project files
import iTechnology from "interfaces/iTechnology";
import "./ItemTechnology.sass";

// Interface
interface MyProps {
  item: iTechnology;
}

const ItemTechnology: FC<MyProps> = ({ item }) => {
  const { name, description } = item;

  return (
    <li className="item-technology">
      <div className="circle">@</div>
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default ItemTechnology;
