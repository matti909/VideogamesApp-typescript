import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'products/:id',
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
