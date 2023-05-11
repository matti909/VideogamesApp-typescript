import React, { createContext, useContext } from 'react';

const AppStateContext = createContext<null>(null);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
