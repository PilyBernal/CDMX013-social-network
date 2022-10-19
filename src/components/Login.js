import { onNavigate } from "../main.js";
import { existingUserAccess } from '../lib/auth.js';

export const Login = () =>{
    const div = document.createElement('div');
    const title = document.createElement('h5')
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input');
    const buttonLogin = document.createElement('button');
    const buttonBack = document.createElement('button');

    title.textContent = 'Enter your credentials below to log in to Loto:'
    inputEmail.placeholder = 'Email';    
    inputPass.placeholder = 'Password'; 
    inputPass.type = 'password'; 

    buttonLogin.textContent = 'Log in';  
    buttonLogin.classList.add('button');  
    buttonBack.textContent = 'Back to start';
    buttonBack.classList.add('button');

    buttonBack.addEventListener('click', () => {
        onNavigate('/');
    })

    buttonLogin.addEventListener('click', () => {
        existingUserAccess(inputEmail.value, inputPass.value)
          .then((userCredential) => {
            onNavigate('/home');
          })
    
          .catch((error) => {
            const invalidUser = document.createElement('p')
            invalidUser.textContent = "*** Create an account to access ***";
            div.append(invalidUser)
            console.log('invalid user')
            return false

            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            

          });
      });

    div.append(title, inputEmail, inputPass, buttonLogin, buttonBack);
    return div;
};