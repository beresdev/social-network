

import {createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
//import { auth } from '../components/register.js';
 


export const registerEmailAndPassword = (auth, email, password) => {
    console.log('funcion register')
    
    console.log(email);
    console.log(password);
    
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
        alert(errorMessage);
        // ..
    });
}