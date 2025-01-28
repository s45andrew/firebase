import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
         
          <li>
            <Link to="/stocks">Stocks</Link>
          </li>
          <li>
            <Link to="/stocks">Sports</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          
        </ul>
      </nav>
      <div>
        <h1>News</h1>
        <p>Welcome to the News page!</p>
      </div>
    </div>
  );
};

export default News;
