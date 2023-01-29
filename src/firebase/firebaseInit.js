/* eslint-disable */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';
import firebaseConfig from './firebaseConfig.js';
import {
  getAuth,
  GoogleAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';

/* eslint-enable */

let app = null;
let auth = null;
let provider = null;

export function getAppInstance() {
  if (!app) {
    app = initializeApp(firebaseConfig);
    console.log('App initialized');
  }

  return app;
}

export function getAuthInstance() {
  if (!auth) {
    auth = getAuth(getAppInstance());
    console.log('Auth initialized');
  }

  return auth;
}

export function googleInstance() {
  if (!provider) {
    provider = new GoogleAuthProvider();
    console.log('Google provider initialized');
  }

  return provider;
}
