"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  delay?: number; // ⬅️ добавлено
};

const images = [
  "/img/img2.jpeg",
  "/img/img1.jpeg",
  "/img/img4.jpeg",
  "/img/img3.jpeg",
];

export default function SlideUpImage({ delay = 1 }: Props) {
  const imageRef = useRef(null);

  const [num, setNum] = useState(0);
  const [srcImage, setSrcImage] = useState<string | StaticImport>(
    "/img/img3.jpeg"
  );

  const getImage = (num: number) => {
    const img = images.find((elem, index) => {
      return index === num;
    });
    if (img !== undefined) {
      setSrcImage(img);
    }
    return img;
  };

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { y: 400, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay, // ⬅️ задержка
        duration: 1.8,
        ease: "power3.out",
      }
    );
    getImage(num);
    setTimeout(() => {
      setNum(num === 3 ? 0 : num + 1);
    }, 5000);
  }, [delay, num]);

  return (
    <div className="relative h-[400px] w-[300px] rounded-xl bg-transparent overflow-hidden">
      {/* Углы */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/60 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/60 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/60 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/60 rounded-br-xl" />

      <div ref={imageRef} className="h-full w-full relative">
        <Image
          src={srcImage}
          alt="Animated image"
          fill
          sizes="300px"
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
