//./components/SushiCard.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import './SushiCard.css';

const SushiCard = ({ id, name, image, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = { id, name, image, price, quantity: 1 };
    dispatch(addItemToCart(item));
  };

  return (
    <div className="sushi-card">
      <img src={image} alt={name} className="sushi-image" />
      <h3>{name}</h3>
      <p className="price">${price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default SushiCard;
