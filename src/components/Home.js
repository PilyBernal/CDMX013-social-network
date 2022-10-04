import { onNavigate } from '../main.js';
import { existingUserAccess } from '../lib/auth.js';

export function Home() {

  const homeContent = document.createElement('div');
  homeContent.classList.add('homeContent')
  const lotoBoxContainer = document.createElement('div');
  lotoBoxContainer.classList.add('lotoBoxContainer');
  const postAQuestion = document.createElement('label');
  postAQuestion.classList.add('postAQuestion')
  postAQuestion.textContent = 'Ask your botany-related question!'
  lotoBoxContainer.append(postAQuestion)
  const title = document.createElement('h5');
  const title2 = document.createElement('h5');
  
  homeContent.append(lotoBoxContainer);

  return homeContent;
}