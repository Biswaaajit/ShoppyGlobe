import Proptype from "prop-types";
import Star from "../../components/Star";
import ProductPrice from "./ProductPrice";
import ProductBtn from "./ProductBtn";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "../../Utils/cartSlicer";
import toast from "react-hot-toast";

function Product({ list }) {
  const {
    id,
    rating,
    images,
    price,
    title,
    discountPercentage: discount,
    availabilityStatus: status,
  } = list;

  const cartItem = useSelector((store) => store.cart).cart;
  const filterCartItem = cartItem.filter((item) => item.id === id);

  const [noItem, setItem] = useState(
    filterCartItem.length !== 0 ? filterCartItem.at(0).item : 0
  );
  const [view, setView] = useState(false);
  const dispatch = useDispatch();

  const discountPrice = price * (1 - discount / 100);
  const totalPrice = Number(discountPrice.toFixed(2));

  //function to manage the cart

  function handleCart() {
    if (noItem === 0) return;
    if (filterCartItem.length === 0) {
      const newItem = {
        id,
        title,
        price: totalPrice,
        totalPrice: Number((totalPrice * noItem).toFixed(2)),
        image: images.at(0),
        item: noItem,
      };

      dispatch(addItem(newItem));
      toast.success("Added a items");
    } else {
      if (filterCartItem.at(0).item === noItem) return;
      dispatch(updateItem({ id, value: noItem }));
      toast.success("Updated the cart");
    }
  }

  return (
    <div
      onMouseEnter={() => setView(true)}
      onMouseLeave={() => setView(false)}
      className="w-[60vw] sm:w-[18rem] h-fit transition-all border-2 px-4 divide-y-2 divide-slate-400/50 rounded-md hover:shadow-xl shadow-slate-800 pb-4"
    >
      <div className="relative w-fit">
        <img src={images[0]} className="aspect-square object-contain" />
        <p className="absolute top-3 text-red-600 bg-red-100 px-2 rounded-md text-xs py-2">
          {discount}%
        </p>
      </div>
      <div className="flex flex-col py-3 gap-2">
        <Star rating={rating} className="text-sm sm:text-lg" />
        <p className="text-sm sm:text-lg font-semibold">{title}</p>
        <p
          className={`w-fit text-white text-sm pr-3 px-1 rounded-r-lg ${
            status === "In Stock" ? "bg-green-700" : "bg-red-500"
          }`}
        >
          {status}
        </p>
        <ProductPrice
          price={price}
          totalPrice={totalPrice}
          className="text-lg"
        />
        <ProductBtn setItem={setItem} noItem={noItem} handleCart={handleCart} />
        {view && (
          <Link
            to={`/products/${id}`}
            className="bg-slate-200 py-1.5 rounded-lg mt-4 text-center hover:text-white hover:bg-black transition-all"
          >
            View Product
          </Link>
        )}
      </div>
    </div>
  );
}

// prop validation
Product.propTypes = {
  list: Proptype.object,
};
export default Product;
