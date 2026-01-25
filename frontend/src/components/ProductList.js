import React, { useState, useEffect } from 'react';
import './ProductList.css';

function ProductList() {
  const [honeyList, setHoneyList] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:8080/api/honey')  // connect with Java backend
      .then(response => response.json())
      .then(data => setHoneyList(data))
      .catch(error => console.error('Error fetching honey:', error));
  }, []);

  return (
    <section className="products-section" id="products">
      <h2>Нашите продукти</h2>
      <div className="products-grid">
        {honeyList.map(honey => (
          <div key={honey.id} className="product-card">
            <img src={honey.imageUrl} alt={honey.name} className="product-image" />
            <h3>{honey.name}</h3>
            <p className="product-type">{honey.type}</p>
            <p className="product-price">{honey.price.toFixed(2)} лв.</p>
            <p className="product-grams">{honey.grams} г</p>
            <button className="add-btn">Добави</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;