"use client";
import { XCircle } from "lucide-react";
import { useEffect } from "react";

interface Props {
  formToken: string;
  onClose: () => void;
}

export const IzipayForm = ({ formToken, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="relative w-[420px] h-[600px] rounded-lg overflow-hidden shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-20 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <XCircle />
        </button>

        <iframe
          src={`/checkout/izipay?token=${formToken}`}
          className="w-full h-full border-0 outline-none"
        />
      </div>
    </div>
  );
};
