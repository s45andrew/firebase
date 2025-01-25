// firebaseUtils.js
import { onSnapshot } from 'firebase/firestore';
import { todosColRef } from './firebaseConfig'; // Adjust the import path as needed

export const fetchTodos = async () => {
  try {
    onSnapshot(todosColRef, (snapshot) => {
      let todos = [];
      snapshot.docs.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      });
      console.log(todos); // Log the books array to verify the data
    });
  } catch (err) {
    console.log(err.message);
  }
};
