import throttle from 'lodash.throttle';

import { ganresId, makeMarkupTrendMovies } from './index';
import { newApiMovies } from './index';
import { refs } from './index';

window.addEventListener('scroll', throttle(onScrollMovies, 700));

let currentPage = 1;

async function onScrollMovies() {
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;

  // Они могут отличаться: если на странице много контента,
  // высота документа будет больше высоты экрана (отсюда и скролл).

  // Записываем, сколько пикселей пользователь уже проскроллил:
  const scrolled = window.scrollY;

  // Обозначим порог, по приближении к которому
  // будем вызывать какое-то действие.
  // В нашем случае — четверть экрана до конца страницы:
  const threshold = height - screenHeight / 4;

  // Отслеживаем, где находится низ экрана относительно страницы:
  const position = scrolled + screenHeight;

  if (position >= threshold) {
    const checkActiveHome =
      refs.homeLink.classList.contains('nav__link--active');

    if (!checkActiveHome) {
      return;
    }

    if (newApiMovies.query) {
      if (newApiMovies.getTotalPages() === currentPage) {
        return;
      }
      newApiMovies.incrementPage();
      const getMovies = await newApiMovies.fetchFindMoviesBySearchQuery();
      currentPage += 1;
      console.log('запрос');

      makeMarkupTrendMovies(getMovies.data.results, ganresId.data.genres);
    } else {
      newApiMovies.incrementPage();
      const getMovies = await newApiMovies.fetchApiMoviesTrend();

      makeMarkupTrendMovies(getMovies.data.results, ganresId.data.genres);
    }
  }
}
