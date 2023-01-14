import React from 'react';
import Equation from './despejes';

export default function Sumar({ equation, name, handleOperation, factor }) {
  const currentEquation = new Equation(equation);

  const updateEquation = (e) => {
    e.preventDefault();
    currentEquation.setEquation();
    currentEquation.suma(factor);
    handleOperation(currentEquation.eq);
  };

  return (
    <form onSubmit={updateEquation}>
      <button type='submit'>{name}</button>
    </form>
  );
}
