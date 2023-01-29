import React from 'react';

export default function Boton({text, isRed, onClick}) {


        return <button onClick={onClick} className={`${isRed ? 'bg-red-500' : 'bg-green-400'} rounded-xl px-4 py-1 text-white shadow-md
         shadow-gray-400 mx-2 w-fit self-center font-bold tracking-widest`}>
        {text}
      </button>      
  
}
