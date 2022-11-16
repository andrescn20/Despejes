import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

export default function Botones(props) {
  const { currentOperation, factores } = props;
  const [operation, setOperation] = React.useState('');

  const handleClick = (e) => {
    setOperation(e.target.value);
    currentOperation(operation);
  };

  const botones = factores.map((factor) => {
    return (
      <button onClick={handleClick} value={factor} key={factor}>
        <InlineMath>{factor}</InlineMath>
      </button>
    );
  });

  return <div>{botones}</div>;
}
