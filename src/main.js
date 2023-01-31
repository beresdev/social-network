// Este es el punto de entrada de tu aplicacion

import { Register } from './components/register.js';
import { Login } from './components/login.js';
import { Feed } from './components/feed.js';
import { route, template, router } from './lib/router.js';

template('login', () => {
  Login();
});

template('register', () => {
  Register();
});

template('feed', () => {
  Feed();
});

route('/', 'login');
route('/register', 'register');
route('/feed', 'feed');

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
