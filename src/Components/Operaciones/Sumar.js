import React from 'react';
import Equation from '../despejes';
import Operacion from '../Operacion';

export default function Sumar({ equation, name, handleOperation, factor }) {
  const currentEquation = new Equation(equation);

  const updateEquation = (e) => {
    e.preventDefault();
    
    //Este es el codigo que vamos a cambiar por requests a la api
    currentEquation.setEquation();
    currentEquation.suma(factor);
    //Hasta aca

    handleOperation(currentEquation.eq);
  };

  return (
    <form onSubmit={updateEquation}>
      <Operacion text={name} />
    </form>
  );
}
