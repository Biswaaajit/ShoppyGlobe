import { TiThMenu } from "react-icons/ti";
import CategoryNav from "./CategoryNav";
import Navigation from "./Navigation";
import SmallNavigation from "./SmallNavigation";
import { useReducer } from "react";

const initial = {
  showCategory: false,
  showSmallNav: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "setShowCategory":
      return {
        ...state,
        showCategory: action.payload,
      };
    case "setShowSmallNav":
      return {
        ...state,
        showSmallNav: action.payload,
        showCategory: false,
      };
  }
}

function Header() {
  const [show, dispatch] = useReducer(reducer, initial);
  const { showCategory, showSmallNav } = show;

  return (
    <div className="w-full flex justify-between items-center backdrop-blur-lg bg-slate-200/40 shadow-lg shadow-slate-400/30 py-3 lg:py-2.5 px-2.5 md:px-3 xl:px-5 absolute top-0 z-30 transition-all">
      <img
        src="/logo.png"
        alt="website logo"
        className="w-[35vw] sm:w-[12rem] lg:w-[14rem] transition-all"
      />
      <Navigation dispatch={dispatch} />
      <TiThMenu
        onClick={() => dispatch({ type: "setShowSmallNav", payload: true })}
        className="block md:hidden text-2xl text-slate-700"
      />
      {showSmallNav && <SmallNavigation dispatch={dispatch} />}
      {showCategory && <CategoryNav dispatch={dispatch} />}
    </div>
  );
}

export default Header;
