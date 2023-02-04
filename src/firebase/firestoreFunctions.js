import {
  db,
  addDoc,
  colRef,
  q,
  serverTimestamp,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from './firestoreInit.js';

export const addPost = async (datejs, uid, userName, contentT) => {
  try {
    await addDoc(colRef, {
      createdAt: serverTimestamp(),
      date: datejs,
      user: uid,
      username: userName,
      content: contentT,
      likedBy: [],
      likes: 0,
    });
  } catch (error) {
    console.log(error);
  }
};

export const onGetPosts = (callback) => onSnapshot(q, callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const updatePost = (id, newContent) => updateDoc(doc(db, 'posts', id), newContent);
