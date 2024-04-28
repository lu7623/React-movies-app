import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { MovieResults } from "../api/types";
import FilmsList from "./components/FilmList";
import Pagination from "./components/Pagination";
import Loading from "./components/Loading";

export function FilmsPage() {
  const { films, max } = useLoaderData() as MovieResults;
  const navigation = useNavigation();
  const navigate = useNavigate();
  if (max === 0) navigate("/page/1")
  return (
    <>
      {navigation.state === 'loading' &&
        <div className=" absolute w-full h-full justify-center items-center  bg-slate-50 z-10">
          <div className="absolute top-1/3 w-52 h-52 z-20" style={{left: 'calc(50% - 120px)'}}>
          <Loading />
          </div>
          
          </div>
      }
      <Pagination max={max} />
      {max === 0 ? <p>Фильмы не найдены</p> :<FilmsList data={films} />}
    </>
  );
}
