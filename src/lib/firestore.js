import { getFirestore, collection, addDoc, doc, onSnapshot, query, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { app } from '../lib/config.js'
import { auth } from '../lib/auth.js'

const db = getFirestore(app);

export const savePost = (post) => {
  const user = auth.currentUser;
  console.log(user);

  addDoc(collection(db, 'posts'), {
    mail: user.email,
    post,
    likesNumber: 0
  });
}

export const getPost = (callback) => {
  const q = query(collection(db, 'posts'));
  onSnapshot(q, callback);
}

export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
}

export const addLikes = (id, likesNumber) => {
  
  return updateDoc(doc(db, 'posts', id), {
    likesNumber
  });
}

export const likesNumber = async (id) => {
  await updateDoc(doc(db, 'posts', 'likesNumber', id));
  likesNumber = likesNumber + 1;
}

//getPost();