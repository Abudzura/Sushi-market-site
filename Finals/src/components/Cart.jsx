//./components/Cart.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, increaseQuantity, decreaseQuantity, removeItemFromCart } from '../redux/cartSlice';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeItemFromCart({ id }));
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <img className='' src=''/>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <div className="quantity-control">
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </div>
                <button onClick={() => handleRemove(item.id)} className="remove-button">Remove</button>
              </div>
            </div>
          ))}
          <button className="order-button">Order Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
