import { db, addDoc, collection, query, orderBy, serverTimestamp, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from './firestoreInit.js';

export const addPost = async(datejs, uid, userName, content) => {
    try {
        await addDoc(collection(db, "posts"), {
            createdAt: serverTimestamp(),
            date: datejs,
            user: uid,
            username:userName,
            content: content,
            likedBy: [],
            likes: 0,
        });
    } catch(error) {
        console.log(error)
    }
}

const colRef = collection(db, 'posts');

const q = query(colRef, orderBy('createdAt', 'desc'))

export const onGetPosts = (callback) => onSnapshot(q, callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const updatePost = (id, newContent) => updateDoc(doc(db, 'posts', id), newContent);