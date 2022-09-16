import React from 'react';
import InputField from './Components/InputField';
import Sumar from './Components/Sumar';
import Multiplicar from './Components/Multiplicar';
import Revision from './Components/Revision';
import Dividir from './Components/Dividir';
import Potencia from './Components/Potencia';
import Factores from './Components/Factores';

function App() {
  const [equation, setEquation] = React.useState('v=d/t');
  const [currentEquation, setCurrentEquation] = React.useState('v=d/t');
  const [variable, setVariable] = React.useState('t');
  const [currentVariable, setcurrentVariable] = React.useState('t');

  function changeEquationState(currentEquation) {
    setEquation(currentEquation);
  }

  function changeVariableState(currentVariable) {
    setVariable(currentVariable);
  }

  const submitEquation = (e) => {
    e.preventDefault();
    changeEquationState(currentEquation);
  };

  const submitVariable = (e) => {
    e.preventDefault();
    changeVariableState(currentVariable);
  };

  const handleEquationChange = (e) => {
    setCurrentEquation(e.target.value);
  };

  const handleVariableChange = (e) => {
    setcurrentVariable(e.target.value);
  };

  return (
    <div className='App'>
      <h2>Modo Desarrollo</h2>
      <p>Introduzca la ecuación a manipular</p>
      <form onSubmit={submitEquation}>
        <input
          type='text'
          placeholder='v=d/t'
          onChange={handleEquationChange}
        ></input>
        <button type='submit'>Añadir Ecuación </button>
      </form>

      <InputField equation={equation} />

      <Sumar
        name={'Sumar'}
        handleClick={changeEquationState}
        equation={equation}
      />

      <Multiplicar
        name={'Multiplicar'}
        handleClick={changeEquationState}
        equation={equation}
      />

      <Dividir
        name={'Dividir'}
        handleClick={changeEquationState}
        equation={equation}
      />

      <Potencia
        name={'Potencia'}
        handleClick={changeEquationState}
        equation={equation}
      />
      <Factores equation={equation} />
      <p>Revisión:</p>
      <p>Elija la variable para la cuál desea despejar</p>
      <form onSubmit={submitVariable}>
        <input
          type='text'
          placeholder='t'
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
  );
}

export default App;
