import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO9dfOjpy6xfpAaW5RzM7J0v5Eri3pw74",
  authDomain: "informasi-sekolah-af5cb.firebaseapp.com",
  projectId: "informasi-sekolah-af5cb",
  storageBucket: "informasi-sekolah-af5cb.appspot.com",
  messagingSenderId: "800813977542",
  appId: "1:800813977542:web:037241b7d3890730ddacc7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
