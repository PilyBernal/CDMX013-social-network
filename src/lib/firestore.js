import { getFirestore, collection, addDoc, doc, onSnapshot, query } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { app } from '../lib/config.js'

const db = getFirestore(app);

export const savePost = (mail, post)=>{
    addDoc(collection(db, 'posts'), {
      mail,
      post
    });
    }

export const getPost = () => {
  const q = query(collection(db, 'posts'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const posts = [];
  querySnapshot.forEach((doc) => {
    posts.push(doc.data().post);
  });
  console.log("Aquí: ", posts.join(", "));
});

}

getPost();