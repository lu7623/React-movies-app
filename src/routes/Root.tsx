
import { useEffect, useState } from 'react';

import Loading from './components/Loading';
import { GetFilmsList } from '../api/api';
import { LoaderFunctionArgs, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import FilmsList from './components/FilmList';
import { MovieInfo } from '../api/types';


export async function filmsLoader({ params }: LoaderFunctionArgs) {
  const pageNum = params.pageId;
    const filmsData = await GetFilmsList(Number(pageNum));
    return filmsData;
}
  

export function Root() { 
  const films = useLoaderData() as MovieInfo[]
  const [load] = useState(false);
  const { pageId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
   
    if (!pageId ) navigate('/page/1');
 
  }, [ navigate]);

  return (
    <>
      <div className="App">
        <div className="header">
          <div className="Logo"></div>
      
          <div className="Img"></div>
        </div>
        {load ? <Loading /> : null}
        <div style={load ? { opacity: '30%' } : { opacity: '100%' }}>
        
          <FilmsList data={films}/>
        </div>
      </div>
     
    </>
  );
}