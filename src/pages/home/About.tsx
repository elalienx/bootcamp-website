// NPM Packaged
import { Link } from "react-router-dom";

// Project files
import Image from "assets/images/about.jpg";
import "styles/pages/home/About.sass";

export default function About() {
  return (
    <section className="about">
      <img
        className="mobile-hero"
        src={Image}
        alt="A group of people sitting on a table using their laptops"
      />

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
          <Link className="button" to="/about">
            Learn more
          </Link>
        </div>

        {/* Bottom - Right */}
        <img
          className="support-picture"
          src={Image}
          alt="A group of people sitting on a table using their laptops"
        />
      </div>
    </section>
  );
}
