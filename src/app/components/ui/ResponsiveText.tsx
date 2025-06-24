"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import SlideFromUp from "./SlideFromUp";
import ColorOnScrollText from "./ColorOnScrollText";

type Props = {
  text: string;
};

export default function ResponsiveText({ text }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const resizeObserverRef = useRef<ResizeObserver>();

  const calculateLines = useCallback(() => {
    if (!containerRef.current || !measureRef.current) return;

    const words = text.split(" ");
    const containerWidth = containerRef.current.offsetWidth;

    const result: string[] = [];
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine + word + " ";
      measureRef.current.innerText = testLine;
      const lineWidth = measureRef.current.offsetWidth;

      if (lineWidth <= containerWidth) {
        currentLine = testLine;
      } else {
        result.push(currentLine.trim());
        currentLine = word + " ";
      }
    }

    if (currentLine) {
      result.push(currentLine.trim());
    }

    setLines(result);
  }, [text]);

  useEffect(() => {
    calculateLines();

    // Handle container resizing
    if (containerRef.current) {
      resizeObserverRef.current = new ResizeObserver(calculateLines);
      resizeObserverRef.current.observe(containerRef.current);
    }

    return () => {
      resizeObserverRef.current?.disconnect();
    };
  }, [calculateLines]);

  //  анамация цвета текста при наведении
  const ref = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div ref={containerRef} className="w-full relative">
      {/* Hidden measurement element */}
      <span
        ref={measureRef}
        className="absolute invisible whitespace-pre text-base"
        style={{
          visibility: "hidden",
          whiteSpace: "pre",
          // Ensure measurement uses the same font as rendered text
          fontFamily: "inherit",
          fontSize: "inherit",
          fontWeight: "inherit",
          letterSpacing: "inherit",
        }}
      />

      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <SlideFromUp num={3.8 + i}>
            <div
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative w-full h-full"
            >
              <ColorOnScrollText mouseMove={isHovering}>
                {line}
              </ColorOnScrollText>
            </div>
          </SlideFromUp>
        </div>
      ))}
    </div>
  );
}
