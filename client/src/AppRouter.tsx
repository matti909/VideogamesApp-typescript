import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { Detail } from "./pages/detail/Detail";
import { Form } from "./pages/form/Form";
import { RouterLayout } from "./RouterLayout";
import { Favorites } from "./pages/favorites/Favorites";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppRouter = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<RouterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};
