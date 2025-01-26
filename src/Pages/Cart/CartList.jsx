import proptype from "prop-types";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../Utils/cartSlicer";

function CartList({ cartItem }) {
  const { id, image, title, totalPrice, price, item } = cartItem;
  const [items, setItems] = useState(item);
  const dispatch = useDispatch();

  function handleItem(e) {
    let value = Number(e.target.value);
    if (value <= 0) {
      dispatch(removeItem(id));
    } else {
      setItems(value);
      dispatch(updateItem({ id: id, value }));
    }
  }
  return (
    <div className="grid grid-cols-6 place-items-center justify-items-center gap-4  ">
      <img
        src={image}
        alt="item image"
        className="w-[8rem] aspect-square object-contain"
      />
      <p className="text-base text-red-900 font-semibold">{title}</p>
      <p className="text-lg text-red-900 font-semibold">${price}</p>
      <input
        type="number"
        min={0}
        value={items}
        onChange={handleItem}
        className="w-[4rem] focus:outline-none border-2 border-slate-200 text-center rounded-md py-1 px-1"
      />
      <p className="text-lg text-red-900 font-semibold">${totalPrice}</p>
      <button
        onClick={() => dispatch(removeItem(id))}
        className="bg-red-200 text-red-900 text-xl xl:text-2xl px-3 xl:px-4 py-1.5 rounded-md"
      >
        <RiDeleteBin5Line />
      </button>
    </div>
  );
}

//Prop validation

CartList.propTypes = {
  cartItem: proptype.object,
};

export default CartList;
