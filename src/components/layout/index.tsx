import { ReactNode } from "react";
import Navbar from "../navbar";

export function MainLayout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}