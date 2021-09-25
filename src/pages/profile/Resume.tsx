// Project files
import Item from "components/ItemResume";
import PropsCandidate from "./PropsCandidate";

export default function Resume({ candidate }: PropsCandidate) {
  const { education, work_experience } = candidate;

  // Components
  const EducationItems = education.map((item, index) => (
    <Item key={index} item={item} />
  ));
  const WorkItems = work_experience.map((item, index) => (
    <Item key={index} item={item} />
  ));

  return (
    <section className="resume">
      {/* Education */}
      <h2>Education</h2>
      <div className="component-items">{EducationItems}</div>

      {/* Work */}
      <h2>Work experience</h2>
      <div className="component-items">{WorkItems}</div>
    </section>
  );
}
