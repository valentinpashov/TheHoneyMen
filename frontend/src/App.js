import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState("Свързване със сървъра...");

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')  // connect to backend Java
      .then(response => response.text())
      .then(data => setBackendMessage(data))
      .catch(error => setBackendMessage("Сървърът не отговаря (Is Java running?)"));
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <h1>🐝 TheHoneyMen</h1>
        <div className="nav-links">
          <button>Начало</button>
          <button>Продукти</button>
          <button>За нас</button>
        </div>
      </nav>

      {/* Main */}
      <header className="hero-section">
        <h2>Най-чистият мед в региона</h2>
        <p>Директно от кошера до твоята трапеза.</p>
        <button className="cta-button">Поръчай сега</button>
      </header>

    </div>
  );
}

export default App;