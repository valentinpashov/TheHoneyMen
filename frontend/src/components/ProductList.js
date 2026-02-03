import React, { useState, useEffect } from 'react';
import './ProductList.css';
import ProductModal from './ProductModal';

function ProductList({ addToCart }) {
  const [honeyList, setHoneyList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setTimeout(() => {
        fetch('http://localhost:8080/api/honey') 
        .then(response => response.json())
        .then(data => setHoneyList(data.map(h => ({
            ...h, 
            image: h.imageUrl, // Mapping imageUrl from backend to image for frontend
            rating: (Math.random() * (5.0 - 4.5) + 4.5).toFixed(1),
            reviews: Math.floor(Math.random() * 100) + 10
        }))))
        .catch(error => console.error('Error fetching honey:', error));
    }, 300);
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const renderStars = (rating) => {
    const percentage = (rating / 5) * 100;
    return (
      <div className="stars-wrapper">
        <div className="stars-outer">
          <div className="stars-inner" style={{ width: `${percentage}%` }}></div>
        </div>
        <div className="rating-text">
            <span className="rating-score">{rating}</span>
        </div>
      </div>
    );
  };

  return (
    <section className="products-section" id="products">
      <div className="bg-pattern"></div>

      <div className="section-container">
        <div className="section-header premium-header">
          <h4>От кошера до лъжицата</h4>
          <h2>Нашите Златни Еликсири</h2>
          <div className="header-line"></div>
        </div>

        <div className="products-grid-premium">
          {honeyList.map((honey, index) => (
            <div key={honey.id} className="product-card-premium" style={{animationDelay: `${index * 0.1}s`}}>
              
              {index === 0 && <span className="badge-premium hot"> Топ избор </span>}
              {index === 2 && <span className="badge-premium hot"> Най - продаван </span>}
              
              <div className="image-box" onClick={() => handleProductClick(honey)} style={{cursor: 'pointer'}}>
                <img src={honey.imageUrl} alt={honey.name} className="product-image-premium" />
              </div>

              <div className="card-content">
                <p className="honey-type-tag">{honey.type}</p>
                
                <h3 onClick={() => handleProductClick(honey)} style={{cursor: 'pointer'}} >
                    {honey.name}
                </h3>
                
                {renderStars(honey.rating)}
                
                <div className="bottom-row">
                  <div className="price-box">
                    <span className="price-value">{honey.price.toFixed(2)} <small>лв.</small></span>
                    <span className="weight-value">{honey.grams} г</span>
                  </div>

                  <div style={{display: 'flex', gap: '10px'}}>
                      <button className="details-btn" onClick={() => handleProductClick(honey)}>
                          Детайли
                      </button>

                      <button className="add-btn-premium" onClick={() => addToCart(honey)}>
                        <span>+ Добави</span>
                        <div className="liquid-bg"></div>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        onClose={handleCloseModal}
        onAddToCart={addToCart}
      />
    </section>
  );
}

export default ProductList;