import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error/errorPage';
import App from '../App';
import Drivers from '../containers/drivers/drivers';
import { getDrivers } from '../containers/drivers/api/getAllDrivers';
import Teams from '../containers/teams/teams';
import { getTeams } from '../containers/teams/api/getAllTeams';
import Rankings from '../containers/rankings/rankings';
import { getRankings } from '../containers/rankings/api/getAllRankings';
import Circuits from '../containers/circuits/circuits';
import { getCircuits } from '../containers/circuits/api/getAllCircuits';
import { getClassification } from '../components/classification/api/getClassification';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: getClassification,
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
        loader: getRankings,
        element: <Rankings />,
      },
    ],
  },
]);

export default router;
