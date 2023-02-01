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
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
import { getFirestore, collection, addDoc, Timestamp, getDocs } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'
/* eslint-enable */

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  initializeApp,
  auth,
  provider,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  db,
  collection,
  addDoc,
  Timestamp,
  getDocs,
};
