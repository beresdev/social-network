import { registerFirebase} from '../firebase/firebaseFunctions.js';
import {auth} from '../main.js'

export const Register = () => {
  const body = document.getElementById("body");
  const mainContainer = document.getElementById("main");
  const footerContainer = document.getElementById("footer");

  //body.innerHTML = "";
  mainContainer.innerHTML = '';
  footerContainer.innerHTML = '';

  const logoSection = document.createElement("section");
  const logo = document.createElement("img");
  const titleSection = document.createElement("section");
  const h2 = document.createElement("h2");
  const formSection = document.createElement("section");
  const form = document.createElement("form");
  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  const userLabel = document.createElement("label");
  const userInput = document.createElement("input");
  //const statusLabel = document.createElement('label');
  // const statusContaner = document.createElement('div');
  // const studentInput = document.createElement('input');
  // const studentLabel = document.createElement('label');
  // const graduateInput = document.createElement('input');
  // const graduateLabel = document.createElement('label');
  const passwordLabel = document.createElement("label");
  const passwordInput = document.createElement("input");
  const sendButton = document.createElement("button");
  const footerP = document.createElement("p");

  logoSection.className = "section-logo";
  logoSection.appendChild(logo);
  logo.src = "../powerL-logo_250x39.png";
  logo.alt = "logo-P💛werL";

  titleSection.className = "section-h2";
  titleSection.appendChild(h2);
  h2.innerText = "Regístrate";

  formSection.className = "section-form";
  formSection.appendChild(form);

  //statusContaner.className = 'status-container'

  form.className = "register-form";
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(userLabel);
  form.appendChild(userInput);
  //form.appendChild(statusLabel);
  // form.appendChild(statusContaner);
  // statusContaner.appendChild(studentInput);
  // statusContaner.appendChild(studentLabel);
  // statusContaner.appendChild(graduateInput);
  // statusContaner.appendChild(graduateLabel);
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(sendButton);

  emailLabel.innerText = "Correo";
  userLabel.innerText = "Usuaria";
  passwordLabel.innerText = "Contraseña";

  emailInput.type = "email";
  emailInput.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
  emailInput.id = "emailRegister";
  emailInput.required = "required";
  emailInput.placeholder = "email@domain.com";

  userInput.type = "text";
  userInput.placeholder = "latinaTech";
  userInput.id = "userRegister";

  passwordInput.type = "password";
  passwordInput.minLength = "8";
  //passwordInput.pattern = '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}';
 // passwordInput.title =
    //"Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters";
  passwordInput.id = "passwordRegister";
  passwordInput.required = "required";
  passwordInput.placeholder = "********";

  //statusLabel.innerText = 'Soy:'

  // studentInput.type = 'radio';
  // studentInput.id = 'student';
  // studentInput.name = 'status';
  // studentInput.value = 'Estudiante'
  // studentLabel.for = 'student';
  // studentLabel.innerText = 'Estudiante';

  // graduateInput.type = 'radio';
  // graduateInput.id = 'graduate';
  // graduateInput.name = 'status';
  // graduateInput.value = 'Egresada'
  // graduateLabel.for = 'graduate';
  // graduateLabel.innerText = 'Egresada';

  sendButton.innerText = "Enviar";
  sendButton.className = "sendButton";
  sendButton.id = "sendButton";
  //sendButton.type = 'submit';

  footerP.innerText = "Desarrollada por y para Laboratorians";
  footerContainer.appendChild(footerP);

  mainContainer.appendChild(logoSection);
  mainContainer.appendChild(titleSection);
  mainContainer.appendChild(formSection);

  body.appendChild(mainContainer);
  body.appendChild(footerContainer);

  const submit = document.getElementById('sendButton');
  submit.addEventListener('click', (e) => {
      e.preventDefault();
      let email = document.getElementById('emailRegister').value
      let password = document.getElementById('passwordRegister').value
      let user = document.getElementById('userRegister').value
      registerFirebase(auth, email, password)
      console.log('Registro finalizado')
  })
};
