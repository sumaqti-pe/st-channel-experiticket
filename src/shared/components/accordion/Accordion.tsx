"use client";
import { ChevronDown } from "lucide-react";
import React, { useState, useRef } from "react";

interface AccordionProps {
  label: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-6 flex flex-col gap-[10px] py-[17px] px-6 border-b border-[#D4D4D4] max-lg:gap-[12px] max-lg:px-0">
      <div
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={toggle}
      >
        <h2 className="font-medium">{label}</h2>
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown />
        </div>
      </div>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};
