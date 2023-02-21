// NPM packages
import { useParams } from "react-router-dom";

// Project files
import ItemSkillSet from "components/ItemSkillSet";
import data from "data/candidates.json";
import ItemRatingt from "components/ItemRating";

// Interface
type PropParams = {
  url: string;
};

export default function Profile() {
  // Properties
  const { url } = useParams<PropParams>();
  const candidate = data.find((item) => item.url === url);
  if (candidate === undefined) return <p>No candidate found</p>;

  // Properties
  const imageObject = require(`assets/images/candidates/${url}.jpg`);
  const swedishRating = {
    name: "Swedish level",
    rating: candidate.swedish_level,
  };

  // Components
  const ItemsSkillSet = candidate.skill_set.map((item, index) => (
    <ItemSkillSet key={index} item={item} />
  ));

  return (
    <div id="profile">
      {/* Header */}
      <header className="hero">
        <div className="container">
          <div className="content">
            <h1>
              Hi I'm <br />
              {candidate.name}
            </h1>
            <p>{candidate.about}</p>
            <ItemRatingt item={swedishRating} />
          </div>
          <img src={imageObject} alt="Candidate picture" />
        </div>
      </header>

      {/* Skills */}
      <section className="skills">
        <div className="container">
          <h2>Unique tech skills</h2>
          <div className="grid">{ItemsSkillSet}</div>
        </div>
      </section>

      {/* Blockquote */}
      <section className="blockquote">
        <div className="container">
          <h2>What makes {candidate.pronoun} stand out?</h2>
          <p>"{candidate.quote_text}"</p>
          <span className="quote-author">- {candidate.quote_author}</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <h2>Are you interested in {candidate.pronoun}?</h2>
          <p>
            You can check more details by checking {candidate.pronoun} CV and
            the projects that it has done with us during the boot camp.
          </p>
          {/* <a target="_blank" className="button primary" href={candidate.cv_url}>
            Donwload CV
          </a> */}
          <a target="_blank" className="button" href={candidate.portfolio_url}>
            View portfolio
          </a>
        </div>
      </footer>
    </div>
  );
}
