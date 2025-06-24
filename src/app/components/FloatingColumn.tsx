"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

type FloatingColumnProps = {
  images: string[];
  direction?: "up" | "down";
  delay?: number;
};

const FloatingColumn = ({
  images,
  direction = "up",
  delay = 0,
}: FloatingColumnProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const anim = gsap.fromTo(
      el,
      { y: direction === "up" ? "0%" : "-50%" },
      {
        y: direction === "up" ? "-50%" : "0%",
        duration: 20,
        repeat: -1,
        ease: "linear",
        delay,
      }
    );

    const handleMouseEnter = () => anim.pause();
    const handleMouseLeave = () => anim.play();

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      anim.kill();
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction]);

  const fullList = [...images, ...images]; // повтор для бесконечной анимации
  return (
    <div className="relative h-[500px] overflow-hidden w-full">
      <div ref={containerRef} className="absolute top-0 flex flex-col gap-8">
        {fullList.map((src, index) => (
          <div key={index} className="relative w-full h-[200px]">
            <Image
              src={`/img${src}`}
              alt={`img${index}`}
              width={500}
              height={700}
              className="object-cover rounded shadow-md"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingColumn;
