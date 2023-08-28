// Project files
import Item from "components/ItemProject";
import iProject from "interfaces/iProject";

interface iProps {
  data: iProject[];
}

export default function Technologies({ data }: iProps) {
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
