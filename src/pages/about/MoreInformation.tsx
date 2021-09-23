// NPM Packages
import { Link } from "react-router-dom";

// Project files
import Image from "assets/images/more-information.jpg";
import "styles/pages/about/MoreInformation.sass";

export default function MoreInformation() {
  // Properties
  const SLIDES_URL =
    "https://www.icloud.com/keynote/06byT0mJz_-qmghPbfRscHL8g#Marketing_presentation";

  return (
    <section className="more-information background-dark">
      <div className="container">
        <div className="content">
          <h2>Want to know more?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
