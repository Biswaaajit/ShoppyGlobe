import { useSelector } from "react-redux";
import CheckList from "./CheckList";

function CheckOut() {
  const cartItems = useSelector((store) => store.cart).cart;
  const total = cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0);

  return (
    <div className="h-screen flex justify-between items-center">
      <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex flex-col border-4 px-2 sm:px-5 py-6 border-slate-300 mx-auto">
        <p className="font-bold text-xl text-red-800 pb-5 ">Your Order</p>
        <div className="flex justify-between text-lg font-semibold border-b-2 border-slate-200 py-4 text-red-800">
          <p>Product</p>
          <p>SubTotal</p>
        </div>
        {cartItems.map((item) => (
          <CheckList key={item.id} item={item} />
        ))}
        <div className="flex justify-between text-xl font-bold text-red-800 py-6">
          <p>Total Price</p>
          <p>$ {total}</p>
        </div>
        <button className="bg-red-800 hover:bg-red-600 mt-5 text-white w-[70%] lg:w-[60%] py-2 rounded-lg self-center transition-all">
          Place order
        </button>
      </div>
    </div>
  );
}

export default CheckOut;
