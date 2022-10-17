import { onNavigate } from '../main.js';
import { existingUserAccess } from '../lib/auth.js';
import { getPost, savePost, deletePost } from '../lib/firestore.js';
import { auth, user, onAuthStateChanged } from '../lib/auth.js'


export function Home() {
  //Generador de posts
  let homeContent = document.createElement('div');
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
  lotoBoxContainer.append(postAQuestion, postTextBox, submitButton);

  //Contenedor de posts... meter este contenedor en en una const de función flecha, 
  //integrar de manera dinámica la información recuperada de Firebase,
  //'return postContainer', ir añadiendo elementos conforme se van creando posts
  const postsDisplay = document.createElement('div')

  getPost((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const post = doc.data()
      //Post container box
      const div = document.createElement('div')
      div.classList.add('postContent')
      //User email text
      const userEmail = document.createElement('h6')
      userEmail.textContent = post.mail
      //Post text content
      const postContent = document.createElement('h3')
      postContent.textContent = post.post

      //Icons container box
      const iconsContent = document.createElement('div');
      iconsContent.classList.add('iconsContent');

      //Button for deleting post
      const deleteButton = document.createElement('button')
      deleteButton.classList.add('deleteButton')
      deleteButton.textContent = '   '

      //Button to like the post
      const postLike = document.createElement('button');
      postLike.classList.add('postLike');
      let likesNumber = 0
      postLike.textContent = likesNumber;

      const editButton = document.createElement('button');
      editButton.classList.add('editButton');
      editButton.textContent = '   ';


      //Event listener for deleting post
      deleteButton.addEventListener('click', async () => {
         await deletePost(doc.id);
         location.reload()
      })

      //Event listener to like the post
      /*postLike.addEventListener('click', async (e) => {
        await likesNumber(doc.id);
        likesNumber = likesNumber + 1;
        location.reload()
      })*/

      iconsContent.append(postLike, editButton, deleteButton);

      //Appending post content to post container box
      div.append(userEmail, postContent, iconsContent)
      //Appending post container box to post display area
      postsDisplay.append(div)

    });
  })

  submitButton.addEventListener('click', async (e) => {
    //e.preventDefault();
    //const mail = 'user.mail';
    const post = postTextBox.value;

    await savePost(post);
    postsDisplay.innerHTML = ''
    postTextBox.value = '';
  });


  homeContent.append(lotoBoxContainer, postsDisplay);

  return homeContent;
}

//revisar imports en index.js