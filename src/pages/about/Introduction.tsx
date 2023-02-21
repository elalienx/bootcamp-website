// Project files
import Image from "assets/images/about.jpg";


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
          <h2>About the Program</h2>
          <p>
            A 4 month accelerated learning program, with focus on Frontend and
            particularly React. It consists of 7 individual projects with set
            requirements and increasing complexity. The students have daily
            lectures and mentor meetings. Software engineering practices is
            taken into to consideration, so students can produce code with high
            value.
          </p>
        </div>

        {/* Bottom - Right */}
        <img className="support-picture" src={Image} alt={imageDescription} />
      </div>
    </header>
  );
}
