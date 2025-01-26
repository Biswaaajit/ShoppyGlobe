import { useState } from "react";
import proptype from "prop-types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function DetailImage({ images }) {
  const [imgNo, setImg] = useState(0);
  const length = images.length - 1;

  return (
    <div className="relative  w-fit   mx-auto lg:mx-0  rounded-md  ">
      {imgNo > 0 && (
        <button
          onClick={() => setImg((prevImg) => prevImg - 1)}
          className="absolute top-1/2 left-2 -translate-y-1/2 text-2xl py-2 px-2 hover:bg-slate-200 text-slate-500 rounded-full "
        >
          <FaAngleLeft />
        </button>
      )}
      <img
        src={images.at(imgNo)}
        className="w-full sm:w-[30rem] lg:w-[55rem] xl:w-[50rem] aspect-square object-contain"
      />
      {imgNo < length && (
        <button
          onClick={() => setImg((prevImg) => prevImg + 1)}
          className="absolute top-1/2 right-2 -translate-y-1/2 hover:bg-slate-200 text-slate-500  text-2xl py-2 px-2 rounded-full"
        >
          <FaAngleRight />
        </button>
      )}
    </div>
  );
}

//prop validation
DetailImage.propTypes = {
  images: proptype.array,
};

export default DetailImage;
