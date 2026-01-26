import React from 'react';
import './ShoppingCart.css';

function ShoppingCart({ count }) {
  return (
    <div className="shopping-cart">
      <span className="cart-icon">🛒</span>
      {count > 0 && (
        <span className="cart-badge">{count}</span>
      )}
    </div>
  );
}

export default ShoppingCart;