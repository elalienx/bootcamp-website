// Project files
import iRating from "interfaces/iRating";

// Interface
interface iProps {
  item: iRating;
}

export default function ItemRatingt({ item }: iProps) {
  const { name, rating } = item;

  // safeguard
  if (rating === 0) return null;

  return (
    <div>
      <span className="label">{name}</span>
      <div className="boxes">
        <div className={rating >= 1 ? "full" : ""}></div>
        <div className={rating >= 2 ? "full" : ""}></div>
        <div className={rating >= 3 ? "full" : ""}></div>
        <div className={rating >= 4 ? "full" : ""}></div>
        <div className={rating >= 5 ? "full" : ""}></div>
      </div>
    </div>
  );
}
