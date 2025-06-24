"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/img/img1.jpeg",
  "/img/img2.jpeg",
  "/img/img3.jpeg",
  "/img/img4.jpeg",
];

export default function GSApStackedImages() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".image-section");

      sections.forEach((section) => {
        const el = section as HTMLElement;

        gsap.fromTo(
          el,
          { y: 300, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: el,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[500vh] w-full flex justify-end"
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="image-section fixed top-0 right-0 w-[50%] h-screen opacity-0"
          style={{ zIndex: i }}
        >
          <Image
            src={src}
            alt={`photo-${i}`}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}
