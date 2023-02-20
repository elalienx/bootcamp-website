// Project files
import iSkill from "interfaces/iSkill";
import "styles/components/ItemSkill.sass";

// Interface
interface iProps {
  item: iSkill;
}

/**
 * This will be re-utilized for the new skills that have the checkmark icon.
 * Then another component will beused for the Swedish level that will behave like the old item skill
 */
export default function ItemSkill({ item }: iProps) {
  const { name } = item;

  return (
    <article className="item-skill">
      <span className="label">{name}</span>
    </article>
  );
}
