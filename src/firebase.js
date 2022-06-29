// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { useEffect, useState } from 'react'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADyvXo85kB-aQUVTM9Qt4jgwoL9Iuiy8s",
  authDomain: "react-authentication-fir-7069b.firebaseapp.com",
  projectId: "react-authentication-fir-7069b",
  storageBucket: "react-authentication-fir-7069b.appspot.com",
  messagingSenderId: "800547535672",
  appId: "1:800547535672:web:6bd8beff73e4b230225fcd",
  measurementId: "G-G8CQ187Q3E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return unsub
    }, []);
    return currentUser
}

export function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function logOut() {
    return signOut(auth)
}
