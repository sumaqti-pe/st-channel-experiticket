"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

interface NavigationListProps {
  items: { label: string; href: string }[];
}

export const NavigationList: React.FC<NavigationListProps> = ({ items }) => {
  const pathname = usePathname();

  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
  };

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
            onClick={() => handleClick(item.href)}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};
