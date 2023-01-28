// Este es el punto de entrada de tu aplicacion
import { Register } from './components/register.js';
import { Login } from './components/login.js';
import { Feed } from './components/feed.js';
import{route, template, router} from './lib/router.js'

template('login', function () {
    Login();
})

template('register', function () {
    Register();
})

template('register', function () {
    Feed();
})

route('/', 'login');
route('/register', 'register');
route('/feed', 'feed');

window.addEventListener('load', router);
window.addEventListener('hashchange', router); 