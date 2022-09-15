// import { useState } from 'react';
import Equation from './despejes';
import nerdamer from 'nerdamer/all.min';
import { BlockMath } from 'react-katex';

export default function Revision(props) {
  const { equation, variable } = props;
  const currentEquation = new Equation(equation);

  currentEquation.setEquation();
  const solution = nerdamer(`solve(${equation}, ${variable})`);
  const cleanSolution = solution.toString().replace(/\[|\]/g, '');
  const latexSolution = nerdamer.convertToLaTeX(`${cleanSolution}`);
  console.log(cleanSolution);

  return <BlockMath math={`${variable}=${latexSolution}`} />;
}
