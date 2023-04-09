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
    <header className='bg-header text-white h-32 flex justify-between items-center mb-6 border-b-header_b border-b-2 shadow-2xl shadow-dark_2/40'>
      <div className='mx-10 text-3xl text-green font-main font-light text-center'> 
        <div className='tracking-tight h-8 align-bottom'>PROYECTO </div>
        <div className='tracking-widest flex  h-8 place-items-start font-bold capitalize'>NEWTON</div>
      </div>
      <div className=''>
        <button className={`mx-10 font-bold ${activeMode == 'classic' ? 'text-green text-md' : 'text-sm'}`} onClick={classic}>Modo Clásico</button>
        <button className={`mx-10 font-bold ${activeMode == 'free' ? 'text-green text-md' : 'text-sm'}`} onClick={free}>Modo Libre</button>
      </div>
    </header>
  );
};

export default Header;
