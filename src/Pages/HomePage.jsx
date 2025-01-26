import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className=" text-black h-screen homePage pt-16 flex flex-col justify-center items-center gap-16">
      <div className="text-center space-y-1 md:space-y-4">
        <p className=" font-normal text-2xl sm:text-3xl">
          Welcome to ShoppyGlobe!
        </p>
        <p className="text-[7vw] sm:text-4xl md:text-5xl xl:text-6xl text-red-800 text-center font-medium ">
          Shop Smarter, Live Better
        </p>
      </div>
      <Link
        to="/products"
        className="flex items-center bg-red-800 hover:bg-red-600 text-slate-200 px-6 py-1.5 text-lg gap-2 rounded-xl"
      >
        <span>Shop Now </span>
        <IoBagHandleOutline />
      </Link>
    </div>
  );
}
