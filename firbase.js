import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcHctjN8tsHrMM3XEpZvQeLXhthUWbpQo",
  authDomain: "ink-dreams-19400.firebaseapp.com",
  projectId: "ink-dreams-19400",
  storageBucket: "ink-dreams-19400.firebasestorage.app",
  messagingSenderId: "431852433070",
  appId: "1:431852433070:web:4f1d8bf1e8afb36eb6c73f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };