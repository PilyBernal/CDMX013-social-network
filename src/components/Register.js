import { onNavigate } from '../main.js';
import { newUser } from '../lib/auth.js';

export const Register = () => {
  const div = document.createElement('div');
  const title = document.createElement('h5');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  
  inputEmail.placeholder = 'E-mail';
  inputPass.placeholder = 'Password';
  inputPass.type = 'password';
  var pwd = inputPass.value;
  console.log(pwd)

  button.textContent = 'Create account';
  buttonBack.textContent = 'Back';
  title.textContent = 'Create a Loto account';
  
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
