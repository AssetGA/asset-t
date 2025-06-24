"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "/img/img1.jpeg",
  "/img/img2.jpeg",
  "/img/img3.jpeg",
  "/img/img4.jpeg",
];

export default function StackedScrollImages() {
  const [number, setNumber] = useState(0);
  const lastScrollY = useRef(200);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (window.scrollY > 1000 && window.scrollY < 2700) {
        setNumber(0);
      } else if (window.scrollY > 2700 && window.scrollY < 3700) {
        setNumber(1);
      } else if (window.scrollY > 3700 && window.scrollY < 4700) {
        setNumber(2);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  console.log("1111", number, lastScrollY);

  return (
    <div className="flex flex-col mt-[750px] md:mt-0 md:pt-0 w-full md:w-[50%] justify-end z-50">
      {images.map((src, index) => (
        <div
          key={index}
          className={`h-screen right-0 top-0 z-[${10 + index}] ${
            index === number ? "sticky" : "-mt-screen relative"
          } `}
        >
          <Image
            src={src}
            alt={`Фото ${index + 1}`}
            fill
            className="object-cover transition-all duration-1000"
          />
        </div>
      ))}
    </div>
  );
}
