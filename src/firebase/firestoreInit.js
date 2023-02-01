import { app } from './firebaseInit.js'
import { getFirestore, collection, addDoc, Timestamp, getDocs, onSnapshot, doc, query } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'

const db = getFirestore(app);

export {
    db,
    collection,
    addDoc,
    Timestamp,
    getDocs,
    onSnapshot,
    doc,
    query,
};