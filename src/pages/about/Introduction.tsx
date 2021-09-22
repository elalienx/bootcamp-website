// Project files
import Image from "assets/images/about.jpg";
import "./Introduction.sass";

export default function Introduction() {
  return (
    <header className="introduction">
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
        </div>

        {/* Bottom - Right */}
        <img
          className="support-picture"
          src={Image}
          alt="A group of people sitting on a table using their laptops"
        />
      </div>
    </header>
  );
}
