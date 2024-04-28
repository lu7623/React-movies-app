import { MovieInfo } from '../../api/types';
import { Link, useParams } from 'react-router-dom';

export default function FilmCard({ film }: { film: MovieInfo }) {

  const { pageId } = useParams();

  const url = `/page/${pageId}/details/${film.id}`

  return (
    <Link to={url}>
      <div className=" flex flex-col justify-between items-center">
        <h2>{film.name.toUpperCase()}</h2>
        <img
          src={
            film.poster.previewUrl
              ? film.poster.previewUrl
              : '/notAvaliable.jpg'
          }
          alt="pokemon"
          width={150}
        />
        <p>{film.rating.kp}</p>
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