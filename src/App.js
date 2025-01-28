import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Frantic from './frantic';
import LoginPage from './visit';
import News from './pages/news';
import Sports from './pages/sports';
import Games from './pages/games';
import Stocks from './pages/stocks';

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element ={<LoginPage />} />
                <Route path="/news" element = {<News />} />                
                 <Route path="/games" element = {<Games />} />               <Route path="/news" element = {<News />} />
                <Route path="/sports" element = {<Sports />} />               
                <Route path="/stocks" element = {<Stocks />} />
                <Route path="/frantic" element ={ <Frantic />} />
            </Routes>
        </Router>
    )
}
export default App;