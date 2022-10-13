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
  const posts = [];
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });
});
return posts;
}

getPost();

console.log(getPost());

const postContainer = document.createElement('div');

//postContainer = document.getElementById('postContainer');
   /*let posts = collection(db, 'posts');
   console.log(posts);
   let acumuladorHTML = '';

   posts.forEach(post =>{
    show(post)
   });

   function show(post) {
     acumuladorHTML += `<div class='postContainer'>
     <h2>${mail}</h2> <p>${post}</p>
     </div>`
     postContainer.innerHTML = acumuladorHTML;

     
     div.appendChild(userEmail, postContainer);

     //return div;
   }*/