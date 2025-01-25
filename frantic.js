import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, deleteDoc, doc, onSnapshot, collection } from 'firebase/firestore';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { fetchBooks } from './getbooks'; 
import { fetchStocks } from './getstocks';
import { auth, todosColRef } from './firebaseConfig';

const firebaseConfig = {
  apiKey: "AIzaSyCzTuyKJoWNHPgmGLDqKnQj_Dw0b7mlP78",
  authDomain: "firebbase-b84fd.firebaseapp.com",
  projectId: "firebbase-b84fd",
  storageBucket: "firebbase-b84fd.firebasestorage.app",
  messagingSenderId: "195132775910",
  appId: "1:195132775910:web:e264fa7991acc82baeca27"
};

initializeApp(firebaseConfig);

const db = getFirestore();

function Frantic() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [todos, setTodos] = useState([]);
  const [addTod, setAddTod] = useState('');

  const inputChange = (event) => {
    setAddTod(event.target.value);
  };

  useEffect(() => {
    fetchBooks()
      .then((books) => {
        setBooks(books);
        console.log(  'heres my books  !',books);
      })
      .catch((err) => {
        console.log(err.message);
      });
    fetchStocks()
      .then((stocks) => {
        setStocks(stocks);
        console.log(stocks);
      })
      .catch((err) => {
        console.log(err.message);
      });

    const unsubscribe = onSnapshot(collection(db, 'mytodos'), (snapshot) => {
      const todosData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todosData);
      console.log('Real-time todos: ', todosData);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const loggs = () => {
    signOut(auth)
      .then(() => {
        console.log('You have signed out');
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const delTodo = (id) => {
    deleteDoc(doc(db, 'mytodos', id))
      .then(() => {
        console.log('Todo deleted');
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const adddTodo = (item) => {
    addDoc(todosColRef, {
      title: item,
      urgency: 'priority',
    })
    .then(() => {
      setAddTod('');
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  return (
    <div className='frPage'>
      <h1>Welcome to Frantic Stats</h1>
      <div className='logout'>
        <button onClick={loggs} className='plainBut1'>Sign Out</button>
      </div>
      <div className='itemsMap'>
        <p>test cont</p>
        {books && books.map((item) => (
          <div className='itemsMap' key={item.id}><button>
            {item.title}</button>
          </div>
        ))}
      </div>
      <div>
        {stocks && stocks.map((item) => (
          <div key={item.id}><button>
            {item.name}</button>
          </div>
        ))}
      </div>
      <div className='tbox'>
        <h2>Todo's</h2>
        {todos && todos.map((item) => (
          <div key={item.id}>
            <button className='addb' onClick={() => delTodo(item.id)}>
              {item.title}
            </button>
          </div>
        ))}
        <div className='joiner'>
          <input
            placeholder='add new todos'
            value={addTod}
            onChange={inputChange}
          />
          <button className='addB' onClick={() => adddTodo(addTod)}>add</button>
        </div>
      </div>
    </div>
  );
}

export default Frantic;
