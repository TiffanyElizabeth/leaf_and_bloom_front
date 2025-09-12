import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import TeasList from "./pages/TeasList";
import TeaDetail from "./pages/TeaDetail";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import DesignSystem from "./pages/DesignSystem";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/design-system" element={<DesignSystem />} />
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teas" element={<TeasList />} />
          <Route path="/teas/:id" element={<TeaDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
