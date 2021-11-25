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
          <h2>Interested in hiring Frontend Developers?</h2>
          <p>
            Are you looking for talented Frontend Developers? Look no more - in
            early November, we will have many candidates ready to be hired and
            productive from day 1. All of them are coming from international
            backgrounds and they share the desire to become successful
            developers in Sweden.
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
