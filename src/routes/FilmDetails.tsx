import { DetailedMovieInfo } from "../api/types";
import { Link, useParams } from "react-router-dom";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { GetFilmDetails } from "../api/api";

export async function detailsLoader({ params }: LoaderFunctionArgs) {
  const det = params.detailsId;
  if (det) {
    const film = await GetFilmDetails(Number(det));
    return film;
  } else return null;
}

export default function FilmDetails() {
  const { pageId } = useParams();
  const url = `/page/${pageId}`;
  const data = useLoaderData() as DetailedMovieInfo;
  return (
    <>
      <div className=" w-1/2" onClick={(e) => e.stopPropagation()}>
        <div className="close">
          <Link className="closeBtn" to={url} data-testid="close"> </Link>
        </div>

        <>
          <h2>{data.name.toUpperCase()}</h2>
          <h3>
            Жанры:
            {data.genres.map((type) => (
              <span className=" mx-1 px-1 bg-slate-200" key={type.name}>
                {type.name}
              </span>
            ))}
          </h3>

          <div className="flex">
            <img
              src={data.poster.url ? data.poster.url : "/notAvaliable.jpg"}
              alt="film poster"
              width={200}
            />
          </div>
          <p>{data.description}</p>
          <h3>Актеры:</h3>
          <div className="stat">
            {data.persons.filter((pers) => pers.profession === 'актеры').map((pers) => (
              <span key={pers.name} className="mx-1">
                {pers.name + ','}
              </span>
            ))}
          </div>
        </>
      </div>
    </>
  );
}
