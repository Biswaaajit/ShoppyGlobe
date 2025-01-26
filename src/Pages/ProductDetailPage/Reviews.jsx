import proptype from "prop-types";
import { FaUserCircle } from "react-icons/fa";
import Star from "../../components/Star";
import { FaMinus } from "react-icons/fa6";

function Reviews({ detail }) {
  const { reviews } = detail;
  return (
    <div className="space-y-6 lg:space-y-9 py-3 px-4">
      {reviews.map((review, i) => (
        <User key={i} review={review} />
      ))}
    </div>
  );
}

function User({ review }) {
  const { rating, comment, date, reviewerName } = review;
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
  return (
    <div className="flex gap-2 ">
      <FaUserCircle className="text-5xl lg:text-6xl text-slate-300" />
      <div className="flex flex-col gap-0 lg:gap-1">
        <Star rating={rating} className="text-sm lg:text-base" />
        <div className="flex items-center gap-2">
          <p className="font-semibold lg:text-lg">{reviewerName}</p>
          <FaMinus />
          <p className="text-slate-500 text-xs lg:text-sm">{formattedDate}</p>
        </div>
        <p>{comment}</p>
      </div>
    </div>
  );
}

//prop validation

Reviews.propTypes = {
  detail: proptype.object,
};
User.propTypes = {
  review: proptype.object,
};
export default Reviews;
