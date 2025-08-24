import React from "react";
import { tv } from "tailwind-variants";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "input";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
}) => {
  const buttonVariant = tv({
    base: "cursor-pointer flex gap-[10px] py-[16px] rounded-full items-center font-bold border-t-2 border-l-2 border-r-2 border-b-4",
    variants: {
      variant: {
        input: "px-[24px] max-h-[12px] bg-[#fff]",
        primary: "",
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
    },
  });

  const style = buttonVariant({ className, variant });

  const textStyle = textVariant({ variant });

  return (
    <button className={style}>
      <span className={textStyle}>{children}</span>
    </button>
  );
};
