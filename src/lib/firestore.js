import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { app, firebaseConfig } from '../lib/config.js'

const db = getFirestore(app);

export const savePost = (mail, post)=>{
    addDoc(collection(db, 'posts'), {
      mail,
      post
    });
    console.log(post);
}

firebaseConfig.firestore.collection('posts')
  .onSnapshot(query => {
    console.log(query);
  })

/*db.collection('pots').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });*/    

/*export const getPost = () => db.colection ('posts').get();

window.addEventListener('DOMContentLoaded', async(e) => {
  export const posts = await getPost();
  console.log(posts);
})*/