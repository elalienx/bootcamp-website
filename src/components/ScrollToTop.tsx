// NPM Packages
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router";

interface iProps {
  children: ReactNode[];
}

export default function ScrollToTop({ children }: iProps) {
  // Properties
  const location = useLocation();

  // Methods
  useEffect(() => window.scrollTo(0, 0), [location]);

  return <>{children}</>;
}
