import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-slate-200 flex justify-around h-10 items-center fixed bottom-0 w-full'>
      <p className='flex align-center'>Created By:</p>
      <a href='https://github.com/andrescn20' className='flex gap-2'>
        <p>
          <strong> andrescn20 </strong>
        </p>
        <img
          className='h-6'
          src='https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png'
          alt='gitLogo'
        />
      </a>
      <p>&</p>
      <a href='https://github.com/Joraarce' className='flex gap-2'>
        <p>
          <strong> Joraarce </strong>
        </p>
        <img
          className='h-6'
          src='https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png'
          alt='gitLogo'
        />
      </a>
    </footer>
  );
};

export default Footer;
