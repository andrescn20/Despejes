import React from 'react';
import Equation from './despejes';
import Operacion from './Operacion';
export default function Dividir({ equation, name, handleOperation, factor }) {
  const currentEquation = new Equation(equation);

  const updateEquation = (e) => {
    e.preventDefault();
    currentEquation.setEquation();
    const correctedOperation = `((${factor})^-1)`;
    currentEquation.mult(correctedOperation);
    handleOperation(currentEquation.eq);
  };

  return (
    <form onSubmit={updateEquation}>
   <Operacion text={name}/>
    </form>
  );
}
