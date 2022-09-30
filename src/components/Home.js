import { onNavigate } from '../main.js';
import { existingUserAccess } from '../lib/auth.js';

export function Home() {

  const div = document.createElement('div');
  const title = document.createElement('h5');
  const title2 = document.createElement('h5');

  title.textContent = 'Welcome home !!!';
  title2.textContent = 'In construction !!!';
  
  div.append(title, title2);

  return div;
}