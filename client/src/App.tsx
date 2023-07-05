import { BrowserRouter } from "react-router-dom";
import { AppStateProvider } from "./context/AppContext";
import { AppRouter } from "./AppRouter";
import { Fragment } from "react";

export const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <AppStateProvider>
          <AppRouter />
        </AppStateProvider>
      </BrowserRouter>
    </Fragment>
  );
};
