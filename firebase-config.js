import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyArtM4StICMtUw7M45gnPw_LTdUa5MZRlM",
  authDomain: "don-wave-thesouscote.firebaseapp.com",
  databaseURL: "https://don-wave-thesouscote-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "don-wave-thesouscote",
  storageBucket: "don-wave-thesouscote.firebasestorage.app",
  messagingSenderId: "818076115108",
  appId: "1:818076115108:web:3b05743ea69751c1cc0631",
  measurementId: "G-0C69303BX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
