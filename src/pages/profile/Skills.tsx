// Project files
import Item from "components/ItemSkill";
import PropsCandidate from "./PropsCandidate";
import ModalSkills from "components/ModalSkills";
import "styles/pages/profile/Skills.sass";
import { useModal } from "state/ModalProvider";

export default function Resume({ candidate }: PropsCandidate) {
  const { tech_skills, languages_spoken } = candidate;

  // Global state
  const { setModal } = useModal();

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
      <small>
        The skills of the candidate that will updated after each course to
        update the existing knowledge and add the new skills learned during the
        course.
      </small>
      <br />
      <br />
      {/* @ts-ignore */}
      <button className="button" onClick={() => setModal(<ModalSkills />)}>
        More info
      </button>
      <div className="component-items">{TechItems}</div>

      {/* Languages */}
      <h2>Languages spoken</h2>
      <div className="component-items">{LanguagesItems}</div>
    </aside>
  );
}
