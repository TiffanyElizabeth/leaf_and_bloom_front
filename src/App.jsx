import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import TeasList from "./pages/TeasList";
import TeaDetail from "./pages/TeaDetail";
import About from "./pages/About";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/teas" element={<TeasList />} />
      <Route path="/teas/:id" element={<TeaDetail />} />
    </Routes>
  </BrowserRouter>;
}