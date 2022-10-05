import { onNavigate } from '../main.js';
import { existingUserAccess } from '../lib/auth.js';

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

//Contenedor de posts... meter este contenedor en en una const de función flecha, 
//integrar de manera dinámica la información recuperada de Firebase,
//'return postContainer', ir añadiendo elementos conforme se van creando posts
  const postContainer = document.createElement('div');
  postContainer.classList.add('lotoBoxContainer')
  
  homeContent.append(lotoBoxContainer);

  return homeContent;
}