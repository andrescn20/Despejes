import React, { useEffect, useState } from 'react';
import Libre from './Components/Libre';
import Predefinidas from './Components/Predefinidas';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {


  //Modo: Predefinidas vs Libre
  const [activeMode, setActiveMode] = useState('classic');
  const [isLoading, setIsLoading] = useState(false);

  
  const selectClassic= () => {
    setActiveMode('classic');
  };

  const toggleLoading = (isLoading) => {
    setIsLoading(isLoading);
  }


  const selectFree= () => {
    setActiveMode('free');
  };

  const displayActiveMode = () => {
    if (activeMode == 'free') {
      return (
        <div> Under Construction </div>
        // <Libre          />
      );
    } 
    if(activeMode == 'classic') {
      return (
        <Predefinidas
        toggleLoading={toggleLoading}/>
      );
    }
  };

  function LoadingModal() {
   if(isLoading){
    return (
      <div className='absolute h-full w-full bg-black/40 flex items-center justify-center'>
        <div className='flex items-center justify-center gap-4 bg-header border-2 rounded-lg p-2'>
        <svg className="animate-spin h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path stroke="white" fill="white" d="M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm8.66-10a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5A1 1 0 0 1 20.66 7zM7.67 14.5a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5a1 1 0 0 1 1.366.366zM20.66 17a1 1 0 0 1-1.366.366l-2.598-1.5a1 1 0 0 1 1-1.732l2.598 1.5A1 1 0 0 1 20.66 17zM7.67 9.5a1 1 0 0 1-1.366.366l-2.598-1.5a1 1 0 1 1 1-1.732l2.598 1.5A1 1 0 0 1 7.67 9.5z"/> </g> </svg>
        <span className='text-white text-lg'>Calculating...</span></div>
      </div>
    )
   }
  }

  return (
    <div className='font-main flex flex-col min-h-screen bg-dark_1'>
        <Header 
        selectClassic={selectClassic}
        selectFree={selectFree}
        activeMode={activeMode}/>
      <div className='grow flex'>
            {displayActiveMode()}
      </div>
  
      {/* <RevisionContainer
          submitVariable={submitVariable}
          handleVariableChange={handleVariableChange}
          equation={equation}
          variable={variable}
        /> */}
        <Footer />
      <LoadingModal isLoading={isLoading}/>
    </div>
  );
}

export default App;
