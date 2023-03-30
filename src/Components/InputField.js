import React, { useEffect } from 'react';
import Equation from './despejes';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

//Este componente se encarga de procesar la ecuación escrita y presentarla
// en la pantalla

export default function InputField({ equation }) {
  const currentEquation = new Equation(equation);
  currentEquation.setEquation();
  useEffect(() => {
    // console.log(equation);
  }, [equation]);

  return (
    <div className='bg-slate-200 px-4 rounded-2xl py-2 text-center'>
      <BlockMath math={currentEquation.Latex} />
    </div>
  );
}
