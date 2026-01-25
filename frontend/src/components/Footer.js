import React from 'react';
import './Footer.css'; 

function Footer() {
  const currentYear = new Date().getFullYear(); //  Get the current year

  return (
    <footer className="site-footer" id="about">
      <div className="footer-content">
        
       

      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} TheHoneyMen. Всички права запазени.</p>
      </div>
    </footer>
  );
}

export default Footer;