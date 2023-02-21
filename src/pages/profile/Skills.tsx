// Project files
import ItemSkillSet from "components/ItemSkillSet";
import iSkillSet from "interfaces/iSkillSet";

interface iProps {
  item: iSkillSet[];
}

export default function Skills({ item }: iProps) {
  // Components
  const ItemsSkillSet = item.map((item, index) => (
    <ItemSkillSet key={index} item={item} />
  ));

  return (
    <section className="skills">
      <div className="container">
        <h2>Unique tech skills</h2>
        <div className="grid">{ItemsSkillSet}</div>
      </div>
    </section>
  );
}
