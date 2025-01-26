import { FaRegStar, FaStar } from "react-icons/fa";
import Proptype from "prop-types";

function Star({ rating, className }) {
  const start = Math.ceil(rating);

  return (
    <div className={`flex w-fit text-amber-600 ${className}`}>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => {
        if (num <= start) {
          return <FaStar key={num} />;
        } else {
          return <FaRegStar key={num} />;
        }
      })}
    </div>
  );
}

Star.propTypes = {
  className: Proptype.string,
  rating: Proptype.number,
};

export default Star;
