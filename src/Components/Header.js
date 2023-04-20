import React from "react";
// import logo from '';

const Header = ({ selectClassic, selectFree, activeMode, setRun }) => {
  const classic = () => {
    selectClassic();
  };

  const free = () => {
    selectFree();
  };

  return (
    <header className="bg-header text-white md:h-24 h-20  mb-6 border-b-header_b border-b-2 shadow-2xl shadow-dark_2/40">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto xl:pr-16">
        <div className="mx-10 text-2xl text-green font-main text-center">
          <div className="tracking-tight h-6 align-bottom font-light">
            PROYECTO{" "}
          </div>
          <div className="tracking-widest flex  h-6 place-items-start font-bold capitalize">
            NEWTON
          </div>
        </div>
        <div className="flex flex-col items-start sm:flex-row">
          <button
            className={`mr-4 sm:mx-10  ${
              activeMode == "classic"
                ? "text-green text-md font-bold"
                : "text-sm"
            }`}
            onClick={classic}
          >
            Modo Clásico
          </button>
          <button
            className={`mr-4 sm:mx-10 ${
              activeMode == "free" ? "text-green text-md font-bold" : "text-sm"
            }`}
            onClick={free}
          >
            Modo Libre
          </button>
          <button
            className="font-bold text-header mr-4"
            onClick={() => setRun(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#79C1B0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
