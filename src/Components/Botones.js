import React from 'react';

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
        {factor}
      </button>
    );
  });

  return <div>{botones}</div>;
}
