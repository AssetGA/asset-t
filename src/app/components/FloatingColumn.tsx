"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FloatingColumn = ({
  images,
  direction = "up",
  delay = 0,
}: {
  images: string[];
  direction?: "up" | "down";
  delay?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      // Пауза при наведении
      el.addEventListener("mouseenter", () => anim.pause());
      el.addEventListener("mouseleave", () => anim.play());
    });

    return () => ctx.revert();
  }, [direction, delay]);

  // дублируем список для бесконечного цикла
  const fullList = [...images, ...images];

  return (
    <div className="relative h-[500px] overflow-hidden w-full">
      <div ref={containerRef} className="absolute top-0 flex flex-col gap-8">
        {fullList.map((src, index) => (
          <img
            key={index}
            src={`/img${src}`}
            alt={`img${index}`}
            className="w-full h-auto rounded shadow-md object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingColumn;
