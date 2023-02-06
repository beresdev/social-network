import { auth } from "../firebase/firebaseInit.js";
import {
  newUser,
  update,
  sendEmail,
  loginEmailAndPAssword,
  loginWithGoogle,
  logOut,
  configuration,
} from "../firebase/firebaseFunctions.js";

import { router } from "./router.js";

export const showError = (error) => {
  const errorCode = error.code;
  let messageError = "";

  if (errorCode == "auth/email-already-exists") {
    messageError = "Este email ya ha sido registrado";
  } else if (errorCode == "auth/invalid-display-name") {
    messageError = "Ingresa un nombre válido";
  } else if (errorCode == "auth/invalid-email") {
    messageError = "Email inválido";
  } else if (errorCode == "auth/wrong-password") {
    messageError = "Contraseña incorrecta";
  } else if (errorCode == "auth/user-not-found") {
    messageError = "Email no registrado";
  } else if(errorCode == 'auth/email-already-in-use') {
    messageError = 'Email en uso, intenta con otro'
  } else {
    console.log("Código de error: ", errorCode);
  }
  alert(messageError);
};

export const validFields =(email, password, userName) => {
  const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if(validEmail.test(email)) {
    console.log('Datos válidos')
  } else {
    alert('Formato de email inválido')
    return false
  } if(password.length >= 6) {
    console.log('formato de contraseña correcto')
  } else {
    alert('Tu contraseña debe tener a menos 6 caracteres')
    return false
  } if (userName !== '') {
    console.log('Campo userName no vacío')
  } else {
    alert('Ingresa nombre de usuaria')
    return false
  }
    return true
}

export const registerFirebase = (email, password, userName) => {
  newUser(email, password)
    .then(() => {
      update(auth.currentUser, userName);
    })
    .then(() => {
      sendEmail(auth.currentUser, configuration);
      alert("Welcome to <P💛werL>, please, check your email inbox");
      window.history.pushState({}, "", "#/");
      router();
    })
    .catch((error) => {
      showError(error);
    });
};

export const login = (email, password) => {
  loginEmailAndPAssword(email, password)
    .then((result) => {
      if (result.user.emailVerified) {
        console.log("usuario verificado");
        window.history.pushState({}, "", "#/feed");
        router();
      } else {
        alert("Verifica tu email y valida tu registro");
        router();
      }
    })
    .catch((error) => {
      showError(error);
    });
};

export const logout = () => {
  logOut().then(() => {
    window.history.pushState({}, "", "#/");
    console.log("Saliendo de la aplicación");
    router();
  });
};

export const loginGoogle = () => {
  o;
  loginWithGoogle()
    .then((result) => {
      if (result.user) {
        window.history.pushState({}, "", "#/feed");
        router();
      }
    })
    .catch((error) => {
      showError(error);
    });
};
