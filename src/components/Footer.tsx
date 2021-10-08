// Project files
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import "styles/components/Footer.sass";

export default function Footer() {
  // Properties
  const data = [
    {
      name: "Carl Johan",
      phone: "073-032 57 12",
      email: "carljohan.degeer@novare.se",
    },
    {
      name: "Malin Crona",
      phone: "073-032 57 12",
      email: "malin.crona@novarepotential.se",
    },
  ];

  // Components
  const ItemContact = data.map((item, index) => (
    <li key={index}>
      {item.name}:
      <a href={`tel:${item.phone}`}>
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "mobile-alt" as IconName]}
        />
        {item.phone}
      </a>
      ,
      <a href={`mailto:${item.email}?subject=Recruit candidates`}>
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "envelope" as IconName]}
        />
        Write me
      </a>
    </li>
  ));

  return (
    <footer id="footer">
      <div className="container">
        <h2>Contact us</h2>
        <p>
          Candidates can be recruited through Novare Potential on an initial
          consultancy set up. Please contact Carl Johan or Malin to find out
          more.
        </p>

        <ul className="contact-list">{ItemContact}</ul>

        <small>© 2021 Novare Human Capital</small>
      </div>
    </footer>
  );
}
