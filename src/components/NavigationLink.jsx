import { NavLink } from "react-router-dom";
import Proptype from "prop-types";

function NavigationLink({ children, address, onLeave }) {
  return (
    <div onMouseEnter={onLeave}>
      <NavLink
        to={address}
        className={({ isActive }) =>
          `text-black  font-semibold hover:text-red-600 ${
            isActive ? "text-red-600" : ""
          }`
        }
      >
        {children}
      </NavLink>
    </div>
  );
}

NavigationLink.propTypes = {
  children: Proptype.any,
  address: Proptype.string,
  onLeave: Proptype.func,
};

export default NavigationLink;
