"use client";
import { LogoPrimary } from "@/shared/icons/LogoPrimary";
import { LogoPrimaryMobile } from "@/shared/icons/LogoPrimaryMobile";
import { Menu as MenuIcon } from "@/shared/icons/Menu";
import { Cart } from "../cart/Cart";
import { MenuProfile } from "../menu-profile/MenuProfile";
import { Textfield } from "../textfield/Textfield";
import { Search } from "lucide-react";
import { useScrollY } from "@/shared/hooks/useScrollY";
import { LogoWhite } from "@/shared/icons/LogoWhite";
import { LogoWhiteMobile } from "@/shared/icons/LogoWhiteMobile";
import { useResume } from "@/shared/hooks/useResume";
import Image from "next/image";
import { Searcher } from "../searcher/Searcher";

export const Header = () => {


  const scrolled = useScrollY(90);

  const { totalTickets } = useResume();

  return (
    <header>
      <nav
        className={`px-[100px] h-[90px] flex items-center justify-between max-lg:px-[16px] max-lg:h-[68px] ${
          scrolled ? "mb-[90px]" : ""
        }`}
      >
        <div className="flex items-center gap-[18px] max-lg:hidden">
          <LogoPrimary />
          <MenuIcon color="#000" />
        </div>
        <div className="flex items-center gap-2 min-lg:hidden">
          <MenuIcon width={28} height={28} color="#000" />
          <LogoPrimaryMobile />
        </div>
        <div className="flex items-center gap-3.5">
          <MenuProfile />
          <Cart count={totalTickets} />
        </div>
      </nav>
      <nav className="bg-[#ED1C24] w-full px-[30px] h-[90px] flex items-center justify-between max-lg:px-[16px] sticky top-0 z-50 min-lg:hidden">
        <div className="w-full flex items-center justify-center">
          <div className="w-[410px]">
            <Textfield
              isBlock
              placeholder="Busca por artista o concierto"
              append={<Search />}
            />
          </div>
        </div>
      </nav>
      <nav
        className={`bg-[#ED1C24] w-full px-[30px] h-[90px] flex items-center justify-between max-lg:px-[16px] left-0 z-50 max-lg:hidden ${
          scrolled ? "fixed top-0" : ""
        }`}
      >
        {!scrolled && (
          <div className="w-full flex items-center justify-center">
            <div className="w-[620px]">
              <Searcher />
            </div>
          </div>
        )}
        {scrolled && (
          <>
            <div className="flex items-center gap-[18px] max-lg:hidden">
              <LogoWhite />
              <MenuIcon color="#fff" />
            </div>
            <div className="flex items-center gap-2 min-lg:hidden">
              <MenuIcon width={28} height={28} color="#fff" />
              <LogoWhiteMobile />
            </div>
            <div className="w-[620px]">
              <Searcher />
            </div>
            <div className="flex items-center gap-3.5">
              <MenuProfile />
              <Cart count={totalTickets} color="#fff" />
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
