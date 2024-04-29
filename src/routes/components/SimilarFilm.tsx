import { SimilarMovies } from '../../api/types';
import { Link, useParams } from 'react-router-dom';

export default function SimilarFilmCard({ film }: { film: SimilarMovies }) {
  const { pageId, detailsId } = useParams();
  const url = `/page/${pageId}/details/${film.id}`
  return (
    <Link  to={url}>
      <div className={`${!detailsId &&" hover:shadow-md hover:translate-y-1 hover:cursor-auto"}   px-2 py-5 m-2 flex flex-col justify-between items-center w-32 h-90` } >
        <h2 className='m-1 font-semibold text-xs text-slate-800'>{film.name.toUpperCase()}</h2>
        <img
          src={
            film.poster.url
              ? film.poster.url
              : '/notAvaliable.jpg'
          }
          alt="film poster"
          width={100}
        />
        <p className=' font-bold text-orange-600'>{film.rating.kp}</p>
      </div>
    </Link>
  );
}