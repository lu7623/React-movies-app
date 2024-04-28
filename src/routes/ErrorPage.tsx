import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div className=" w-full h-full flex flex-col m-20 items-center">
      <div>
      <h1 className=" text-2xl text-slate-800 m-2">Oops!</h1>
      <p  className=" text-2xl text-slate-800">Что-то пошло не так</p>
      <p>
        <i className=" text-red-600">{ error.message}</i>
        </p>
        </div>
    </div>
  );
}