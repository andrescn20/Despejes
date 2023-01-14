import React, { useEffect } from 'react';
import InputField from './Components/InputField';
import Sumar from './Components/Sumar';
import Restar from './Components/Restar';
import Multiplicar from './Components/Multiplicar';
import Revision from './Components/Revision';
import Dividir from './Components/Dividir';
import Potencia from './Components/Potencia';
import Raiz from './Components/Raiz';
import Factores from './Components/Factores';

function App() {
  const initialEquation = 'x_f - x_i = v_i*t+(1/2)(a)(t^2)';
  const initialVariable = 'a';

  //Determina le ecuación inicial
  const [equation, setEquation] = React.useState(initialEquation);

  //Ecuación temperal que el usuario digita y luego añade
  const [changingEquation, setChangingEquation] =
    React.useState(initialEquation);

  //Variable que se utiliza como referencia para la revisión automática
  const [variable, setVariable] = React.useState(initialVariable);

  //Variable actual
  const [currentVariable, setcurrentVariable] = React.useState(initialVariable);

  //Operacion actual
  const [currentFactor, setCurrentFactor] = React.useState('1');

  //Registro de operaciones
  const [history, setHistory] = React.useState([initialEquation]);

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
  };

  const clearEquation = () => {};

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
    <div className='App'>
      <div className='operations'>
        <h2>Operaciones</h2>
        <p>Introduzca la ecuación para la cuál desea despejar</p>
        <form className='operationForm' onSubmit={submitEquation}>
          <input
            className='inputOperation'
            type='text'
            placeholder='x_f - x_i = v_i*t+(1/2)(a)(t^2)'
            onChange={handleEquationChange}
          ></input>
          <button className='addEquation' type='submit'>
            Añadir Ecuación{' '}
          </button>
        </form>
        <InputField equation={equation} />
        <div className='displayBtns'>
          <button onClick={goBack}> Deshacer </button>
          <button onClick={clearEquation}> Limpiar </button>
        </div>
        <Factores
          equation={equation}
          changeCurrentFactor={changeCurrentFactor}
        />
        <div className='operationBtns'>
          <Sumar
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
        </div>
      </div>

      <div className='revision'>
        <h2>Revisión</h2>
        <p>Elija la variable para la cuál desea despejar</p>
        <form onSubmit={submitVariable}>
          <input
            type='text'
            placeholder='a'
            onChange={handleVariableChange}
          ></input>
          <button type='submit'>Elegir variable </button>
        </form>
        <p>
          {' '}
          A continuación, se le presentan las operaciones que puede utilizar.
          Escriba la variable/número que la operación va a utilizar.{' '}
        </p>
        <Revision equation={equation} variable={variable} />
      </div>
    </div>
  );
}

export default App;
