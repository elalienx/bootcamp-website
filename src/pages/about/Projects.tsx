// Project files
import Item from "components/ItemProject";
import data from "data/projects.json";
import "styles/pages/about/Projects.sass";

export default function Technologies() {
  // Components
  const Items = data.map((item) => <Item key={item.id} item={item} />);

  return (
    <section className="projects container">
      <h2>Projects</h2>
      <ul>{Items}</ul>
    </section>
  );
}
