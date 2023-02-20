// NPM packages
import { useParams } from "react-router-dom";

// Project files
import data from "data/candidates.json";

// Interface
type PropParams = {
  url: string;
};

export default function Profile() {
  // Properties
  const { url } = useParams<PropParams>();
  const candidate = data.find((item) => item.url === url);

  // safeguard
  if (candidate === undefined) return <p>No candidate found</p>;

  return (
    <div id="profile">
      <header className="hero">
        <h1>
          Hi I'm <br />
          {candidate.name}
        </h1>
        <p>{candidate.about}</p>
        {/* Swedish level component goes here */}
        <span>Swedish level: {candidate.swedish_level}</span>
      </header>
      <section className="skills">
        <h2>Unique tech skills</h2>
        <div className="grid">{/* {ItemSkills} */}</div>
      </section>
      <section className="blockquote">
        <h2>What makes {candidate.pronoun} stand out?</h2>
        <p>{candidate.quote_text}</p>
        <span>{candidate.quote_author}</span>
      </section>
      <footer className="footer">
        <h2>Interested in {candidate.pronoun}?</h2>
        <p>
          You can check more details by checking {candidate.pronoun} CV and
          projece that has done with us during the boot camp
        </p>
        <a
          className="button button-primary"
          href={candidate.cv_url}
          target="_blank"
        >
          Donwload CV
        </a>
        <a
          className="button button-primary"
          href={candidate.portfolio_url}
          target="_blank"
        >
          View portfolio
        </a>
      </footer>
    </div>
  );
}
