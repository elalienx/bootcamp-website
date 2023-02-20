// Project files
import iSkillSet from "interfaces/iSkillSet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Interface
interface iProps {
  item: iSkillSet;
}

/**
 * This will be re-utilized for the new skills that have the checkmark icon.
 * Then another component will beused for the Swedish level that will behave like the old item skill
 */
export default function ItemSkillSet({ item }: iProps) {
  const { name, icon, skills } = item;

  const Items = skills.map((item) => (
    <li>
      <span className="label">{item}</span>
      <span className="square">
        <FontAwesomeIcon className="icon" icon={["fas", "check"]} />
      </span>
    </li>
  ));

  return (
    <article className="item-skill-set">
      <h3 className="title">
        {icon} {name}
      </h3>
      <ul>{Items}</ul>
    </article>
  );
}
