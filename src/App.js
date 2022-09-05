import React, { useState } from 'react'; 
import './App.css';

function App() {
  let [ counter, changeCounter] = useState(1);
  window.changeCounter = changeCounter;

  const handleClick = () => {
    counter++;
    changeCounter(counter);
  }
  
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
      <h4>{counter}</h4>
      <button onClick={() => changeCounter(counter++)}>Click</button>
    </div>
    
  );
}

export default App;
