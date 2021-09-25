// Project files
import Item from "components/ItemProject";
import data from "data/projects.json";
import "styles/pages/about/Projects.sass";

export default function Technologies() {
  // Components
  const Items = data.map((item) => <Item key={item.id} item={item} />);

  return (
    <section className="projects">
      <div className="container">
        <h2>Projects</h2>
        {/* Desktop items align to a grid */}
        <div className="component-items desktop-items">{Items}</div>
      </div>

      {/* Mobile projects scroll horizontally */}
      <div className="component-items mobile-items">{Items}</div>
    </section>
  );
}
