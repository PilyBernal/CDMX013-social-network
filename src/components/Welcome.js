import { onNavigate } from '../main.js';

export const Welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const logo = document.createElement('img');
  const name = document.createElement('img');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');
  const end = document.createElement('footer');
  const content = document.createElement('div');

  logo.setAttribute('class', 'logo');
  logo.src = '../Images/Logo.png';
  name.src = '../Images/Name.png';
  buttonLogin.textContent = 'Iniciar sesión';
  buttonRegister.textContent = 'Registrarse';
  title.textContent = 'Bienvenida';
  end.textContent = 'LOTO / 2022';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/Login');
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/Register');
  });

  div.append(logo, name, title, buttonLogin, buttonRegister, end);

  return (div);
};
