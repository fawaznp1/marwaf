import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Frames from './categories/Frames';
import Henna from './categories/Henna';
import Gifts from './categories/Gift';
import Bracelet from './categories/Bracelet';
import Loader from './components/Loader';
import Cart from "./pages/Cart";
import { CartProvider } from "./pages/Cartcontext";
import Customizayion from './categories/Customizayion';
import PrivacyPolicyComponent from './components/Privacyp';
import Terms from './components/Termsc';
import Formbuy from './components/Formbuy'
import ScrollToTopButton from './components/TopButton';
import Refreshpage from './components/Refreshpage';




function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
  
    return () => clearTimeout(timer);
  }, []);
  

  if (loading) {
    return <Loader />; // Show loader when loading
  }
  return (
    <CartProvider>

    <div className="App">
      
      <Refreshpage />
      <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/custom' element={<Customizayion />} />
      <Route path='/frames' element={<Frames />} />
      <Route path='/henna' element={<Henna />} />
      <Route path='/gifts' element={<Gifts />} />
      <Route path='/bracelet' element={<Bracelet />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/privacynpolicy' element={<PrivacyPolicyComponent/>} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/form' element={<Formbuy />} />
     </Routes>
     <Footer />
     <ScrollToTopButton />
    </div>
    </CartProvider>

  );
}

export default App;
