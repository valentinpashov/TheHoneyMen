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

       
      </div>
    </div>
  );
}

export default ProductModal;