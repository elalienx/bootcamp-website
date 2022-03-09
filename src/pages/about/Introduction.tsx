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
          <h2>About the Program</h2>
          <p>
            A 3 month accelerated learning program, with focus on Frontend and
            particularly React. It consists of 7 individual projects with set
            requirements and increasing complexity. The students have daily
            lectures and mentor meetings. Software engineering practices is
            taken into to consideration, so students can produce code with high
            value.
          </p>
          <p>
            Before the Frontend course, the participants completed a 4 month
            intensive at the Software Development Academy, that Novare Potential
            arranged in collaboration with KTH. They learnt the foundations of
            Object Oriented Programming using Java. The goal with this Academy
            is that the students will be able to call themselves Junior Frontend
            Developers and that they will be ready to be productive from day 1
            when hired.
          </p>
        </div>

        {/* Bottom - Right */}
        <img className="support-picture" src={Image} alt={imageDescription} />
      </div>
    </header>
  );
}
