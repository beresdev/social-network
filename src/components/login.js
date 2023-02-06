// import { verifyUserStatus } from '../firebase/firebaseFunctions.js'
import { login, loginGoogle } from '../lib/index.js';

export const Login = () => {
  const body = document.getElementById('body');
  const mainContainer = document.getElementById('main');
  const footerContainer = document.getElementById('footer');

  // body.innerHTML='';
  mainContainer.innerHTML = '';
  footerContainer.innerHTML = '';

  const logoSection = document.createElement('section');
  const logo = document.createElement('img');
  const formSection = document.createElement('section');
  const form = document.createElement('form');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  const passwordLabel = document.createElement('label');
  const passwordInput = document.createElement('input');
  const eyePassword = document.createElement('span');
  const forgotLink = document.createElement('a');
  const loginButton = document.createElement('button');
  const registerGoogleSection = document.createElement('section');
  const questionP = document.createElement('p');
  const registerLink = document.createElement('a');
  const or = document.createElement('p');
  const googleLogin = document.createElement('div');
  const loginWith = document.createElement('p');
  const googleLogo = document.createElement('div');
  const footerP = document.createElement('p');

  logoSection.className = 'login-section-logo';
  logoSection.appendChild(logo);
  logo.src = '../powerL-logo_250x39.png';
  logo.alt = 'logo-P💛werL';

  formSection.className = 'login-section-form';
  formSection.appendChild(form);

  form.className = 'login-form';
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(eyePassword);
  form.appendChild(forgotLink);
  form.appendChild(loginButton);
  eyePassword.innerHTML = '<i class="fa-regular fa-eye"></i>';

  emailLabel.innerText = 'Correo';
  emailInput.placeholder = 'email@domain.com';
  emailInput.id = 'email';
  passwordLabel.innerText = 'Contraseña';
  passwordInput.placeholder = '********';
  passwordInput.id = 'password';
  passwordInput.type = 'password';
  forgotLink.innerText = '¿Olvidaste tu contraseña?';
  forgotLink.href = '';
  forgotLink.id = 'forgot-password';
  loginButton.innerText = 'Iniciar sesión';
  loginButton.className = 'login-button';
  loginButton.id = 'login';

  registerGoogleSection.className = 'login-section-registerGoogle';

  registerGoogleSection.appendChild(questionP);
  registerGoogleSection.appendChild(registerLink);
  registerGoogleSection.appendChild(or);
  registerGoogleSection.appendChild(googleLogin);

  questionP.innerText = '¿Aún no tienes una cuenta?';
  questionP.appendChild(registerLink);
  registerLink.innerText = 'Regístrate';
  registerLink.id = 'register-link';
  registerLink.href = '#/register';

  or.innerText = 'o';

  googleLogin.appendChild(loginWith);
  googleLogin.appendChild(googleLogo);
  googleLogin.className = 'login-google';

  loginWith.className = 'login-with';
  loginWith.innerText = 'Inicia sesión con ';
  googleLogo.className = 'google-logo';
  googleLogo.id = 'loginGoogle';

  mainContainer.appendChild(logoSection);
  mainContainer.appendChild(formSection);
  mainContainer.appendChild(registerGoogleSection);

  footerP.innerText = 'Desarrollada por y para Laboratorians';
  footerContainer.appendChild(footerP);

  body.appendChild(mainContainer);
  body.appendChild(footerContainer);

  const loginG = document.getElementById('loginGoogle');

  loginG.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle();
  });

  const loginB = document.getElementById('login');
  loginB.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === '' || password == '') {
      alert("Ingresa correo y contraseña")
    }
    else {
      login(email, password);
    }
  });
};
