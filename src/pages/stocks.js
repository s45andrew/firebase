import React from 'react';
import { Link } from 'react-router-dom';

const Stocks = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
         
          <li>
            <Link to="/games">Games</Link>
          </li>
          
        </ul>
      </nav>
      <div>
        <h1>Stocks</h1>
        <p>Welcome to the financial page!</p>
      </div>
    </div>
  );
};

export default Stocks;
