// Project files
import iCandidate from "interfaces/iCandidate";

interface iProps {
  item: iCandidate;
}

export default function Footer({ item }: iProps) {
  const { url, name, pronoun, portfolio_url } = item;

  // Properties
  const CV_URL = `http://novare-tech-education.web.app/files/student-cv/${url}.pdf`;

  return (
    <footer className="footer">
      <div className="container">
        <h2>Are you interested in {name}?</h2>
        <p>
          See more details by checking {pronoun} CV and the projects that it has
          done with us during the boot camp.
        </p>
        <a target="_blank" className="button primary" href={CV_URL}>
          Donwload CV
        </a>
        <a target="_blank" className="button" href={portfolio_url}>
          View portfolio
        </a>
      </div>
    </footer>
  );
}
