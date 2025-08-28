import { useEffect, useState } from "react";

export const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
      setIsMobile(!mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return { isMobile, isDesktop };
};
