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
    <header className='bg-black/5 h-16 flex justify-start items-center shadow-md mb-6'>
      <p className='mx-10 text-xl'>Proyecto Newton</p>
      <button className={`mx-10  ${activeMode == 'classic' ? 'underline text-md' : 'text-sm'}`} onClick={classic}>Modo Clásico</button>
      <button className={`mx-10  ${activeMode == 'free' ? 'underline text-md' : 'text-sm'}`} onClick={free}>Modo Libre</button>
    </header>
  );
};

export default Header;
