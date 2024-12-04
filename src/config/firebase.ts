import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1yNd8M4tZiiTQ8JpGDbWPwNRy9ENhwxs",
  authDomain: "todo-app-55395.firebaseapp.com",
  projectId: "todo-app-55395",
  storageBucket: "todo-app-55395.firebasestorage.app",
  messagingSenderId: "911989862611",
  appId: "1:911989862611:web:94a3b5594e3dac4f866426",
  measurementId: "G-720PMHRPG4",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
