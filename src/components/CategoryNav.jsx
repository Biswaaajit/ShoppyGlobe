import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Proptype from "prop-types";
import CategoryList from "./CategoryList";

const categories = [
  {
    name: "Grocery",
    path: "groceries",
    img: "https://images.unsplash.com/photo-1469053713174-e64e64779a7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cosmetics",
    path: "beauty",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Frangrance",
    path: "fragrances",
    img: "https://images.unsplash.com/photo-1512777576244-b846ac3d816f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Furniture",
    path: "furniture",
    img: "https://images.unsplash.com/photo-1573866926487-a1865558a9cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function CategoryNav({ dispatch }) {
  useGSAP(() => {
    gsap.from("#category", {
      y: 200,
      opacity: 1,
      duration: 0.5,
    });
  }, []);
  return (
    <div
      id="category"
      onMouseLeave={() => dispatch({ type: "setShowCategory", payload: false })}
      className="w-full hidden  left-0 h-[50vh] md:h-[60vh] top-20 bg-black/95 absolute md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center items-center"
    >
      {categories.map((category) => (
        <CategoryList
          key={category.name}
          category={category}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

CategoryNav.propTypes = {
  dispatch: Proptype.func,
};

export default CategoryNav;
