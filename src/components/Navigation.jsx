import { MdKeyboardArrowDown } from "react-icons/md";
import NavigationLink from "./NavigationLink";
import Proptype from "prop-types";

import CartNav from "./CartNav";

function Navigation({ dispatch }) {
  function handleLeave() {
    dispatch({ type: "setShowCategory", payload: false });
  }
  return (
    <div
      id="navLink"
      className=" overflow-x-hidden gap-6 hidden md:flex md:items-center px-2 py-1"
    >
      <NavigationLink onLeave={handleLeave} address="/">
        Home
      </NavigationLink>
      <NavigationLink onLeave={handleLeave} address="/products">
        Products
      </NavigationLink>
      <div
        onMouseEnter={() =>
          dispatch({ type: "setShowCategory", payload: true })
        }
        className="flex items-center cursor-pointer font-semibold hover:text-red-600"
      >
        <p>Categories</p>
        <MdKeyboardArrowDown className="text-2xl" />
      </div>
      {/* <NavigationLink onLeave={handleLeave} name="Cart" address="/cart" /> */}
      <CartNav onLeave={handleLeave} />
    </div>
  );
}

Navigation.propTypes = {
  dispatch: Proptype.func,
};

export default Navigation;
