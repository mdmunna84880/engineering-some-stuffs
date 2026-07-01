/** @format */

import { evaluate } from "mathjs";
import { useState } from "react";

const expressions = [
  1,
  2,
  3,
  "+",
  4,
  5,
  6,
  "-",
  7,
  8,
  9,
  "*",
  0,
  ".",
  "=",
  "/",
  "(",
  ")",
  "AC",
  "Clr",
];
function App() {
  const [currExp, setCurrExp] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    switch (value) {
      case "AC":
        setCurrExp("");
        setResult("");
        break;
      case "Clr":
        setCurrExp(currExp.slice(0, -1));
        break;
      case "=":
        setResult(evaluate(currExp));
        break;
      default:
        setCurrExp(currExp + value);
        break;
    }
  };

  return (
    <>
      <h1>Calculator</h1>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-end items-center gap-4 border border-slate-400 w-110 h-120">
          <div className="w-full h-full border-b-2 border-slate-400">
            <p className="w-full h-1/2 text-4xl flex items-end pb-2 border-t border-slate-200">
              {result ? result : currExp}
            </p>
          </div>
          <div className="flex items-center justify-around flex-wrap gap-4 w-100 h-100 mb-4">
            {expressions.map((item, index) => (
              <button
                key={index}
                className=" flex-1 text-lg px-8 py-2 bg-slate-300 hover:bg-slate-400 active:bg-slate-500 active:text-white active:scale-95 rounded-md"
                onClick={() => handleClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
