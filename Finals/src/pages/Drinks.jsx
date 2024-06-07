//./pages/Drinks.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectDrinks } from '../redux/drinksSlice';
import DrinkCard from '../components/DrinkCard';
import './Drinks.css';

const Drinks = () => {
  const drinksData = useSelector(selectDrinks);

  return (
    <div className="drinks-container">
      {drinksData.map((category) => (
        <div key={category.title}>
          <h2 className="drinks-title">{category.title}</h2>
          <div className="drinks-items">
            {category.items.map((drink, index) => (
              <DrinkCard key={index} {...drink} type={category.title} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Drinks;
