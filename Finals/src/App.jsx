// ./App.jsx
// ./App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Drinks from './pages/Drinks';
import Additionals from './pages/Additionals';
import Cart from './components/Cart';
import PaymentAccount from './components/PaymentAccount'; // Импортируем компонент
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/additionals" element={<Additionals />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-account" element={<PaymentAccount />} /> {/* Новый маршрут */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
