import { db, addDoc, collection, Timestamp, onSnapshot } from './firestoreInit.js';

export const addPost = async(date, uid, userName, content) => {
    try {
        await addDoc(collection(db, "posts"), {
            createdAt: date,
            user: uid,
            username:userName,
            content: content,
        });
    } catch(error) {
        console.log(error)
    }
}

export const onGetPosts = (callback) => onSnapshot(collection(db, 'posts'), callback);

