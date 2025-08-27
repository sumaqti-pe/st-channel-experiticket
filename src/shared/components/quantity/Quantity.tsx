import { Minor } from "@/shared/icons/Minor";
import { Plus } from "@/shared/icons/Plus";
import React from "react";

interface QuantityProps {
  max?: number;
  min?: number;
  value: number;
  onChange: (value: number) => void;
}

export const Quantity: React.FC<QuantityProps> = ({
  max = 999,
  min = 0,
  value,
  onChange,
}) => {
  const disabledDecrement = value <= min;
  const disabledIncrement = value >= max;

  return (
    <div className="border border-[#EDC6B0] py-2 px-3 flex justify-between gap-[21px]">
      <button
        className={disabledDecrement ? "cursor-not-allowed" : "cursor-pointer"}
        onClick={() => onChange(value - 1)}
        disabled={disabledDecrement}
      >
        <Minor color={disabledDecrement ? "#8D8D8D" : "#000"} />
      </button>
      <span>{value}</span>
      <button
        className={disabledIncrement ? "cursor-not-allowed" : "cursor-pointer"}
        onClick={() => onChange(value + 1)}
        disabled={disabledIncrement}
      >
        <Plus color={disabledIncrement ? "#8D8D8D" : "#000"} />
      </button>
    </div>
  );
};
