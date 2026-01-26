import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('myHoneyCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem('myHoneyCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    setNotification(`Добавихте "${product.name}" в количката! 🍯`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleRemoveItem = (indexToRemove) => {
    setCartItems(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
      <Navbar 
        cartItems={cartItems} 
        onRemove={handleRemoveItem} 
      />
      
      {notification && (
        <div className="toast-notification">
          {notification}
        </div>
      )}

      <Hero />
      <ProductList addToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;