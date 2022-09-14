import React from 'react';
import InputField from './InputField';
import Sumar from './Sumar';
import Multiplicar from './Multiplicar';

function App() {
  const placeholder = 'v=d/t';
  const [equation, setEquation] = React.useState('v=d/t');
  let currentEquation = '' ? placeholder : equation;

  function changeState(currentEquation) {
    setEquation(currentEquation);
  }

  const onSubmitTask = (e) => {
    e.preventDefault();
    changeState(currentEquation);
  };

  const handleChange = (e) => {
    currentEquation = e.target.value;
  };

  return (
    <div className='App'>
      <h2>Modo Desarrollo</h2>
      <p>Aca se introduce la ecuacion que se quiere manipular</p>

      <form onSubmit={onSubmitTask}>
        <input type='text' placeholder='v=d/t' onChange={handleChange}></input>
        <button type='submit'>Add Equation </button>
      </form>

      <InputField equation={equation} />
      <Sumar name={'Sumar'} handleClick={changeState} equation={equation} />
      <Multiplicar
        name={'Multiplicar'}
        handleClick={changeState}
        equation={equation}
      />
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
