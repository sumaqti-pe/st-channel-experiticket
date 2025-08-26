"use client";
import dynamic from "next/dynamic";

import { Button } from "@/shared/components/button/Button";
import { HappyFace } from "@/shared/icons/HappyFace";
import { useState } from "react";
import { useWindowSize } from "react-use";

const ConfettiExplosion = dynamic(() => import("react-confetti-explosion"), {
  ssr: false,
});

export const Thankyou = () => {
  const [isExploding, setIsExploding] = useState(true);

  const { width, height } = useWindowSize();

  setTimeout(() => {
    setIsExploding(false);
  }, 3000);

  return (
    <div className="relative flex flex-col gap-6 justify-center items-center">
      <HappyFace />
      <h2 className="font-bold text-[32px] uppercase">Gracias por tu compra</h2>
      <p className="text-[18px]">
        Revisa tus tickets para ver el detalle de tu compra
      </p>
      <Button className="bg-[#ED1C24]" text="light">
        Ver mis tickets
      </Button>
      {isExploding && (
        <div className="absolute z-999999">
          <ConfettiExplosion
            particleCount={100}
            duration={3000}
            width={width}
            height={height}
          />
        </div>
      )}
    </div>
  );
};
