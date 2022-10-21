import { onNavigate } from '../main.js';
import { existingUserAccess } from '../lib/auth.js';
import { getPost, savePost, deletePost, addLikes, likesNumber } from '../lib/firestore.js';
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
      //Dialog for post deletion confirmation
      const confirmPostDeletion = document.createElement('div')
      confirmPostDeletion.classList.add('confirmPostDeletion')

      const deleteDialog = document.createElement('div')
      deleteDialog.classList.add('deleteDialog')
      deleteDialog.textContent = 'Are you sure you want to delete this post?'
      const deleteConfirmButton = document.createElement('button')
      deleteConfirmButton.textContent = 'Confirm'
      deleteConfirmButton.classList.add('confirmationButton')
      const deleteReturnButton = document.createElement('button')
      deleteReturnButton.textContent = 'Go back'
      deleteReturnButton.classList.add('confirmationButton')
      
      deleteDialog.append(deleteConfirmButton, deleteReturnButton)
      confirmPostDeletion.append(deleteDialog)

      //deleteButton.textContent = '   '

      //Button to like the post
      const postLike = document.createElement('button');
      postLike.classList.add('postLike');
      postLike.textContent = `${post.likesNumber}`;

      /*const editButton = document.createElement('button');
      editButton.classList.add('editButton');
      //editButton.textContent = '   ';*/


      //Event listener for deleting post
      deleteButton.addEventListener('click', () => {
        div.append(confirmPostDeletion)
        deleteReturnButton.addEventListener('click', () => {
          div.removeChild(confirmPostDeletion)
        })
        deleteConfirmButton.addEventListener('click', () => {
          div.removeChild(confirmPostDeletion)
          postsDisplay.innerHTML = '';
          deletePost(doc.id);
        })
        })

      //Event listener to like the post
      postLike.addEventListener('click', () => {
        postsDisplay.innerHTML = '';
        addLikes(doc.id, post.likesNumber + 1);
        postLike.textContent = `${post.likesNumber}`;
      })

      iconsContent.append(postLike, /*editButton*/ deleteButton);

      //Appending post content to post container box
      div.append(userEmail, postContent, iconsContent)
      //Appending post container box to post display area
      postsDisplay.append(div)

    });
  })

  submitButton.addEventListener('click', (e) => {
    //e.preventDefault();
    //const mail = 'user.mail';
    const post = postTextBox.value;

    savePost(post);
    postsDisplay.innerHTML = ''
    postTextBox.value = '';
  });


  homeContent.append(lotoBoxContainer, postsDisplay);

  return homeContent;
}


/*revisar imports en index.js*/