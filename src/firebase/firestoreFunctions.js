import { db, addDoc, collection, Timestamp, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from './firestoreInit.js';

export const addPost = async(datejs, uid, userName, content) => {
    try {
        await addDoc(collection(db, "posts"), {
            createdAt: Timestamp.now(),
            date: datejs,
            user: uid,
            username:userName,
            content: content,
        });
    } catch(error) {
        console.log(error)
    }
}

export const onGetPosts = (callback) => onSnapshot(collection(db, 'posts'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export const getPost = (id) => getDoc(doc(db, 'posts', id));

export const updatePost = (id, newContent) => updateDoc(doc(db, 'posts', id), newContent);