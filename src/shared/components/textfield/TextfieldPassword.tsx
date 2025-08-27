"use client";
import React, { useState } from "react";
import { textfieldVariant } from "./variants";
import { Eye, EyeOff } from "lucide-react"; // 👈 librería de iconos (lucide-react)
import { Helper } from "../helper/Helper";

interface PasswordFieldProps {
  placeholder?: string;
  helper?: string;
  error?: boolean;
  isBlock?: boolean;
  label?: string;
}

export const TextfieldPassword: React.FC<PasswordFieldProps> = ({
  placeholder,
  error,
  helper,
  isBlock,
  label,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  const style = textfieldVariant({
    error,
    isBlock,
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-[12px]">
        {label && <label className="uppercase">{label}</label>}
        <div className={style.root()}>
          <input
            type={visible ? "text" : "password"}
            placeholder={placeholder}
            className={style.input()}
            {...props}
          />
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            className="pl-4 text-gray-500 hover:text-black transition cursor-pointer"
          >
            {visible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
      {error && <Helper error>{helper}</Helper>}
    </div>
  );
};
