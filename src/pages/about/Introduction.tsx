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
            This Academy is a 3 month accelerated learning course, with focus on
            Frontend development and particularly React. It consists of 7
            individual projects with set requirements and increasing complexity.
            The students have daily lectures and mentor meetings and the aspect
            of software engineering practices is taken into to consideration, so
            that the students can produce code that creates value not bugs.
          </p>
        </div>

        {/* Bottom - Right */}
        <img className="support-picture" src={Image} alt={imageDescription} />
      </div>
    </header>
  );
}
