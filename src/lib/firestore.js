import { getFirestore, collection, addDoc, doc, onSnapshot, query, deleteDoc } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { app } from '../lib/config.js'
import { auth } from '../lib/auth.js'

const db = getFirestore(app);

export const savePost = (post)=>{
  const user = auth.currentUser;
  console.log(user);

    addDoc(collection(db, 'posts'), {
      mail: user.email,
      post
    });
    }

export const getPost = (callback) => {
  const q = query(collection(db, 'posts'));
  onSnapshot(q, callback);
}

export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
}

//getPost();