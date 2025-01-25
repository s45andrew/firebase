// firebaseUtils.js
import { getDocs } from 'firebase/firestore';
import { stocksColRef } from './firebaseConfig'; // Adjust the import path as needed

export const fetchStocks = async () => {
  try {
    const snapshot = await getDocs(stocksColRef);
    let stocks = [];
    snapshot.docs.forEach((doc) => {
      stocks.push({ ...doc.data(), id: doc.id });
    });
    return stocks;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};