import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error/errorPage';
import App from '../App';
import Drivers, { getDrivers } from '../pages/drivers/drivers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'pilotos',
        loader: getDrivers,
        element: <Drivers />,
      },
      {
        path: 'circuitos',
        element: undefined,
      },
      {
        path: 'equipes',
        element: undefined,
      },
      {
        path: 'rankings',
        element: undefined,
      },
    ],
  },
]);

export default router;
