import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error/errorPage';
import App from '../App';
import Drivers from '../containers/drivers/drivers';
import { getDrivers } from '../containers/drivers/api/getAllDrivers';
import Teams from '../containers/teams/teams';
import { getTeams } from '../containers/teams/api/getAllTeams';
import Rankings from '../containers/rankings/rankings';
import Circuits from '../containers/circuits/circuits';
import { getCircuits } from '../containers/circuits/api/getAllCircuits';

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
        loader: getCircuits,
        element: <Circuits />,
      },
      {
        path: 'equipes',
        loader: getTeams,
        element: <Teams />,
      },
      {
        path: 'rankings',
        element: <Rankings />,
      },
    ],
  },
]);

export default router;
