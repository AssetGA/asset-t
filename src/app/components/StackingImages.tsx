"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/img/img1.jpeg",
  "/img/img2.jpeg",
  "/img/img3.jpeg",
  "/img/img4.jpeg",
  "/img/img5.jpeg",
];

const StackingImages = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newIndexes = [];

      for (let i = 0; i < images.length; i++) {
        if (scrollY > i * 200) {
          newIndexes.push(i);
        }
      }

      setVisibleIndexes(newIndexes);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[2000px] flex justify-center items-start pt-40">
      <div className="relative w-[400px] h-[600px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
              visibleIndexes.includes(index)
                ? "opacity-100 translate-y-0 z-[100]"
                : "opacity-0 translate-y-full z-0"
            }`}
            style={{ zIndex: index }}
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              fill
              className="rounded-xl object-cover shadow-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackingImages;
