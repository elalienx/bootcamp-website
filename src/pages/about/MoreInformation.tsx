// NPM Packages
import { Link } from "react-router-dom";

// Project files
import Image from "assets/images/more-information.jpg";
import "styles/pages/about/MoreInformation.sass";

export default function MoreInformation() {
  // Properties
  const SLIDES_URL = "http://novare-tech-education.web.app/files/course.pdf";

  return (
    <section className="more-information background-dark">
      <div className="container">
        <div className="content">
          <h2>Want to know more?</h2>
          <p>
            Are you interested in the content of the course but one to know even
            more technical details? Then click the button below to download our
            full program curricula.
          </p>
          <a
            className="button"
            href={SLIDES_URL}
            target="_blank"
            rel="noreferrer"
          >
            Download full curriculum
          </a>
          <br />
          <Link to="/candidates">Or meet the candidates</Link>
        </div>
        <img
          className="support-picture"
          src={Image}
          alt="2 women sharing a single laptop"
        />
      </div>
    </section>
  );
}
