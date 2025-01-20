import React, {useState} from'react';
import {useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

import './App.css';
import LoginModal from './loginModal';

const firebaseConfig = {
   apiKey: "AIzaSyCzTuyKJoWNHPgmGLDqKnQj_Dw0b7mlP78",
   authDomain: "firebbase-b84fd.firebaseapp.com",
   projectId: "firebbase-b84fd",
   storageBucket: "firebbase-b84fd.firebasestorage.app",
   messagingSenderId: "195132775910",
   appId: "1:195132775910:web:e264fa7991acc82baeca27"
 };

 initializeApp(firebaseConfig)


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
