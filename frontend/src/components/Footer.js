import React from 'react';
import './Footer.css'; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Brand */}
        <div className="footer-col brand-col">
          <div className="footer-logo">TheHoneyMen 🐝</div>
          <p className="brand-desc">
            Истинският вкус на природата. 
            Ние произвеждаме лимитирани серии пчелен мед с безкомпромисно качество и 
            уважение към пчелите.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-link">FB</a>
            <a href="https://instagram.com" className="social-link">IG</a>
            <a href="https://tiktok.com" className="social-link">TT</a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-col links-col">
          <h3>Навигация</h3>
          <ul>
            <li><a href="#home">Начало</a></li>
            <li><a href="#products">Нашите продукти</a></li>
            <li><a href="#about">Историята ни</a></li>
            <li><a href="#contact">Контакти</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col contact-col">
          <h3>Свържете се с нас</h3>
          <ul className="contact-list">
            <li>
              <span className="icon">📍</span> 
              <span>с. Юнаците, обл. Пазарджик<br/>Пчелин "TheHoneyMen"</span>
            </li>
            <li>
              <span className="icon">📞</span> 
              <span>0899 123 456</span>
            </li>
            <li>
              <span className="icon">✉️</span> 
              <span>hello@honeymen.bg</span>
            </li>
          </ul>
        </div>

        {/* Inquiry */}
        <div className="footer-col inquiry-col">
          <h3>Пишете ни</h3>
          <p>Имате въпроси или искате оферта на обект? Изпратете ни съобщение.</p>
          <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Вашият имейл..." required />
            <textarea placeholder="Съобщение..." rows="3" required></textarea>
            <button type="submit">ИЗПРАТИ ЗАПИТВАНЕ</button>
          </form>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="bottom-container">
          <p>&copy; {currentYear} TheHoneyMen. Всички права запазени.</p>
          <div className="legal-links">
            <a href="#privacy">Политика за поверителност</a>
            <span className="separator">|</span>
            <a href="#terms">Общи условия</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;