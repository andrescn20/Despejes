import React from "react";
import Category from "./Category";

const EquationsDropdown = ({
  dropdown,
  toggleMenu,
  equationList,
  updateHistory,
  setCurrentFactor,
  stepIndex,
  setStepIndex,
  run
}) => {

  const handleEquationsDropdown = () => {
    dropdown();
      setStepIndex(1);

  };

  const dropdownArrow = () => {
    if (!toggleMenu) {
      return (
        <svg
          className="w-4 h-4 ml-2"
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

  const displayCategories = equationList.map((cat) => {
    return (
        <Category run={run} setStepIndex={setStepIndex} equations={cat.equations} updateHistory={updateHistory} cat={cat} dropdown={dropdown} setCurrentFactor={setCurrentFactor}/>
    );
  });

  return (
    <div className="absolute z-40 md:relative md:h-full md:max-w-[360px] w-full">
      <button
                onClick={handleEquationsDropdown}
        className={`equationsDropdown text-dark_1 font-main font-bold bg-dark_green hover:text-white w-full py-2 flex px-12 items-center justify-center rounded-none ${
          toggleMenu ? "md:rounded-tr-lg xl:rounded-t-lg " : "md:rounded-r-lg xl:rounded-lg "
        }`}
      >
        ECUACIONES
        {dropdownArrow()}
      </button>
      <div
        className={`w-full rounded-b-lg ${
          toggleMenu ? "flex flex-col" : "hidden"
        }`}
      >    
          {displayCategories}
      </div>
    </div>
  );
};
export default EquationsDropdown;
