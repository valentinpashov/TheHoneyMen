import React, { useState } from 'react';
import './Navbar.css';
import ShoppingCart from './ShoppingCart';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext'; 

function Navbar({ cartItems, onRemove, onCheckout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, language, toggleLanguage } = useLanguage(); 

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollTo = (id) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
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
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
          TheHoneyMen 🐝
        </Link>
        
        <button 
          onClick={toggleLanguage} 
          style={{
              background: 'transparent', 
              border: '1px solid rgba(255,255,255,0.3)', 
              color: 'white', 
              padding: '5px 10px', 
              borderRadius: '20px', 
              cursor: 'pointer',
              marginLeft: '20px', 
              marginRight: 'auto',
              fontWeight: 'bold',
              fontSize: '0.8rem'
          }}
        >
          {language === 'bg' ? '🇬🇧 EN' : '🇧🇬 BG'}
        </button>

        <div className="hamburger-menu" onClick={toggleMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </div>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => handleScrollTo('home')}>{t.home}</Link></li>
          <li><span onClick={() => handleScrollTo('products')}>{t.products}</span></li>
          <li><span onClick={() => handleScrollTo('about')}>{t.about}</span></li>
        </ul>

        <ShoppingCart cartItems={cartItems} onRemove={onRemove} onCheckout={onCheckout} />
      
      </div>
    </nav>
  );
}

export default Navbar;