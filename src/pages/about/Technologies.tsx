// Project files
import Item from "components/ItemTechnology";
import data from "data/technologies.json";
import "./Technologies.sass";

export default function Technologies() {
  // Components
  const Items = data.map((item) => <Item key={item.id} item={item} />);

  return (
    <section className="technologies container">
      <h2>Tech stack</h2>
      <ul>{Items}</ul>
    </section>
  );
}
