// Project files
import Image from "assets/images/about.jpg";
import "styles/pages/about/Introduction.sass";

export default function Introduction() {
  const imageDescription =
    "A group of people sitting on a table using their laptops";

  return (
    <header className="introduction">
      {/* Mobile hero */}
      <img className="mobile-hero" src={Image} alt={imageDescription} />

      <div className="container">
        {/* Top - Left */}
        <div className="content">
          <h2>About the Academy</h2>
          <p>
            All participants have completed a 4 months Software Development
            Academy. They learnt both basics and more advanced aspects of object
            oriented programming with focus on Java.
          </p>
          <p>
            Now they have been selected and chose to attend a 3 months program
            with focus on React during the Autumn 2021.
          </p>
        </div>

        {/* Bottom - Right */}
        <img className="support-picture" src={Image} alt={imageDescription} />
      </div>
    </header>
  );
}
