// Project files
import iRating from "interfaces/iRating";

// Interface
interface iProps {
  item: iRating;
}

export default function ItemRatingt({ item }: iProps) {
  const { name, rating } = item;

  return (
    <div>
      <span>{name}:</span>
    </div>
  );
}
