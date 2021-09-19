// NPM Packaged
import { Link } from "react-router-dom";

// Project files
import Image from "assets/images/about.jpg";

export default function About() {
  return (
    <section id="about" className="about">
      <img
        src={Image}
        alt="A group of people sitting on a table using their laptops"
      />
      <div className="container">
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
    </section>
  );
}
