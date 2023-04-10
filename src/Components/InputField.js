import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

//Este componente se encarga de procesar la ecuación escrita y presentarla
// en la pantalla

export default function InputField({ equation }) {
  return (
    <div className='relative z-30 bg-slate-200 px-4 rounded-lg py-2 text-center h-28 flex items-center justify-center grow max-w-5xl'>
      <BlockMath math={equation} />
    </div>
  );
}
