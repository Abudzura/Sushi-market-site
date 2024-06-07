// ./components/AdditionalCard.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import './AdditionalCard.css';

const AdditionalCard = ({ id, name, image, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = { id, name, image, price, quantity: 1 };
    dispatch(addItemToCart(item));
  };

  return (
    <div className="additional-card">
      <img src={image} alt={name} className="additional-image" />
      <h3>{name}</h3>
      <p className="price">${price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default AdditionalCard;
