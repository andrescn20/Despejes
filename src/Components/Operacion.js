import React from 'react';

export default function Operacion({ text }) {
  return (
    <div className='flex'>
      <button
        type='submit'
        className='rounded-xl w-24 py-1 shadow-md shadow-gray-400 self-center  my-1'
      >
        {text}
      </button>
    </div>
  );
}
