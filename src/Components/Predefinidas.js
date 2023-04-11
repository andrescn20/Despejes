import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import RevisionContainer from "./RevisionContainer";
import EquationsDropdown from "./EquationsDropdown";
import AppData from "../AppData";
import { InlineMath } from "react-katex";
import Operation from "./Operation";
import HelperOperation from "./HelperOperation";
import FactorBtn from "./FactorBtn";

export default function Libre({toggleLoading}) {
  //STATE VARIABLES

  //Data:
  const [equationList] = useState(AppData.equationsList);
  const [factorList, setFactorList] = useState(
    AppData.equationsList[0].equations[0].factors
  );
  const [basicOperationsList] = useState(AppData.operationsList.basic);
  const [helperOperationsList] = useState(AppData.operationsList.helpers);

  //APP Logic
  const [history, setHistory] = useState([
    {
      latex: AppData.equationsList[0].equations[0].latex,
      sympy: AppData.equationsList[0].equations[0].sympy,
    },
  ]);
  const [latexEquation, setLatexEquation] = useState(
    AppData.equationsList[0].equations[0].latex
  );
  const [currentFactor, setCurrentFactor] = useState('v');
  const [variable, setVariable] = useState(
    AppData.equationsList[0].equations[0].variables[0]
  );
  const [sympyEquation, setSympyEquation] = useState(
    AppData.equationsList[0].equations[0].sympy
  );

  //UX
  const [toggleMenu, setToggleMenu] = useState(true);
  const [toggleNumbers, setToggleNumbers] = useState(true);

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, "=)", 0];

  //FUNCTIONS

  //APP Logic
  const updateCurrentFactor = (currentFactor) => {
    setCurrentFactor(currentFactor);
  };

  const clearAll = () => {
    setHistory([
      {
        latex: AppData.equationsList[0].equations[0].latex,
        sympy: AppData.equationsList[0].equations[0].sympy,
      },
    ]);
    setCurrentFactor("v");
  };

  // useEffect(() => console.log(history));

  const goBack = () => {
    if (history.length === 1) {
      alert("No quedan acciones por deshacer");
    } else {
      setHistory((history) => history.slice(0, history.length - 1));
    }
  };

  useEffect(() => {
    setLatexEquation(history[history.length - 1].latex);
    setSympyEquation(history[history.length - 1].sympy);
  }, [history]);

  const updateEquation = (latexEquation, sympyEquation) => {
    setHistory((history) => [
      ...history,
      { latex: latexEquation, sympy: sympyEquation },
    ]);
  };

  const updateFactor = (factor) => {
    console.log(factor);
    setCurrentFactor(factor);
  };

  //Actualiza la variable actual
  const updateCurrentVariable = (currentVariable) => {
    setVariable(currentVariable);
  };

  //Actualiza la variable actual
  const submitVariable = (e) => {
    e.preventDefault();
    updateCurrentVariable(variable);
  };
  const handleVariableChange = (e) => {
    setVariable(e.target.value);
  };

  const dropdown = () => {
    setToggleMenu(!toggleMenu);
  };
  // const numbers = () => {
  //   setToggleNumbers(!toggleNumbers);
  // };

  const updateHistory = (equation) => {
    setHistory((history) => [
      ...history,
      { latex: equation.latex, sympy: equation.sympy },
    ]);
    setFactorList(equation.factors);
    // setVariables(ecuacion.variables);
  };

  const displayBasicOperations = basicOperationsList.map((operation) => {
    return (
      <Operation
        className=""
        toggleLoading={toggleLoading}
        symbol={operation.symbol}
        name={operation.name}
        updateEquation={updateEquation}
        equation={sympyEquation}
        factor={currentFactor}
      />
    );
  });

  const displayNumbers = numbers.map((number) => {
    return (
      <button
      onClick={updateFactor}
      value={number}
        className={`text-light font-numbers
    border-[1px] rounded-md mx-2 my-1 py-2 w-16 hover:scale-105 ${
      number == currentFactor ? "bg-green text-black" : ""
    }`}
      >
        {number}
      </button>
    );
  });

  const displayHelperOperations = helperOperationsList.map((operation) => {
    return (
      <HelperOperation
      toggleLoading={toggleLoading}
        symbol={operation.symbol}
        name={operation.name}
        updateEquation={updateEquation}
        equation={sympyEquation}
        factor={currentFactor}
      />
    );
  });




  const factors = factorList.map((factor) => {
    if (factor === "") {
      return null;
    } else {
      return (
        <FactorBtn latexFactor={factor.lx} sympyFactor={factor.sy} currentFactor={currentFactor} updateFactor={updateFactor}/>
      );
    }
  });

  // COMPONENT RETURN STATEMENT
  return (
    <div className="flex flex-col md:flex-row grow items-start gap-12">
      <EquationsDropdown toggleMenu={toggleMenu} dropdown={dropdown} equationList={equationList} updateHistory={updateHistory}/>
      <div className="flex flex-col grow ">
          <div className="grid grid-cols-[1fr_minmax(300px,600px)_1fr] grid-rows- mr-4 ">
            <div className="mx-4 row-start-1 items-end col-start-2 flex relative z-20 translate-x-4 ">
              {displayHelperOperations}
            </div>
            <div className="row-start-2 col-start-2 flex grow justify-center relative z-30 translate-x-6">
              <InputField equation={latexEquation} />
              <div className="flex flex-col gap-2 mt-2">
                <button
                  onClick={goBack}
                  className="relative z-10 bg-green w-12 h-8 -translate-x-2 flex items-center justify-center rounded-lg py-2"
                >
                  <svg
                    className="h-6 ml-1"
                    viewBox="0 0 23 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 15.25C1.5 20.7729 5.97715 25.25 11.5 25.25C17.0229 25.25 21.5 20.7729 21.5 15.25C21.5 9.72715 17.0229 5.25 11.5 5.25C9.55087 5.25 7.73207 5.80761 6.19429 6.77203"
                      stroke="#162636"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.04794 1.37244L5.87314 6.29896C5.59434 6.93051 5.8803 7.6685 6.51186 7.9473L11.4384 10.1221"
                      stroke="#162636"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={clearAll}
                  className="bg-green w-12 h-8 -translate-x-2 flex items-center justify-center rounded-lg py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 ml-1"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none" />
                    <line
                      x1="91.5"
                      y1="99.5"
                      x2="159.4"
                      y2="167.4"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="18"
                    />
                    <path
                      d="M216,215.8H72.1L35,178.7a15.9,15.9,0,0,1,0-22.6L148.1,43a15.9,15.9,0,0,1,22.6,0L216,88.2a16.2,16.2,0,0,1,0,22.7L111,215.8"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="20"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        <div className="grow flex items-center justify-center">
          <div className="flex justify-center flex-wrap-reverse gap-4 px-8">
            {factors}
          </div>
        </div>
        <div className="grid grid-cols-2 max-w-xl self-center">
          <div className="grid grid-cols-3">{displayNumbers}</div>
          <div className="grid grid-cols-2">{displayBasicOperations}</div>
        </div>
      </div>
    </div>
  );
}
