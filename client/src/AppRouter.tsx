import { Form, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { Detail } from "./pages/detail/Detail";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/search/" element={<Search />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};
