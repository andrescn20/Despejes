import React from 'react';
import Equation from './despejes';
import nerdamer from 'nerdamer/all.min';
import { BlockMath } from 'react-katex';

export default function Revision(props) {
  const { equation, variable } = props;

  const currentEquation = new Equation(equation);
  const [solutionStatus, setSolutionStatus] = React.useState('');

  currentEquation.setEquation();

  const solution = nerdamer(`solve(${equation}, ${variable})`);
  const cleanSolution = solution.toString().replace(/\[|\]/g, '');

  const finalSolution = new Equation(cleanSolution);
  finalSolution.setEquation();

  const latexSolution = nerdamer.convertToLaTeX(`${finalSolution.eq}`);

  const latexLeft = nerdamer.convertToLaTeX(`${currentEquation.eqLeft}`);
  const latexRight = nerdamer.convertToLaTeX(`${currentEquation.eqRight}`);

  function revisar() {
    // console.log(currentEquation.eq);
    // console.log(currentEquation.eqLeft);
    // console.log(currentEquation.eqRight);
    // console.log(finalSolution.eq);
    // console.log(cleanSolution);

    if (
      latexLeft.eqLeft === latexSolution ||
      latexRight.eqRight === latexSolution
    ) {
      setSolutionStatus('Variable despejada con exito');
    } else {
      setSolutionStatus('Variable pendiente de despejar');
    }
  }

  return (
    <div>
      <button onClick={revisar}>Revisar</button>
      <p>{solutionStatus}</p>
      <BlockMath math={`${variable}=${latexSolution}`} />
    </div>
  );
}
