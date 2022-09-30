import { onNavigate } from '../main.js';

export const Welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h5');
  const logo = document.createElement('img');
  const name = document.createElement('img');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogin.textContent = 'Log in';
  buttonRegister.textContent = 'Register';
  title.textContent = 'Welcome to loto the place to exchange plants and more...';
  
  const end = document.createElement('footer');
  const content = document.createElement('div');
  
  logo.setAttribute('class', 'logo');
  logo.src = '../Images/Logo.png';
  name.src = '../Images/Name.png';
  end.textContent = 'LOTO / 2022';
  

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  
  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  div.append(logo, name, title, buttonLogin, buttonRegister, end);
  return div;
};