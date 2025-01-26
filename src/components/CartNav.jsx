import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import proptype from "prop-types";

function CartNav({ onLeave }) {
  const cartItem = useSelector((store) => store.cart).cart;

  return (
    <NavLink
      to="/cart"
      onMouseEnter={onLeave}
      className=" relative border-2 border-red-700 text-red-700 flex justify-between items-center p-1 rounded-full"
    >
      <TiShoppingCart className="text-3xl" />
      <p className="bg-red-700  rounded-full text-white text-xs px-1  absolute top-1 -right-1 -translate-y-1/2">
        {cartItem.length}
      </p>
    </NavLink>
  );
}

//Prop validation
CartNav.propTypes = {
  onLeave: proptype.func,
};

export default CartNav;
