import {
  addPost,
  onGetPosts,
  deletePost,
  getPost,
  updatePost,
} from '../src/firebase/firestoreFunctions.js';

/* eslint-disable */
import {
  doc,
  colRef,
  q,
  addDoc,
  onSnapshot,
  deleteDoc,
  getDoc,
  updateDoc,
} from '../src/firebase/firestoreInit.js';

jest.mock('../src/firebase/firestoreInit.js', () => ({
  addDoc: jest.fn((colRef, {}) => {
    Promise.resolve('Post agregado con exito');
  }),
  colRef: jest.fn().mockResolvedValue('colection from firestore'),
  onSnapshot: jest.fn(),
  deleteDoc: jest.fn(),
  doc: jest.fn(),
  getDoc: jest.fn(),
  updateDoc: jest.fn()
}));

jest.mock('../src/firebase/firebaseFunctions.js', (datejs, uid, userName, contentT, id, newContent) => ({
  addPost: jest.fn(() => {
    if (!userName) {
       throw new Error('Nombre de usuaria es necesario');
    }
    if (!contentT) {
       throw new Error('No se permiten post vacíos');
    }
   }),
   onGetPosts: jest.fn(),
   deletePost: jest.fn( (id) => {
    if(!id) {
      throw new Error ('id de post requerido')
    }
    }),
    getPost: jest.fn( (id) => {
      if(!id) {
        throw new Error ('id de post requerido')
      }
      }),
    updatePost: jest.fn((id, newContent))
}));

describe('addPost, función para agregar un post', () => {
  const datejs = new Date();
  const uid = 'abc';
  const userName = 'testuser';
  const contentT = 'test content';
  
  it('addPost debería ser una función', () => {
    expect(typeof addPost).toBe('function');
  });

  it('Debe llamar addDoc con los parametros establecidos', async () => {
    await addPost(datejs, uid, userName, contentT);

    expect(addDoc).toHaveBeenCalledWith( colRef, {
      date: datejs,
      user: uid,
      username: userName,
      content: contentT,
      likedBy: [],
      likes: 0,
    });
  });
});

describe('onGetPosts, funcion para traerse los posts', () => {
  const callback = jest.fn();

  it('addPost debería ser una función', () => {
    expect(typeof addPost).toBe('function');
  });

  it('Debe llamar a onSnapshot with parametetos correctos', () => {
    onGetPosts(callback);
    expect(onSnapshot).toHaveBeenCalledWith(q, callback);
  });
});

describe('deletePost, función para eliminar un post', () => {
  const id = '123';
  const db = {}
  it('debe llamar a deleteDoc con los parámetros correctos', () => {
    deletePost(id);
    expect(deleteDoc).toHaveBeenCalledWith(doc(db, 'posts', id));
  });
});

describe('getPost, función para obtener la info de un post', () => {
  const id = '123';
  const db = {}
  it('debe llamar a getDoc con los parámetros correctos', () => {
    getPost(id);
    expect(getDoc).toHaveBeenCalledWith(doc(db, 'posts', id));
  });
});

describe('updatePost, función para actualizar la info de un post', () => {
  const id = '123';
  const db = {};
  const newContent = {likes: '5'}
  it('debe llamar a getDoc con los parámetros correctos', () => {
    updatePost(id, newContent);
    expect(updateDoc).toHaveBeenCalledWith(doc(db, 'posts', id), newContent);
  });
});
