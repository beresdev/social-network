/* eslint-disable */
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';

/* eslint-enable */

import { router } from '../lib/router.js';

export const registerFirebase = (auth, email, password, userName) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(
        'Function: createUserWithEmailAndPassword. code error: ',
        errorCode,
        'message error',
        errorMessage
      );
    })
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName: userName,
      })
        .then(() => {
          console.log('Nombre agregado');
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .then(() => {
      const configuration = {
        url: 'http://localhost:3000/',
      };
      sendEmailVerification(auth.currentUser, configuration);
      alert('Welcome to <P💛werL>, please, check your email inbox');
      window.history.pushState({}, '', '#/');
      router();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(
        'Function: sendEmailVerification. code error: ',
        errorCode,
        'message error',
        errorMessage
      );
    });
};

export const loginWithGoogle = (auth, provider) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      alert('Welcome to <P💛werL>');
      console.log(
        'Function: sendEmailVerification. token: ',
        token,
        'user: ',
        user
      );
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(
        'Function: loginWithGoogle. code error: ',
        errorCode,
        'message error',
        errorMessage
      );
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(
        'Function: loginWithGoogle. email: ',
        email,
        'credential: ',
        credential
      );
    });
};

export const loginEmailAndPAssword = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.history.pushState({}, '', '#/feed');
      router();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        'Function: loginEmailAndPAssword. code error: ',
        errorCode,
        'message error: ',
        errorMessage
      );
    });
};
