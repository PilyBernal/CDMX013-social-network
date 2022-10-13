import { onNavigate } from '../main.js';
import { existingUserAccess } from '../lib/auth.js';
import { getPost, savePost } from '../lib/firestore.js';

export function Home() {
  //Generador de posts
  const homeContent = document.createElement('div');
  homeContent.classList.add('homeContent')

  const lotoBoxContainer = document.createElement('div');
  lotoBoxContainer.classList.add('lotoBoxContainer');

  const postAQuestion = document.createElement('label');
  postAQuestion.classList.add('postAQuestion');
  postAQuestion.textContent = 'Ask your botany-related question!';

  const postTextBox = document.createElement('textarea');
  postTextBox.classList.add('postTextBox');
  postTextBox.placeholder = 'Write your question here';

  const submitButton = document.createElement('button');
  submitButton.classList.add('submitButton');
  submitButton.textContent = 'Submit Question';
  lotoBoxContainer.append(postAQuestion, postTextBox, submitButton)

  submitButton.addEventListener('click', async (e) => {
    //e.preventDefault();
    const mail = 'Usuario';
    const post = postTextBox.value;
    
    await savePost(mail, post);
    postTextBox.value = '';
  });

  const allPost = getPost();
   allPost.map(onePost => {
     const div = document.createElement('div');
     const texto = document.createElement('p');
     texto.textContent = allPost.textContent;
     div.appendChild(texto);
     return div;
   })

  //console.log(getPost);

  //Contenedor de posts... meter este contenedor en en una const de función flecha, 
  //integrar de manera dinámica la información recuperada de Firebase,
  //'return postContainer', ir añadiendo elementos conforme se van creando posts
   //const postContainer = () => {
   /*const postContainer = () => {
     const div = document.createElement('div');
     const userEmail = document.createElement('h2');
     const postContent = document.createElement('p');*/

  homeContent.append(lotoBoxContainer);

  return homeContent;
}

//revisar imports en index.js