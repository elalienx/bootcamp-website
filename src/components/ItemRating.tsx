// Project files
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iRating from "interfaces/iRating";

// Interface
interface iProps {
  item: iRating;
}

export default function ItemRatingt({ item }: iProps) {
  const { name, rating } = item;

  // safeguard
  if (rating === 0) return null;

  // Component
  const IconStar = <FontAwesomeIcon className="icon" icon={["fas", "star"]} />;

  // Methods
  function boxFill(value: number, maxRating: number): string {
    return maxRating >= value ? "box full" : "box";
  }

  return (
    <div className="item-rating">
      <p className="label">{name}:</p>
      <div>
        <span className={boxFill(1, rating)}>{IconStar}</span>
        <span className={boxFill(2, rating)}>{IconStar}</span>
        <span className={boxFill(3, rating)}>{IconStar}</span>
        <span className={boxFill(4, rating)}>{IconStar}</span>
        <span className={boxFill(5, rating)}>{IconStar}</span>
      </div>
    </div>
  );
}
