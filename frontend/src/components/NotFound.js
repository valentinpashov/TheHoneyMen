import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="bee-emoji">🐝</div>
      <h1>404</h1>
      <h2>Изгубихте се в кошера?</h2>
      <p>
        Опа! Страницата, която търсите, не съществува или е била преместена. Не се тревожете, нашите пчелички ще ви упътят обратно.
      </p>
      
      <Link to="/" className="home-btn">
        Обратно към Началото ➤
      </Link>
    </div>
  );
}

export default NotFound;