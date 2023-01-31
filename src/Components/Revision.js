import React from 'react';
import Equation from './despejes';
import nerdamer from 'nerdamer/all.min';
import { BlockMath } from 'react-katex';
import Boton from './Boton';

export default function Revision(props) {
  const { equation, variable } = props;

  const currentEquation = new Equation(equation);

  const [solutionStatus, setSolutionStatus] = React.useState('');

  currentEquation.setEquation();

  const solution = nerdamer(`solve(${equation}, ${variable})`);
  const cleanSolution = solution.toString().replace(/\[|\]/g, '');

  const latexSolution = nerdamer.convertToLaTeX(`${cleanSolution}`);


  const eqLeft = nerdamer(currentEquation.eqLeft).text('fractions');
  const eqRight = nerdamer(currentEquation.eqRight).text('fractions');


  function revisar() {
    if (eqLeft === cleanSolution || eqRight === cleanSolution) {
      setSolutionStatus('Variable despejada con exito');
    } else {
      setSolutionStatus('Variable pendiente de despejar');
    }
  }

  return (
    <div className='flex flex-col'>
      <div className=''>
        <BlockMath math={`${variable}=${latexSolution}`} />
      </div>
      <Boton onClick={revisar} text='Revisar'/>
      <p>{solutionStatus}</p>
    </div>
  );
}
