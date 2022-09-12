import axios from 'axios';

const KEY = 'api_key=a1b67e21d001fd0b301e3f4d42b48ca7';
const BASE_URL = 'https://api.themoviedb.org';

export default class ApiMovies {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalPages = 1;
  }

  saveTotalPages(totalPages) {
    return (this.totalPages = totalPages);
  }

  resetTotalPages() {
    return (this.totalPages = 1);
  }

  getTotalPages() {
    return this.totalPages;
  }

  incrementPage() {
    return (this.page += 1);
  }

  resetPage() {
    return (this.page = 1);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newSearchQuery) {
    // console.log(this.searchQuery);
    return (this.searchQuery = newSearchQuery);
  }

  fetchApiMoviesTrend() {
    return axios.get(
      `${BASE_URL}/3/trending/movie/day?${KEY}&page=${this.page}`
    );
  }

  fetchGanresID() {
    return axios.get(`${BASE_URL}/3/genre/movie/list?${KEY}`);
  }

  fetchFindMoviesBySearchQuery() {
    console.log(this.searchQuery);
    console.log(this.page);
    return axios.get(`
${BASE_URL}/3/search/movie?${KEY}&query=${this.searchQuery}&page=${this.page}`);
  }

  fetchOneMovie(id) {
    return axios.get(`${BASE_URL}/3/movie/${id}?${KEY}`);
  }
}
