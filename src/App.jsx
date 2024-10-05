import Lenis from "lenis";
import "./App.css";
import { useEffect } from "react";
import "./index.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="w-full  bg-zinc-900">
      <div className="main grid grid-cols-8 p-8 grid-rows-20 gap-2 overflow-hidden">
        {/* <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelenisportrait.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelenis2.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelenisportrait2.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelenisportrait4.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelenisportrait5.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait3.avif" alt="" />
        </div> */} 
        <p className=" font-['Give_You_Glory'] fixed w-full text-center tracking-tight text-9xl font-semibold bg-gradient-to-br p-9 from-emerald-400 to-emerald-700-400 bg-clip-text text-transparent   top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
          Darkroom Engineering{" "}
        </p>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 7 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 2, "--c": 2 }}
        >
          <img src="./imagelenisportrait5.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 2, "--c": 6 }}
        >
          <img src="./imagelenisportrait4.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 3, "--c": 4 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 3, "--c": 8 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 4, "--c": 1 }}
        >
          <img src="./imagelensiportrait6.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 4, "--c": 6 }}
        >
          <img src="./imagelensiportrait9.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 5, "--c": 2 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 5, "--c": 7}}
        >
          <img src="./imagelensiportrait4.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 6, "--c": 3 }}
        >
          <img src="./imagelensiportrait3.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 6, "--c": 3 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 7, "--c": 3 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 7, "--c": 8 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 8, "--c": 3 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 8, "--c": 5 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 8, "--c": 3 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 8, "--c": 5 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 8, "--c": 3 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        {/* <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 8, "--c": 6 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div> */}
        {/* <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div> */}
        {/* <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait7.avif" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./imagelensiportrait8.avif" alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default App;
