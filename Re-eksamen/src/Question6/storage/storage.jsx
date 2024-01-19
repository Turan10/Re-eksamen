import React, { useState } from 'react';
import './storage.css';

const StorageExample = () => {
  const [input, setInput] = useState('');
  const [sessionData, setSessionData] = useState('');
  const [localData, setLocalData] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const saveToSessionStorage = () => {
    sessionStorage.setItem('myData', input);
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('myData', input);
  };

  const retrieveFromSessionStorage = () => {
    setSessionData(sessionStorage.getItem('myData') || '');
  };

  const retrieveFromLocalStorage = () => {
    setLocalData(localStorage.getItem('myData') || '');
  };

  const clearSessionStorage = () => {
    sessionStorage.removeItem('myData');
    setSessionData('');
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('myData');
    setLocalData('');
  };

  return (
    <div className="storage-container">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="storage-input"
      />
      <div className="button-container">
        <button onClick={saveToSessionStorage} className="storage-button">Save to Session Storage</button>
        <button onClick={saveToLocalStorage} className="storage-button">Save to Local Storage</button>
        <button onClick={retrieveFromSessionStorage} className="storage-button">Retrieve from Session Storage</button>
        <button onClick={retrieveFromLocalStorage} className="storage-button">Retrieve from Local Storage</button>
        <button onClick={clearSessionStorage} className="storage-button">Clear Session Storage</button>
        <button onClick={clearLocalStorage} className="storage-button">Clear Local Storage</button>
      </div>
      <div className="data-display">
        <h3 className="storage-data">Session Storage Data: {sessionData}</h3>
        <h3 className="storage-data">Local Storage Data: {localData}</h3>
      </div>
    </div>
  );
};

export default StorageExample;