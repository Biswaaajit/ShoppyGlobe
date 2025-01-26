import Proptype from "prop-types";
import Product from "./Product";

function ProductList({ lists }) {
  return (
    <div className="w-full h-fit  pt-24 md:pt-28 pb-16 px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-x-3 gap-y-12">
      {lists.map((list) => (
        <Product key={list.id} list={list} />
      ))}
    </div>
  );
}

//Prop validation

ProductList.propTypes = {
  lists: Proptype.array,
};

export default ProductList;
