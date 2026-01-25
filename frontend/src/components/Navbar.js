import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TheHoneyMen 🐝</div>
      <ul className="navbar-links">
        <li><a href="#home">Начало</a></li>
        <li><a href="#products">Продукти</a></li>
        <li><a href="#about">За нас</a></li>
      </ul>
      <div className="navbar-cart">
        <span>🛒</span>
        <span className="cart-count">0</span>
      </div>
    </nav>
  );
}

export default Navbar;