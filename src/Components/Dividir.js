import React from 'react';
import Equation from './despejes';

export default function Dividir(props) {
  const { equation, name, handleClick } = props;
  const [operation, setOperation] = React.useState('');
  const currentEquation = new Equation(equation);

  const updateEquation = (e) => {
    e.preventDefault();
    currentEquation.setEquation();
    const correctedOperation = `((${operation})^-1)`;
    currentEquation.mult(correctedOperation);
    console.log(correctedOperation);
    handleClick(currentEquation.eq);
    setOperation('');
  };

  const handleChange = (e) => {
    setOperation(e.target.value);
  };

  return (
    <form onSubmit={updateEquation}>
      <input type='text' onChange={handleChange} value={operation}></input>
      <button type='submit'>{name}</button>
    </form>
  );
}

//Prueba random de que tengo acceso al repo
