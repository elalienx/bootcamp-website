// Project files
import Item from "components/ItemTechnology";
import data from "data/technologies.json";

export default function Technologies() {
  // Components
  const Items = data.map((item) => <Item key={item.id} item={item} />);

  return (
    <section className="technologies">
      <div className="container">
        <h2>Tech stack</h2>
        <p>These are the technologies that we teach during the course.</p>
        <div className="component-items">{Items}</div>
      </div>
    </section>
  );
}
