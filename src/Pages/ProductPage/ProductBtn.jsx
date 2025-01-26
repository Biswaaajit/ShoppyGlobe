import Proptype from "prop-types";
import { FiMinus } from "react-icons/fi";
import { MdAdd, MdOutlineShoppingBag } from "react-icons/md";

function ProductBtn({ setItem, noItem, handleCart }) {
  function handleDec() {
    if (noItem <= 0) {
      setItem(0);
    } else {
      setItem(noItem - 1);
    }
  }
  return (
    <div className="w-full flex items-center justify-between pt-4">
      <div className="w-[70%] flex items-center text-slate-400 justify-around border-2 border-slate-400/50 py-2  rounded-lg">
        <button onClick={handleDec} className="">
          <FiMinus />
        </button>
        <p className="text-black">{noItem}</p>
        <button className="" onClick={() => setItem(noItem + 1)}>
          <MdAdd />
        </button>
      </div>
      <button
        onClick={handleCart}
        className="bg-red-700 text-white hover:bg-red-600 text-3xl px-2 py-1.5 rounded-md"
      >
        <MdOutlineShoppingBag />
      </button>
    </div>
  );
}

ProductBtn.propTypes = {
  setItem: Proptype.func,
  noItem: Proptype.number,
  handleCart: Proptype.func,
};

export default ProductBtn;
