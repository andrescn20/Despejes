// import { useState } from 'react';
import Equation from './despejes';

export default function Sumar(props) {
  const { equation, name, handleClick } = props;
  const currentEquation = new Equation(equation);
  // const [inputText, setInputText] = useState('');

  let operation;

  const updateEquation = (e) => {
    e.preventDefault();
    currentEquation.setEquation();
    currentEquation.suma(operation);
    handleClick(currentEquation.eq);
    // setInputText('');
  };

  const handleChange = (e) => {
    // setInputText(e.target.value);
    operation = e.target.value;
  };

  return (
    <form onSubmit={updateEquation}>
      <input type='text' onChange={handleChange}></input>
      <button type='submit'>{name}</button>
    </form>
  );
}
