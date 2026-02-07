import React from 'react';
import './Footer.css'; 
import { useLanguage } from '../LanguageContext'; 

function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage(); 

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Brand */}
        <div className="footer-col brand-col">
          <div className="footer-logo">TheHoneyMen 🐝</div>
          <p className="brand-desc">
            {t.footer_desc}
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-link">FB</a>
            <a href="https://instagram.com" className="social-link">IG</a>
            <a href="https://tiktok.com" className="social-link">TT</a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-col links-col">
          <h3>{t.footer_nav_title}</h3>
          <ul>
            <li><a href="#home">{t.home}</a></li>
            <li><a href="#products">{t.our_products}</a></li>
            <li><a href="#about">{t.footer_history}</a></li>
            <li><a href="#contact">{t.contact}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col contact-col">
          <h3>{t.footer_connect_title}</h3>
          <ul className="contact-list">
            <li>
              <span className="icon">📍</span> 
              <span>{t.footer_address}</span>
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
          <h3>{t.footer_write_title}</h3>
          <p>{t.footer_write_desc}</p>
          <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder={t.footer_email_placeholder} required />
            <textarea placeholder={t.footer_msg_placeholder} rows="3" required></textarea>
            <button type="submit">{t.footer_send_btn}</button>
          </form>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="bottom-container">
          <p>&copy; {currentYear} TheHoneyMen. {t.footer_rights}</p>
          <div className="legal-links">
            <a href="#privacy">{t.footer_privacy}</a>
            <span className="separator">|</span>
            <a href="#terms">{t.footer_terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;