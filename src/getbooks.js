// firebaseUtils.js
import { getDocs } from 'firebase/firestore';
import { booksColRef } from './firebaseConfig'; // Adjust the import path as needed

export const fetchBooks = async () => {
  try {
    const snapshot = await getDocs(booksColRef);
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    return books;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
