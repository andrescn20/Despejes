import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import RevisionContainer from "./RevisionContainer";
import EquationsDropdown from "./EquationsDropdown";
import AppData from "../AppData";
import Operation from "./Operation";
import HelperOperation from "./HelperOperation";
import FactorBtn from "./FactorBtn";
import useViewport from "../Hooks/Width";
import Joyride, { ACTIONS, EVENTS, LIFECYCLE, STATUS } from "react-joyride";

export default function Predefinidas({ toggleLoading, run, setRun }) {
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
  const [currentFactor, setCurrentFactor] = useState("v");
  const [variable, setVariable] = useState(
    AppData.equationsList[0].equations[0].variables[0]
  );
  const [sympyEquation, setSympyEquation] = useState(
    AppData.equationsList[0].equations[0].sympy
  );

  //UX
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleNumbers, setToggleNumbers] = useState(true);

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, "", 0];
  let width = useViewport();

  //TOUR
  const [steps] = useState([
    {
      target: ".equationsDropdown",
      title: <div className="font-bold">
      Bienvenido al Tutorial
    </div>,
      content: "Haz click aquí para desplegar las categorías disponibles.",
      placement: "bottom",
      spotlightClicks: true,
      disableBeacon: true,
      hideFooter: true,
    },
    {
      target: ".categoryBtn",
      title: <div className="font-bold">
      Categorías
    </div>,
      content: "Haz click en una categoría para desplegar sus ecuaciones.",
      placement: "right",
      spotlightClicks: true,
      disableBeacon: true,
      hideFooter: true,
    },
    {
      target: ".equationBtn",
      title: <div className="font-bold">
      Ecuación
    </div>,
      content: "Haz click en una ecuación para seleccionarla.",
      placement: "right",
      spotlightClicks: true,
      disableBeacon: true,
      hideFooter: true,
    },
    {
      target: ".factors",
      title: <div className="font-bold">
      Factores Algebraicos
    </div>,
      content:
        "Estos son los factores disponibles para esta ecuación. Selecciona un factor haciendo click en el.",
      placement: "top",
      spotlightClicks: true,
      disableBeacon: true,
      hideFooter: true,
    },

    {
      target: ".operations",
      title: <div className="font-bold">
      Operaciones
    </div>,
      content:
        "Ahora que tenemos seleccionado un factor, podemos realizar operaciones con él. Haz click en el botón de la operación que deseas realizar a ambos lados de la ecuación.",
      placement: "right",
      spotlightClicks: true,
      disableBeacon: true,
      hideFooter: true,
    },
    {
      target: ".result",
      title: <div className="font-bold">
      Resultado
    </div>,
      content:
        "Tras elegir la operación, se ejecutará y se mostrará el resultado en esta sección.",
      placement: "right",
      spotlightClicks: true,
      disableBeacon: true,
      hideFooter: false,
    },
    {
      target: ".numericalFactors",
      title: <div className="font-bold">
      Factores Numéricos
    </div>,
      content:
        "En ocasiones, es conveniente elegir un factor numérico. Estos se encuentran en esta sección.",
      spotlightClicks: false,
      disableBeacon: true,
    },
    {
      target: ".helperOperations",
      title: <div className="font-bold">
      Operaciones Auxiliares
    </div>,
      content:
        "Además, es común que sea necesario expandir o simplificar algunas expresiones antes de continuar con las operaciones de despeje. Puedes accesar a estas opciones aquí.",
      placement: "bottom-start",
      disableBeacon: true,
    },
    {
      target: ".goBack",
      title: <div className="font-bold">
      Deshacer
    </div>,
      content:
        "Si deseas deshacer alguna operación, haz click en el botón de deshacer o en el botón de deshacer todo si deseas limpiar el historial de operaciones.",
      placement: "right",
      spotlightClicks: false,
      disableBeacon: true,
    },
    {
      target: ".lastStep",
      title: <div className="font-bold">
        ¡Felicidades!
      </div>,
      content:
        "Has completado el tutorial. Ahora puedes continuar con el despeje de la ecuación. Si deseas volver a ver el tutorial, haz click en el botón de ayuda de la esquina superior derecha.",
      placement: "bottom",
      spotlightClicks: false,
      disableBeacon: true,
    },
  ]);

  const [stepIndex, setStepIndex] = useState(0);

  const handleJoyrideCallback = (data) => {
    const { action, index, status, type } = data;
    console.log(`Action: ${action}`);
    console.log(`Index: ${index}`);
    console.log(`Status: ${status}`);
    console.log(`Type: ${type}`);
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

    if (action == "close") {
      setRun(false);
    }
    if(type == 'step:after'){
      setStepIndex(index + 1);
    }

  };

  useEffect(() => {
    console.log("stepIndex", stepIndex);
  }, [stepIndex]);

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
    setFactorList(AppData.equationsList[0].equations[0].factors);
    setCurrentFactor("v");
  };

  useEffect(() => {
    if (width > 768) {
      setToggleMenu(true);
    }
  }, [width]);

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
    setCurrentFactor(factor);
  };

  const updateNumericalFactor = (e) => {
    updateFactor(e.target.value);
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

  const yBasicOperations = basicOperationsList.map((operation) => {
    return (
      <Operation
        className=""
        toggleLoading={toggleLoading}
        symbol={operation.symbol}
        name={operation.name}
        updateEquation={updateEquation}
        equation={sympyEquation}
        factor={currentFactor}
        setStepIndex={setStepIndex}
      />
    );
  });

  const yNumbers = numbers.map((number) => {
    if (number !== "") {
      return (
        <button
          onClick={updateNumericalFactor}
          value={number}
          className={`text-light font-numbers
    border-[1px] rounded-md mx-2 my-1 py-1 md:py-2 sm:w-16 hover:scale-105 flex items-center justify-center ${
      number == currentFactor ? "bg-green text-black" : ""
    }`}
        >
          {number}
        </button>
      );
    }
    return <div></div>;
  });

  const HelperOperations = helperOperationsList.map((operation) => {
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
        <FactorBtn
          latexFactor={factor.lx}
          sympyFactor={factor.sy}
          currentFactor={currentFactor}
          updateFactor={updateFactor}
          setStepIndex={setStepIndex}
        />
      );
    }
  });

  // COMPONENT RETURN STATEMENT
  return (
    <div className="flex flex-col md:flex-row grow items-start gap-12 max-w-7xl mx-auto">
      <EquationsDropdown
        run={run}
        stepIndex={stepIndex}
        setStepIndex={setStepIndex}
        toggleMenu={toggleMenu}
        dropdown={dropdown}
        equationList={equationList}
        updateHistory={updateHistory}
        setCurrentFactor={setCurrentFactor}
      />
      {/* INPUT FIELD AND HELPERS */}
      <div className="flex flex-col md:grow md:mt-0 mt-12 w-full">
        <div className="grid grid-cols-[1fr_minmax(300px,600px)_1fr] mr-4 ">
          <div className="helperOperations mx-4 row-start-1 items-end col-start-2 flex relative z-20 translate-x-4 ">
            {HelperOperations}
          </div>
          <div className="result lastStep row-start-2 col-start-2 flex grow justify-center relative z-30 translate-x-6 mr-4">
            <InputField equation={latexEquation} />
            <div className="goBack flex flex-col gap-2 mt-2">
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
        {/* FACTORS AND OPERATIONS */}
        <div className="grow flex items-center justify-center ">
          {/* FACTORS */}
          <div className="factors flex justify-center flex-wrap-reverse md:gap-4 px-8 my-2">
            {factors}
          </div>
        </div>
        {/* OPERATIONS */}
        <div className="grid md:grid-cols-2 max-w-xl self-center">
          <div className="numericalFactors grid grid-cols-3 xs:grid-cols-3">
            {yNumbers}
          </div>
          <div className="operations grid grid-cols-3 row-start-1 sm:grid-cols-2 sm:grid-rows-4 sm:col-start-2">
            {yBasicOperations}
          </div>
        </div>
      </div>
      <Joyride
        callback={handleJoyrideCallback}
        stepIndex={stepIndex}
        steps={steps}
        run={run}
        debug={false}
        continuous={true}
        hideCloseButton={true}
        disableOverlayClose = {true}
        hideBackButton = {true}
        showProgress = {false}
        spotlightPadding={5}
      />
    </div>
  );
}
