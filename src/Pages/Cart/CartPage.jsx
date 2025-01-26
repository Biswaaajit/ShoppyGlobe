import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import MobileCart from "./MobileCart";
import { Link } from "react-router-dom";
import { clearCart } from "../../Utils/cartSlicer";
import { IoBagHandleOutline } from "react-icons/io5";

function CartPage() {
  const cartItems = useSelector((store) => store.cart).cart;
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div className="h-screen w-full cart flex flex-col gap-6 justify-center items-center">
        <p className="text-4xl lg:text-6xl font-semibold">Your Cart is Empty</p>
        <Link
          to="/products"
          className="flex items-center bg-red-800 hover:bg-red-600 text-slate-200 px-6 py-1.5 text-lg gap-2 rounded-xl"
        >
          <span>Back to Shopping </span>
          <IoBagHandleOutline />
        </Link>
      </div>
    );
  }
  return (
    <div className="pt-20 md:pt-28">
      <MobileCart cartItems={cartItems} />
      <div className=" hidden md:block space-y-6 w-[95%] lg:w-[90%] mx-auto">
        <div className="grid grid-cols-6 text-center text-red-900 font-bold">
          <p className="col-start-2 text-center">Products</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>SubTotal</p>
        </div>
        <div className="divide-y-2 divide-slate-200 border-y-2 border-slate-200">
          {cartItems.map((cartItem) => (
            <CartList key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      </div>
      <div className="w-[90%] mx-auto flex justify-between pt-8">
        <Link
          to="/checkout"
          className="bg-red-800 text-white px-4 py-1.5 rounded-md hover:bg-red-600"
        >
          Checkout
        </Link>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-slate-200 px-4 rounded-md hover:bg-black hover:text-white transition-all"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default CartPage;
