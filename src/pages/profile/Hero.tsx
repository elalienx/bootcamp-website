// Node modules
import { Link } from "react-router-dom";

// Project files
import ItemRating from "components/ItemRating";
import iCandidate from "interfaces/iCandidate";

interface iProps {
  item: iCandidate;
}

export default function Hero({ item }: iProps) {
  const { url, name, about, swedish_level } = item;

  // Properties
  const imageObject = require(`assets/images/candidates/${url}.jpg`);
  const swedishRating = {
    name: "Swedish level",
    rating: swedish_level,
  };

  return (
    <header className="hero">
      <div className="container">
        <div className="content">
          <h1>
            Hi I'm <br />
            {name}
          </h1>
          <p>{about}</p>
          <ItemRating item={swedishRating} />
          <small>
            Läsa mer om vår{" "}
            <Link to="/">
              <small>Svenska kompetens test</small>
            </Link>
          </small>
        </div>
        <img src={imageObject} alt="Candidate picture" />
      </div>
    </header>
  );
}
