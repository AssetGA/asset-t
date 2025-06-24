"use client";

import { useRef } from "react";
import gsap from "gsap";

type Props = {
  children: React.ReactNode;
};

export default function MagnifyOnHover({ children }: Props) {
  const elRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(elRef.current, {
      color: "#000000", // чёрный
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(elRef.current, {
      color: "#999999", // серый
      duration: 1,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={elRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block origin-left text-gray-500"
    >
      {children}
    </div>
  );
}
