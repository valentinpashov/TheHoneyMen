import React, { useState } from 'react';
import './ShoppingCart.css';

function ShoppingCart({ cartItems, onRemove, onCheckout }) {
  
  const [isOpen, setIsOpen] = useState(false);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className="shopping-cart-icon" onClick={() => setIsOpen(!isOpen)}>
        <span className="cart-emoji">🛒</span>
        {cartItems.length > 0 && (
          <span className="cart-badge">{cartItems.length}</span>
        )}
      </div>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>Вашата количка</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="cart-items-list">
            {cartItems.length === 0 ? (
              <p className="empty-msg">Количката е празна.</p>
            ) : (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item-row">
                    <div>
                      <b>{item.name}</b>
                      <div className="item-price">{item.price.toFixed(2)} лв.</div>
                    </div>
                    <button 
                      className="remove-btn" 
                      onClick={() => onRemove(index)}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="total-row">
                <span>Общо:</span>
                <span>{total.toFixed(2)} лв.</span>
              </div>
              <button className="checkout-btn" onClick={() => {
                  setIsOpen(false); 
                  onCheckout();     
              }}>Плащане</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ShoppingCart;