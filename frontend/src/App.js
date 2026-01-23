import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("Зареждане...");

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')   // connect to Java backend
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => setMessage("Error with connection to Java!"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <h1>React + Java връзка</h1>
        <p style={{ fontSize: '24px', color: 'yellow' }}> {message} </p>
      
      </header>
    </div>
  );
}

export default App;