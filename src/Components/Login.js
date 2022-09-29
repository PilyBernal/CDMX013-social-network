import { onNavigate } from "../main.js";

export const Login = () =>{
    const div = document.createElement('div');
    const login2Loto = document.createElement('h5')
    const mailInput = document.createElement('input');
    const passwordInput = document.createElement('input');
    const loginButton = document.createElement('button');
    const returnButton = document.createElement('button');
    login2Loto.textContent = 'Enter your credentials below to log in to Loto:'
    mailInput.placeholder = 'Email';    
    passwordInput.placeholder = 'Password';   
    loginButton.textContent = 'Log in';    
    returnButton.textContent = 'Back to homepage';
    returnButton.addEventListener('click', () => {
        onNavigate('/');
    })
    div.append(login2Loto, mailInput, passwordInput, loginButton, returnButton);
    return div;
};