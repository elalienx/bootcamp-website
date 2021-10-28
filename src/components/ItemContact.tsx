// NPM packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

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
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "mobile-alt" as IconName]}
        />
        {phone}
      </a>
      <a href={`mailto:${email}?subject=Recruit candidates`}>
        <FontAwesomeIcon
          className="icon"
          icon={["fas", "envelope" as IconName]}
        />
        Contact me
      </a>
    </li>
  );
}
