// Project files
import iCandidate from "interfaces/iCandidate";
import "./Introduction.sass";

// Interface refactor and make it shareable
interface Props {
  candidate: iCandidate;
}

export default function Introduction({ candidate }: Props) {
  const { city, description, name, url, willing_to_relocate } = candidate;

  // Properties
  const imageObject = require(`assets/images/candidates/${url}.jpg`);
  const imageFile = imageObject.default;
  const relocationText = willing_to_relocate && " • Willing to relocate";

  return (
    <header className="introduction container">
      <img className="avatar" src={imageFile} alt="Candidate thumbnail" />
      <h1>{name}</h1>
      <p className="subtitle">
        {city}
        {relocationText}
      </p>
      <p className="description">{description}</p>
    </header>
  );
}
