import React, { useEffect, useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

export default function Botones({ setCurrentFactor, factors }) {
  const [btnActual, setBtnActual] = useState([]);

  const handleClick = (e) => {
    let currentOperation = e.target.value;
    setCurrentFactor(currentOperation);
    setBtnActual(e.target);
  };

  useEffect(() => {
    let factorBtns = Array.from(document.getElementsByClassName('factor'));
    factorBtns.forEach((btn) => {
      if (btn.value === btnActual.value) {
        console.log(btnActual);
        btnActual.setAttribute('id', 'activeFactor');
      } else {
        btn.removeAttribute('id');
      }
    });
  }, [btnActual]);

  const botones = factors.map((factor) => {
    if (factor === '') {
      return null;
    } else {
      return (
        <div className='font-numbers bg-white rounded-2xl grow flex justify-center py-2 px-2'>
          <div className='text-slate-800 text-center items-center flex justify-center rounded-2xl scale-90'>
            <InlineMath math={factor} className='self-center font-md' />
          </div>
          <button
            onClick={handleClick}
            key={`${new Date().getTime()}${factor}`}
            value={factor}
            className='h-full w-full absolute top-0 left-0 factor rounded-lg shadow-sm shadow-gray-500'
          ></button>
        </div>
      );
    }
  });
  return (
    <div className='flex justify-center flex-wrap gap-4 px-8'>{botones}</div>
  );
}
