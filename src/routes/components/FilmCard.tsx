import { MovieInfo } from '../../api/types';
import { Link, useParams } from 'react-router-dom';

export default function FilmCard({ film }: { film: MovieInfo }) {
  const { pageId, detailsId } = useParams();
  const url = `/page/${pageId}/details/${film.id}`
  return (
    <Link  to={url}>
      <div className={`${!detailsId &&" hover:shadow-md hover:translate-y-1 hover:cursor-auto"}   px-2 py-5 m-2 flex flex-col justify-between items-center ` } >
        <h2 className='m-1 font-semibold text-slate-800'>{film.name.toUpperCase()}</h2>
        <img
          src={
            film.poster.previewUrl
              ? film.poster.previewUrl
              : '/notAvaliable.jpg'
          }
          alt="pokemon"
          width={150}
        />
        <p className=' font-bold text-orange-600'>{film.rating.kp}</p>
        <p className='flex flex-wrap justify-center'>
        {film.genres.map((type) => (
            <span className=" m-1 px-1 inline-block text-xs bg-slate-200" key={type.name}>
              {type.name}
            </span>
        ))}
          </p>
      </div>
    </Link>
  );
}