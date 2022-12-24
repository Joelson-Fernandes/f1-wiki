import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/theme';
import routes from './routes/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={routes} />
    </ThemeContextProvider>
  </React.StrictMode>
);
