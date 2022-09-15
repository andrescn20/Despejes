import React from 'react';
import Equation from './despejes';

export default function Multiplicar(props) {
  const { equation, name, handleClick } = props;
  const [operation, setOperation] = React.useState('');
  const currentEquation = new Equation(equation);

  const updateEquation = (e) => {
    e.preventDefault();
    currentEquation.setEquation();
    currentEquation.mult(operation);
    handleClick(currentEquation.eq);
    setOperation('');
  };

  const handleChange = (e) => {
    setOperation(e.target.value);
  };

  return (
    <form onSubmit={updateEquation}>
      <input type='text' onChange={handleChange} value={operation}></input>
      <button type='submit'> {name}</button>
    </form>
  );
}
