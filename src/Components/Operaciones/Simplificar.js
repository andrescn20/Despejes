import React from 'react';
import Equation from '../despejes';
import Operacion from '../Operacion';
export default function Simplificar({
  equation,
  name,
  handleOperation,
  factor,
}) {
  const currentEquation = new Equation(equation);

  const updateEquation = (e) => {
    e.preventDefault();
    currentEquation.setEquation();
    currentEquation.simplify(currentEquation);
    handleOperation(currentEquation.eq);
  };

  return (
    <form onSubmit={updateEquation}>
      <Operacion text={name} />
    </form>
  );
}
