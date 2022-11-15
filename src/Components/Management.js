import React from 'react';

export default function Management(props) {
  const { history, updateHistory, handleClick } = props;

  function goBack() {
    let pastEquation = history[history.length - 1];
    handleClick(pastEquation);
    updateHistory();
  }

  function cleanInput() {
    handleClick('');
  }

  return (
    <div>
      <button onClick={goBack}> Deshacer </button>
      <button onClick={cleanInput}> Limpiar </button>
    </div>
  );
}
