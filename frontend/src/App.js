import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import About from './components/About';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import emailjs from '@emailjs/browser';

function App() {
  
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('myHoneyCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [currentView, setCurrentView] = useState('home'); 
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

  const handleGoToCheckout = () => {
    if (cartItems.length > 0) {
      setCurrentView('checkout');
      window.scrollTo(0, 0); 
    } else {
      setNotification('Количката е празна!');
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleOrderSubmit = (formData) => {
    // Total price
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    
    // Products list 
    const productsListText = cartItems
      .map(item => `- ${item.name} (${item.grams}г): ${item.price.toFixed(2)} лв.`)
      .join('\n');

    // Personal data and order details
    const templateParams = {
      user_name: `${formData.firstName} ${formData.lastName}`,
      user_email: formData.email,
      user_phone: formData.phone,
      user_address: `${formData.city}, ${formData.address} (Бележки: ${formData.notes})`,
      order_details: productsListText,
      total_price: total.toFixed(2)
    };

    setNotification('Изпращане на поръчката... ⏳');

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
         
         setNotification('Поръчката е приета успешно! Ще се свържем с вас. 🎉');
         


      }, (err) => {
         console.log('FAILED...', err);
         setNotification('Грешка при изпращане. Моля, проверете интернет връзката си.');
      });
  };

  // Total price
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="App">
      <Navbar 
        cartItems={cartItems} 
        onRemove={handleRemoveItem} 
        onCheckout={handleGoToCheckout} 
      />
      
      {notification && ( <div className="toast-notification"> {notification} </div> )}

      {currentView === 'checkout' ? (
        <Checkout 
          cartItems={cartItems} 
          total={totalAmount}
          onBack={handleBackToHome}
          onSubmitOrder={handleOrderSubmit}
        />
      ) : (
        <>
          <Hero />
          <ProductList addToCart={handleAddToCart} />
          <About />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;