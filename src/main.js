/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */

// Este es el punto de entrada de tu aplicacion
import { Welcome } from './components/Welcome.js';
import { Login } from './components/login.js';
import { Register } from './components/Register.js';

const root = document.getElementById('root');
const routes = {
  '/': Welcome,
  '/login': Login,
  '/register': Register,
};
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
root.appendChild(component());
