"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type SlideInProps = {
  children: React.ReactNode;
  num: number;
};

export default function SlideFromUp({ children, num }: SlideInProps) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.fromTo(
      wrapperRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: num,
        ease: "power3.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="inline-block w-full">
      {children}
    </div>
  );
}
