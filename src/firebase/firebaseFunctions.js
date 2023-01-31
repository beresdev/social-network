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
} from '../firebase/firebaseInit.js'

 import { router } from '../lib/router.js';

export const configuration = { url: 'http://localhost:3000/' };

export const authUser = auth.currentUser;

export const newUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const update = (authUser,userName) => updateProfile(authUser, { displayName: userName });

export const sendEmail = (authUser, configuration) => sendEmailVerification(authUser, configuration);

export const loginWithGoogle = () => signInWithPopup(auth, provider);

export const loginEmailAndPAssword = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);

export const showError = (error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(
    'Function: createUserWithEmailAndPassword. code error: ',
    errorCode,
    'message error',
    errorMessage,
  );
};

export const registerFirebase = (email, password, userName) => {
  newUser(email, password)
    .then(() => {
      update(auth.currentUser, userName);
    })
    .then(() => {
      sendEmail(auth.currentUser, configuration);
      alert('Welcome to <P💛werL>, please, check your email inbox');
      window.history.pushState({}, '', '#/');
      router();
    })
    .catch((error) => {
      showError(error)
    })
};

export const login = (email,password) => {
  loginEmailAndPAssword(email, password)
  .then(() => {
    window.history.pushState({}, '', '#/feed');
      router();
  })
  .catch((error) => {
    showError(error)
  })
}

export const logout = () => {
  logOut()
  .then(() => {
    window.history.pushState({}, '', '#/');
    console.log('Saliendo de la aplicación');
    router();
  })
}
