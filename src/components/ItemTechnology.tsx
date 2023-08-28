// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

// Project files
import iTechnology from "interfaces/iTechnology";

// Interface
interface iProps {
  item: iTechnology;
}

export default function ItemTechnology({ item }: iProps) {
  const { name, description, icon_prefix, icon_name } = item;

  return (
    <article className="item-technology">
      <div className="circle">
        <FontAwesomeIcon
          icon={[icon_prefix as IconPrefix, icon_name as IconName]}
        />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
