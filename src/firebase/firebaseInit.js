/* eslint-disable */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';
import firebaseConfig from './firebaseConfig.js';
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';

/* eslint-enable */

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {
  initializeApp,
  auth,
  provider,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword,
};

// let app;
// let auth;
// let provider;

// const getAppInstance = () => {
//   if (!app) {
//     app = initializeApp(firebaseConfig);
//     console.log('App initialized');
//   }

//   return app;
// }

// const getAuthInstance = () => {
//   if (!auth) {
//     auth = getAuth(getAppInstance());
//     console.log('Auth initialized');
//   }

//   return auth;
// }

// const googleInstance = () => {
//   if (!provider) {
//     provider = new GoogleAuthProvider();
//     console.log('Google provider initialized');
//   }

//   return provider;
// }

// app = getAppInstance();
// auth = getAuthInstance();
// provider = googleInstance();
