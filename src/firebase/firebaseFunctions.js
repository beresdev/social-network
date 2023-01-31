/* eslint-disable */
import {
  auth, 
  provider,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword
} from '../firebase/firebaseInit.js'

// import { router } from '../lib/router.js';

// export const app = getAppInstance();
// export const auth = getAuthInstance();
// export const provider = googleInstance();

export const configuration = { url: 'http://localhost:3000/' };

export const authUser = auth.currentUser;

export const newUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const update = (authUser,userName) => updateProfile(authUser, { displayName: userName });

export const sendEmail = (authUser, configuration) => sendEmailVerification(authUser, configuration);

export const loginWithGoogle = (auth, provider) => signInWithPopup(auth, provider);

export const loginEmailAndPAssword = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const showError = (error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(
    'Function: createUserWithEmailAndPassword. code error: ',
    errorCode,
    'message error',
    errorMessage,
  );
};

// export const registerFirebase = (auth, email, password, userName) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user);
//     })
//     .catch((error) => {
//       showError(error)
//     })
//     .then(() => {
//       update();
//     })
//     .then(() => {
//       senEmail();
//       alert('Welcome to <P💛werL>, please, check your email inbox');
//       window.history.pushState({}, '', '#/');
//       router();
//     })
//     .catch((error) => {
//       showError(error)
//     })
// };

// export const loginWithGoogle = async(auth, provider) => {
//   try {
//     signInWithPopup(auth, provider)
//     alert('Welcome to <P💛werL>');
//   } catch(error) {
//     showError()
//   }
// };

// export const loginWithGoogle = (auth, provider) => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;
//       alert('Welcome to <P💛werL>');
//       console.log(
//         'Function: sendEmailVerification. token: ',
//         token,
//         'user: ',
//         user
//       );
//     })
//     .catch((error) => {
//       showError(error);
//       const email = error.customData.email;
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       console.log(
//         'Function: loginWithGoogle. email: ',
//         email,
//         'credential: ',
//         credential
//       );
//     });
// };

// export const loginEmailAndPAssword = (auth, email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       window.history.pushState({}, '', '#/feed');
//       router();
//     })
//     .catch((error) => {
//       showError(error)
//     });
// };

// export const loginEmailAndPAssword = async(auth, email,password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password)
//     window.history.pushState({}, '', '#/feed');
//   } catch(error) {
//     showError()
//   }
// }

