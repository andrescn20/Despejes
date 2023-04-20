import React, { useEffect, useState } from "react";
import Libre from "./Components/Libre";
import Predefinidas from "./Components/Predefinidas";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  //Modo: Predefinidas vs Libre
  const [activeMode, setActiveMode] = useState("classic");
  const [isLoading, setIsLoading] = useState(false);
  const [showTutorialModal, setShowTutorialModal] = useState(true);
  const [run, setRun] = useState(false);


  const selectClassic = () => {
    setActiveMode("classic");
  };

  const toggleLoading = (isLoading) => {
    setIsLoading(isLoading);
  };

  const selectFree = () => {
    setActiveMode("free");
  };

  useEffect(() => {
    fetch(`https://projectnewtonapi.andrescn20.com/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const displayActiveMode = () => {
    if (activeMode == "free") {
      return (
        <div> Under Construction </div>
        // <Libre          />
      );
    }
    if (activeMode == "classic") {
      return <Predefinidas toggleLoading={toggleLoading} run={run} setRun={setRun} />;
    }
  };

  function LoadingModal() {
    if (isLoading) {
      return (
        <div className="absolute h-full w-full bg-black/40 flex items-center justify-center z-50">
          <div className="flex items-center justify-center gap-4 bg-header border-2 rounded-lg p-2">
            <svg
              className="animate-spin h-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {" "}
              <g>
                {" "}
                <path fill="none" d="M0 0h24v24H0z" />{" "}
                <path
                  stroke="white"
                  fill="white"
                  d="M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm8.66-10a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5A1 1 0 0 1 20.66 7zM7.67 14.5a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5a1 1 0 0 1 1.366.366zM20.66 17a1 1 0 0 1-1.366.366l-2.598-1.5a1 1 0 0 1 1-1.732l2.598 1.5A1 1 0 0 1 20.66 17zM7.67 9.5a1 1 0 0 1-1.366.366l-2.598-1.5a1 1 0 1 1 1-1.732l2.598 1.5A1 1 0 0 1 7.67 9.5z"
                />{" "}
              </g>{" "}
            </svg>
            <span className="text-white text-lg">Calculando...</span>
          </div>
        </div>
      );
    }
  }
  
  const startTutorial = () => {
    setShowTutorialModal(false);
    setRun(true);
    
  };

  function TutorialModal() {
    if (showTutorialModal) {
      return (
        <div className="absolute h-full w-full bg-black/40 flex items-center justify-center z-50 flex-col">
          <div className="flex flex-col items-center justify-center gap-4 bg-header border-2 rounded-lg max-w-4xl py-24 px-12 mx-12">
            <div className="font-bold text-2xl text-light"> Bienvenido a Proyecto Newton</div>
           <div className="text-light text-center">
             Aquí podrás aprender a resolver ecuaciones con facilidad. Da click en el botón "Tutorial" si deseas un tour guiado por la aplicación o en 
            "Empezar" si deseas saltarte el tutorial.
            </div>
          <div className="flex flex-col sm:flex-row">
            <button onClick={startTutorial} className="bg-green text-header p-2 rounded-lg m-4 font-bold w-32">Tutorial</button>
            <button onClick={() => setShowTutorialModal(false)} className="bg-green text-header p-2 rounded-lg m-4 font-bold w-32">Empezar</button>
          </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="font-main flex flex-col min-h-screen bg-dark_1">
      <Header
        selectClassic={selectClassic}
        selectFree={selectFree}
        activeMode={activeMode}
      />
      <div className="grow flex">{displayActiveMode()}</div>

      {/* <RevisionContainer
          submitVariable={submitVariable}
          handleVariableChange={handleVariableChange}
          equation={equation}
          variable={variable}
        /> */}
      <Footer />
      <LoadingModal isLoading={isLoading} />
      <TutorialModal showTutorialModal={showTutorialModal} />
    </div>
  );
}

export default App;
