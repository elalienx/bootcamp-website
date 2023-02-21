// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

// Project files
import iSkillSet from "interfaces/iSkillSet";

// Interface
interface iProps {
  item: iSkillSet;
}

/**
 * ItemTechnology.tsx has the solution to put the dynamic icon inside the header
 * using TypeScript props
 */
export default function ItemSkillSet({ item }: iProps) {
  const { name, icon_prefix, icon_name, skills } = item;

  const Items = skills.map((item, index) => (
    <li key={index}>
      <span className="label">{item}</span>
      <span className="square">
        <FontAwesomeIcon className="icon" icon={["fas", "check"]} />
      </span>
    </li>
  ));

  return (
    <article className="item-skill-set">
      <h3 className="title">
        <FontAwesomeIcon
          icon={[icon_prefix as IconPrefix, icon_name as IconName]}
        />
        {name}
      </h3>
      <ul>{Items}</ul>
    </article>
  );
}
