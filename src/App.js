import React, { useEffect, useState } from 'react';
import InputField from './Components/InputField';
import Sumar from './Components/Operaciones/Sumar';
import Restar from './Components/Operaciones/Restar';
import Multiplicar from './Components/Operaciones/Multiplicar';
import RevisionContainer from './Components/RevisionContainer';
import Dividir from './Components/Operaciones/Dividir';
import Potencia from './Components/Operaciones/Potencia';
import Raiz from './Components/Operaciones/Raiz';
import Factores from './Components/Factores';
import Boton from './Components/Boton';
import Simplificar from './Components/Operaciones/Simplificar';
import Expandir from './Components/Operaciones/Expandir';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const initialEquation = 'x_f - x_i = v_i*t+(1/2)(a)(t^2)';
  const initialVariable = 'a';

  //Determina le ecuación inicial
  const [equation, setEquation] = useState(initialEquation);

  //Ecuación temperal que el usuario digita y luego añade
  const [changingEquation, setChangingEquation] = useState(initialEquation);

  //Variable que se utiliza como referencia para la revisión automática
  const [variable, setVariable] = useState(initialVariable);

  //Variable actual
  const [currentVariable, setcurrentVariable] = useState(initialVariable);

  //Operacion actual
  const [currentFactor, setCurrentFactor] = useState('1');

  //Registro de operaciones
  const [history, setHistory] = useState([initialEquation]);

  //Actualiza la operación actual a utilizar
  function changeCurrentFactor(currentFactor) {
    setCurrentFactor(currentFactor);
  }

  //Modifica la ecuación actual
  function addToHistory() {
    setHistory((history) => [...history, changingEquation]);
  }

  //Actualiza la variable actual
  function updateCurrentVariable(currentVariable) {
    setVariable(currentVariable);
  }

  const submitEquation = (e) => {
    e.preventDefault();
    addToHistory(changingEquation);
    setCurrentFactor('');
  };

  const clearEquation = () => {
    addToHistory('');
    setCurrentFactor('');
  };

  const goBack = () => {
    if (history.length === 1) {
      alert('No quedan acciones por deshacer');
    } else {
      setHistory((history) => history.slice(0, history.length - 1));
    }
  };
  //Cada vez que cambia la ecuación actual, se agrega al historial,
  useEffect(() => {}, [history]);

  // useEffect(() => {
  //   console.log(equation);
  // }, [equation]);

  useEffect(() => {
    setEquation(history[history.length - 1]);
  }, [history]);

  //Actualiza la variable actual
  const submitVariable = (e) => {
    e.preventDefault();
    updateCurrentVariable(currentVariable);
  };

  const handleEquationChange = (e) => {
    setChangingEquation(e.target.value);
  };

  const handleVariableChange = (e) => {
    setcurrentVariable(e.target.value);
  };

  const handleOperation = (modifiedEquation) => {
    setHistory((history) => [...history, modifiedEquation]);
  };

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='grow justify-center'>
        <div className='grid grid-cols-4 items-center gap-4 my-12 px-12'>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
