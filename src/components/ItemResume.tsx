// NPM Packages
import { FC } from "react";

// Project files
import iResume from "interfaces/iResume";
import "./ItemResume.sass";

// Interface
interface Props {
  item: iResume;
}

const ItemProject: FC<Props> = ({ item }) => {
  const { period, title, institution, city_and_country } = item;

  return (
    <li className="item-resume">
      <span className="period">{period}</span>
      <div className="content">
        <h3 className="title">{title}</h3>
        <span className="institution">{institution}</span>
        <span className="city_and_country">{city_and_country}</span>
      </div>
    </li>
  );
};

export default ItemProject;
