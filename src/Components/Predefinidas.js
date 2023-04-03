import React, { useState } from 'react';
import InputField from './InputField';
import RevisionContainer from './RevisionContainer';
import Boton from './Boton';
import AppData from '../AppData';
import { InlineMath } from 'react-katex';
import PredefinedFactors from './PredefinedFactors';
import Operation from './Operation';

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
  const [equationList, setEquationList] = useState(AppData.equationsList);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleNumbers, setToggleNumbers] = useState(false);
  const [factorList, setFactorList] = useState(['v', 'd', 't']);
  const [variables, setVariables] = useState([]);
  const [operationsList] = useState(AppData.operationsList);

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
  const displayOperations = operationsList.map((operation) => {
    return (
      <Operation
        className='self-center'
        name={operation}
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
          className='w-full px-4 py-3 bg-white shadow-md shadow-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
        >
          <InlineMath math={element.ecuacion} />
        </button>
      </li>
    );
  });

  return (
    <>
      <div className='flex flex-col items-center col-span-2 gap-4  row-span-3'>
        <h2>Ecuaciones</h2>
        <p>Elija la ecuación para la cuál desea despejar</p>
        <div>
          <button
            onClick={dropdown}
            class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            type='button'
          >
            Dropdown button{' '}
            <svg
              className='w-4 h-4 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M19 9l-7 7-7-7'
              ></path>
            </svg>
          </button>
          <div
            id='dropdown'
            class={` bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700 ${
              toggleMenu ? 'flex flex-col' : 'hidden'
            }`}
          >
            <ul className='py-2 text-sm absolute text-gray-700 dark:text-gray-200 z-50  border-blue-700'>
              {displayEquations}
            </ul>
          </div>
        </div>
        <InputField equation={equation} />
        <div className=''>
          <Boton onClick={goBack} text='Deshacer' isRed={true} />
          <Boton onClick={clearEquation} text='Limpiar' isRed={true} />
        </div>
      </div>
      <div className='grid grid-cols-3 justify-center gap-2 col-span-2 row-span-2 col-start-3'>
        {displayOperations}
      </div>
      <div className='col-span-2 col-start-1 row-span-2'>
        <PredefinedFactors
          changeCurrentFactor={changeCurrentFactor}
          factorList={factorList}
        />
      </div>
      <div className='flex justify-center my-6 col-span-2 row-span-3 col-start-3 row-start-3'>
        <RevisionContainer
          submitVariable={submitVariable}
          handleVariableChange={handleVariableChange}
          equation={equation}
          variable={variable}
        />
      </div>
    </>
  );
}
