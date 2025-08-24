import React, { HTMLAttributeAnchorTarget } from "react";

interface CircleButtonProps {
  children: React.ReactNode;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const CircleButton: React.FC<CircleButtonProps> = ({
  children,
  href,
  target,
  ...props
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className="border border-[#ADADAD] w-[48px] h-[48px] flex rounded-full items-center justify-center hover:bg-[#F0F0F0] transition cursor-pointer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className="border border-[#ADADAD] w-[48px] h-[48px] flex rounded-full items-center justify-center hover:bg-[#F0F0F0] transition cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};
