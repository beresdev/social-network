import { db, addDoc, collection, Timestamp, onSnapshot } from './firestoreInit.js';

// const monthNames = ["Ene", "Feb", "Mar", 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
let timestamp = Timestamp.now()
let dateR = timestamp.toDate();
// date.setMilliseconds(0);
// date.setMinutes(0);
// let day = date.getDate();
// let monthNumber = date.getMonth() + 1;
// let year = date.getFullYear();
// let month = monthNames[monthNumber];

//export { db, collection, onSnapshot };

export const addPost = async(uid, userName, content) => {
    try {
        console.log('Funcion addPost');
        console.log(dateR);
        const docRef = await addDoc(collection(db, "posts"), {
            createdAt: Timestamp.now(),
            user: uid,
            username:userName,
            content: content,
        });
        // console.log("document id", docRef.id);
        // console.log('Finaliza funcion addPost');
    } catch(error) {
        console.log(error)
    }
}

export const onGetPosts = (callback) => onSnapshot(collection(db, 'posts'), callback);

