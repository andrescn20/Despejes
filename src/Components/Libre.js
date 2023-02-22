import React from 'react';
import InputField from './InputField';
import Sumar from './Operaciones/Sumar';
import Restar from './Operaciones/Restar';
import Multiplicar from './Operaciones/Multiplicar';
import RevisionContainer from './RevisionContainer';
import Dividir from './Operaciones/Dividir';
import Potencia from './Operaciones/Potencia';
import Raiz from './Operaciones/Raiz';
import Factores from './Factores';
import Boton from './Boton';
import Simplificar from './Operaciones/Simplificar';
import Expandir from './Operaciones/Expandir';

export default function Libre({
  submitEquation,
  handleEquationChange,
  equation,
  goBack,
  clearEquation,
  handleOperation,
  currentFactor,
  changeCurrentFactor,
  submitVariable,
  variable,
  handleVariableChange,
}) {
  return (
    <>
      <div className='flex flex-col items-center col-span-2 gap-4  row-span-3'>
        <h2>Operaciones</h2>
        <p>Introduzca la ecuación para la cuál desea despejar</p>
        <form className='flex flex-col px-8' onSubmit={submitEquation}>
          <input
            className='bg-slate-200 p-2 mb-4 mx-2 rounded-xl font-medium text-center w-96 shadow-lg self-center border-2-white'
            type='text'
            placeholder='x_f - x_i = v_i*t+(1/2)(a)(t^2)'
            onChange={handleEquationChange}
          ></input>
          <Boton text='Añadir Ecuación' type='submit' />
        </form>
        <InputField equation={equation} />
        <div className=''>
          <Boton onClick={goBack} text='Deshacer' isRed={true} />
          <Boton onClick={clearEquation} text='Limpiar' isRed={true} />
        </div>
      </div>
      <div className='grid grid-cols-3 justify-center gap-2 col-span-2 row-span-2 col-start-3'>
        <Sumar
          className='self-center'
          name={'Sumar'}
          handleOperation={handleOperation}
          equation={equation}
          factor={currentFactor}
        />
        <Restar
          name={'Restar'}
          handleOperation={handleOperation}
          equation={equation}
          factor={currentFactor}
        />
        <Multiplicar
          name={'Multiplicar'}
          handleOperation={handleOperation}
          equation={equation}
          factor={currentFactor}
        />
        <Dividir
          name={'Dividir'}
          handleOperation={handleOperation}
          equation={equation}
          factor={currentFactor}
        />
        <Potencia
          name={'Potencia'}
          handleOperation={handleOperation}
          equation={equation}
          factor={currentFactor}
        />
        <Raiz
          name={'Raiz'}
          handleOperation={handleOperation}
          equation={equation}
          factor={currentFactor}
        />
        <Simplificar
          name={'Simplificar'}
          handleOperation={handleOperation}
          equation={equation}
          factor={currentFactor}
        />
        <Expandir
          name={'Expandir'}
          handleOperation={handleOperation}
          equation={equation}
          factor={currentFactor}
        />
      </div>
      <div className='col-span-2 col-start-1 row-span-2'>
        <Factores
          equation={equation}
          changeCurrentFactor={changeCurrentFactor}
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
