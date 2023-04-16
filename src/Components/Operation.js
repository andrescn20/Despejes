import React, { useEffect, useState } from 'react';

export default function Operation({ equation, name, handleOperation, factor }) {
  const [newEquation, setNewEquation] = useState('');

  useEffect(() => {
    setNewEquation(equation);
  }, []);

  useEffect(() => {
    handleOperation(newEquation);
  }, [newEquation]);

  const updateEquation = (e) => {
    e.preventDefault();

    fetch(`/${name}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        equation: newEquation,
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
      <div className='flex'>
        <button
          type='submit'
          className='rounded-lg w-24 py-1 shadow-sm shadow-gray-500 self-center  my-1 active:activeFactor'
        >
         <span className="w-6 h-6 flex justify-center items-center">
           {symbol}
          </span>
        </button>
      </div>
    </form>
  );
}
