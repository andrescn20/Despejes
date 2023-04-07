import React, { useState } from "react";
import InputField from "./InputField";
import RevisionContainer from "./RevisionContainer";
import Boton from "./Boton";
import AppData from "../AppData";
import { InlineMath } from "react-katex";
import PredefinedFactors from "./PredefinedFactors";
import Operation from "./Operation";

export default function Libre({
  equation,
  goBack,
  clearEquation,
  handleOperation,
  currentFactor,
  changeCurrentFactor,
  submitVariable,
  variable,
  handleVariableChange,
  handlePredefinedEquation,
}) {
  const [equationList] = useState(AppData.equationsList);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleNumbers, setToggleNumbers] = useState(false);
  const [factorList, setFactorList] = useState(["v", "d", "t"]);
  const [variables, setVariables] = useState([]);
  const [basicOperationsList] = useState(AppData.operationsList.basic);
  const [helperOperationsList] = useState(AppData.operationsList.helpers);

  const dropdown = () => {
    setToggleMenu(!toggleMenu);
  };
  const numbers = () => {
    setToggleNumbers(!toggleNumbers);
  };
  const setPredefinedEquation = (ecuacion) => {
    dropdown();
    setFactorList(ecuacion.factores);
    setVariables(ecuacion.variables);
    handlePredefinedEquation(ecuacion.ecuacion);
  };
  const displayBasicOperations = basicOperationsList.map((operation) => {
    return (
      <Operation
        className=""
        symbol={operation.symbol}
        name={operation.name}
        handleOperation={handleOperation}
        equation={equation}
        factor={currentFactor}
      />
    );
  });

  const displayHelperOperations = helperOperationsList.map((operation) => {
    return (
      <Operation
        symbol={operation.symbol}
        name={operation.name}
        handleOperation={handleOperation}
        equation={equation}
        factor={currentFactor}
      />
    );
  });

  const displayEquations = equationList.map((element, index) => {
    return (
      <li>
        <button
          onClick={() => setPredefinedEquation(element)}
          className="w-full px-4 py-3 bg-white shadow-md shadow-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <InlineMath math={element.ecuacion} />
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h2>Ecuaciones</h2>
        <div>
          <button
            onClick={dropdown}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Ecuaciones{" "}
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
            class={` bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700 ${
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
            <InputField equation={equation} />
          </div>
          <div className="mx-12">{displayHelperOperations}</div>
        </div>
        <div className="col-span-2 col-start-1 row-span-2">
          <PredefinedFactors
            changeCurrentFactor={changeCurrentFactor}
            factorList={factorList}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">{displayBasicOperations}</div>
        {/* <div className="flex justify-center my-6 col-span-2 row-span-3 col-start-3 row-start-3">
          <RevisionContainer
            submitVariable={submitVariable}
            handleVariableChange={handleVariableChange}
            equation={equation}
            variable={variable}
          />
        </div> */}
      </div>
    </>
  );
}
