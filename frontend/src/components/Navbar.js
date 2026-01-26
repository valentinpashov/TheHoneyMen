import React from 'react';
import './Navbar.css';
import ShoppingCart from './ShoppingCart';

function Navbar({ cartItems, onRemove }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TheHoneyMen 🐝</div>
      <ul className="navbar-links">
        <li><a href="#home">Начало</a></li>
        <li><a href="#products">Продукти</a></li>
        <li><a href="#about">За нас</a></li>
      </ul>

      <ShoppingCart cartItems={cartItems} onRemove={onRemove} />
      
    </nav>
  );
}

export default Navbar;