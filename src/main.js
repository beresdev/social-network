// Este es el punto de entrada de tu aplicacion
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import firebaseConfig from './firebase/firebaseConfig.js';
import { Register } from './components/register.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
//import { registerFirebase} from './firebase/firebaseFunctions.js';
import { Login } from './components/login.js';
import{route, template, router} from './lib/router.js'

initializeApp(firebaseConfig);
export const auth = getAuth();

template('login', function () {
    Login();
})

template('register', function () {
    Register();
    // const submit = document.getElementById('sendButton');
    // submit.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     let email = document.getElementById('emailRegister').value
    //     let password = document.getElementById('passwordRegister').value
    //     registerFirebase(auth, email, password)
    //     email = "";
    //     password = "";
    // })
})

route('/', 'login');
route('/register', 'register');

window.addEventListener('load', router);
window.addEventListener('hashchange', router); 