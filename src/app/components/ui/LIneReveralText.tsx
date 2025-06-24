"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  lines: string[];
};

export default function LineRevealText({ lines }: Props) {
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!linesRef.current) return;

    // Анимация только по существующим элементам
    gsap.fromTo(
      linesRef.current.filter(Boolean), // важно исключить null
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 2,
        ease: "power3.out",
      }
    );
  }, [lines]);

  return (
    <div className="space-y-4">
      {lines.map((line, index) => (
        <div key={index} className="w-full overflow-hidden">
          <div
            ref={(el) => {
              linesRef.current[index] = el;
            }}
            className=""
          >
            {line}
          </div>
        </div>
      ))}
    </div>
  );
}
