import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout";
import ScrollToTop from "./components/scroll/scrollToTop";
import NotFound from "./pages/404";
import { lazy, Suspense } from "react";
import Spinner from "./components/spinner/loading";

export default function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

const Main = lazy(() => import("./pages"));
const AboutUs = lazy(() => import("./pages/about_us"));
const Services = lazy(() => import("./pages/services"));
const Contact = lazy(() => import("./pages/contact"));


function AboutUsPage() {
  return (
    <Suspense fallback={
      <div className="min-w-sceen min-h-screen grid justify-items-center content-center">
        <Spinner />
      </div>
    }>
      <AboutUs />
    </Suspense>
  )
}

function ServicesPage() {
  return (
    <Suspense fallback={
      <div className="min-w-sceen min-h-screen grid justify-items-center content-center">
        <Spinner />
      </div>
    }>
      <Services />
    </Suspense>
  )
}

function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-w-sceen min-h-screen grid justify-items-center content-center">
        <Spinner />
      </div>
    }>
      <Contact />
    </Suspense>
  )
}

function MainPage() {
  return (
    <Suspense fallback={
      <div className="min-w-sceen min-h-screen grid justify-items-center content-center">
        <Spinner />
      </div>
    }>
      <Main />
    </Suspense>
  )
}