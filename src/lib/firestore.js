import { getFirestore, collection, addDoc, doc, onSnapshot, query } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { app } from '../lib/config.js'
import { user } from '../lib/auth.js'

const db = getFirestore(app);

export const savePost = (mail, post)=>{
    addDoc(collection(db, 'posts'), {
      mail,
      post
    });
    }

export const getPost = (callback) => {
  const q = query(collection(db, 'posts'));
  onSnapshot(q, callback);
}

//getPost();