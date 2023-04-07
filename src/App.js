import React, { useEffect, useState } from 'react';
import Libre from './Components/Libre';
import Predefinidas from './Components/Predefinidas';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { InlineMath } from 'react-katex';

function App() {
  const initialEquation = 'v = \\frac{d}{t}';
  const initialVariable = 'd';

  //Determina le ecuación inicial
  const [equation, setEquation] = useState(initialEquation);

  //Ecuación temperal que el usuario digita y luego añade
  const [changingEquation, setChangingEquation] = useState(initialEquation);

  //Variable que se utiliza como referencia para la revisión automática
  const [variable, setVariable] = useState(initialVariable);

  //Variable actual
  const [currentVariable, setcurrentVariable] = useState(initialVariable);

  //Operacion actual
  const [currentFactor, setCurrentFactor] = useState('1');

  //Registro de operaciones
  const [history, setHistory] = useState([initialEquation]);

  //Modo: Predefinidas vs Libre
  const [activeMode, setActiveMode] = useState('classic');

  //Actualiza la operación actual a utilizar
  function changeCurrentFactor(currentFactor) {
    setCurrentFactor(currentFactor);
  }

  //Modifica la ecuación actual
  function addToHistory() {
    setHistory((history) => [...history, changingEquation]);
  }

  //Actualiza la variable actual
  function updateCurrentVariable(currentVariable) {
    setVariable(currentVariable);
  }

  const submitEquation = (e) => {
    e.preventDefault();
    addToHistory(changingEquation);
    setCurrentFactor('');
  };

  const clearEquation = () => {
    addToHistory('');
    setCurrentFactor('');
  };

  const goBack = () => {
    if (history.length === 1) {
      alert('No quedan acciones por deshacer');
    } else {
      setHistory((history) => history.slice(0, history.length - 1));
    }
  };
  //Cada vez que cambia la ecuación actual, se agrega al historial,

  useEffect(() => {
    setEquation(history[history.length - 1]);
  }, [history]);

  //Actualiza la variable actual
  const submitVariable = (e) => {
    e.preventDefault();
    updateCurrentVariable(currentVariable);
  };

  const handleEquationChange = (e) => {
    setChangingEquation(e.target.value);
  };

  const handleVariableChange = (e) => {
    setcurrentVariable(e.target.value);
  };

  const handleOperation = (modifiedEquation) => {
    setHistory((history) => [...history, modifiedEquation]);
  };
  const handlePredefinedEquation = (equation) => {
    setChangingEquation(equation);
    setHistory((history) => [...history, equation]);
  };

  const selectClassic= () => {
    setActiveMode('classic');
  };

  const selectFree= () => {
    setActiveMode('free');
  };

  const displayActiveMode = () => {
    if (activeMode == 'free') {
      return (
        <Libre
          submitEquation={submitEquation}
          handleEquationChange={handleEquationChange}
          equation={equation}
          goBack={goBack}
          clearEquation={clearEquation}
          handleOperation={handleOperation}
          currentFactor={currentFactor}
          changeCurrentFactor={changeCurrentFactor}
          submitVariable={submitVariable}
          variable={variable}
          handleVariableChange={handleVariableChange}
        />
      );
    } 
    if(activeMode == 'classic') {
      return (
        <Predefinidas
          submitEquation={submitEquation}
          handlePredefinedEquation={handlePredefinedEquation}
          equation={equation}
          goBack={goBack}
          clearEquation={clearEquation}
          handleOperation={handleOperation}
          currentFactor={currentFactor}
          changeCurrentFactor={changeCurrentFactor}
          submitVariable={submitVariable}
          variable={variable}
          handleVariableChange={handleVariableChange}
        />
      );
    }
  };

  return (
    <div className='w-full items-center'>
        <Header 
        selectClassic={selectClassic}
        selectFree={selectFree}
        activeMode={activeMode}/>
      <div className='mx-auto max-w-7xl'>
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
