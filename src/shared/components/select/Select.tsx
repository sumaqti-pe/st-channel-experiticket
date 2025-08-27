"use client";

import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import React from "react";
import { SelectProps } from "./types";

export const CustomSelect: React.FC<SelectProps> = ({
  label,
  placeholder,
  options,
  error,
  helper,
  name,
  onChange,
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex flex-col gap-[12px]">
      {label && <label className="uppercase">{label}</label>}
      <Select.Root
        onValueChange={(val) => {
          onChange?.({ target: { name: name ?? "", value: val } });
        }}
      >
        <Select.Trigger className="w-full flex items-center justify-between rounded-full border border-[#D3D3D3] bg-white px-4 py-[14px] max-h-[52px] outline-none transition-colors focus:border-2 focus:border-black uppercase text-base font-normal data-[placeholder]:text-[#555555]">
          <Select.Value placeholder={placeholder} />
          <Select.Icon className="text-gray-600">
            <ChevronDown size={16} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position="popper"
            sideOffset={4}
            className="w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-[#D3D3D3] bg-white shadow-lg"
          >
            <Select.Viewport className="p-1">
              <Select.Group>
                {options.map((option) => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    className="relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm text-gray-700 outline-none 
                             data-[state=checked]:bg-black/10 data-[highlighted]:bg-gray-100 uppercase"
                  >
                    <Select.ItemText>{option.label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
    {error && <span className="text-sm text-[#D93C3C]">{helper}</span>}
  </div>
);
