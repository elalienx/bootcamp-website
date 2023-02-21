// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface iProps {
  name: string;
}

export default function ItemSkill({ name }: iProps) {
  return (
    <li className="item-skill">
      <span className="label">{name}</span>
      <span className="square">
        <FontAwesomeIcon className="icon" icon={["fas", "check"]} />
      </span>
    </li>
  );
}
