import React, { useEffect } from 'react';
import Botones from './Botones';

export default function Factores({ equation, changeCurrentFactor }) {
  const [equationFactors, setEquationFactors] = React.useState([]);

  const sendCurrentOperation = (currentOperation) => {
    changeCurrentFactor(currentOperation);
  };

  const removeParenthesis = (array) => {
    //Funcion para remover parentesis cuando sea necesario
    return array.replace(/\(|\)/g, '');
  };

  function equationSeparator() {
    //Funcion principal que separa los distintos factores
    let monomios = removeParenthesis(equation).split(/\+|-|=/); //Remueve parentesis y luego separa en monomios

    let flatMultiplication = equation.replace(/\)\(/g, '*'); //Homogeniza la notacion p[ara multiplicacion
    let factors = removeParenthesis(flatMultiplication).split(/\*|\/|=/); //Remueve parentesis y luego separa todos los factores correspondientes
    let allFactors = monomios.concat(factors); //Unificacion de todos los factores generados

    let finalFactors = [...new Set(allFactors)]; //Elimina los monomios repetidos

    setEquationFactors(finalFactors); //Modifica el estado definido
  }
  useEffect(() => {
    equationSeparator();
  }, [equation]);
  return (
    <div>
      <Botones
        factores={equationFactors}
        sendCurrentOperation={sendCurrentOperation}
      />
    </div>
  );
}

// x = v*t + (1/2)*g*(t^2)
