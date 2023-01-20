import React, { useEffect, useState, useRef } from 'react';
import 'katex/dist/katex.min.css';
// import { InlineMath } from 'react-katex';

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
        return <button className='factor' onClick={handleClick} key={factor} value={factor}>
        {factor}
      </button>
      }
  });
  return <div className='factors'>{botones}</div>;
}
