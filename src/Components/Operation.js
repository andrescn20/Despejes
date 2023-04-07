import React, { useEffect, useState } from 'react';

export default function Operation({ equation, name, handleOperation, factor, symbol }) {
  const [newEquation, setNewEquation] = useState('');

  useEffect(() => {
    setNewEquation(equation);
  }, []);

  useEffect(() => {
    handleOperation(newEquation);
  }, [newEquation]);

  const updateEquation = (e) => {
    e.preventDefault();

    fetch(`https://projectnewtonapi.andrescn20.com/${name}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        equation: equation,
        factor: factor,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNewEquation(data.result);
      });
  };

  return (
    <form onSubmit={updateEquation}>
      <div >
        <button
          type='submit'
          className='rounded-lg w-24 py-1 shadow-sm shadow-gray-500 self-center  my-1 active:activeFactor'
        >
          {symbol}
        </button>
      </div>
    </form>
  );
}
