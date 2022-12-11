import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Drivers from '../pages/drivers/drivers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'pilotos',
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
