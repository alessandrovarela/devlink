import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // Para usar o banco de dados
import { getAuth } from 'firebase/auth' // Para usar a autenticação
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDaaxANsHRU4XsLe1bDQYPx9lGdUzcVa48",
  authDomain: "devlinks-8c310.firebaseapp.com",
  projectId: "devlinks-8c310",
  storageBucket: "devlinks-8c310.appspot.com",
  messagingSenderId: "70343036420",
  appId: "1:70343036420:web:e25953fb6918d4c20def51",
  measurementId: "G-2GBZPP6PZ7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };

//const analytics = getAnalytics(app);