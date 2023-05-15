import React, { createContext, useContext, useState } from 'react';

interface context {
  state: {
    favorites: string[];
  };
  actions: {
    toggleFavorites: (image: string) => void;
  };
}

interface Props {
  children: React.ReactNode;
}

const AppStateContext = createContext({} as context);

export const AppStateProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  function toggleFavorites(image: string) {
    if (favorites.includes(image)) {
      setFavorites(() => favorites.filter((favorite) => favorite !== image));
    } else {
      setFavorites((favorites) => [...favorites, image]);
    }
  }

  return (
    <AppStateContext.Provider value={{ state: { favorites }, actions: { toggleFavorites } }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
