// Project files
import iSkillSet from "interfaces/iSkillSet";
import "styles/components/ItemSkillSet.sass";

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

  const Items = skills.map((item) => <li>{item}</li>);

  return (
    <article className="item-skill-set">
      <h3>
        {icon} {name}
      </h3>
      <ul>{Items}</ul>
    </article>
  );
}
