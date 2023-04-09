import React from "react";

const Footer = () => {
  return (
    <footer className="bg-header flex justify-around h-20 items-center w-full border-t-2 border-header_b text-white">
      <p className="flex align-center text-sm text-green">Created By:</p>
      <a href="https://github.com/andrescn20" className="flex gap-2 items-center">
        <p>
          <strong> andrescn20 </strong>
        </p>
        <img
          className="h-8 bg-white rounded-full p-[1px]"
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png"
          alt="gitLogo"
        />
      </a>
      <p className="text-green">&</p>
      <a href="https://github.com/Joraarce" className="flex gap-2 items-center">
        <p>
          <strong> Joraarce </strong>
        </p>
        <img
          className='h-8 bg-white rounded-full p-[1px]'
          src='https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png'
          alt='gitLogo'
        />
      </a>
    </footer>
  );
};

export default Footer;
