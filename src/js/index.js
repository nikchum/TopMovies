// import 'tui-pagination/dist/tui-pagination.css';
// import './pagination';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import debounce from 'debounce';
import throttle from 'lodash.throttle';
import ApiMovies from './ApiMovies';
import './googleAuth';
import './endlessScroll';
import noImg from '../images/no-img.jpeg';
import { createBtn } from './markup';

Notify.init({
  position: 'right-bottom',
  clickToClose: true,
});

const boxRenderHeader = document.querySelector('.js-box');

renderBoxHeader();

export const refs = {
  ulList: document.querySelector('.movies'),
  input: document.querySelector('.search__input'),
  linkLib: document.querySelector('#library'),
  homeLink: document.querySelector('#nav_home'),
  header: document.querySelector('header'),
  modalBackdrop: document.querySelector('.backdrop'),
  modalBtnClose: document.querySelector('.modal__close'),
  modal: document.querySelector('.modal'),
  errorSearchMassege: document.querySelector('.error-massege'),
  backdrop: document.querySelector('.backdrop'),
  scrollTopBtn: document.querySelector('.isShowBtn'),
};

export const newApiMovies = new ApiMovies();

refs.input.addEventListener('input', debounce(onGetValueInput, 300));
refs.linkLib.addEventListener('click', onClickLibrary);
document.addEventListener('scroll', throttle(onScrollBtnTop, 300));
refs.ulList.addEventListener('click', showOneMovieClick);
refs.scrollTopBtn.addEventListener('click', onClickScrollTop);

export let ganresId = [];

showTrendMovies();

const LOCAL_KEY_WATHED = 'watched-movies';
const LOCAL_KEY_QUEUE = 'queue-movies';
const KEY_USER_DATA = 'user-auth-data';

function onClickScrollTop() {
  window.scrollTo(0, 0);
}

function onScrollBtnTop() {
  console.log(window.scrollY);
  if (window.scrollY > 400) {
    refs.scrollTopBtn.classList.remove('isShowBtn__hide');
  } else if (window.scrollY < 400) {
    refs.scrollTopBtn.classList.add('isShowBtn__hide');
  }
}

function onWachedBtnClick(el) {
  el.buttonQueue.classList.remove('btn-watched');
  el.buttonWached.classList.add('btn-watched');
  refs.ulList.removeEventListener('click', onDeleteMovieQueueClick);
  refs.ulList.addEventListener('click', onDeleteMovieWatchedClick);

  const getValue = getLocalStorage(LOCAL_KEY_WATHED);

  if (getValue < 1) {
    return (refs.ulList.innerHTML =
      'Unfortunately your list is empty, please add movies.');
  }
  refs.ulList.innerHTML = makeMarkupMovies(getValue);
  const MoviesItem = document.querySelectorAll('.movies__item');
  createDeleteBtnMovies(MoviesItem);
}

function onQueueBtnClick(el) {
  el.buttonWached.classList.remove('btn-watched');
  el.buttonQueue.classList.add('btn-watched');
  refs.ulList.removeEventListener('click', onDeleteMovieWatchedClick);
  refs.ulList.addEventListener('click', onDeleteMovieQueueClick);

  const getValue = getLocalStorage(LOCAL_KEY_QUEUE);

  if (getValue.length < 1) {
    return (refs.ulList.innerHTML =
      'Unfortunately your list is empty, please add movies.');
  }
  refs.ulList.innerHTML = makeMarkupMovies(getValue);
  const MoviesItem = document.querySelectorAll('.movies__item');
  createDeleteBtnMovies(MoviesItem);
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function onAddWatchedClick(movie, el) {
  if (!getLocalStorage(KEY_USER_DATA)) {
    Notify.failure('Login to your account!');
    return;
  }
  const watchedMovies = getLocalStorage(LOCAL_KEY_WATHED) || [];
  addDisabledButton(el.buttonAddWathed, 'ADDED TO WATCH');
  const checkMovieInArray = watchedMovies.findIndex(
    el => el.id === movie.data.id
  );

  if (checkMovieInArray === -1) {
    watchedMovies.push(movie.data);
    setLocalStorage(LOCAL_KEY_WATHED, watchedMovies);
    Notify.success('Movie added successfully');
    el.buttonAddWathed.disabled = true;
    return;
  }
}

function onAddqueueClick(movie, el) {
  if (!getLocalStorage(KEY_USER_DATA)) {
    Notify.failure('Login to your account!');
    return;
  }
  const queueMovies = getLocalStorage(LOCAL_KEY_QUEUE) || [];
  addDisabledButton(el.buttonAddQueue, 'ADDED TO QUEUE');
  const checkMovieInArray = queueMovies.findIndex(
    el => el.id === movie.data.id
  );

  if (checkMovieInArray === -1) {
    queueMovies.push(movie.data);
    setLocalStorage(LOCAL_KEY_QUEUE, queueMovies);
    Notify.success('Movie added successfully');
    return;
  }
}

async function showOneMovieClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  refs.modal.innerHTML = '';
  toggleModal();
  refs.backdrop.addEventListener('click', onCloseModalClick);
  document.addEventListener('keydown', onCloseModalEsc);

  const getDataMovie = await newApiMovies.fetchOneMovie(e.target.id);
  const createMarkup = makeMarkupOneMovie(getDataMovie.data);

  refs.modal.innerHTML = createMarkup;

  const el = {
    buttonAddWathed: document.querySelector('.card__button-watch'),
    buttonAddQueue: document.querySelector('.card__button-queue'),
  };

  if (getLocalStorage(KEY_USER_DATA)) {
    if (checkMovieOnAdded(getDataMovie, LOCAL_KEY_WATHED)) {
      addDisabledButton(el.buttonAddWathed, 'ADDED TO WATCH');
    }

    if (checkMovieOnAdded(getDataMovie, LOCAL_KEY_QUEUE)) {
      addDisabledButton(el.buttonAddQueue, 'ADDED TO QUEUE');
    }
  }

  el.buttonAddWathed.addEventListener('click', () =>
    onAddWatchedClick(getDataMovie, el)
  );
  el.buttonAddQueue.addEventListener('click', () =>
    onAddqueueClick(getDataMovie, el)
  );
}

