import React from 'react';

export default function Operacion({text}) {

     return  (  <div className='flex'>
             <button type='submit' className= "rounded-xl px-4 py-1 shadow-md shadow-gray-400 mx-2 self-center grow my-1">
                     {text}
                   </button>
         </div>)
  
}
