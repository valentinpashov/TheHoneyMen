import React, { useState } from 'react';
import './Navbar.css';
import ShoppingCart from './ShoppingCart';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar({ cartItems, onRemove, onCheckout }) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollTo = (id) => {
    setIsMobileMenuOpen(false); 

    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}> TheHoneyMen 🐝 </Link>

      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        
        <li>
            <Link to="/" onClick={() => handleScrollTo('home')}>Начало</Link>
        </li>
        
        <li>
            <span onClick={() => handleScrollTo('products')} style={{cursor: 'pointer', color: 'white'}}> Продукти </span>
        </li>
        
        <li>
             <span onClick={() => handleScrollTo('about')} style={{cursor: 'pointer', color: 'white'}}> За нас </span>
        </li>
      </ul>

      <ShoppingCart cartItems={cartItems} onRemove={onRemove} onCheckout={onCheckout} />
    </nav>
  );
}

export default Navbar;