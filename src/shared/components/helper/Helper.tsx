import React from "react";
import { tv } from "tailwind-variants";

interface HelperProps {
  children?: React.ReactNode;
  error?: boolean;
}

export const Helper: React.FC<HelperProps> = ({ children, error }) => {
  const style = tv({
    base: "text-sm",
    variants: {
      error: {
        true: "text-[#D93C3C]",
      },
    },
  });

  return <span className={style({ error })}>{children}</span>;
};
