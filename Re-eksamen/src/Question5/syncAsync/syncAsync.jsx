import React from "react";
import "./syncAsync.css";

const SyncAsync = () => {
  const [counter, setCounter] = React.useState(0);

  const increaseCounterAsync = () => {
    setTimeout(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 2000);
  };

  const calculateSquareRoot = () => {
    const squareRoot = Math.sqrt(counter);
    alert(`Square root of the counter is: ${squareRoot}`);
  };

  const heavyComputation = () => {
    // Tung computation funktion der blokere call stacken
    let startTime = performance.now();
    while (performance.now() - startTime < 5000) {
    }
    alert('Heavy computation finished');
  };

  return (
    <div className="sync-async-container">
      <h1 className="sync-async-title">Sync/Async</h1>
      <p className="sync-async-counter">Counter: {counter}</p>
      <div className="sync-async-buttons">
        <button onClick={increaseCounterAsync}>Increase Async 2sec delay</button>
        <button onClick={calculateSquareRoot}>Calculate Square Root</button>
        <button onClick={heavyComputation}>Heavy Computation</button>
      </div>
    </div>
  );
};

export default SyncAsync;
