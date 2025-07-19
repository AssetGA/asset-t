"use client";

import type { ReactElement } from "react";

interface NextVideoProps {
  src: string;
  poster?: string;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  className?: string;
}

export default function NextVideo({
  src,
  poster,
  loop = false,
  muted = true,
  autoPlay = true,
  className = "",
}: NextVideoProps): ReactElement {
  return (
    <div className={`relative ${className} overflow-hidden rounded-md`}>
      <video
        src={src}
        poster={poster}
        loop={loop}
        muted={muted}
        autoPlay={autoPlay}
        playsInline
        className="object-cover w-full h-full"
      >
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}
