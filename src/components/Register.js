import { onNavigate } from '../main.js';

import { newUser } from '../lib/auth.js';

export const Register = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');

  const button = document.createElement('button');
  const buttonBack = document.createElement('button');

  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');

  button.textContent = 'Crear cuenta';
  buttonBack.textContent = 'Back';
  title.textContent = 'Registro de nueva cuenta';
  button.addEventListener('click', () => {
    onNavigate('/');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });
  button.addEventListener('click', () => {
    newUser(inputEmail.value, inputPass.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  });

  div.append(title, inputEmail, inputPass, button, buttonBack);
  return div;
};
