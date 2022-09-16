import React from 'react';
import { flattenDeep } from 'lodash';
import Botones from './Botones';
// import nerdamer from 'nerdamer/all.min';
// import { InlineMath } from 'react-katex';

export default function Factores(props) {
  const { equation } = props;
  const [equationParts, setEquationParts] = React.useState([]);
  const [firstCleanLength, setFirstCleanLength] = React.useState(0);

  //   const currentEquation = new Equation(equation);

  function equationSeparator() {
    let sumArray = equation.replace('=', '+').split('+');
    console.log(sumArray);
    setFirstCleanLength(sumArray.length);

    // console.log(sumArray);
    let minusArray;

    sumArray.forEach((element) => {
      minusArray = [element.split('-')];
      sumArray = [...sumArray, minusArray];
    });

    const initialFactors = flattenDeep(sumArray);

    const monomios = initialFactors.slice(
      firstCleanLength,
      initialFactors.length
    );

    setEquationParts(monomios);
    console.log(equationParts);
    // console.log(equationParts);
    // setEquationParts(initialFactors);
  }
  // vamos a guardar el largo del array suma en un estado, para luego usarlo de modo que nos permita restar los factores que quedan repetidos
  return (
    <div>
      <button onClick={equationSeparator}>Separate</button>

      <p>Partes: {equationParts.toString()}</p>
      <Botones factores={equationParts} />
    </div>
  );
}
