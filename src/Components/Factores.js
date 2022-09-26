// import { remove } from 'lodash';
import React from 'react';
// import { flattenDeep } from 'lodash';
import Botones from './Botones';
// import Equation from './despejes';
// import nerdamer from 'nerdamer/all.min';
// import { InlineMath } from 'react-katex';

export default function Factores(props) {
  const { equation } = props;
  const [equationFactors, setEquationFactors] = React.useState([]);

  const removeParenthesis = (array) => {
    //Funcion para remover parentesis cuando sea necesario
    return array.replace(/\(|\)/g, '');
  };

  function equationSeparator() {
    //Funcion principal que separa los distintos factores
    let cleanEquation = equation.replace('=', '+'); //Cambia el igual por una suma.
    let monomios = removeParenthesis(cleanEquation).split(/\+|-/); //Remueve parentesis y luego separa en monomios

    let flatMultiplication = cleanEquation.replace(/\)\(/g, '*'); //Homogeniza la notacion p[ara multiplicacion
    let factors = removeParenthesis(flatMultiplication).split(/\+|\*|\/|-/); //Remueve parentesis y luego separa todos los factores correspondientes

    let allFactors = monomios.concat(factors); //Unificacion de todos los factores generados

    let finalFactors = [...new Set(allFactors)]; //Elimina los monomios repetidos

    setEquationFactors(finalFactors); //Modifica el estado definido
  }

  return (
    <div>
      <button onClick={equationSeparator}>Separate</button>

      <Botones factores={equationFactors} />
    </div>
  );
}

// x = v*t + (1/2)*g*(t^2)
