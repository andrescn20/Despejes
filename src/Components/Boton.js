import React from 'react';

export default function Boton({text, isRed, onClick}) {


        return <button onClick={onClick} className={`${isRed ? 'bg-red-500' : 'bg-green-400'} text-white 
         mx-2 font-bold tracking-widest rounded-lg w-24 py-1 shadow-sm shadow-gray-500 self-center  my-1`}>
        {text}
      </button>      
  
}
