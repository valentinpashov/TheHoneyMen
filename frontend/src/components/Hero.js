import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section" id="home">
      
      <div 
        className="hero-bg-image"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/winter.png)` }}
      ></div>

      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1>Златна топлина за ледени дни</h1>
        <h2>Зареди се с натурален имунитет директно от кошера</h2>
        <a href="#products">
            <button className="cta-button">Поръчай сега</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;