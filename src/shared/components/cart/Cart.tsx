"use client"
import { useResume } from "@/shared/hooks/useResume";
import { Shopping } from "@/shared/icons/Shopping";
import React from "react";

interface CartProps {
  count: number;
  color?: string;
}

export const Cart: React.FC<CartProps> = ({ count, color = "#000" }) => {

  const { toggleOpenCart } = useResume();

  return (
    <div className="relative cursor-pointer" onClick={toggleOpenCart}>
      <Shopping color={color} />
      {count > 0 && (
        <div className="absolute right-[-6px] top-[-3px] min-w-[24px] h-[24px] flex items-center bg-[#ED1C24] justify-center text-[#fff] rounded-full text-base font-bold">
          {count}
        </div>
      )}
    </div>
  );
};
