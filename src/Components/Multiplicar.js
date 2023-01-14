import React from 'react';
import Equation from './despejes';

export default function Multiplicar(props) {
  const { equation, name, handleOperation, factor } = props;

  const currentEquation = new Equation(equation);

  const updateEquation = (e) => {
    e.preventDefault();
    currentEquation.setEquation();
    currentEquation.mult(factor);
    handleOperation(currentEquation.eq);
  };

  return (
    <form onSubmit={updateEquation}>
      <button type='submit'> {name}</button>
    </form>
  );
}
