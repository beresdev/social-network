import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import firebaseConfig from './firebaseConfig.js'
import {getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'

const app = initializeApp(firebaseConfig);

export const registerEmailAndPassword = (email, password) => {
    console.log('funcion register')
    
    console.log(email);
    console.log(password);
    
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log('usuaria registrada')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}