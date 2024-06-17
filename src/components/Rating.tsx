import StarFilled from "@/icons/StarFilled";
import StarHalfFilled from "@/icons/StarHalfFilled";
import StarOutline from "@/icons/StarOutline";
import { roundedToRange } from "@/utils/rounded-to-range.util";

interface Props {
  rating: number;
}
const RANGE = 0.5;

function Rating({ rating }: Props) {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const key = index;
        if (index + 1 < rating) {
          return <StarFilled key={key} />;
        } else if (index === Math.floor(rating) && roundedToRange(rating, RANGE) === RANGE) {
          return <StarHalfFilled key={key} />;
        }
        return <StarOutline key={key} />;
      })}
    </div>
  );
}

export default Rating;
