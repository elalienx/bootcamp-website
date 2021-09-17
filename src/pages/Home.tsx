export default function Home() {
  return (
    <div id="home">
      {/* Hero */}
      <header className="hero">
        <div className="container">
          <h1 className="title">
            Front
            <br />
            End
            <br />
            Course
          </h1>
          <h2 className="subtitle">
            Training Program
            <br />
            Autum 2021
          </h2>
          <a className="button" href="#about">
            Learn more
          </a>
        </div>
      </header>

      {/* About */}
      <section id="about" className="about">
        <img src="" alt="" />
        <div className="container">
          <h2>About the Academy</h2>
          <p>
            All participants have completed a 4 months Software Development
            Academy. They learnt both basics and more advanced aspects of object
            oriented programming with focus on Java.
          </p>
          <a className="button" href="#">
            Learn more
          </a>
        </div>
      </section>

      {/* Candidates */}
      <section className="candidates container">
        <h2>Meet the candidates</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <ul>
          <li>Armin Diszar</li>
          <li>Clement Cardona</li>
          <li>Dakouri Ikori</li>
        </ul>
        <button className="button" disabled>
          View all candidates
        </button>
      </section>
    </div>
  );
}
