/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */

// Este es el punto de entrada de tu aplicacion
import { Welcome } from './components/Welcome.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { Home } from './components/Home.js';
//import { } from "../firebase/firestore";

const root = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/login': Login,
  '/register': Register,
  '/home': Home,
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

window.onpopstate = () => {
  const component = routes[window.location.pathname];
  root.removeChild(root.firstChild);
  root.append(component());
};

root.appendChild(component());