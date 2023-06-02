import React from 'react';
import Home from './pages/home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from './App';

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
