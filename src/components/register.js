export const Register = () => {
    const body = document.getElementById('body');
    const mainContainer = document.getElementById('main');
    const footerContainer = document.getElementById('footer');

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
    logo.src = './';
    logo.alt = 'logo-P💛werL';

    titleSection.className = 'section-h2';
    titleSection.appendChild(h2);
    h2.innerText = "Regístrate";

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

    emailInput.placeholder = 'email@domain.com';
    userInput.placeholder = 'latinaTech';
    passwordInput.placeholder = '********';

    footerP.innerText = 'Creado por y para Laboratorians'
    footerContainer.appendChild(footerP);

    mainContainer.appendChild(logoSection);
    mainContainer.appendChild(titleSection);
    mainContainer.appendChild(formSection);

    body.appendChild(mainContainer);
    body.appendChild(footerContainer);

    return body;
}