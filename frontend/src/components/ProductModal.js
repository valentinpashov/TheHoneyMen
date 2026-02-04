import React from 'react';
import './ProductModal.css';

function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-modal-btn" onClick={onClose}>&times;</button>
        
        {product.image ? (
            <img src={product.image} alt={product.name} className="modal-image" />
        ) : (
            <div style={{height: '200px', background: '#f9f9f9', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '3rem'}}>
                🍯
            </div>
        )}

        <h2>{product.name}</h2>
        <span className="modal-price">{product.price.toFixed(2)} лв.</span>

        <div className="info-section">
          <h4>Описание</h4>
          <p>{product.description || "Вкусен натурален мед от нашите кошери."}</p>
        </div>

        <div className="info-section">
          <h4>Ползи</h4>
          <p>{product.benefits || "Подсилва имунната система и дава енергия."}</p>
        </div>

        <div className="info-section">
          <h4>Текстура</h4>
          <p>{product.texture || "Течна и фина кристализация."}</p>
        </div>

        
      </div>
    </div>
  );
}

export default ProductModal;