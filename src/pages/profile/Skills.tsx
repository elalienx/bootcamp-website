// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

// Project files
import ItemSkill from "components/ItemSkill";
import iSkillSet from "interfaces/iSkillSet";

interface iProps {
  item: iSkillSet[];
}

export default function Skills({ item }: iProps) {
  // Components
  const ColumnWithSkills = item.map((item) => (
    <article className="column-with-skills">
      <h3 className="title">{SkillHeader(item)}</h3>
      <ul>{SkillList(item.skills)}</ul>
    </article>
  ));

  // Methods
  function SkillHeader(item: iSkillSet) {
    const iconPrefix = item.icon_prefix as IconPrefix;
    const iconName = item.icon_name as IconName;

    return (
      <>
        <FontAwesomeIcon className="icon" icon={[iconPrefix, iconName]} />
        {item.name}
      </>
    );
  }

  function SkillList(items: string[]) {
    const Items = items.map((item, index) => (
      <ItemSkill key={index} name={item} />
    ));

    return <>{Items}</>;
  }

  return (
    <section className="skills">
      <div className="container">
        <h2>Unique tech skills</h2>
        <div className="grid">{ColumnWithSkills}</div>
      </div>
    </section>
  );
}
