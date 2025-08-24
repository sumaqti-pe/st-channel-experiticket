import React from "react";
import { CheckboxProps } from "./types";

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  ...props
}) => {
  return (
    <label className="inline-flex items-center cursor-pointer relative gap-2">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="
          peer w-5 h-5 appearance-none 
          border border-black rounded 
          checked:bg-red-500 checked:border-red-500
          transition-colors cursor-pointer
        "
        {...props}
      />
      <svg
        className="
          absolute w-4 h-4 text-white pointer-events-none
          opacity-0 peer-checked:opacity-100 ml-[2px]
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      {label && <span className="ml-2">{label}</span>}
    </label>
  );
};
