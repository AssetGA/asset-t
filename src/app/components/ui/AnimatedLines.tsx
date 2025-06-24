"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Props = {
  text: string;
  delay?: number;
};

export default function AnimatedLines({ text, delay = 0 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  console.log("lines", lines);
  useEffect(() => {
    if (!containerRef.current) return;

    const blockWidth = containerRef.current.offsetWidth;
    const avgCharWidth = 8; // примерная средняя ширина символа
    const maxChars = Math.floor(blockWidth / avgCharWidth);

    const words = text.split(" ");
    const tempLines: string[] = [];

    let currentLine = "";

    for (const word of words) {
      if ((currentLine + word).length <= maxChars) {
        currentLine += word + " ";
      } else {
        tempLines.push(currentLine.trim());
        currentLine = word + " ";
      }
    }

    if (currentLine) tempLines.push(currentLine.trim());

    setLines(tempLines);
  }, [text]);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".line");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        delay,
      }
    );
  }, [lines, delay]);

  return (
    <div ref={containerRef} className="space-y-2">
      {lines.map((line, i) => (
        <p key={i} className="line opacity-0">
          {line}
        </p>
      ))}
    </div>
  );
}
