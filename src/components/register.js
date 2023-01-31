// import { auth } from '../firebase/firebaseInit.js';
import { registerFirebase } from '../firebase/firebaseFunctions.js';

export const Register = () => {
  const body = document.getElementById('body');
  const mainContainer = document.getElementById('main');
  const footerContainer = document.getElementById('footer');

  // body.innerHTML = '';
  mainContainer.innerHTML = '';
  footerContainer.innerHTML = '';

  const logoSection = document.createElement('section');
  const logo = document.createElement('img');
  const titleSection = document.createElement('section');
  const h2 = document.createElement('h2');
  const formSection = document.createElement('section');
  const form = document.createElement('form');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  const userLabel = document.createElement('label');
  const userInput = document.createElement('input');
  const passwordLabel = document.createElement('label');
  const passwordInput = document.createElement('input');
  const sendButton = document.createElement('button');
  const footerP = document.createElement('p');

  logoSection.className = 'section-logo';
  logoSection.appendChild(logo);
  logo.src = '../powerL-logo_250x39.png';
  logo.alt = 'logo-P💛werL';

  titleSection.className = 'section-h2';
  titleSection.appendChild(h2);
  h2.innerText = 'Regístrate';

  formSection.className = 'section-form';
  formSection.appendChild(form);

  form.className = 'register-form';
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(userLabel);
  form.appendChild(userInput);

  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(sendButton);

  emailLabel.innerText = 'Correo';
  userLabel.innerText = 'Usuaria';
  passwordLabel.innerText = 'Contraseña';

  emailInput.type = 'email';
  emailInput.pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
  emailInput.id = 'emailRegister';
  emailInput.required = 'required';
  emailInput.placeholder = 'email@domain.com';

  userInput.type = 'text';
  userInput.placeholder = 'latinaTech';
  userInput.id = 'userRegister';

  passwordInput.type = 'password';
  passwordInput.minLength = '8';

  passwordInput.id = 'passwordRegister';
  passwordInput.required = 'required';
  passwordInput.placeholder = '********';

  sendButton.innerText = 'Enviar';
  sendButton.className = 'sendButton';
  sendButton.id = 'sendButton';

  footerP.innerText = 'Desarrollada por y para Laboratorians';
  footerContainer.appendChild(footerP);

  mainContainer.appendChild(logoSection);
  mainContainer.appendChild(titleSection);
  mainContainer.appendChild(formSection);

  body.appendChild(mainContainer);
  body.appendChild(footerContainer);

  const submit = document.getElementById('sendButton');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailRegister').value;
    const password = document.getElementById('passwordRegister').value;
    const userName = document.getElementById('userRegister').value;
    registerFirebase(email, password, userName);
    console.log('Registro finalizado');
  });
};
