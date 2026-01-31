import React, { useState } from 'react';
import './Navbar.css';
import ShoppingCart from './ShoppingCart';

function Navbar({ cartItems, onRemove, onCheckout }) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);  // Mobile menu state

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">TheHoneyMen 🐝</div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Начало</a></li>
        <li><a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Продукти</a></li>
        <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>За нас</a></li>
      </ul>

      <ShoppingCart cartItems={cartItems} onRemove={onRemove} onCheckout={onCheckout} />
    </nav>
  );
}

export default Navbar;