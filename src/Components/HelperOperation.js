import React, { useEffect, useState } from 'react';

export default function Operation({ toggleLoading, equation, name, updateEquation, factor, symbol }) {

  const sympyCalculation = (e) => {
    e.preventDefault();
    toggleLoading(true)
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
        toggleLoading(false)
        updateEquation(data.latex , data.sympy);
      });
  };

  return (
    <form onSubmit={sympyCalculation} className='m-0 p-0'>
      <div className=''>
        <button
          type='submit'
          className='bg-dark_2 w-36 font-main text-xs py-2 mx-2 font-bold text-light translate-y-1 rounded-t-lg shadow-sm shadow-gray-500 self-center  active:activeFactor'
        >
            {symbol}
        </button>
      </div>
    </form>
  );
}
