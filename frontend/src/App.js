import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const [notification, setNotification] = useState(null);

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add function
  const handleAddToCart = (product) => {
    //Add product to cart
    setCartItems(prevItems => [...prevItems, product]);
    
    // Show notification
    setNotification(`Добавихте "${product.name}" в количката! 🍯`);
    
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      
      <Navbar cartCount={cartItems.length} onCartClick={toggleCart} />
      
      {/* add message - TOAST*/}
      {notification && (
        <div className="toast-notification">
          {notification}
        </div>
      )}

      {/* Open ShoppingCart */}
      {isCartOpen && (
        <div className="cart-overlay">
          <h3>Вашата количка</h3>
          {cartItems.length === 0 ? (
            <p>Количката е празна.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} style={{marginBottom: '10px', listStyle: 'none'}}>
                  <b>{item.name}</b> - {item.price.toFixed(2)} лв.
                </li>
              ))}
            </ul>
          )}
          <hr />
          <p><strong>Общо: {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)} лв.</strong></p>
          <button className="cta-button" style={{width: '100%', marginTop: '10px'}}>Плащане</button>
        </div>
      )}

      <Hero />
      
      <ProductList addToCart={handleAddToCart} />
      
      <Footer />
    </div>
  );
}

export default App;