function toggleModal(e) {
  refs.modalBackdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}

async function onGetValueInput(e) {
  newApiMovies.resetPage();
  newApiMovies.resetTotalPages();
  newApiMovies.query = e.target.value;
  if (refs.errorSearchMassege.classList.contains('error-massege--visible')) {
    refs.errorSearchMassege.classList.remove('error-massege--visible');
  }

  try {
    const getMovies = await newApiMovies.fetchFindMoviesBySearchQuery();
    console.log(getMovies);
    if (getMovies.data.results.length === 0) {
      return refs.errorSearchMassege.classList.add('error-massege--visible');
    }

    newApiMovies.saveTotalPages(getMovies.data.total_pages);
    refs.ulList.innerHTML = '';
    makeMarkupTrendMovies(getMovies.data.results, ganresId.data.genres);
  } catch (error) {
    console.log(error);
  }
}

async function showTrendMovies() {
  ganresId = await newApiMovies.fetchGanresID();
  console.log(ganresId);
  const movies = await newApiMovies.fetchApiMoviesTrend();
  console.log(movies.data);

  makeMarkupTrendMovies(movies.data.results, ganresId.data.genres);
}

function makeMarkupOneMovie(data) {
  const {
    genres,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
    vote_count,
  } = data;

  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/original';
  const genresNames = genres.map(el => el.name).join(', ');

  let releaseDate = release_date ? release_date.slice(0, 4) : 'unknown';
  let poster = poster_path ? BASE_URL_IMG + poster_path : noImg;

  return `<div class="card">
  <div class="card__img-box">
    <img src=${poster} alt=${title} class="card__img" />
  </div>
  <div class="card__flex">
  <div class="card__box-descr">
    <h2 class="card__title">${title}</h2>
    <ul class="card__list">
      <li class="card__item">
        <p class="card__category">Vote / Votes:</p>
        <p class="card__value"><span class="movies__rating">${vote_average.toFixed(
          1
        )}</span> / ${vote_count}</p>
      </li>
      <li class="card__item">
        <p class="card__category">Release year:</p>
        <p class="card__value">${releaseDate} </p>
      </li>

      <li class="card__item">
        <p class="card__category">Genre:</p>
        <p class="card__value">${genresNames}</p>
      </li>
    </ul>
  </div>
  <div class="card__box-about">
    <p class="card__about">ABOUT</p>
    <p class="card__descr">${overview}</p>
  </div>
  <div class="card__box-button">
    <button type="button" class="btn btn-comm card__button-watch">ADD TO WATCH</button>
    <button type="button" class="btn btn-comm card__button-queue">ADD TO QUEUE</button>
  </div>
</div>
</div>`;
}

function makeMarkupMovies(movies) {
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/original';

  const markup = movies.map(
    ({ genres, poster_path, release_date, title, vote_average, id }) => {
      const genresNames = genres.map(el => el.name).join(', ');

      let poster = poster_path ? BASE_URL_IMG + poster_path : noImg;
      let releaseDate = release_date ? release_date.slice(0, 4) : 'unknown';

      return `<li class="movies__item" id=${id}>

    <img id='${id}' src=${poster} alt=${title} class="movies__img">
    <h3 class="movies__title">${title}</h3>
    <p class="movies__subtitle">${genresNames} | ${releaseDate}<span class="movies__rating" >${vote_average.toFixed(
        1
      )}</span></p>

</li>`;
    }
  );

  return markup.join('');
}

