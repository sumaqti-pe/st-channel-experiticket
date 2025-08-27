"use client";
import React from "react";
// import { TextfieldProps } from "./types";
import { textfieldVariant } from "./variants";

interface TextfieldProps {
  type?: "text" | "email" | "password";
  placeholder?: string;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  helper?: string;
  error?: boolean;
  isBlock?: boolean;
  label?: string;
}

export const Textfield: React.FC<TextfieldProps> = ({
  type = "text",
  placeholder,
  append,
  prepend,
  error,
  helper,
  isBlock,
  label,
  ...props
}) => {
  const style = textfieldVariant({
    error,
    isBlock,
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-[12px]">
        {label && <label className="uppercase">{label}</label>}
        <div className={style.root()}>
          {prepend && <div className="pr-4">{prepend}</div>}
          <input
            suppressHydrationWarning
            type={type}
            placeholder={placeholder}
            className={style.input()}
            {...props}
          />
          {append && <div className="pl-4">{append}</div>}
        </div>
      </div>
      {error && <span className={style.helper()}>{helper}</span>}
    </div>
  );
};
