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
  //inputPass.type = 'password';

  button.textContent = 'Create account';
  buttonBack.textContent = 'Back';
  title.textContent = 'Create a Loto account';

  //button.addEventListener('click', () => {
  //  onNavigate('/');
  //});

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  //7 to 15 characters which contain at least one numeric digit and a special character
  button.addEventListener('click', passwordRules)
  function passwordRules() {
    var pwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    let password = inputPass
    if (password.value = password.value
      .match(pwd)) {
      console.log('valid password')
      return true
    }
    else {
      const invalidEmail = document.createElement('p')
      invalidEmail.textContent = "The entered password does not meet minimum criteria";
      div.append(invalidEmail)
      console.log('invalid password')
      return false
    }
  }

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
