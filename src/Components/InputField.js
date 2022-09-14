import React from 'react';
import Equation from './despejes';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

//Este componente se encarga de procesar la ecuación escrita y presentarla
// en la pantalla

export default function InputField(props) {
  const { equation } = props;
  const currentEquation = new Equation(equation);
  currentEquation.setEquation();

  return (
    <div>
      <BlockMath math={currentEquation.Latex} />
    </div>
  );
}
