// NPM Packages
import { FC } from "react";

// Project files
import iSkill from "interfaces/iSkill";
import "styles/components/ItemSkill.sass";

// Interface
interface Props {
  item: iSkill;
}

const ItemSkill: FC<Props> = ({ item }) => {
  const { name, rating } = item;

  return (
    <li className="item-skill">
      <span className="label">{name}</span>
      <div className="boxes">
        <div className={rating >= 1 ? "full" : ""}></div>
        <div className={rating >= 2 ? "full" : ""}></div>
        <div className={rating >= 3 ? "full" : ""}></div>
        <div className={rating >= 4 ? "full" : ""}></div>
        <div className={rating >= 5 ? "full" : ""}></div>
      </div>
    </li>
  );
};

export default ItemSkill;
