import React from 'react';
import Equation from './despejes';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

export default function InputField(props) {
  const { name, equation } = props;

  const currentEquation = new Equation(equation);
  const functionResult = currentEquation.setEquation();
  const functionOutput = currentEquation.eq;
  const functionLatex = currentEquation.Latex;
  return (
    <div>
      {/* <input type='text'></input>
      <button>{name}</button> */}
      <BlockMath math={functionLatex} />
    </div>
  );
}
