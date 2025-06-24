"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import MagnifyOnHover from "./MagnifyOnHover";

type SlideInProps = {
  children: ReactNode;
  mouseMove: boolean;
};

export default function ColorOnScrollText({
  children,
  mouseMove,
}: SlideInProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        // Чем выше элемент, тем ярче цвет
        gsap.to(el, {
          color: `hsl(0, 0%, ${ratio * 60}%)`, // от 0% (чёрный) до 100% (белый)
          duration: 0.5,
          ease: "power1.out",
        });
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100), // 0.0 до 1.0
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={textRef}
      className={`transition-colors duration-300 ${
        mouseMove ? "transition-colors duration-300 text-black" : ""
      }`}
    >
      <MagnifyOnHover>{children}</MagnifyOnHover>
    </div>
  );
}
