import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

import { router } from "../lib/router.js";

export const registerFirebase = (auth, email, password, userName) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    })
    .then(function () {
      updateProfile(auth.currentUser, {
        displayName: userName,
      })
        .then(() => {
          console.log("Nombre agregado");
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .then(function () {
      const configuration = {
        url: "http://localhost:3000/",
      };
      sendEmailVerification(auth.currentUser, configuration);
      alert("Welcome to <P💛werL>, please, check your email inbox");
      window.history.pushState({}, "", "#/");
      router();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

export const loginWithGoogle = (auth, provider) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      alert("Welcome to <P💛werL>");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
