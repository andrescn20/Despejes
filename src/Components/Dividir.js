import React from 'react';
import Equation from './despejes';

export default function Dividir(props) {
  const { equation, name, handleClick, operation, updateHistory, history } =
    props;

  const currentEquation = new Equation(equation);

  const updateEquation = (e) => {
    e.preventDefault();
    currentEquation.setEquation();
    const correctedOperation = `((${operation})^-1)`;
    currentEquation.mult(correctedOperation);
    handleClick(currentEquation.eq);
    // addEquationToHistory(currentEquation.eq);
  };

  function addEquationToHistory(newElement) {
    let newHistory = history.concat(newElement);
    updateHistory(newHistory);
    console.log(history);
  }

  return (
    <form onSubmit={updateEquation}>
      <button type='submit'>{name}</button>
    </form>
  );
}
