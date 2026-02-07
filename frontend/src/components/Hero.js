import React from 'react';
import './Hero.css';
import { useLanguage } from '../LanguageContext';

function Hero() {
  const { t } = useLanguage(); 

  return (
    <section className="hero-section" id="home">
      
      <div 
        className="hero-bg-image"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/winter.png)` }}
      ></div>

      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1>{t.hero_title}</h1>
        <h2>{t.hero_subtitle}</h2>
        <a href="#products">
            <button className="cta-button">{t.hero_cta}</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;