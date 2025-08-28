"use client";
import React from "react";
import { textareaVariant } from "./variants";
import { Helper } from "../helper/Helper";

interface TextareaProps {
  placeholder?: string;
  helper?: string;
  error?: boolean;
  isBlock?: boolean;
  label?: string;
  rows?: number;
}

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  error,
  helper,
  isBlock,
  label,
  rows = 4,
  ...props
}) => {
  const style = textareaVariant({
    error,
    isBlock,
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-[12px]">
        {label && <label className="uppercase">{label}</label>}
        <div className={style.root()}>
          <textarea
            suppressHydrationWarning
            placeholder={placeholder}
            rows={rows}
            className={style.textarea()}
            {...props}
          />
        </div>
      </div>
      {error && <Helper error>{helper}</Helper>}
    </div>
  );
};