export function makeMarkupTrendMovies(movies, ganres) {
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/original';
  console.log(movies);
  const markup = movies.map(
    ({
      original_title,
      genre_ids,
      release_date,
      vote_average,
      poster_path,
      id,
    }) => {
      const ganresNames = [];
      const findGanresById = genre_ids.map(id =>
        ganresNames.push(ganres.find(el => el.id === id).name)
      );

      let poster = poster_path ? BASE_URL_IMG + poster_path : noImg;
      let releaseDate = release_date ? release_date.slice(0, 4) : 'unknown';

      return `<li class="movies__item" >

    <img id='${id}' src=${poster} alt=${original_title} class="movies__img">
    <h3 class="movies__title">${original_title}</h3>
    <p class="movies__subtitle">${ganresNames.join(', ')} | ${releaseDate}</p>
      <p class="movies__rating-name">Rating:<span class="movies__rating">${vote_average.toFixed(
        1
      )} </span></p>

</li>`;
    }
  );

  refs.ulList.insertAdjacentHTML('beforeend', markup.join(''));
}

function onClickLibrary(e) {
  e.preventDefault();

  refs.ulList.addEventListener('click', onDeleteMovieWatchedClick);

  if (refs.errorSearchMassege.classList.contains('error-massege--visible')) {
    refs.errorSearchMassege.classList.remove('error-massege--visible');
  }

  if (!getLocalStorage(KEY_USER_DATA)) {
    Notify.failure('Login to your account!');
    return;
  }
  clearBoxHeader();
  renderLibraryBtnHeader();

  refs.homeLink.classList.remove('nav__link--active');
  refs.linkLib.classList.add('nav__link--active');
  refs.header.classList.add('header-img');

  const el = {
    buttonWached: document.querySelector('.btn-watched'),
    buttonQueue: document.querySelector('#btn-queue'),
  };

  el.buttonWached.addEventListener('click', () => onWachedBtnClick(el));
  el.buttonQueue.addEventListener('click', () => onQueueBtnClick(el));

  refs.ulList.innerHTML = makeMarkupMovies(getLocalStorage(LOCAL_KEY_WATHED));
  const MoviesItem = document.querySelectorAll('.movies__item');

  createDeleteBtnMovies(MoviesItem);
}

function renderBoxHeader() {
  boxRenderHeader.innerHTML = `<label class="search">
          <input type="text" class="search__input" placeholder="Movie search" />
        </label>`;
}

function clearBoxHeader() {
  boxRenderHeader.innerHTML = '';
}

function renderLibraryBtnHeader() {
  boxRenderHeader.innerHTML = `<button type="button" class="btn btn-watched btn--position">WATCHED</button>
    <button type="button" id='btn-queue' class="btn ">QUEUE</button>`;
}

function checkMovieOnAdded(movie, key) {
  const getLocalData = getLocalStorage(key);

  if (getLocalData) {
    const findSameId = getLocalData.some(el => el.id === movie.data.id);
    return findSameId;
  }
}

function addDisabledButton(refs, text) {
  refs.disabled = true;
  refs.classList.add('is-disabled');
  refs.textContent = text;
}

function onCloseModalClick(e) {
  if (e.target === e.currentTarget || e.target === refs.modalBtnClose) {
    toggleModal();
  }
}

function onCloseModalEsc(e) {
  if (e.code === 'Escape') {
    toggleModal();
    document.removeEventListener('keydown', onCloseModalEsc);
  }
}

function createDeleteBtnMovies(refs) {
  refs.forEach(el => el.insertAdjacentHTML('beforeend', createBtn(el.id)));
}

function onDeleteMovieWatchedClick(e) {
  let getWatchedMovies = getLocalStorage(LOCAL_KEY_WATHED);

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const idEl = Number(e.target.id);

  const findEl = getWatchedMovies.findIndex(el => el.id === idEl);

  let findRefs = document.getElementById(`${idEl}`).remove();

  const deleteMovie = getWatchedMovies.splice(findEl, 1);

  setLocalStorage(LOCAL_KEY_WATHED, getWatchedMovies);
}

function onDeleteMovieQueueClick(e) {
  let getQueueMovies = getLocalStorage(LOCAL_KEY_QUEUE);

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const idEl = Number(e.target.id);

  const findEl = getQueueMovies.findIndex(el => el.id === idEl);

  let findRefs = document.getElementById(`${idEl}`).remove();

  const deleteMovie = getQueueMovies.splice(findEl, 1);

  setLocalStorage(LOCAL_KEY_QUEUE, getQueueMovies);
}
