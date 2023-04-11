import React, { useEffect } from "react";
import { useState } from "react";
import { InlineMath } from "react-katex";

const FactorBtn = ({ latexFactor, sympyFactor,  currentFactor, updateFactor }) => {

    const triggerFactorUpdate = () => {
        updateFactor(sympyFactor);
    }

  return (
    <div className="font-numbers text-lg font-light text-light flex justify-center py-2 px-2">
      <button
        onClick={triggerFactorUpdate}
        key={`${new Date().getTime()}`}
        value={sympyFactor}
        className={`hover:scale-105 px-2 py-1 sm:px-4 sm:py-2 factor border-[1px] border-light rounded-lg ${
          sympyFactor == currentFactor ? "bg-green text-black" : ""
        }`}
      >
        <InlineMath math={latexFactor} />
      </button>
    </div>
  );
};

export default FactorBtn;
