// Project files
import ItemContact from "components/ItemContact";
import data from "data/contact.json";

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
          consultancy set up. Please contact us to find out more:
        </p>
        <ul className="contact-list">{Contacts}</ul>
        <small>© 2023 Novare Human Capital</small>
      </div>
    </footer>
  );
}
