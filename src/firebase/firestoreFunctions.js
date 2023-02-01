import { db, addDoc, collection, Timestamp, getDocs } from './firebaseInit.js';

const monthNames = ["Ene", "Feb", "Mar", 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
let timestamp = Timestamp.now()
let date = timestamp.toDate();
date.setMilliseconds(0);
date.setMinutes(0);
let day = date.getDate();
let monthNumber = date.getMonth() + 1;
let year = date.getFullYear();
let month = monthNames[monthNumber];

export const addPost = async(uid, userName, content) => {
    try {
        console.log('Funcion addPost');
        const docRef = await addDoc(collection(db, "posts"), {
            user: uid,
            username:userName,
            content: content,
            day: day,
            month: month,
            year: year,
        });
        console.log("document id", docRef.id);
        console.log('Finaliza funcion addPost');
    } catch(error) {
        console.log(error)
    }
}

export const getPosts = async() => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    })
};
