import { onNavigate } from "../main.js";

export const Signup = () =>{
    const div = document.createElement('div');
    const signup2Loto = document.createElement('h1')
    const mailInput = document.createElement('input');
    const passwordInput = document.createElement('input');
    const signupButton = document.createElement('button');
    const returnButton = document.createElement('button');
    signup2Loto.textContent = 'Enter your emmail and create a password to sign up to Loto:'
    mailInput.placeholder = 'Email';    
    passwordInput.placeholder = 'Password';   
    signupButton.textContent = 'Sign up!';    
    returnButton.textContent = 'Back to homepage';
    returnButton.addEventListener('click', () => {
        onNavigate('/');
    })
    div.append(signup2Loto, mailInput, passwordInput, signupButton, returnButton);
    return div;
};