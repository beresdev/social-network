// importamos la funcion que vamos a testear
import {
  configuration,
  newUser,
  update,
  authUser,
  sendEmail,
  loginWithGoogle,
  loginEmailAndPAssword,
  logOut,
} from '../src/firebase/firebaseFunctions.js';

import {
  auth,
  provider,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from '../src/firebase/firebaseInit.js';

/* eslint-disable */

jest.mock('../src/firebase/firebaseInit.js', () => ({
  auth: jest.fn(() => ({ auth: 'TEST' })),

  createUserWithEmailAndPassword: jest.fn((auth, email, password) => {
    return Promise.resolve({ user: 'admin' });
  }),

  updateProfile: jest.fn((authUser, { displayName: userName }) => {
    return Promise.resolve({ displayName: 'Beres' });
  }),

  sendEmailVerification: jest.fn((authUser, configuration) => {
    return Promise.resolve('Email de verificacion enviado');
  }),

  signInWithPopup: jest.fn((auth, provider) => {
    return Promise.resolve('Registro e inicio de sesión exitosos');
  }),

  signInWithEmailAndPassword: jest.fn((auth, email, password) => {
    return Promise.resolve('Sesión iniciada con exito');
  }),

  signOut: jest.fn((auth) => {
    Promise.resolve('Sesión cerrada con exito');
  }),

}));

describe('Función newUser(), prueba la creación de nueva usuaria', () => {
  const email = 'beresdev@gmail.com';
  const password = '23F56?*La';

  it('Debe llamar a la función de Firebase createUserWithEmailAndPassword', async () => {
    await newUser(auth, email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Debe llamar a la función createUserWithEmailAndPassword con los argumentos auth, email y password', async () => {
    await newUser(email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      auth,
      email,
      password,
    );
  });
});

describe('Función update(), prueba la actualización de la información básica del perfil de una usuaria', () => {
  const userName = 'Beres';

  it('Debe llamar a la función de Firebase updateProfile', async () => {
    await update(authUser, userName);
    expect(updateProfile).toHaveBeenCalled();
  });

  it('Debe llamar a la función updateProfile con los argumentos a actualizar', async () => {
    await update(authUser, userName);
    expect(updateProfile).toHaveBeenCalledWith(authUser, {
      displayName: userName,
    });
  });
});

describe('Funcion sendEmail(), prueba el envío de email de verificación', () => {
  it('Debe llamar a la función de Firebase updateProfile', async () => {
    await sendEmail(authUser, configuration);
    expect(sendEmailVerification).toHaveBeenCalled();
  });

  it('Debe llamar a la función updateProfile con los argumentos a actualizar', async () => {
    await sendEmail(auth, configuration);
    expect(sendEmailVerification).toHaveBeenCalledWith(authUser, configuration);
  });
});

describe('Funcion loginWithGoogle(), prueba el inicio de sesión con Google', () => {
  it('Debe llamar a la función de Firebase signInWithPopup', async () => {
    await loginWithGoogle(auth, provider);
    expect(signInWithPopup).toHaveBeenCalled();
  });

  it('Debe llamar a la función updateProfile con los argumentos a actualizar', async () => {
    await loginWithGoogle(auth, provider);
    expect(signInWithPopup).toHaveBeenCalledWith(auth, provider);
  });
});

describe('Función loginEmailAndPAssword(), prueba la creación de nueva usuaria', () => {
  const email = 'beresdev@gmail.com';
  const password = '23F56?*La';

  it('Debe llamar a la función de Firebase signInWithEmailAndPassword', async () => {
    await loginEmailAndPAssword(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Debe llamar a la función csignInWithEmailAndPassword con los argumentos auth, email y password', async () => {
    await loginEmailAndPAssword(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      auth,
      email,
      password,
    );
  });
});

describe('Función logOut(), prueba cerrar sesión', () => {
  it('Debe llamar a la función de Firebase signOut', async () => {
    await logOut();
    expect(signOut).toHaveBeenCalled();
  });

  it('Debe llamar a la función signOut con el argumento auth', async () => {
    await logOut();
    expect(signOut).toHaveBeenCalledWith(auth);
  });
});
