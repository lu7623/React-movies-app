
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
        style={{ display: 'flex' }}
        onClick={() => {
          detailsId && navigate(url);
        }}
      >
        <div
          className="cardContainer"
          style={
            detailsId ? { opacity: '40%', width: '50%' } : { width: '100%' }
          }
        >
          {data && (
            data.map((film) => {
              return <FilmCard key={film.name} film={film} />;
            })
          )}
        </div>
        <Outlet />
      </div>
    </>
  );
}