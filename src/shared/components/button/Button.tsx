import React from "react";
import { tv } from "tailwind-variants";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "input";
  text?: "light" | "dark";
  isBlock?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  text,
  isBlock = false,
}) => {
  const buttonVariant = tv({
    base: "cursor-pointer flex gap-[10px] py-[16px] rounded-full items-center font-bold border-t-2 border-l-2 border-r-2 border-b-4",
    variants: {
      variant: {
        input: "px-[24px] max-h-[12px] bg-[#fff]",
        primary: "px-[40px] text-[18px] h-[50px]",
      },
      isBlock: {
        true: "w-full justify-center",
      },
    },
  });

  const textVariant = tv({
    base: "",
    variants: {
      variant: {
        input: "text-[#ED1C24]",
        primary: "",
      },
      text: {
        light: "text-[#fff]",
        dark: "text-[#000]",
      },
    },
  });

  const style = buttonVariant({ className, variant, isBlock });

  const textStyle = textVariant({ variant, text });

  return (
    <button className={style}>
      <span className={textStyle}>{children}</span>
    </button>
  );
};
