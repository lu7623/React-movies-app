import FilmDetails, { detailsLoader } from './routes/FilmDetails';
import { Root, filmsLoader } from './routes/Root';


export const routerConfig = [
  {
    path: '/',
    element: <Root />,
    loader: filmsLoader,
    children: [
      {
        path: 'page/:pageId',
        element: <Root />,
        loader: filmsLoader,
        children: [
          {
            path: 'details/:detailsId',
            element: <FilmDetails />,
            loader: detailsLoader,

          },
        ],
      },]
  }
];