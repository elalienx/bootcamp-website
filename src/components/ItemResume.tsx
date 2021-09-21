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
      <p className="period">{period}</p>
      <div className="content">
        <span className="title">{title}</span>
        <span className="institution">{institution}</span>
        <span className="city_and_country">{city_and_country}</span>
      </div>
    </li>
  );
};

export default ItemProject;
