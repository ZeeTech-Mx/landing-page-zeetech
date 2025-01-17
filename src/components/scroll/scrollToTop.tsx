import { ReactNode, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }: {children: ReactNode}) {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};