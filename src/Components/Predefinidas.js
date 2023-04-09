import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import RevisionContainer from "./RevisionContainer";
import Boton from "./Boton";
import AppData from "../AppData";
import { InlineMath } from "react-katex";
import Operation from "./Operation";
import Botones from "./Botones";

export default function Libre({}) {
  //STATE VARIABLES

  //Data:
  const [equationList] = useState(AppData.equationsList);
  const [factorList, setFactorList] = useState(
    AppData.equationsList[0].factors
  );
  const [basicOperationsList] = useState(AppData.operationsList.basic);
  const [helperOperationsList] = useState(AppData.operationsList.helpers);

  //APP Logic
  const [history, setHistory] = useState([
    {
      latex: AppData.equationsList[0].latex,
      sympy: AppData.equationsList[0].sympy,
    },
  ]);
  const [latexEquation, setLatexEquation] = useState(
    AppData.equationsList[0].latex
  );
  const [currentFactor, setCurrentFactor] = useState();
  const [variable, setVariable] = useState(AppData.equationsList[0].variable);
  const [sympyEquation, setSympyEquation] = useState(
    AppData.equationsList[0].sympy
  );

  //UX
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleNumbers, setToggleNumbers] = useState(true);

  let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 0,];

  //FUNCTIONS

  //APP Logic
  const updateCurrentFactor = (currentFactor) => {
    setCurrentFactor(currentFactor);
  };

  const clearEquation = () => {
    setHistory([
      {
        latex: AppData.equationsList[0].latex,
        sympy: AppData.equationsList[0].sympy,
      },
    ]);
    setCurrentFactor("");
  };

  useEffect(() => console.log(history));

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
    dropdown();
    // setVariables(ecuacion.variables);
  };
  const displayBasicOperations = basicOperationsList.map((operation) => {
    return (
      <Operation
        className=""
        symbol={operation.symbol}
        name={operation.name}
        updateEquation={updateEquation}
        equation={sympyEquation}
        factor={currentFactor}
      />
    );
  });

  const displayNumbers = numbers.map((number) => {
    return <button className="text-light font-numbers
    border-[1px] rounded-md mx-2 my-1 py-2">{number}</button>;
  });
  const displayHelperOperations = helperOperationsList.map((operation) => {
    return (
      <Operation
        symbol={operation.symbol}
        name={operation.name}
        updateEquation={updateEquation}
        equation={sympyEquation}
        factor={currentFactor}
      />
    );
  });

  const displayEquations = equationList.map((element) => {
    return (
      <li key={element.ecuacion}>
        <button
          onClick={() => updateHistory(element)}
          className="w-full px-4 py-3 bg-white shadow-md shadow-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <InlineMath math={element.latex} />
        </button>
      </li>
    );
  });

  const updateFactor = (e) => {
    console.log(e.target.value);
    setCurrentFactor(e.target.value);
  };
  const botones = factorList.map((factor) => {
    if (factor === "") {
      return null;
    } else {
      return (
        <div className="font-numbers text-lg font-light text-light grow flex justify-center py-2 px-2">
          <button
            onClick={updateFactor}
            key={`${new Date().getTime()}${factor}`}
            value={factor}
            className={`px-4 py-2 factor border-[1px] border-light rounded-lg shadow-sm shadow-gray-500 ${
              factor == currentFactor ? "bg-green text-black" : ""
            }`}
          >
            {/* <BlockMath math={factor}/> */}
            {factor}
          </button>
        </div>
      );
    }
  });

  // COMPONENT RETURN STATEMENT
  return (
    <>
      <div className="flex flex-col items-center col-span-2 gap-4  row-span-3">
        <div>
          <button
            onClick={dropdown}
            className="text-light bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Ecuaciones
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="dropdown"
            className={` bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700 ${
              toggleMenu ? "flex flex-col" : "hidden"
            }`}
          >
            <ul className="py-2 text-sm absolute text-gray-700 dark:text-gray-200 z-50  border-blue-700">
              {displayEquations}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-5 w-full max-w-3xl">
          <div>
            <Boton onClick={goBack} text="Deshacer" isRed={true} />
            <Boton onClick={clearEquation} text="Limpiar" isRed={true} />
          </div>
          <div className=" col-start-2 col-span-3">
            <InputField equation={latexEquation} />
          </div>
          <div className="mx-12">{displayHelperOperations}</div>
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-2 col-start-1 row-span-2">
            <div className="flex justify-center flex-wrap gap-4 px-8">
              {botones}
            </div>
          </div>
          <div className="grid grid-cols-3">{displayNumbers}</div>
          <div className="grid grid-cols-2">{displayBasicOperations}</div>
        </div>
      </div>
      <div className="col-span-2 col-start-1 row-span-2">
        {/* <Botones
          factors={factorList}
          setCurrentFactor={updateCurrentFactor}
        />  */}
      </div>
      <div className="flex justify-center my-6 col-span-2 row-span-3 col-start-3 row-start-3">
        {/* <RevisionContainer
          submitVariable={submitVariable}
          handleVariableChange={handleVariableChange}
          equation={equation}
          variable={variable}
        /> */}
      </div>
    </>
  );
}
