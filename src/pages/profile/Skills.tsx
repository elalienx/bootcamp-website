// Project files
import Item from "components/ItemSkill";
import PropsCandidate from "./PropsCandidate";
import "styles/pages/profile/Skills.sass";

export default function Resume({ candidate }: PropsCandidate) {
  const { tech_skills, languages_spoken } = candidate;

  // Components
  const TechItems = tech_skills.map((item, index) => (
    <Item key={index} item={item} />
  ));
  const LanguagesItems = languages_spoken.map((item, index) => (
    <Item key={index} item={item} />
  ));

  return (
    <aside className="skills">
      {/* Tech skills */}
      <h2>Tech skills</h2>
      <ul className="list-skill">{TechItems}</ul>

      {/* Languages */}
      <h2>Languages spoken</h2>
      <ul className="list-skill">{LanguagesItems}</ul>
    </aside>
  );
}
