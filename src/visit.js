import React, {useState} from'react';
import {useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';


import './App.css';
import LoginModal from './loginModal';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

initializeApp(firebaseConfig);



const auth = getAuth();

function LoginPage() {
  
  const [isOpen,setIsOpen] = useState(false);
  const [errorMessage,setErrorMessage]=useState('');
  const navigate = useNavigate();

 

  const handleLogin = (event) =>{
    event.preventDefault();
  const username = event.target.username.value;
const password = event.target.password.value;
signInWithEmailAndPassword(auth,username,password)
.then((cred) => {
  console.log('user   andy logged in',cred.user)
  navigate('/frantic');
})
.catch((err) => {
  console.log(err.message)
  setErrorMessage('login fail check username password !');
})

   
   

    
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='login'>
          <button className='plainBut'
           onClick={() => setIsOpen(true)}
          >login</button> 
        <LoginModal isOpen={isOpen} 
        onClose={() =>setIsOpen(false)} handleLogin={handleLogin}errorMessage={errorMessage}/>
        </div>
      </header>
    </div>
  );
}

export default LoginPage;
