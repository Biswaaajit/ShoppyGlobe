import proptype from "prop-types";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../Utils/cartSlicer";

function MobileCartList({ cartItem }) {
  const { id, image, title, totalPrice, price, item } = cartItem;
  const [itemNo, setItemNo] = useState(item);
  const dispatch = useDispatch();

  function handleItem(e) {
    let value = e.target.value;
    if (value <= 0) {
      dispatch(removeItem(id));
    } else {
      setItemNo(value);
      dispatch(updateItem({ id, value }));
    }
  }

  return (
    <div className="flex  gap-3 py-4">
      <img
        src={image}
        className="w-[22vw] sm:w-[8rem] aspect-square object-contain h-fit"
      />
      <div className="grow divide-y-2 divide-slate-200">
        <div className="flex justify-between items-center py-2 px-1">
          <p className="font-semibold text-red-900">{title}</p>
          <button
            onClick={() => dispatch(removeItem(id))}
            className="bg-red-200 px-1 py-1 rounded-full"
          >
            <RxCross2 className="text-sm sm:text-base" />
          </button>
        </div>
        <MobileIInfo name="Price" value={`$${price}`} />
        <div className="flex justify-between items-center py-2 px-1 ">
          <p className="text-slate-400 text-sm">Quantity</p>
          <input
            type="number"
            value={itemNo}
            onChange={handleItem}
            className="focus:outline-none border-2 border-slate-200 text-center w-[4rem] rounded-xl py-1 px-1 text-sm sm:text-base"
          />
        </div>
        <MobileIInfo name="SubTotal" value={`$${totalPrice}`} />
      </div>
    </div>
  );
}

function MobileIInfo({ name, value }) {
  return (
    <div className="flex  justify-between py-2 px-1">
      <p className="text-slate-400 text-sm">{name}</p>
      <p className="text-red-900 font-bold">{value}</p>
    </div>
  );
}

//Prop validation

MobileCartList.propTypes = {
  cartItem: proptype.object,
};
MobileIInfo.propTypes = {
  name: proptype.string,
  value: proptype.any,
};

export default MobileCartList;
