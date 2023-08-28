// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Interfaces
interface iProps {
  item: {
    name: string;
    phone: string;
    email: string;
  };
}

export default function ItemContact({ item }: iProps) {
  const { name, phone, email } = item;

  return (
    <li>
      {name}:
      <a href={`tel:${phone}`}>
        <FontAwesomeIcon className="icon" icon={["fas", "mobile-alt"]} />
        {phone}
      </a>
      <a href={`mailto:${email}?subject=Recruit candidates`}>
        <FontAwesomeIcon className="icon" icon={["fas", "envelope"]} />
        Contact me
      </a>
    </li>
  );
}
