import { app } from './firebaseInit.js';

/* eslint-disable */
import {
  getFirestore,
  collection,
  query,
  orderBy,
  serverTimestamp,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js';

/* eslint-enable */

const db = getFirestore(app);
const colRef = collection(db, 'posts');
const q = query(colRef, orderBy('createdAt', 'desc'));

export {
  db,
  colRef,
  q,
  collection,
  query,
  orderBy,
  serverTimestamp,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
};
