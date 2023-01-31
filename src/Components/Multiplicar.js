import React from 'react';
import Equation from './despejes';
import Operacion from './Operacion';


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
      <Operacion text={name}/>

    </form>
  );
}
