import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Loading() {
  const text = "Loading".split("");
  useGSAP(() => {
    let t1 = gsap.timeline({
      repeat: -1,
      delay: 0.5,
    });
    t1.from("#loader span", {
      x: 40,
      stagger: 0.2,
      opacity: 0,
    });
  }, []);

  return (
    <div
      id="loader"
      className="h-screen w-full text-5xl font-thin space-x-3.5 flex  justify-center items-center"
    >
      {text.map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </div>
  );
}

export default Loading;
