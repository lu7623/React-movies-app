import { MovieInfo } from '../../api/types';
import { Link, useParams } from 'react-router-dom';

export default function FilmCard({ film }: { film: MovieInfo }) {

  const { pageId } = useParams();

  const url = `/page/${pageId}/details/${film.id}`

  return (
    <Link to={url}>
      <div className="card">
        <h2>{film.name.toUpperCase()}</h2>
        <h3>
          Genres:
          {film.genres.map((type) => (
            <span className="type" key={type.name}>
              {type.name}
            </span>
          ))}
        </h3>
      
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
      </div>
    </Link>
  );
}