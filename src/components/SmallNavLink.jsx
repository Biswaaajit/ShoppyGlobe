import Proptype from "prop-types";

function SmallNavLink({ handleClick, name }) {
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer py-4 text-xl font-semibold text-center text-red-800"
    >
      {name}
    </div>
  );
}

SmallNavLink.propTypes = {
  handleClick: Proptype.func,
  name: Proptype.string,
};

export default SmallNavLink;
