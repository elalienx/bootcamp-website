// Project files
import iCandidate from "interfaces/iCandidate";

interface iProps {
  item: iCandidate;
}

export default function Footer({ item }: iProps) {
  const { pronoun, cv_url, portfolio_url } = item;

  return (
    <footer className="footer">
      <div className="container">
        <h2>Are you interested in {pronoun}?</h2>
        <p>
          You can check more details by checking {pronoun} CV and the projects
          that it has done with us during the boot camp.
        </p>
        <a target="_blank" className="button primary" href={cv_url}>
          Donwload CV
        </a>
        <a target="_blank" className="button" href={portfolio_url}>
          View portfolio
        </a>
      </div>
    </footer>
  );
}
