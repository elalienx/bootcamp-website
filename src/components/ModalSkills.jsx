// Project files
import { useModal } from "state/ModalProvider";
import ItemSkill from "./ItemSkill";
import "styles/components/ModalSkills.sass";

export default function ModalSkills() {
  // Global state
  const { setModal } = useModal();

  // Properties
  const ITEMS = [
    {
      name: "Initial",
      rating: 1,
      description: "Familiar with the language.",
    },
    {
      name: "Basic",
      rating: 2,
      description:
        "Basic knowledge (Able to write simple programs, using the most common language features. Able to use the main tools used to develop, build, and test programs in the language. Able to understand parts of existing code bases, and make small changes to them.)",
    },
    {
      name: "Intermediate",
      rating: 3,
      description:
        "Intermediate (got work experience that needs to be updated)",
    },
    {
      name: "Advanced",
      rating: 4,
      description:
        "Advanced (Able to develop larger programs in the language. Competent at using most language features comfortably. Able to structure large programs so that they become easier to understand and manage. Able to design and document public APIs with a clear responsibility. Able to design entities so that they become testable and write tests for them.)",
    },
    {
      name: "Senior",
      rating: 5,
      description:
        "Senior (Able to design, develop, test, and maintain very large programs in the language. Highly competent at using virtually all language features. Competent at carrying out significant refactoring of large code bases. Highly competent at creating public APIs that are flexible, enabling composition and abstraction. Highly competent at testing at all levels, including integration testing.)",
    },
  ];
  return (
    <div className="modal-skills">
      <h2>Definition of technical skills scale</h2>
      <h3>By Associate Professor Philipp Haller - KTH</h3>
      <ItemSkill item={ITEMS[0]} />
      <p>{ITEMS[0].description}</p>
      <ItemSkill item={ITEMS[1]} />
      <p>{ITEMS[1].description}</p>
      <ItemSkill item={ITEMS[2]} />
      <p>{ITEMS[2].description}</p>
      <ItemSkill item={ITEMS[3]} />
      <p>{ITEMS[3].description}</p>
      <ItemSkill item={ITEMS[4]} />
      <p>{ITEMS[4].description}</p>

      <button className="button" onClick={() => setModal(null)}>
        Close
      </button>
    </div>
  );
}
