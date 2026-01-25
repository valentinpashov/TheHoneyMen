import React from 'react';
import './Footer.css'; 

function Footer() {
  const currentYear = new Date().getFullYear(); //  Get the current year

  return (
    <footer className="site-footer" id="about">
      <div className="footer-content">
        
        {/* Brand information */}
        <div className="footer-section about">
          <h3>TheHoneyMen 🐝</h3>
          <p>
            Ние сме отдадени на това да ви доставим най-чистия и натурален мед, 
            директно от българските пчелини. Здраве във всяка лъжица.
          </p>
        </div>

        {/* Contact information */}
        <div className="footer-section contact">
          <h3>Контакти</h3>
          <ul>
            <li>📍 Пчелин " TheHoneyMen", Пазарджик</li>
            <li>📞 +359 888 123 456</li>
            <li>✉️ hello@honeymen.bg</li>
          </ul>
        </div>

        {/* Social media links */}
        <div className="footer-section links">
          <h3>Последвай ни</h3>
          <div className="social-links">
            <a href="#fb" className="social-btn">Facebook</a>      {/*social media links*/}  
            <a href="#insta" className="social-btn">Instagram</a>  {/*social media links*/}
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} TheHoneyMen. Всички права запазени.</p>
      </div>
    </footer>
  );
}

export default Footer;