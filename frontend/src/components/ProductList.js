import React, { useState, useEffect } from 'react';
import './ProductList.css';

function ProductList({ addToCart }) {
  const [honeyList, setHoneyList] = useState([]);

  useEffect(() => {
    
    setTimeout(() => {
        fetch('http://localhost:8080/api/honey')  // connect with Java backend
        .then(response => response.json())
        .then(data => setHoneyList(data.map(h => ({
            ...h, 
            rating: (Math.random() * (5.0 - 4.5) + 4.5).toFixed(1),
            reviews: Math.floor(Math.random() * 100) + 10
        }))))
        .catch(error => console.error('Error fetching honey:', error));
    }, 300);
  }, []);


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
          {/* Product List */}
          {honeyList.map((honey, index) => (
            <div key={honey.id} className="product-card-premium" style={{animationDelay: `${index * 0.1}s`}}>
              

              
              <div className="image-box">
                <img src={honey.imageUrl} alt={honey.name} className="product-image-premium" />
              </div>

              <div className="card-content">
                <p className="honey-type-tag">{honey.type}</p>
                <h3>{honey.name}</h3>

                
                <div className="bottom-row">

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;