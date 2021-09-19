// NPM Packages
import { FC } from "react";

// Project files
import iProject from "interfaces/iProject";
import "./ItemCandidate.sass";

// Interface
interface MyProps {
  item: iProject;
}

const ItemProject: FC<MyProps> = ({ item }) => {
  const { name, description, image_name } = item;

  // Properties
  const imageObject = require(`assets/images/projects/${image_name}.jpg`);
  const imageFile = imageObject.default;

  return (
    <li className="item-project">
      <img src={imageFile} alt="Project thumbnail" />
      <h3>{name}</h3>
      <small>{description}</small>
    </li>
  );
};
