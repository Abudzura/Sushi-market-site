// ./components/Navbar.jsx
// ./components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import cartIcon from './cart-59-128.png'; // Убедитесь, что вы указали правильный путь к изображению

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className='sakura' src='https://static.vecteezy.com/system/resources/previews/024/856/591/original/pink-sakura-flower-isolated-on-transparent-background-ai-generated-free-png.png' alt="Sakura"/>
      <div className="logo">Sushi Sakura</div>
      <ul className="nav-links">
        <li><Link to="/">Sushi</Link></li>
        <li><Link to="/drinks">Drinks</Link></li>
        <li><Link to="/additionals">Additionals</Link></li>
        <li><Link to="/payment-account">Payment Account</Link></li> {/* Новая секция */}
        <li className="cart-link">
          <Link to="/cart">Cart</Link>
          <img src={cartIcon} alt="Cart" className="cart-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
