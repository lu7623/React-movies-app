import { DetailedMovieInfo, MovieResponse } from "./types";

const BASE_URL = 'https://api.kinopoisk.dev/v1.4/movie';
const API_KEY = 'BHS78EN-KJW4VD9-KAAK89K-SZWKDSQ';

const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'X-API-KEY': API_KEY}
};

export async function GetFilmsList(page:number) {
  try {
    const response = await fetch(BASE_URL + `?page=${page}&limit=10&notNullFields=name`, options)
    if (response.ok) {
      const data = await response.json() as MovieResponse;
      return {films: data.docs, max: data.pages }
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