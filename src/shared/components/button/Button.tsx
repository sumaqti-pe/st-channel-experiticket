"use client";
import React from "react";
import { Loader } from "../loader/Loader";
import { buttonVariant, textVariant } from "./variant";
import { ButtonProps } from "./types";
import { useRouter } from "next/navigation";

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  text,
  isBlock = false,
  loading = false,
  color,
  disabled = false,
  href,
  onClick,
}) => {
  const router = useRouter();

  const style = buttonVariant({
    className,
    variant,
    isBlock,
    color,
    disabled,
    loading,
  });

  const textStyle = textVariant({ variant, text, color });

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
    onClick?.();
  };

  return (
    <button
      suppressHydrationWarning
      className={style}
      disabled={Boolean(disabled || loading)}
      onClick={handleClick}
    >
      {!loading && <span className={textStyle}>{children}</span>}
      {loading && <Loader />}
    </button>
  );
};
