import { DetailedMovieInfo } from "../api/types";
import { Link, useNavigation, useParams } from "react-router-dom";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { GetFilmDetails } from "../api/api";
import { FaTimes } from "react-icons/fa";
import Loading from "./components/Loading";

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
  const navigation = useNavigation();
  return (
    <>
      
      <div className=" w-1/2 relative" onClick={(e) => e.stopPropagation()}>
      {navigation.state === 'loading' &&
        <div className=" absolute w-full h-full justify-center items-center  bg-slate-50 z-10">
          <div className="absolute  top-1/3 w-52 h-52" style={{left: 'calc(50% - 120px)'}}>
          <Loading />
          </div>
          
          </div>
      }
        <div className="absolute right-0 top-0 w-3 h-3">
          <Link  to={url} > <FaTimes color="grey" /></Link>
        </div>

        <>
          <h2 className=" text-2xl text-slate-800 font-bold m-2">{data.name.toUpperCase()}</h2>
          <h3 className=" text-xl text-orange-600 font-bold ">{data.rating.kp }</h3>
          <h3>
            Жанры:
            {data.genres.map((type) => (
              <span className=" mx-1 px-1 bg-slate-200" key={type.name}>
                {type.name}
              </span>
            ))}
          </h3>

          <div className="flex my-3">
            <img
              src={data.poster.url ? data.poster.url : "/notAvaliable.jpg"}
              alt="film poster"
              width={200}
            />
             <p className=" text-sm px-2">{data.description}</p>
          </div>
          <h3 className=" font-bold text-slate-800">Актеры:</h3>
          <div >
            {data.persons.filter((pers) => pers.profession === 'актеры').map((pers) => (
              <span key={pers.name} className="mx-1">
                {pers.name+ ', '}
              </span>
            ))}
          </div>
          <p> <span className=" font-bold text-slate-800">Длительность:  </span>{data.movieLength + " мин"}</p>
          <p className=" font-bold text-slate-800">{data.ageRating + '+' }</p>
        </>
      </div>
    </>
  );
}
