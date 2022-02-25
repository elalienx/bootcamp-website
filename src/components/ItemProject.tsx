// Project files
import iProject from "interfaces/iProject";
import "styles/components/ItemProject.sass";

// Interface
interface iProps {
  item: iProject;
}

export default function ItemProject({ item }: iProps) {
  const { name, description, image_name } = item;

  // Properties
  const imageObject = require(`assets/images/projects/${image_name}.jpg`);
  const imageFile = imageObject.default;

  return (
    <article className="item-project">
      <img src={imageFile} alt="Project thumbnail" />
      <h3>{name}</h3>
      <small>{description}</small>
    </article>
  );
}
