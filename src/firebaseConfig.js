// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCzTuyKJoWNHPgmGLDqKnQj_Dw0b7mlP78",
  authDomain: "firebbase-b84fd.firebaseapp.com",
  projectId: "firebbase-b84fd",
  storageBucket: "firebbase-b84fd.firebasestorage.app",
  messagingSenderId: "195132775910",
  appId: "1:195132775910:web:e264fa7991acc82baeca27"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const booksColRef = collection(db, 'books');
const stocksColRef = collection(db,'stocks');
const todosColRef = collection(db,'mytodos');
export { db, auth, booksColRef,stocksColRef,todosColRef };
