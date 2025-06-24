"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type SlideInProps = {
  children: React.ReactNode;
  number: number;
  duration: number;
  num: number;
};

export default function SlideInFromRight({
  children,
  number,
  duration,
  num,
}: SlideInProps) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.fromTo(
      wrapperRef.current,
      { x: number, opacity: 0 },
      {
        x: num,
        opacity: 1,
        duration: duration,
        ease: "power3.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="inline-block">
      {children}
    </div>
  );
}
