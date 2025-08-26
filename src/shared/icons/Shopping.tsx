import React from "react";

interface ShoppingProps {
  color?: string;
}

export const Shopping: React.FC<ShoppingProps> = ({ color = "#ED1C24" }) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.5 9H25.5C25.5 4.8 22.2 1.5 18 1.5C13.8 1.5 10.5 4.8 10.5 9H7.5C5.85 9 4.5 10.35 4.5 12V30C4.5 31.65 5.85 33 7.5 33H28.5C30.15 33 31.5 31.65 31.5 30V12C31.5 10.35 30.15 9 28.5 9ZM18 4.5C20.55 4.5 22.5 6.45 22.5 9H13.5C13.5 6.45 15.45 4.5 18 4.5ZM28.5 30H7.5V12H28.5V30ZM18 18C15.45 18 13.5 16.05 13.5 13.5H10.5C10.5 17.7 13.8 21 18 21C22.2 21 25.5 17.7 25.5 13.5H22.5C22.5 16.05 20.55 18 18 18Z"
        fill={color}
      />
    </svg>
  );
};
