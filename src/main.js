// Este es el punto de entrada de tu aplicacion
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import firebaseConfig from "../firebase/firebaseConfig.js";
import { load } from './lib/router.js';

const app = initializeApp(firebaseConfig);

load()

window.onpopstate = load;