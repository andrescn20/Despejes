import React from 'react';
import Equation from '../despejes';
import Operacion from '../Operacion';

export default function Potencia({ name, equation, factor, handleOperation }) {
  const currentEquation = new Equation(equation);

  const updateEquation = (e) => {
    e.preventDefault();
    currentEquation.setEquation();
    currentEquation.power(factor);
    handleOperation(currentEquation.eq);
  };

  return (
    <form onSubmit={updateEquation}>
      <Operacion text={name} />
    </form>
  );
}
