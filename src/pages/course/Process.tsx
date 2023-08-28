// Project files
import Item from "components/ItemTechnology";
import iTechnology from "interfaces/iTechnology";

interface iProps {
  data: iTechnology[];
}

export default function Process({ data }: iProps) {
  // Components
  const Items = data.map((item) => <Item key={item.id} item={item} />);

  return (
    <section className="technologies">
      <div className="container">
        <h2>Process</h2>
        <p>
          Before we even start teaching about new framework features, we take
          our time explaining how to organize projects. Here are the steps for
          each project that the students must deliver.
        </p>
        <div className="component-items">{Items}</div>
      </div>
    </section>
  );
}
