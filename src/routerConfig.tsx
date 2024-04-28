import FilmDetails, { detailsLoader } from './routes/FilmDetails';
import { FilmsPage } from './routes/FilmsPage';
import { Root, filmsLoader } from './routes/Root';


export const routerConfig = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'page/:pageId',
        element: <FilmsPage />,
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