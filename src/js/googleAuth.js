import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { refs } from './index';
import { createMarkupLogin, createMarkupLogOut } from './markup';

const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB4nCcf0Zx2nZ8gPzJiQLIYSUjZfb0eFbA',
  authDomain: 'hot-movies-b8689.firebaseapp.com',
  projectId: 'hot-movies-b8689',
  storageBucket: 'hot-movies-b8689.appspot.com',
  messagingSenderId: '394776065340',
  appId: '1:394776065340:web:ea4ab3f36c65dad4949a39',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const KEY_USER_DATA = 'user-auth-data';
const loginBox = document.querySelector('.js-login');
const headerBox = document.querySelector('.header__box');
const getUserData = getUserAuthDataToLocalStorage(KEY_USER_DATA);
renderMarkupLogin(getUserData);

function renderMarkupLogin(data) {
  if (!data) {
    loginBox.innerHTML = createMarkupLogin();
    addListenerLogin();
  } else {
    loginBox.innerHTML = createMarkupLogOut(data);
    addListenerLogOut();
    headerBox.classList.add('header__box--margin');
  }
}

function addListenerLogin() {
  const loginBtn = document.querySelector('#login-btn');
  loginBtn.addEventListener('click', onLoginBtnClick);
}

function addListenerLogOut() {
  const logOutBtn = document.querySelector('#log-out');
  logOutBtn.addEventListener('click', () => {
    localStorage.removeItem(KEY_USER_DATA);
    loginBox.innerHTML = createMarkupLogin();
    headerBox.classList.remove('header__box--margin');
    addListenerLogin();
  });
}

export function getUserAuthDataToLocalStorage(KEY_USER_DATA) {
  return JSON.parse(localStorage.getItem(KEY_USER_DATA));
}

function setUserAuthDataToLocalStorage(KEY_USER_DATA, data) {
  localStorage.setItem(KEY_USER_DATA, JSON.stringify(data));
}

function onLoginBtnClick() {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...

      if (user.emailVerified) {
        const { displayName, email, photoURL } = user;
        const UserAuthData = { displayName, email, photoURL };
        setUserAuthDataToLocalStorage(KEY_USER_DATA, UserAuthData);
        renderMarkupLogin(UserAuthData);
        addListenerLogOut();
      }
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
