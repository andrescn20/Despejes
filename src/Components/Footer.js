import React from "react";

const Footer = () => {
  return (
    <footer className="bg-header  h-16 w-full border-t-2 flex border-header_b text-white">
      <div className="grow flex  items-center  justify-around max-w-7xl mx-auto">
        <p className="flex align-start justify-start text-sm text-green">Created By:</p>
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
      </div>
    </footer>
  );
};

export default Footer;
