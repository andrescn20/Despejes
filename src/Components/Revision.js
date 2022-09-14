// import { useState } from 'react';
import Equation from './despejes';

export default function Revision(props) {
  const { equation } = props;
  const currentEquation = new Equation(equation);
  // const [inputText, setInputText] = useState('');

  currentEquation.setEquation();
  return;
}
