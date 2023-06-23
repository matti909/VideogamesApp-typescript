import { Form, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};
