// importamos la funcion que vamos a testear
import {
  configuration,
  newUser,
  update,
  authUser,
  sendEmail,
  loginWithGoogle,
  loginEmailAndPAssword,
} from '../src/firebase/firebaseFunctions.js';

import {
  auth,
  provider,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword,
} from '../src/firebase/firebaseInit.js';

/* eslint-disable */

jest.mock('../src/firebase/firebaseInit.js', () => ({
  auth: jest.fn(() => ({ auth: 'TEST' })),

  newUser: jest.fn((auth, email, password) => {
    if (email !== 'beresdev@gmail.com') {
      throw new Error('Email invalido');
    }
    if (password !== '23F56?*La') {
      throw new Error('Contraseña incorrecta');
    }
    if (email === 'beresdev@gmail.com') {
      return 'Email válido';
    }
  }),

  createUserWithEmailAndPassword: jest.fn((auth, email, password) => {
    if (!email || !password) {
      throw new Error('ERROR');
    }

    Promise.resolve({ user: 'admin' });
  }),

  update: jest.fn((authUser, { displayName: userName }) => {
    if (userName === 'Beres') {
      return 'Perfil actualizado';
    }
  }),

  updateProfile: jest.fn((authUser, { displayName: userName }) => {
    // if( !authUser || !{displayName:userName} ) {
    //   throw new Error('Error');
    // }
    Promise.resolve({ displayName: 'Beres' });
  }),

  sendEmail: jest.fn((authUser, configuration) => {
    if (authUser === '') {
      throw new Error('Error');
    }
    if (configuration === '') {
      throw new Error('Error, se requiere dato configuration');
    }
  }),

  sendEmailVerification: jest.fn((authUser, configuration) => {
    // if(!auth || !configuration) {
    //   throw new Error ('Error')
    // }

    Promise.resolve('Email de verificacion enviado');
  }),

  loginWithGoogle: jest.fn((auth, provider) => {
    if (auth === '') {
      throw new Error('parámetro auth obligatorio');
    }
    if (provider === '') {
      throw new Error('dato de proveedor necesario');
    }
  }),

  signInWithPopup: jest.fn((auth, provider) => {
    // if(!auth || !provider) {
    //   throw new Error ('ERROR')
    // }
    Promise.resolve('Registro e inicio de sesión exitosos');
  }),

  loginEmailAndPAssword: jest.fn((auth, email, password) => {
    if (!email || !password) {
      throw new Error('ERROR');
    }
    if (email !== 'beresdev@gmail.com') {
      throw new Error('Email invalido');
    }
    if (password !== '23F56?*La') {
      throw new Error('Contraseña incorrecta');
    }
    if (email === 'beresdev@gmail.com') {
      return 'Email válido';
    }
  }),

  signInWithEmailAndPassword: jest.fn((auth, email, password) => {
    if (!email || !password) {
      throw new Error('ERROR');
    }

    Promise.resolve('Sesión iniciada con exito');
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

  it('Debe arrojar error por email y contraseña requeridos', async () => {
    try {
      await newUser();
    } catch (error) {
      expect(error.message).toBe('ERROR');
    }
  });

  it('Debe arrojar error por email inválido', async () => {
    try {
      await newUser('powerL@gmail.com', password);
    } catch (error) {
      expect(error.message).toBe('Email invalido');
    }
  });

  it('Debe arrojar error por contraseña incorrecta', async () => {
    try {
      await newUser(email, '1234545678');
    } catch (error) {
      expect(error.message).toBe('Contraseña incorrecta');
    }
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

  it('Debe arrojar error por parametros faltantes', async () => {
    try {
      await sendEmail(authUser);
    } catch (error) {
      expect(error.message).toBe('Error, se requiere dato configuration');
    }
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

  it('Debe arrojar error por parametros faltantes', async () => {
    try {
      await loginWithGoogle(auth);
    } catch (error) {
      expect(error.message).toBe('dato de proveedor necesario');
    }
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

  it('Debe arrojar error por email y contraseña requeridos', async () => {
    try {
      await loginEmailAndPAssword('', password);
    } catch (error) {
      expect(error.message).toBe('ERROR');
    }
  });

  it('Debe arrojar error por email inválido', async () => {
    try {
      await loginEmailAndPAssword('powerL@gmail.com', password);
    } catch (error) {
      expect(error.message).toBe('Email invalido');
    }
  });

  it('Debe arrojar error por contraseña incorrecta', async () => {
    try {
      await loginEmailAndPAssword(email, '1234545678');
    } catch (error) {
      expect(error.message).toBe('Contraseña incorrecta');
    }
  });
});
