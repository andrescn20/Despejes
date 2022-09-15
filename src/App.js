import React from 'react';
import InputField from './Components/InputField';
import Sumar from './Components/Sumar';
import Multiplicar from './Components/Multiplicar';
import Revision from './Components/Revision';

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
      <p>Introduzca la ecuacion a manipular</p>
      <form onSubmit={submitEquation}>
        <input
          type='text'
          placeholder='v=d/t'
          onChange={handleEquationChange}
        ></input>
        <button type='submit'>Añadir Ecuación </button>
      </form>

      <InputField equation={equation} />

      <p>Elija la variable para la que desea despejar</p>
      <form onSubmit={submitVariable}>
        <input
          type='text'
          placeholder='t'
          onChange={handleVariableChange}
          // value={variable}
        ></input>
        <button type='submit'>Elegir variable </button>
      </form>
      <p>
        {' '}
        A continuación, se le presentan las operaciones que puede utilizar.
        Escriba la variable/número que la operación va a utilizar.{' '}
      </p>
      <Sumar
        name={'Sumar'}
        handleClick={changeEquationState}
        equation={equation}
      />
      <Multiplicar
        name={'Multiplicar'}
        handleClick={changeVariableState}
        equation={equation}
      />
      <p>Solución Final:</p>
      <Revision equation={equation} variable={variable} />
    </div>
  );
}

// const equation = new Equation('d=v*t');
// equation.setEquation();
// console.log(equation.eq);
// //Despejar v
// equation.div('t');
// console.log(equation.eq);
// //Despejar t
// equation.mult('t');
// equation.div('v');
// console.log(equation.eq);
// //Eleva al cuadrado
// equation.square();
// console.log(equation.eq);
// //Saca raíz
// equation.root();
// console.log(equation.eq);
// //Simplifica
// equation.simplify();
// console.log(equation.eq);
// //Saca raíz de nuevo
// equation.root();
// console.log(equation.eq);
// //Imprime el latex
// console.log(equation.Latex);

export default App;
