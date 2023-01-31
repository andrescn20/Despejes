import React from 'react';

export default function Operacion({ text }) {
  return (
    <div className='flex'>
      <button
        type='submit'
        className='rounded-lg w-24 py-1 shadow-sm shadow-gray-500 self-center  my-1 active:activeFactor'
      >
        {text}
      </button>
    </div>
  );
}
