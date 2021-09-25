// Project files
import PropsCandidate from "./PropsCandidate";
import "styles/pages/profile/Introduction.sass";

export default function Introduction({ candidate }: PropsCandidate) {
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
