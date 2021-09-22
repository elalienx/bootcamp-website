// Project files
import Item from "components/ItemSkill";
import PropsCandidate from "./PropsCandidate";

export default function Resume({ candidate }: PropsCandidate) {
  // Components
  const TechItems = candidate.tech_skills.map((item, index) => (
    <Item key={index} item={item} />
  ));
  const LanguagesItems = candidate.languages_spoken.map((item, index) => (
    <Item key={index} item={item} />
  ));

  return (
    <section className="skills container">
      {/* Tech skills */}
      <h2>Tech skills</h2>
      <ul className="list-skill">{TechItems}</ul>

      {/* Languages */}
      <h2>Languages spoken</h2>
      <ul className="list-skill">{LanguagesItems}</ul>
    </section>
  );
}
