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
      <div className="details" onClick={(e) => e.stopPropagation()}>
        <div className="close">
          <Link className="closeBtn" to={url} data-testid="close"></Link>
        </div>

        <>
          <h2>{data.name.toUpperCase()}</h2>
          <h3>
            Genres:
            {data.genres.map((type) => (
              <span className="type" key={type.name}>
                {type.name}
              </span>
            ))}
          </h3>

          <div style={{ display: "flex" }}>
            <img
              src={data.poster.url ? data.poster.url : "/notAvaliable.jpg"}
              alt="film poster"
              width={200}
            />
          </div>
          <p>{data.description}</p>
          <h3>Actors:</h3>
          <div className="stat">
            {data.persons.map((pers) => (
              <div key={pers.name}>
                {pers.name} - {pers.profession}
              </div>
            ))}
          </div>
        </>
      </div>
    </>
  );
}
