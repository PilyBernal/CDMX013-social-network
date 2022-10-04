import { onNavigate } from '../main.js';
import { existingUserAccess } from '../lib/auth.js';

export function Home() {

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
  submitButton.textContent = 'Submit Question'


  lotoBoxContainer.append(postAQuestion, postTextBox, submitButton)
  
  homeContent.append(lotoBoxContainer);

  return homeContent;
}