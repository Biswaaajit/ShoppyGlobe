import Proptype from "prop-types";

function ProductPrice({ totalPrice, price, className }) {
  return (
    <div className={`flex gap-2 font-bold ${className}`}>
      <p className="line-through text-slate-800">${price}</p>
      <p className="text-green-800">${totalPrice}</p>
    </div>
  );
}

ProductPrice.propTypes = {
  totalPrice: Proptype.number,
  price: Proptype.number,
  className: Proptype.string,
};

export default ProductPrice;
