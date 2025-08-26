import { Shopping } from "@/shared/icons/Shopping";
import React from "react";

interface CartProps {
  count: number;
  color?: string;
}

export const Cart: React.FC<CartProps> = ({ count, color = "#000" }) => {
  return (
    <div className="relative">
      <Shopping color={color} />
      {count > 0 && (
        <div className="absolute right-[-6px] top-[-3px] w-[24px] h-[24px] flex items-center bg-[#2529D8] justify-center text-[#fff] rounded-full text-base font-bold">
          {count}
        </div>
      )}
    </div>
  );
};
