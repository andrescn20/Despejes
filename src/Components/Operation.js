import React, { useEffect, useState } from 'react';

export default function Operation({ equation, name, updateEquation, factor, symbol }) {

  const sympyCalculation = (e) => {
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
        console.log(data)
        updateEquation(data.latex , data.sympy);
      });
  };

  return (
    <form onSubmit={sympyCalculation}>
      <div className=''>
        <button
          type='submit'
          className='bg-dark_2 text-light font-numbers rounded-lg w-16 mx-2 py-1 shadow-sm shadow-gray-500 self-center  my-1 active:activeFactor'
        >
          {symbol}
        </button>
      </div>
    </form>
  );
}
