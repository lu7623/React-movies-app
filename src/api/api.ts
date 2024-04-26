const BASE_URL = 'https://api.kinopoisk.dev/v1.4/movie';
const API_KEY = 'DT0PY7M-6NK433G-G6RTK6G-ZTCNGX0';

const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'X-API-KEY': API_KEY}
};

export function GetFilmsList() {
  fetch(BASE_URL + '?page=1&limit=10', options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
}