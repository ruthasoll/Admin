import React from 'react';
import './ashboardcards.css';

const DashboardCards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <h3>Total Visitors</h3>
        <p>1,234</p>
      </div>
      <div className="card">
        <h3>Subscribers</h3>
        <p>456</p>
      </div>
      <div className="card">
        <h3>Sales</h3>
        <p>$7890</p>
      </div>
      <div className="card">
        <h3>Orders</h3>
        <p>123</p>
      </div>
    </div>
  );
};

export default DashboardCards;