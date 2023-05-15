import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { AppStateProvider } from './context/AppStateContext';
import store, { persistor } from './redux/store';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Fragment>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </PersistGate>
    </Provider>
  </Fragment>,
);
