import { useNavigate } from "react-router-dom";
import Proptype from "prop-types";

const categories = [
  {
    name: "Grocery",
    path: "groceries",
  },
  {
    name: "Beauty",
    path: "beauty",
  },
  {
    name: "Fragrance",
    path: "fragrances",
  },
  {
    name: "Furniture",
    path: "furniture",
  },
];

function SmallCategoryNavList({ dispatch }) {
  const navigate = useNavigate();

  //func to handle category link for small navigation

  function handleCategory(str) {
    dispatch({ type: "setShowSmallNav", payload: false });
    navigate(`/categories/${str}`);
  }

  return (
    <div className="flex flex-col pb-2 border-t-2 border-slate-200   ">
      {categories.map((catergory) => (
        <p
          className="cursor-pointer  py-2 text-center font-medium hover:text-xl transition-all "
          key={catergory.name}
          onClick={() => handleCategory(catergory.path)}
        >
          {catergory.name}
        </p>
      ))}
    </div>
  );
}

//Prop validation

SmallCategoryNavList.propTypes = {
  dispatch: Proptype.func,
};

export default SmallCategoryNavList;
