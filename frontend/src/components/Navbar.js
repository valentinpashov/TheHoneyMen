import React from 'react';
import './Navbar.css';
import ShoppingCart from './ShoppingCart';

function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TheHoneyMen 🐝</div>
      <ul className="navbar-links">
        <li><a href="#home">Начало</a></li>
        <li><a href="#products">Продукти</a></li>
        <li><a href="#about">За нас</a></li>
      </ul>
      <div onClick={onCartClick}>
        <ShoppingCart count={cartCount} />
      </div>
    </nav>
  );
}

export default Navbar;