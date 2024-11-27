import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { Layout } from '../Layout';
import { Home } from '../pages/Home';
import { MonthStatistics } from '../pages/MonthStatistics';

export const router = createBrowserRouter([
  {
    path: routes.mainPageURL,
    element: <Layout />,
    children: [
      {
        path: routes.mainPageURL,
        element: <Home />,
      },
      {
        path: routes.monthStatisticsPageURL,
        element: <MonthStatistics />,
      },
    ],
  },
]);
