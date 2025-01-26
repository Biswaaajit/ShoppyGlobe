import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";
import proptype from "prop-types";
import Reviews from "./Reviews";

function DetailDescription({ detail }) {
  const [show, setShow] = useState(true);

  return (
    <div className=" w-[90%] mx-auto border-2 border-slate-200 rounded-lg ">
      <div className="uppercase space-x-3 md:space-x-6 border-b-2 border-slate-200 px-2 py-2 md:px-6 md:py-2.5 font-semibold  md:text-lg">
        <button
          onClick={() => setShow(true)}
          className={`hover:text-black ${
            show ? "text-black" : "text-slate-500"
          }`}
        >
          Additional Information
        </button>
        <button
          className={`hover:text-black ${
            show ? "text-slate-500" : "text-black"
          }`}
          onClick={() => setShow(false)}
        >
          Reviews
        </button>
      </div>
      <div className="px-2 py-4 md:px-6 md:py-4">
        {show ? (
          <AdditionalInfo detail={detail} />
        ) : (
          <Reviews detail={detail} />
        )}
      </div>
    </div>
  );
}

//prop validation
DetailDescription.propTypes = {
  detail: proptype.object,
};

export default DetailDescription;
