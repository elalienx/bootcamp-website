// NPM Packaged
import { Link } from "react-router-dom";

// Project files
import Image from "assets/images/about.jpg";
import "./About.sass";

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
            All participants have completed a 4 months Software Development
            Academy. They learnt both basics and more advanced aspects of object
            oriented programming with focus on Java.
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
