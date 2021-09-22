// NPM packages
import { Link, useHistory, useParams } from "react-router-dom";

// Project files
import data from "data/candidates.json";
import ItemResume from "components/ItemResume";
import ItemSkill from "components/ItemSkill";
import "./Profile.sass";

// Interface
type PropParams = {
  url: string;
};

export default function Profile() {
  // Properties
  const history = useHistory();
  const { url } = useParams<PropParams>();

  // Derived state
  const candidate = data.find((item) => item.url === url);
  const imageObject = require(`assets/images/candidates/${url}.jpg`);
  const imageFile = imageObject.default;
  const isWillingToRecolate =
    candidate?.is_willing_to_relocate && " • Willing to relocate";
  const EducationItems = candidate?.education.map((item, index) => (
    <ItemResume key={index} item={item} />
  ));
  const WorkItems = candidate?.work_experience.map((item, index) => (
    <ItemResume key={index} item={item} />
  ));
  const TechItems = candidate?.tech_skills.map((item, index) => (
    <ItemSkill key={index} item={item} />
  ));
  const LanguagesItems = candidate?.languages_spoken.map((item, index) => (
    <ItemSkill key={index} item={item} />
  ));

  // safeguard
  if (candidate === undefined) return <p>No candidate found</p>;

  return (
    <div id="profile">
      {/* Header */}
      <header className="introduction container">
        <img className="avatar" src={imageFile} alt="Candidate thumbnail" />
        <h1>{candidate.name}</h1>
        <p className="subtitle">
          {candidate.city}
          {isWillingToRecolate}
        </p>
        <p className="description">{candidate.description}</p>
      </header>

      {/* Education */}
      <section className="container">
        <h2>Education</h2>
        <ul className="list-resume">{EducationItems}</ul>
      </section>

      {/* Work */}
      <section className="container">
        <h2>Work experience</h2>
        <ul className="list-resume">{WorkItems}</ul>
      </section>

      {/* Tech skills */}
      <section className="container">
        <h2>Tech skills</h2>
        <ul className="list-skill">{TechItems}</ul>
      </section>

      {/* Languages */}
      <section className="container">
        <h2>Languages spoken</h2>
        <ul className="list-skill">{LanguagesItems}</ul>
      </section>

      {/* Footer */}
      <footer className="container">
        <a
          className="button"
          href={candidate.portofolio_url}
          target="_blank"
          rel="noreferrer"
        >
          View portfolio
        </a>
        <br />
        <Link to="/candidates">View other candidates</Link>
      </footer>
    </div>
  );
}
