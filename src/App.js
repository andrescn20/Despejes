import React, { useEffect, useState } from 'react';
import Libre from './Components/Libre';
import Predefinidas from './Components/Predefinidas';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {


  //Modo: Predefinidas vs Libre
  const [activeMode, setActiveMode] = useState('classic');

  
  const selectClassic= () => {
    setActiveMode('classic');
  };

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
        <Predefinidas/>
      );
    }
  };

  return (
    <div className='font-main flex flex-col min-h-screen bg-dark_1'>
        <Header 
        selectClassic={selectClassic}
        selectFree={selectFree}
        activeMode={activeMode}/>
      <div className='mx-auto max-w-7xl grow'>
        <div className=''>
          <div className=''>
            {displayActiveMode()}
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default App;
