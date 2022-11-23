import React from 'react';
import Equation from './despejes';

export default function Potencia({ name, equation, factor, handleOperation }) {
  const currentEquation = new Equation(equation);

  const updateEquation = (e) => {
    e.preventDefault();
    currentEquation.setEquation();
    currentEquation.negativePower(factor);
    handleOperation(currentEquation.eq);
  };

  return (
    <form onSubmit={updateEquation}>
      <button type='submit'>{name}</button>
    </form>
  );
}
