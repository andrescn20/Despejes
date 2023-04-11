import React, { useEffect, useState } from "react";

export default function Operation({
  toggleLoading,
  equation,
  name,
  updateEquation,
  factor,
  symbol,
}) {
  const sympyCalculation = (e) => {
    e.preventDefault();
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
        console.log(data);
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
          className="bg-dark_2 flex justify-center items-center hover:scale-105 text-light font-numbers rounded-lg w-20 h-8 mx-2 py-1 shadow-sm shadow-gray-500 self-center  my-1 active:activeFactor"
        >
          {symbol}
        </button>
      </div>
    </form>
  );
}
