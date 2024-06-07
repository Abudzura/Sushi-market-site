//./components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p className='firstrow'>Phone: 123-456-7890</p>
      <p>
        Follow us: 
        <img className='icon' src='https://cdn-icons-png.flaticon.com/512/1384/1384031.png' alt="Instagram Icon" />
        <a href="https://instagram.com">Instagram</a>, 
        <img className='icon' src='https://cdn-icons-png.flaticon.com/256/20/20673.png' alt="Facebook Icon" />
        <a href="https://facebook.com">Facebook</a>, 
        <img className='icon' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png' alt="Twitter Icon" />
        <a href="https://twitter.com">Twitter</a>
      </p>
      <p>Email: info@sushishop.com</p>
      <p><a href="/support">Support</a></p>
    </footer>
  );
};

export default Footer;
