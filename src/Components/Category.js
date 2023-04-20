import React from "react";
import { useState } from "react";
import { InlineMath } from "react-katex";
import useViewport from "../Hooks/Width";

const Category = ({
  equations,
  updateHistory,
  cat,
  dropdown,
  setCurrentFactor,
  setStepIndex,
  run
}) => {
  const [isCatOpen, setIsCatOpen] = useState(false);

  const toggleCategory = (name) => {
      if(name === "Cinemática"){
        setStepIndex(2);
      }
    setIsCatOpen(!isCatOpen);
  };

  let width = useViewport();

  const equationClick = (equation, i) => {
    if (i === 2) {
      setStepIndex(3);
    }
    if (width.width < 768) {
      toggleCategory();
      dropdown();
    }
    updateHistory(equation);
    setCurrentFactor(null);
  };
  const category = equations.map((equation, i) => {
    return (
      <li
        key={equation.latex}
        className={`${isCatOpen ? "" : "hidden"} ${
          i === 2 ? "equationBtn" : ""
        }`}
      >
        <button
          onClick={() => equationClick(equation, i)}
          className={`w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
            i % 2 == 0 ? "bg-neutral-200" : "bg-white"
          }`}
        >
          <InlineMath math={equation.latex} />
        </button>
      </li>
    );
  });

  const dropdownArrow = () => {
    if (!isCatOpen) {
      return (
        <svg
          className="w-23 h-2 ml-2"
          viewBox="0 0 24 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.25 2.47499L12 12.525L21.75 2.47499"
            stroke="#0B4C53"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    } else {
      return (
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6792 12.6599L12.0697 2.47549L2.18108 12.3891"
            stroke="#0B4C53"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    }
  };

  return (
    <div className="categoryBtn">
      <button
        className="bg-light_green flex text-dark_1 font-main py-2 px-6 font-semibold w-full justify-between items-center"
        onClick={ () => toggleCategory(cat.name)}
      >
        <p className="text-left">{cat.name}</p>
        <span>{dropdownArrow()}</span>
      </button>
      <ul className="text-sm bg-red-400">{category}</ul>
    </div>
  );
};

export default Category;
