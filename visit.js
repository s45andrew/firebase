import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import LineGraph from './mychart';
import LineChart from './lineChart';
import './App.css';
import LoginModal from './loginModal';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);
const auth = getAuth();

function LoginPage() {  const [price,setPrice]= useState('');
  const [graphtitle,setGrapthTitle] =useState('');
 const [msoft,setMsoft] = useState([]);
  const [apple,setApple] = useState([]);
  const [tesla, setTesla] = useState([]);
  const [cmg,setCmg] = useState([]);
  const [amazon,setAmazon] = useState([]);
  const [nvidia,setNvidia] = useState([]);
  const [bitcoin,setBitcoin] = useState([]);
  const [day, setDay] = useState('movement');
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [color, setColor] = useState('grey');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [graph,setGraph] = useState(tesla)
  

  const getApple =() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/apple.txt');
        const text = await response.text();
        const data = text.split('\n').map(line => {
          const [date, price] = line.split(': ');
          return { date, price: parseFloat(price.replace('$', '')) };
        });
        setApple(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    
  }
  const getNvidia =() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/nvidia.txt');
        const text = await response.text();
        const data = text.split('\n').map(line => {
          const [date, price] = line.split(': ');
          return { date, price: parseFloat(price.replace('$', '')) };
        });
        setNvidia(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
      
      }
    };
    fetchData();
    
  }
  const getAmazon =() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/amazon.txt');
        const text = await response.text();
        const data = text.split('\n').map(line => {
          const [date, price] = line.split(': ');
          return { date, price: parseFloat(price.replace('$', '')) };
        });
        setAmazon(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    
  }
  const getBitcoin =() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/bitcoin.txt');
        const text = await response.text();
        const data = text.split('\n').map(line => {
          const [date, price] = line.split(': ');
          return { date, price: parseFloat(price.replace('$', '')) };
        });
        setBitcoin(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        
      }
    };
    fetchData();
    
  }
  const getCmg =() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/cmg.txt');
        const text = await response.text();
        const data = text.split('\n').map(line => {
          const [date, price] = line.split(': ');
          return { date, price: parseFloat(price.replace('$', '')) };
        });
        setCmg(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        
      }
    };
    fetchData();
    
  }
  const getMsoft =() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/msoft.txt');
        const text = await response.text();
        const data = text.split('\n').map(line => {
          const [date, price] = line.split(': ');
          return { date, price: parseFloat(price.replace('$', '')) };
        });
        setMsoft(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        
      }
    };
    fetchData();
    
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/stocks.txt');
        const text = await response.text();
        const data = text.split('\n').map(line => {
          const [date, price] = line.split(': ');
          return { date, price: parseFloat(price.replace('$', '')) };
        });
        setTesla(data);
        setGraph(tesla)
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {

        setLoading(false);
      }
    };
    fetchData();getMsoft();getCmg();getAmazon();getBitcoin();
    getApple();getNvidia();setGraph(tesla)
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    try {
      const cred = await signInWithEmailAndPassword(auth, username, password);
      console.log('User logged in:', cred.user);
      navigate('/frantic');
    } catch (err) {
      console.error('Login failed:', err.message);
      setErrorMessage('Login failed. Please check your username and password!');
    }
  };

  const movement = (data,title) => {
    setGraph(data); setGrapthTitle(title);
    if (data.length >= 2) {
      setPrice(data[0].price)
      const priceDifference = data[0].price - data[1].price;
      setColor(priceDifference < 0 ? 'crimson' : priceDifference > 0 ? 'green' : 'grey');
      return `$${priceDifference.toFixed(2)}`;
    }
    return '$0.00';
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='login'>
          <button className='plainBut' onClick={() => setIsOpen(true)}>Login</button>
          <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} handleLogin={handleLogin} errorMessage={errorMessage} />
        </div>
      </header>
      <div className="mygraph">
    <div className='gratit'>
    <h2 className='graname'>{graphtitle} {price} </h2>
        <h2 className='graname'style={{ color }}>{day}</h2> {/* Apply the color dynamically */}
    
    </div>
      <div className="tesla">
        <div className='barray'>
          <button  className='bar' onClick={() => setDay(movement(tesla,'tesla'))}>Tesla</button>
          <button className='bar'  onClick={() => setDay(movement(apple,'Apple'))}>Apple</button>
          <button className='bar'  onClick={() => setDay(movement(nvidia,'nvidia'))}>Nvidia</button>
          <button  className='bar' onClick={() => setDay(movement(amazon,'amazon'))}>Amazon</button>
          <button  className='bar' onClick={() => setDay(movement(cmg,'chipotle'))}>chipotle</button>
          <button  className='bar' onClick={() => setDay(movement(bitcoin,'bitcoin'))}>Bitcoin</button>
          <button  className='bar' onClick={() => setDay(movement(msoft,'microSoft'))}>microsoft</button>
          <div className='times'>
            <button className='tim'>day</button>
            <button className='tim'>week</button>
            <button className='tim'>monh</button>
            <button className='tim'>year</button>
            <button className='tim'>max</button>
          </div>
        </div>
  

        {loading ? (
          <p>Loading data...</p>
        ) : (
          <LineChart tesla={graph} />
        )}
      </div>
</div>
      
   
      
    </div>
  );
}

export default LoginPage;
