"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const headings = ["Эмоции", "Реакция", "Ответ", "Страсть"];

export default function AnimatedHeading() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  return (
    <div className="relative min-h-[300vh]" ref={containerRef}>
      <div className="sticky top-1/3 h-[200px] flex items-center justify-center overflow-hidden">
        <div className="relative h-[200px] w-full">
          {headings.map((text, index) => {
            const start = index / headings.length;
            const end = (index + 1) / headings.length;

            const y = useTransform(
              smoothProgress,
              [start, end],
              ["100%", "0%"]
            );
            const opacity = useTransform(
              smoothProgress,
              [start, end - 0.1, end],
              [0, 1, 0]
            );

            return (
              <motion.h2
                key={index}
                style={{ y, opacity }}
                className="absolute w-full text-center text-7xl font-bold"
              >
                {text}
              </motion.h2>
            );
          })}
        </div>
      </div>
    </div>
  );
}
