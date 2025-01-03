import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout";
import MainPage from "./pages";
import AboutUs from "./pages/about_us";
import ScrollToTop from "./components/scroll/scrollToTop";
import Services from "./pages/services";
import NotFound from "./pages/404";
import Contact from "./pages/contact";

export default function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}