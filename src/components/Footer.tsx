// Project files
import ItemContact from "components/ItemContact";
import data from "data/contact.json";
import "styles/components/Footer.sass";

export default function Footer() {
  // Components
  const Contacts = data.map((item) => (
    <ItemContact key={item.id} item={item} />
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

        <ul className="contact-list">{Contacts}</ul>

        <small>© 2021 Novare Human Capital</small>
      </div>
    </footer>
  );
}
