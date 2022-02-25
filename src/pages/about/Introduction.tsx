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
            Our front-end development course is a four-month accelerated
            learning program focused on React. We use a project-based approach
            to build seven individual projects with increasing requirements and
            difficulty levels.
          </p>
          <p>
            Before admitting students to the course, they undergo a screening
            process for personality and logical tests. Then they proceed to
            build an admission project to demonstrate their current coding
            abilities.
          </p>
          <p>
            To help students grow as developers, we start the course with
            project management processes and software architecture principles to
            enforce the best coding practices.
          </p>
          <p>
            This course aims to have students ready to enter the workforce as
            junior developers that can contribute to the codebase from day one.
          </p>
        </div>

        {/* Bottom - Right */}
        <img className="support-picture" src={Image} alt={imageDescription} />
      </div>
    </header>
  );
}
