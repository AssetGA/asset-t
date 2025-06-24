"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const ScrollZoomImage = () => {
  const [width, setWidth] = useState(600); // проценты
  const lastScrollY = useRef(200);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Если скроллим вверх — увеличиваем ширину (до 150%)
      if (currentScrollY < lastScrollY.current && currentScrollY < 100) {
        setWidth((prev) => Math.min(prev - 0.2, 800));
      }
      // Скроллим вниз — уменьшаем ширину (до 100%)
      if (currentScrollY > lastScrollY.current && currentScrollY > 400) {
        setWidth((prev) => Math.max(prev + 0.2, 2200));
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex justify-center items-center z-60">
      <div
        className="transition-all duration-800 ease-in-out overflow-hidden h-[900px] relative"
        style={{ width: `${width}px` }}
      >
        <Image
          src="/img/img6.jpeg"
          alt="Zooming image"
          fill
          className="rounded-xl object-cover w-full"
        />
      </div>
    </div>
  );
};

export default ScrollZoomImage;
