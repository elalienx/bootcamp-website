// Project files
import PropsCandidate from "./PropsCandidate";
import "styles/pages/profile/Introduction.sass";

export default function Introduction({ candidate }: PropsCandidate) {
  const { isHired, city, description, name, url, willing_to_relocate } =
    candidate;

  // Properties
  const imageObject = require(`assets/images/candidates/${url}.jpg`);
  const imageFile = imageObject.default;
  const relocationText = willing_to_relocate && " • Willing to relocate";
  const showIsHired = isHired ? " • Already hired" : "";

  return (
    <header className="introduction container">
      <img className="avatar" src={imageFile} alt="Candidate thumbnail" />
      <h1>
        {name} {showIsHired}
      </h1>
      <p className="subtitle">
        {city}
        {relocationText}
        {showIsHired}
      </p>
      <p className="description">{description}</p>
    </header>
  );
}
