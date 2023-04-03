import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

//Este componente se encarga de procesar la ecuación escrita y presentarla
// en la pantalla

export default function InputField({ equation }) {
  return (
    <div className='bg-slate-200 px-4 rounded-2xl py-2 text-center'>
      <BlockMath math={equation} />
    </div>
  );
}
