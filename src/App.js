import Equation from './despejes';

function App() {
  return <div className='App'></div>;
}

const equation = new Equation('d=v*t');
equation.setEquation();
console.log(equation.eq);
//Despejar v
equation.div('t');
console.log(equation.eq);
//Despejar t
equation.mult('t');
equation.div('v');
console.log(equation.eq);
//Eleva al cuadrado
equation.square();
console.log(equation.eq);
//Saca raíz
equation.root();
console.log(equation.eq);
//Simplifica
equation.simplify();
console.log(equation.eq);
//Saca raíz de nuevo
equation.root();
console.log(equation.eq);
//Imprime el latex
console.log(equation.Latex);

export default App;
