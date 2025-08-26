"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface NavigationListProps {
  items: { label: string; href: string }[];
}

export const NavigationList: React.FC<NavigationListProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <ul className="bg-[#fff] w-[232px] rounded-xl py-[7px] flex flex-col h-fit max-lg:w-full">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li
            key={item.label}
            className={`py-[17px] px-[24px] cursor-pointer transition-colors hover:bg-[#F3F3F3] transition-all-300 ${
              isActive ? "bg-[#F3F3F3]" : ""
            }`}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};
