"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/img/img1.jpeg",
  "/img/img2.jpeg",
  "/img/img3.jpeg",
  "/img/img4.jpeg",
];

export default function StackedScrollImages() {
  const [number, setNumber] = useState(0);
  const num = window.scrollY;

  useEffect(() => {
    if (num > 1000 && num < 2500) {
      setNumber(0);
    } else if (num > 2600 && num < 3700) {
      setNumber(1);
    } else if (num > 3700 && num < 4600) {
      setNumber(2);
    }
  }, [num]);

  console.log("num", num, number);
  return (
    <div className="flex flex-col mt-[750px] md:pt-0 w-full md:w-[50%] justify-end z-50">
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
