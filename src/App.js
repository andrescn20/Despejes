import React from 'react';
import InputField from './InputField';

function App() {
  const [equation, setEquation] = React.useState('v=d/t');
  let currentEquation;
  const handleChange = (event) => {
    currentEquation = event.target.value;
  };

  function changeCurrentEquation() {
    setEquation(currentEquation);
  }

  return (
    <div className='App'>
      <h2>Modo Desarrollo</h2>
      <p>Aca se introduce la ecuacion que se quiere manipular</p>
      <input type='text' placeholder='v=d/t' onChange={handleChange}></input>
      <button onClick={changeCurrentEquation}>Add Equation</button>
      <InputField name={'Sum'} equation={equation} />
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
