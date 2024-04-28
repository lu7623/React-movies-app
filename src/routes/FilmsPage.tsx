import { useLoaderData } from "react-router-dom";
import { MovieInfo } from "../api/types";
import FilmsList from "./components/FilmList";

export function FilmsPage() { 
  const films = useLoaderData() as MovieInfo[]


  return (
    <>     
          <FilmsList data={films}/>
     
    </>
  );
}