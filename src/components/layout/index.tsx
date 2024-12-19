import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer/footer";

export default function MainLayout() {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}