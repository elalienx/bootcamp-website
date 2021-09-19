export default function About() {
  const SLIDES_URL =
    "https://www.icloud.com/keynote/06byT0mJz_-qmghPbfRscHL8g#Marketing_presentation";

  return (
    <div id="about">
      <h1>About the academy</h1>
      <p>
        All participants have completed a 4 months Software Development Academy.
        They learnt both basics and more advanced aspects of object oriented
        programming with focus on Java.
      </p>

      <h2>Tech stack</h2>
      <h2>Projects</h2>
      <h2>Want to know more?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <a className="button" href={SLIDES_URL} target="_blank" rel="no-opener">
        Download full curriculum
      </a>
    </div>
  );
}
