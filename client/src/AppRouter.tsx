import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { Detail } from "./pages/detail/Detail";
import { Form } from "./pages/form/Form";
import { RouterLayout } from "./RouterLayout";
import { Favorites } from "./pages/favorites/Favorites";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
};
