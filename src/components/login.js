import { onNavigate } from "../router";

export const Login = () => {
    const body = document.getElementById('body');
    const mainContainer = document.getElementById('main');
    const footerContainer = document.getElementById('footer');

    const logoSection = document.createElement('section');
    const logo = document.createElement('img');
    const formSection = document.createElement('section');
    const form = document.createElement('form');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const passwordLabel = document.createElement('label');
    const passwordInput = document.createElement('input');
    const forgotLink = document.createElement('a');
    const loginButton = document.createElement('button');
    const registerSection = document.createElement('section');
    const questionP = document.createElement('p');
    const registerLink = document.createElement('a');
    const or = document.createElement('p');
    const googleLink = document.createElement('a');
    const footerP = document.createElement('p');

    logoSection.className = 'section-logo';
    logoSection.appendChild(logo);
    logo.src = '../powerL-logo_250x39.png';
    logo.alt = 'logo-P💛werL';

    formSection.appendChild(form);

    form.className = 'login-form';
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(forgotLink);
    form.appendChild(loginButton);

    emailLabel.innerText = 'Correo';
    passwordLabel.innerText = 'Contraseña';
    emailInput.placeholder = 'email@domain.com';
    passwordInput.placeholder = '********';
    forgotLink.innerText = '¿Olvidaste tu contraseña';
    loginButton.innerText = 'Iniciar sesión';

    registerSection.className = 'section-register';

    registerSection.appendChild(questionP);
    registerSection.appendChild(registerLink);
    registerSection.appendChild(or);
    registerSection.appendChild(googleLink);

    questionP.innerText = '¿Aún no tienes una cuenta?';
    registerLink.innerText = 'Regpistrate';
    or.innerText = 'o';
    googleLink.innerText = 'Inicia sesión con Google';

    registerLink.addEventListener('click', () => onNavigate('/register'));

    mainContainer.appendChild(logoSection);
    mainContainer.appendChild(formSection);
    mainContainer.appendChild(registerSection);

    footerP.innerText = 'Creado por y para Laboratorians'
    footerContainer.appendChild(footerP);

    body.appendChild(mainContainer);
    body.appendChild(footerContainer);


    return body;
}