"use client";

import type { ReactElement } from "react";

interface NextVideoProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

export default function NextVideo({
  src,
  poster,
  autoPlay = false,
  loop = false,
  muted = true,
  className = "",
}: NextVideoProps): ReactElement {
  return (
    <div className={`relative ${className} overflow-hidden rounded-md`}>
      <video
        src={src}
        poster={poster}
        autoPlay
        loop={loop}
        muted={muted}
        className="object-cover w-full h-full"
      >
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}
