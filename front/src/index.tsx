import { createRoot } from 'react-dom/client';
import React, { Fragment } from 'react';
import { App } from './App';
import './styles/index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Fragment>
    <App />
  </Fragment>,
);
