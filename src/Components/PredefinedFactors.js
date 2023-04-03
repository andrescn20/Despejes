import Botones from './Botones';
import React, { useEffect } from 'react';

export default function PredefinedFactors({ changeCurrentFactor, factorList }) {
  const sendCurrentOperation = (currentOperation) => {
    changeCurrentFactor(currentOperation);
  };

  return (
    <div>
      <Botones
        factores={factorList}
        sendCurrentOperation={sendCurrentOperation}
      />
    </div>
  );
}
