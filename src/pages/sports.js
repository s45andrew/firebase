import React from 'react';
import { Link } from 'react-router-dom';

const Sports = () => {
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
            <Link to="/stocks">Stocks</Link>
          </li>
         
          <li>
            <Link to="/games">Games</Link>
          </li>
          
        </ul>
      </nav>
      <div>
        <h1>Sports</h1>
        <p>Welcome to the Sportss page!</p>
      </div>
    </div>
  );
};

export default Sports;
