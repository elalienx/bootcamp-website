// NPM Packages
import { FC } from "react";

// Project files
import iSkill from "interfaces/iSkill";
import "./ItemSkill.sass";

// Interface
interface Props {
  item: iSkill;
}

const ItemProject: FC<Props> = ({ item }) => {
  const { name, rating } = item;

  return (
    <li className="item-skill">
      <span>{name}</span>
      {/* Think about do this programatically */}
      <div className="cubes">@{rating}@</div>
    </li>
  );
};

export default ItemProject;
