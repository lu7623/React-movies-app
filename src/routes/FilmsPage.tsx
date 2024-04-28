import { useLoaderData } from "react-router-dom";
import {  MovieResults } from "../api/types";
import FilmsList from "./components/FilmList";
import Pagination from "./components/Pagination";

export function FilmsPage() { 
  const {films, max} = useLoaderData() as MovieResults


  return (
    <>    
    <Pagination max={max}/>  
          <FilmsList data={films}/>
     
    </>
  );
}