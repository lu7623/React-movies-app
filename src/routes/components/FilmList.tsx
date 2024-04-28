import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { MovieInfo } from '../../api/types';
import FilmCard from './FilmCard';


export default function FilmsList({ data }:{data:MovieInfo[]}) {
  const navigate = useNavigate();
  const { pageId, detailsId } = useParams();
  const url = `/page/${pageId}`;
  
  return (
    <>
      <div
        className='flex'
        onClick={() => {
          detailsId && navigate(url);
        }}
      >
        <div
          className={detailsId ? ' grid gap-2 m-2 grid-cols-2 opacity-40 w-1/2' : 'grid gap-2 m-2  grid-cols-5 w-full opacity-100'}
         
        >
          {data && (
            data.map((film) => {
              return <FilmCard key={film.name} film={film} />;
            })
          )}
        </div>
        {detailsId && <Outlet />}
      </div>
    </>
  );
}