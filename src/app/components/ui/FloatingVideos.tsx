"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const videos = [
  "/videos/1.mp4",
  "/videos/2.mp4",
  "/videos/1.mov",
  "/videos/1.mov",
];

export default function FloatingVideos() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".floating-video", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap gap-6 justify-center items-end p-10 min-h-screen bg-gray-100"
    >
      {videos.map((src, idx) => (
        <div
          key={idx}
          className="floating-video w-64 h-40 relative rounded-xl overflow-hidden shadow-lg bg-black"
        >
          <video
            src={src}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      ))}
    </div>
  );
}
