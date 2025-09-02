import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import TeasList from "./pages/TeasList";
import TeaDetail from "./pages/TeaDetail";
import About from "./pages/About";
import DefaultLayout from "./layouts/DefaultLayout";

export default function App() {
  return <BrowserRouter>
    <Routes element={<Outlet />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/teas" element={<TeasList />} />
      <Route path="/teas/:id" element={<TeaDetail />} />
    </Routes>
  </BrowserRouter>;
}