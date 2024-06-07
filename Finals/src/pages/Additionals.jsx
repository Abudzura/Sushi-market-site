  // ./pages/Additionals.jsx
  import React from 'react';
  import { useSelector } from 'react-redux';
  import { selectAdditionals } from '../redux/additionalsSlice';
  import AdditionalCard from '../components/AdditionalCard';
  import './Additionals.css';

  const Additionals = () => {
    const additionals = useSelector(selectAdditionals);

    return (
      <div className="additionals-container">
        <h2 className="additionals-title">Additionals</h2>
        <div className="additionals-items">
          {additionals.map((additional, index) => (
            <AdditionalCard key={index} {...additional} />
          ))}
        </div>
      </div>
    );
  };

  export default Additionals;
