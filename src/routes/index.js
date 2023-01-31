import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error/errorPage';
import App from '../App';
import Drivers from '../components/drivers/drivers';
import { getDrivers } from '../components/drivers/api/getAllDrivers';
import Teams from '../components/teams/teams';
import { getTeams } from '../components/teams/api/getAllTeams';
import Rankings from '../components/rankings/rankings';
import Circuits from '../components/circuits/circuits';
import { getCircuits } from '../components/circuits/api/getAllCircuits';

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
