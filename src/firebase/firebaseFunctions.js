/* eslint-disable */
import {
  auth, 
  provider,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from '../firebase/firebaseInit.js'

export const configuration = { url: 'http://localhost:3000/' };

export const authUser = auth.currentUser;

export const newUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const update = (authUser,userName) => updateProfile(authUser, { displayName: userName });

export const sendEmail = (authUser, configuration) => sendEmailVerification(authUser, configuration);

//export const verifyUserStatus = () => onAuthStateChanged(auth);

export const loginWithGoogle = () => signInWithPopup(auth, provider);

export const loginEmailAndPAssword = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);
