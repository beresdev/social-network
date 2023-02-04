import { auth } from '../firebase/firebaseInit.js'
import {
  newUser,
  update,
  sendEmail,
  loginEmailAndPAssword,
  logOut,
  // authUser,
  configuration,
 } from "../firebase/firebaseFunctions.js";

 import { router } from './router.js';

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
    .then(() => {update(auth.currentUser, userName)})
    .then(() => {
      sendEmail(auth.currentUser, configuration);
      alert('Welcome to <P💛werL>, please, check your email inbox');
      window.history.pushState({}, '', '#/');
      router();
    })
    .catch( (error) => { showError(error)});
};

export const login = (email,password) => {
  loginEmailAndPAssword(email, password)
  .then(() => {
    window.history.pushState({}, '', '#/feed');
      router();
  })
  .catch((error) => {
    showError(error);
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