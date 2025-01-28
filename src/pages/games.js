import React from 'react';
import { Link } from 'react-router-dom';

const Games = () => {
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
            <Link to="/sports">Sports</Link>
          </li>
          
        </ul>
      </nav>
      <div>
        <h1>games</h1>
        <p>Welcome to the Games page!</p>
      </div>
    </div>
  );
};

export default Games;
