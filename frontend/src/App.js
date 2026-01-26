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
      
      
      <Hero />
      
      <ProductList addToCart={handleAddToCart} />
      
      <Footer />
    </div>
  );
}

export default App;