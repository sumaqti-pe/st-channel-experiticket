import { LogoPrimary } from "@/shared/icons/LogoPrimary";
import React from "react";

interface AuthLayoutProps {
  children?: React.ReactNode;
  title?: string;
  video?: string;
  description?: string | React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  video = "concert",
  description,
}) => {
  return (
    <section className="w-[1920px]">
      <section className="grid grid-cols-2 w-full h-screen max-lg:grid-cols-1 max-lg:py-[32px] max-lg:px-[24px]">
        <div className="flex items-center justify-center">
          <div className="w-[500px] flex flex-col gap-6">
            <div className="flex mb-10 justify-center max-lg:mb-10">
              <LogoPrimary />
            </div>
            <div>
              <h2 className="text-[24px] font-bold">{title}</h2>
              <p className="text-[#727272]">{description}</p>
            </div>
            {children}
          </div>
        </div>
        <div className="relative h-full w-full flex items-center justify-center max-lg:hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={`/videos/${video}.mp4`} type="video/mp4" />
            Tu navegador no soporta video.
          </video>

          <div className="absolute inset-0 bg-[#ED1C24]/30"></div>
        </div>
      </section>
    </section>
  );
};
