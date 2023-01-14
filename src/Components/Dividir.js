import React from 'react';
import Equation from './despejes';

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
      <button type='submit'>{name}</button>
    </form>
  );
}
