import Proptype from "prop-types";
import { useNavigate } from "react-router-dom";

function CategoryList({ category, dispatch }) {
  const navigate = useNavigate();
  const { name, img, path } = category;

  //Click handle func
  function handleClick() {
    navigate(`/categories/${path}`);
    dispatch({ type: "setShowCategory", payload: false });
  }

  return (
    <div
      onClick={handleClick}
      className="w-[12rem] xl:w-[14rem]  flex flex-col gap-3 items-center cursor-pointer text-slate-400 hover:text-slate-100 transition-all  overflow-visible"
    >
      <div className="w-[12rem] xl:w-[14rem]  overflow-hidden">
        <img
          className="w-full hover:scale-125 transition-transform duration-300"
          src={img}
        />
      </div>
      <p className="text-lg">{name}</p>
    </div>
  );
}
CategoryList.propTypes = {
  category: Proptype.object,
  dispatch: Proptype.func,
};

export default CategoryList;
