import MobileCartList from "./MobileCartList";
import proptype from "prop-types";

function MobileCart({ cartItems }) {
  return (
    <div className="divide-y-2 divide-slate-200 w-[90%] border-b-2 border-slate-200 mx-auto block md:hidden">
      {cartItems.map((cartItem) => (
        <MobileCartList key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
}

//Prop validation

MobileCart.propTypes = {
  cartItems: proptype.array,
};

export default MobileCart;
