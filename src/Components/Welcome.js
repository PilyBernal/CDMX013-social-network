import { onNavigate } from "../main.js";

export const Welcome = () =>{
    const div = document.createElement('div');
    const welcome2Loto = document.createElement('h1');
    const signUpButton = document.createElement('button');
    const loginButton = document.createElement('button');
    welcome2Loto.textContent = 'Login or sign up to Loto!';    
    signUpButton.textContent = 'Sign up';
    loginButton.textContent = 'Log in';
    loginButton.addEventListener('click', () => {
        onNavigate('/login');
    })
    signUpButton.addEventListener('click', () => {
        onNavigate('/sign-up');
    })
    div.append(welcome2Loto, loginButton, signUpButton);
    return div;
};