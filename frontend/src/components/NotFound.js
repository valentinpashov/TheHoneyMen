import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="bee-emoji">🐝</div>
      <h1>404</h1>
      <h2>Error</h2>
      
    </div>
  );
}

export default NotFound;