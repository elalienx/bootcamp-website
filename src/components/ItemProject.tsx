// Project files
import iProject from "interfaces/iProject";


// Interface
interface iProps {
  item: iProject;
}

export default function ItemProject({ item }: iProps) {
  const { name, description, image_name } = item;

  // Properties
  const imageObject = require(`assets/images/projects/${image_name}.jpg`);

  return (
    <article className="item-project">
      <img src={imageObject} alt="Project thumbnail" />
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
}
