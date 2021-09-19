// Project files
import "./Candidates.sass";

export default function Candidates() {
  return (
    <section className="candidates container">
      <h2>Meet the candidates</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <ul>
        <li>Armin Diszar</li>
        <li>Clement Cardona</li>
        <li>Dakouri Ikori</li>
      </ul>
      <button className="button" disabled>
        View all candidates
      </button>
    </section>
  );
}
