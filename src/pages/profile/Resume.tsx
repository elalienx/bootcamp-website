// Project files
import iCandidate from "interfaces/iCandidate";
import Item from "components/ItemResume";

// Interface refactor and make it shareable
interface Props {
  candidate: iCandidate;
}

export default function Resume({ candidate }: Props) {
  // Components
  const EducationItems = candidate.education.map((item, index) => (
    <Item key={index} item={item} />
  ));
  const WorkItems = candidate.work_experience.map((item, index) => (
    <Item key={index} item={item} />
  ));

  return (
    <section className="resume container">
      {/* Education */}
      <h2>Education</h2>
      <ul className="list-resume">{EducationItems}</ul>

      {/* Work */}
      <h2>Work experience</h2>
      <ul className="list-resume">{WorkItems}</ul>
    </section>
  );
}
