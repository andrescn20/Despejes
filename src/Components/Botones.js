import React, { useEffect, useState } from 'react';
import 'katex/dist/katex.min.css';
// import { InlineMath } from 'react-katex';

export default function Botones({ sendCurrentOperation, factores }) {
  // const [operationList, setOperationList] = useState([]);

  const handleClick = (e) => {
    let currentOperation = e.target.value;
    sendCurrentOperation(currentOperation);
  };

  // const operationArray = factores.map((factor) => {
  //   return factor;
  // });

  const botones = factores.map((factor) => {
    return (
      <button onClick={handleClick} key={factor} value={factor}>
        {factor}
      </button>
    );
  });

  return <div className='factors'>{botones}</div>;
}
