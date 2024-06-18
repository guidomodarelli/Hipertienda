import StarFilled from "@/icons/StarFilled";
import StarHalfFilled from "@/icons/StarHalfFilled";
import StarOutline from "@/icons/StarOutline";
import { cn } from "@/utils/cn";
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
        const color = /* tw */ `text-blue-300`;
        if (index + 1 < rating) {
          return <StarFilled key={key} className={cn(color)} />;
        } else if (index === Math.floor(rating) && roundedToRange(rating, RANGE) === RANGE) {
          return <StarHalfFilled key={key} className={cn(color)} />;
        }
        return <StarOutline key={key} className={cn(color)} />;
      })}
    </div>
  );
}

export default Rating;
