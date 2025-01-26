import proptype from "prop-types";
import ProductPrice from "../ProductPage/ProductPrice";
import DetailCount from "./DetailCount";
import Star from "../../components/Star";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItem, updateItem } from "../../Utils/cartSlicer";
import toast from "react-hot-toast";

function DetailInfo({ detail }) {
  const {
    id,
    availabilityStatus: status,
    description,
    minimumOrderQuantity: minOrder,
    title,
    price,
    rating,
    images,
    discountPercentage: discount,
  } = detail;

  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart).cart;

  const filterCartItem = cartItem.filter((item) => item.id === id);

  const [noItems, setItems] = useState(
    filterCartItem.length !== 0 ? filterCartItem.at(0).item : 0
  );

  const discountPrice = price * (1 - discount / 100);
  const totalPrice = Number(discountPrice.toFixed(2));

  function handleClick() {
    if (noItems === 0) return;

    if (filterCartItem.length === 0) {
      const newItem = {
        id,
        title,
        price: totalPrice,
        totalPrice: Number((totalPrice * noItems).toFixed(2)),
        image: images.at(0),
        item: noItems,
      };

      dispatch(addItem(newItem));
      toast.success("Added a item");
    } else {
      if (filterCartItem.at(0).item === noItems) return;
      dispatch(updateItem({ id, value: noItems }));
      toast.success("Updated the cart");
    }
  }

  return (
    <div className="grow py-8 space-y-4 md:space-y-6">
      <p
        className={`w-fit font-semibold text-sm text-center rounded-md py-0.5 px-2 ${
          status === "In Stock"
            ? "bg-green-200 text-green-700"
            : "bg-red-200 text-red-600"
        }`}
      >
        {status}
      </p>
      <p className="text-red-700 font-bold text-3xl md:text-5xl">{title}</p>
      <Star rating={rating} className="text-xl md:text-2xl" />
      <ProductPrice
        totalPrice={totalPrice}
        price={price}
        className="text-2xl md:text-3xl"
      />
      <p className="pb-8 md:text-lg ">{description}</p>
      <DetailCount
        minOrder={minOrder}
        setItems={setItems}
        onclick={handleClick}
        noItems={noItems}
      />
    </div>
  );
}

//prop validation
DetailInfo.propTypes = {
  detail: proptype.object,
};

export default DetailInfo;
