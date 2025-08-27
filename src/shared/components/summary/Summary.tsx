"use client";
import Divider from "../divider/Divier";
import React from "react";
import { SummaryResume } from "./SummaryResume";
import { useResume } from "@/shared/hooks/useResume";

interface SummaryProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export const Summary: React.FC<SummaryProps> = ({
  header,
  footer,
  children,
}) => {
  const { resumes, total, subtotal, igv } = useResume();

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          {header && header}
          <Divider variant="solid" color="#E6E7E9" />

          {!children &&
            resumes.map((resume) => (
              <SummaryResume key={resume.id} resume={resume} />
            ))}
          {children && children}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between text-[#606162] font-light text-sm">
            <span>Subtotal</span>
            <span>S/. {subtotal.toFixed(2)}</span>
          </div>{" "}
          <div className="flex items-center justify-between text-[#606162] font-light text-sm">
            <span>IGV %18</span>
            <span>S/. {igv.toFixed(2)}</span>
          </div>
          <div className="my-2">
            <Divider variant="solid" color="#E6E7E9" />
          </div>
          <div className="flex items-center justify-between font-bold">
            <span className="text-[#606162]">Total</span>
            <span className="text-[#3D3D3E]">S/. {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      {footer && footer}
    </>
  );
};
