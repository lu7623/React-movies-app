import { useEffect } from "react";
import { GetFilmsList } from "../api/api";
import {
  LoaderFunctionArgs,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";


export async function filmsLoader({ params }: LoaderFunctionArgs) {
  const pageNum = params.pageId;
  const filmsData = await GetFilmsList(Number(pageNum));
  return filmsData;
}

export function Root() {
  const { pageId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!pageId) navigate("/page/1");
  }, [navigate]);

  return (
    <>
      <div className="mx-10">
        <h1 className="text-3xl font-bold underline text-red-800">Лучшие фильмы</h1>
      
        <Outlet />
      </div>
    </>
  );
}
