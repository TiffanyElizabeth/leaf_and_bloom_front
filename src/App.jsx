// connects URL paths to the right page components (wrapping most of them in the same layout)

//componente radice dell’applicazione. Contiene la struttura di base e organizza gli altri componenti per la visualizzazione dell’applicazione. Viene importato e renderizzato dal main.jsx, che e il punto d’ingresso dell’applicazione, rende l’applicazione come <App /> nel HTML DOM, specificamente nel elemento di radice definito dentro index.html

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
    <BrowserRouter> {/* changes pages based on url (&permits us to change page without reloading the whole app */}
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