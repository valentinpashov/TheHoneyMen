import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProductList />
    </div>
  );
}

export default App;