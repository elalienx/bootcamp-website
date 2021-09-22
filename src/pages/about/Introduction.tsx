// Project files
import Image from "assets/images/about.jpg";

export default function Introduction() {
  return (
    <header className="introduction">
      <img
        src={Image}
        alt="A group of people sitting on a table using their laptops"
      />
      <div className="container">
        <h1>About the academy</h1>
        <p>
          All participants have completed a 4 months Software Development
          Academy. They learnt both basics and more advanced aspects of object
          oriented programming with focus on Java.
        </p>
      </div>
    </header>
  );
}
