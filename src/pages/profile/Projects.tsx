// Project files
import iCandidate from "interfaces/iCandidate";

interface iProps {
  item: iCandidate;
}

export default function Projects({ item }: iProps) {
  const { url, name, pronoun, portfolio_url } = item;

  // Properties
  const CV_URL = `http://frontend-course.novare.se/files/students-cv/${url}.pdf`;

  return (
    <footer className="projects">
      <div className="container">
        <h2>Learn more about {name}</h2>
        <p>
          See details by checking {pronoun} projects done with us during the
          boot camp.
        </p>

        <a target="_blank" className="button" href={CV_URL}>
          Download CV
        </a>
        <a target="_blank" className="button" href={portfolio_url}>
          View portfolio
        </a>
      </div>
    </footer>
  );
}
