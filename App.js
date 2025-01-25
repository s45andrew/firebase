import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Frantic from './frantic';
import LoginPage from './visit';

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element ={<LoginPage />} />
                <Route path="/frantic" element ={ <Frantic />} />
            </Routes>
        </Router>
    )
}
export default App;