// Project files
import { useModal } from "state/ModalProvider";
import ItemSkill from "./ItemSkill";
import data from "data/skillsRatings.json";
import "styles/components/ModalSkills.sass";

export default function ModalSkills() {
  // Global state
  const { setModal } = useModal();

  // Components
  const Skills = data.map((item) => (
    <article key={item.rating}>
      <ItemSkill item={item} />
      <p>{item.description}</p>
    </article>
  ));

  return (
    <div className="modal-skills">
      <h2>Definition of technical skills scale</h2>
      <h3>By Associate Professor Philipp Haller - KTH</h3>

      {Skills}

      <button className="button" onClick={() => setModal(null)}>
        Close
      </button>
    </div>
  );
}
