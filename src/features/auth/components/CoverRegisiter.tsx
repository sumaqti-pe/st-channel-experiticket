"use client";
import { useMemo } from "react";

export const CoverRegister = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const videos = ["register-1"];

  const randomVideo = useMemo(() => {
    const index = Math.floor(Math.random() * videos.length);
    return videos[index];
  }, [videos]);

  return (
    <div className="relative h-full w-full flex items-center justify-center max-lg:hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={`/videos/${randomVideo}.mp4`} type="video/mp4" />
        Tu navegador no soporta video.
      </video>

      <div className="absolute inset-0 bg-[#ED1C24]/30"></div>
    </div>
  );
};
