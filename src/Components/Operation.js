import React, { useEffect, useState } from "react";

export default function Operation({
  toggleLoading,
  equation,
  name,
  updateEquation,
  factor,
  symbol,
  setStepIndex
}) {
  const sympyCalculation = (e) => {
    e.preventDefault();
    setStepIndex(5);
    toggleLoading(true);
    fetch(`https://projectnewtonapi.andrescn20.com/${name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        equation: equation,
        factor: factor,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toggleLoading(false);
        updateEquation(data.latex, data.sympy);
      })
      .catch((error) => {
        toggleLoading(false);   
        console.log(error);   
      });
  };

  return (
    <form
      onSubmit={sympyCalculation}
      className="flex items-center justify-center"
    >
      <div className="">
        <button
          type="submit"
          className={`bg-dark_2 flex justify-center items-center hover:scale-105 text-light font-numbers rounded-lg w-20 h-8 mx-2 py-1 shadow-sm shadow-gray-500 self-center  my-1 active:activeFactor
          ${factor === null ? "bg-gray-500 hover:scale-100" : ''}`}
          disabled={factor === null}
        >
         <span className="w-6 h-6 flex justify-center items-center">
           {symbol}
          </span>
        </button>
      </div>
    </form>
  );
}
