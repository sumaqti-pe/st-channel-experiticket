"use client"
import { useEffect, useState } from "react";

export function useScrollY(threshold: number = 90) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPassed(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ejecutar al inicio

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return passed;
}
