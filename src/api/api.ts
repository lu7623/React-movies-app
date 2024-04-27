import { DetailedMovieInfo, MovieResponse } from "./types";

const BASE_URL = 'https://api.kinopoisk.dev/v1.4/movie';
const API_KEY = 'DT0PY7M-6NK433G-G6RTK6G-ZTCNGX0';

const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'X-API-KEY': API_KEY}
};

export async function GetFilmsList(page:number) {
  try {
    const response = await fetch(BASE_URL + `?page=${page}&limit=10`, options)
    if (response.ok) {
      const data = await response.json() as MovieResponse;
      return data.docs
    }
    return null
  }
  catch {
    return null
  }
}

export async function GetFilmDetails(id: number) {
  try {
    const response = await fetch(BASE_URL + `/${id}`, options)
    if (response.ok) {
      const data = await response.json() as DetailedMovieInfo;
      return data
    }
    return null
  }
  catch {
    return null
  }
}