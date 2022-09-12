import avatar from '../images/avatar.jpg';

export function createMarkupLogin() {
  return '<button id="login-btn" class="login__btn" type="button">Login</button>';
}

export function createMarkupLogOut(data) {
  const { displayName, photoURL = avatar, email } = data;
  return `<img class="login__img" src=${avatar} alt='Logo' >
<p class="login__name">${displayName}<span class="login__email">${email}</span></p>
        <button id ="log-out" class="login__btn log-out__btn" type = "button" >Log out</ button> `;
}

export function createBtn(id) {
  return `<button id =${id} class="delete__btn" type="button">X</button>`;
}
