//./pages/Home.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SushiCard from '../components/SushiCard';
import { selectSushi } from '../redux/sushiSlice';
import './Home.css';

const Home = () => {
  const sushiData = useSelector(selectSushi);

  return (
    <div className="home">
      {sushiData.map((category, index) => (
        <div key={index} className="category">
          <Header title={category.title} />
          <div className="sushi-list">
            {category.items.map((sushi, index) => (
              <SushiCard key={index} {...sushi} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
