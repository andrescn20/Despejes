import React from 'react';
import Equation from './despejes';

export default function Multiplicar(props) {
  const { equation, name, handleClick } = props;
  const currentEquation = new Equation(equation);

  let operation;
  const updateEquation = (e) => {
    e.preventDefault();
    alert(operation);
    currentEquation.setEquation();
    currentEquation.mult(operation);
    handleClick(currentEquation.eq);
  };

  const handleChange = (e) => {
    operation = e.target.value;
  };

  return (
    <form onSubmit={updateEquation}>
      <input type='text' onChange={handleChange}></input>
      <button type='submit'>{name}</button>
    </form>
  );
}
