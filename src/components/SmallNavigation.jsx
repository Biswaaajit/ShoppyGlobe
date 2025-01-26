import Proptype from "prop-types";
import { IoClose } from "react-icons/io5";
import SmallNavLink from "./SmallNavLink";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaAngleRight } from "react-icons/fa";
import SmallCategoryNavList from "./SmallCategoryNavList";

function SmallNavigation({ dispatch }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const smallNav = useRef();

  //Gsap functionality

  useGSAP(() => {
    gsap.from(smallNav.current, {
      x: -150,
      ease: "power2.out",
    });
  }, []);

  useGSAP(() => {
    if (show) {
      gsap.to("#right", {
        rotate: 90,
        ease: "power2.out",
      });
    } else {
      gsap.to("#right", {
        rotate: 0,
        ease: "power2.out",
      });
    }
  }, [show]);

  //Link handle function

  function handleLink(str) {
    dispatch({ type: "setShowSmallNav", payload: false });
    navigate(str);
  }

  return (
    <div className="w-full bg-slate-900/50  h-screen absolute top-0 left-0">
      <div
        ref={smallNav}
        className="w-[70%] h-screen bg-white flex flex-col items-center gap-5"
      >
        <IoClose
          onClick={() => dispatch({ type: "setShowSmallNav", payload: false })}
          className="cursor-pointer self-end  text-2xl relative right-2 top-2"
        />
        <img src="/logo.png" alt="website logo" className="w-[45vw] mt-6" />
        <div className="divide-y-2 divide-slate-200 w-full px-1 mt-12">
          <SmallNavLink name="Home" handleClick={() => handleLink("/")} />
          <SmallNavLink
            name="Products"
            handleClick={() => handleLink("/products")}
          />
          <div>
            <div
              className="flex justify-center gap-1 items-center cursor-pointer py-4 text-xl text-red-800 font-semibold"
              onClick={() => setShow(!show)}
            >
              <span>Category</span>
              <FaAngleRight id="right" />
            </div>
            {show && <SmallCategoryNavList dispatch={dispatch} />}
          </div>
          <SmallNavLink name="Cart" handleClick={() => handleLink("/cart")} />
        </div>
      </div>
    </div>
  );
}

SmallNavigation.propTypes = {
  dispatch: Proptype.func,
};

export default SmallNavigation;
