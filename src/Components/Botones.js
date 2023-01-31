import React, { useEffect, useState, useRef } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { BlockMath } from 'react-katex';

export default function Botones({ sendCurrentOperation, factores }) {
  // const [operationList, setOperationList] = useState([]);
const btnRef = useRef();


  const handleClick = (e) => {
    let currentOperation = e.target.value;
    sendCurrentOperation(currentOperation);
    updateFocus(e.target);
  };

  const updateFocus = (btnActual) => {
    let factorBtns = Array.from(document.getElementsByClassName('factor'))
    factorBtns.forEach(btn => {
      if(btn.value === btnActual.value){
            console.log(btnActual.value)
            btnActual.setAttribute('id', 'activeFactor')
          }else{
            btn.removeAttribute('id')
          }
    });

  // botones.forEach(btn => {
  //   if(btn.key == btnActual.value){
  //     console.log(btnActual)
  //     btnActual.classList.add('activeFactor')
  //   }else{
  //     console.log(btn);
  //     // btn.classList.remove('btnFactor')
  //   }
  //  });
  }
  // const operationArray = factores.map((factor) => {
  //   return factor;
  // });

  const botones = factores.map((factor) => {
      if(factor === ''){
        return
      } else {
        return <button className='factor mx-2 p-1 shadow-md shadow-gray-400 rounded-md px-4 py-2' onClick={handleClick} key={factor} value={factor}>
       <InlineMath math={factor}/>
      </button>
      }
  });
  return <div className='factors'>{botones}</div>;
}
