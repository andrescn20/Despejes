import React from 'react';
// import logo from '';


const Header = ({selectClassic, selectFree, activeMode}) => {

  const classic = () => {
    selectClassic();
  }

  const free = () => {
    selectFree();
  }

  return (
    <header className='bg-header text-white h-24  mb-6 border-b-header_b border-b-2 shadow-2xl shadow-dark_2/40'>
      <div className='flex justify-between items-center h-full max-w-7xl mx-auto xl:pr-16'>
        <div className='mx-10 text-2xl text-green font-main text-center'>
          <div className='tracking-tight h-6 align-bottom font-light'>PROYECTO </div>
          <div className='tracking-widest flex  h-6 place-items-start font-bold capitalize'>NEWTON</div>
        </div>
        <div className='flex flex-col items-start sm:flex-row'>
          <button className={`mr-4 sm:mx-10  ${activeMode == 'classic' ? 'text-green text-md font-bold' : 'text-sm'}`} onClick={classic}>Modo Clásico</button>
          <button className={`mr-4 sm:mx-10 ${activeMode == 'free' ? 'text-green text-md font-bold' : 'text-sm'}`} onClick={free}>Modo Libre</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
