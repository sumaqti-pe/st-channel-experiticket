import { Footer } from "@/shared/components/footer/Footer";
import { Header } from "@/shared/components/header/Header";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="relative w-[1360px] h-[768px] bg-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
