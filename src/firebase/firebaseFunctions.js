import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
//import { isSignInWithEmailLink, signInWithEmailLink } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import {router} from '../lib/router.js';

export const registerFirebase = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .then(function () {
    sendEmailVerification(auth.currentUser);
    alert('Please, check your email inbox')
    window.history.pushState({}, "", '#/');
    router();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  })
};
