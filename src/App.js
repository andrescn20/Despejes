import React from 'react';
import InputField from './Components/InputField';
import Sumar from './Components/Sumar';
import Multiplicar from './Components/Multiplicar';
import Revision from './Components/Revision';
import Dividir from './Components/Dividir';
import Potencia from './Components/Potencia';
import Factores from './Components/Factores';
import Management from './Components/Management';

function App() {
  const [equation, setEquation] = React.useState(
    'x_f - x_i = v_i*t+(1/2)(a)(t^2)'
  );
  const [currentEquation, setCurrentEquation] = React.useState(
    'x_f - x_i = v_i*t+(1/2)(a)(t^2)'
  );
  const [variable, setVariable] = React.useState('a');
  const [currentVariable, setcurrentVariable] = React.useState('t');
  const [currentOperation, setCurrentOperation] = React.useState('1');
  const [history, setHistory] = React.useState([]);

  function changeHistory() {
    setHistory(history.pop());
  }

  function changeCurrentOperation(currentOperation) {
    setCurrentOperation(currentOperation);
  }

  function changeEquationState(currentEquation) {
    setEquation(currentEquation);
  }

  function changeVariableState(currentVariable) {
    setVariable(currentVariable);
  }

  const submitEquation = (e) => {
    e.preventDefault();
    changeEquationState(currentEquation);
    let newHistory = history.concat(currentEquation.eq);
    setHistory(newHistory);
    console.log(history);
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
      <div className='operaciones'>
        <h2>Operaciones</h2>
        <p>Introduzca la ecuación a manipular</p>
        <form onSubmit={submitEquation}>
          <input
            type='text'
            placeholder='x_f - x_i = v_i*t+(1/2)(a)(t^2)'
            onChange={handleEquationChange}
          ></input>
          <button type='submit'>Añadir Ecuación </button>
        </form>
        <InputField equation={equation} />
        <Management
          equation={equation}
          history={history}
          updateHistory={changeHistory}
          handleClick={changeEquationState}
        />
        <Factores equation={equation} setOperation={changeCurrentOperation} />
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
          operation={currentOperation}
          history={history}
          updateHistory={changeHistory}
        />
        <Potencia
          name={'Potencia'}
          handleClick={changeEquationState}
          equation={equation}
        />
      </div>

      <div className='revision'>
        <h2>Revisión</h2>
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
    </div>
  );
}

export default App;
