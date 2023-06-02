import React, { Fragment } from 'react';
import { AppStateProvider } from './context/AppStateContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';
import { Routes } from './Router';

export const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppStateProvider>
            <Routes />
          </AppStateProvider>
        </PersistGate>
      </Provider>
    </Fragment>
  );
};
