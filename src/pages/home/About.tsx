// Node modules
import { Link } from "react-router-dom";

// Project files
import Image from "assets/images/about.jpg";

export default function About() {
  return (
    <section className="about">
      <img
        className="mobile-hero"
        src={Image}
        alt="A group of people sitting on a table using their laptops"
      />

      <div className="container">
        <div className="content">
          <h2>Interested in hiring Frontend Developers?</h2>
          <p>
            Are you looking for talented Frontend Developers? Look no further -
            soon, we will have many candidates ready to be hired and productive
            from day 1. All of them have international backgrounds and they
            share the desire to become successful developers in Sweden.
          </p>
          <div className="buttons">
            <Link className="button" to="/course/frontend">
              Frontend
            </Link>
            <Link className="button" to="/course/backend">
              Backend
            </Link>
          </div>
        </div>

        <img
          className="support-picture"
          src={Image}
          alt="A group of people sitting on a table using their laptops"
        />
      </div>
    </section>
  );
}
