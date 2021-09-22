// NPM Packages
import { FC } from "react";

// Project files
import iResume from "interfaces/iResume";
import "styles/components/ItemResume.sass";

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
        <p className="institution">{institution}</p>
        <p className="city-and-country">{city_and_country}</p>
      </div>
    </li>
  );
};

export default ItemProject;
